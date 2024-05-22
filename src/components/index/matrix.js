import React, { useEffect } from 'react';

const MatrixBackground = () => {
    useEffect(() => {
        const canvas = document.getElementById("matrix");
        const context = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const binary = "01";
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function draw() {
            context.fillStyle = "rgba(0, 0, 0, 0.1)";
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = "#0F0";
            context.font = fontSize + "px 'IBM Plex Mono'";

            for (let i = 0; i < drops.length; i++) {
                const text = binary[Math.floor(Math.random() * binary.length)];
                context.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        const interval = setInterval(draw, 33);
        return () => clearInterval(interval);
    }, []);

    return <canvas id="matrix" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}></canvas>;
};

export default MatrixBackground;
