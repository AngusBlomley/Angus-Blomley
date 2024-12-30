import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

// Ensure all environment variables are loaded
const projectID = process.env.GOOGLE_CLOUD_PROJECT;
const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const recaptchaAction = 'contact_form_submission';
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

// Decode the GOOGLE_APPLICATION_CREDENTIALS_BASE64 and set GOOGLE_APPLICATION_CREDENTIALS
if (process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64) {
    const googleCredentialsBase64 = process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64;
    const googleCredentialsPath = path.join(process.env.TEMP || '/tmp', 'google-credentials.json');
    fs.writeFileSync(googleCredentialsPath, Buffer.from(googleCredentialsBase64, 'base64'));

    process.env.GOOGLE_APPLICATION_CREDENTIALS = googleCredentialsPath;
} else {
    console.error('Missing GOOGLE_APPLICATION_CREDENTIALS_BASE64 environment variable');
}

async function createAssessment(token: string) {
    const client = new RecaptchaEnterpriseServiceClient();
    const projectPath = client.projectPath(projectID as string);

    const request = {
        assessment: {
            event: {
                token: token,
                siteKey: recaptchaSiteKey,
            },
        },
        parent: projectPath,
    };

    const [response] = await client.createAssessment(request);

    if (!response.tokenProperties?.valid) {
        console.log(`The CreateAssessment call failed because the token was: ${response.tokenProperties?.invalidReason}`);
        return null;
    }

    if (response.tokenProperties.action === recaptchaAction) {
        console.log(`The reCAPTCHA score is: ${response.riskAnalysis?.score}`);
        response.riskAnalysis?.reasons?.forEach((reason) => {
            console.log(reason);
        });
        return response.riskAnalysis?.score;
    } else {
        console.log("The action attribute in your reCAPTCHA tag does not match the action you are expecting to score");
        return null;
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    console.log('Google Application Credentials Path:', credentialsPath);
    console.log('reCAPTCHA Site Key:', recaptchaSiteKey);

    if (req.method === 'POST') {
        const { name, email, subject, message, captcha } = req.body;

        try {
            const recaptchaScore = await createAssessment(captcha);

            if (recaptchaScore === null || recaptchaScore === undefined || recaptchaScore < 0.5) {
                return res.status(400).json({ message: 'Captcha verification failed' });
            }

            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: smtpUser,
                    pass: smtpPass,
                },
            });

            let mailOptions = {
                from: `"Contact Form" <${smtpUser}>`,
                to: 'ablomley01@gmail.com',
                subject: `Contact Form: ${subject}`,
                text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email', error: (error as Error).message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
