'use client';

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faCode } from "@fortawesome/free-solid-svg-icons";

const PWG = () => {
  const [showPackageJson, setShowPackageJson] = useState(false);

  const packageJson = {
    "name": "service-engineer-app",
    "version": "1.0.0",
    "main": "expo-router/entry",
    "scripts": {
      "start": "expo start",
      "android": "expo run:android",
      "ios": "expo run:ios",
      "web": "expo start --web",
      "lint": "eslint .",
      "typecheck": "tsc --noEmit",
      "format": "prettier --write ."
    },
    "dependencies": {
      "@expo/html-elements": "^0.11.0",
      "@react-native-async-storage/async-storage": "2.2.0",
      "@react-native-community/datetimepicker": "8.4.4",
      "@react-native-community/netinfo": "11.4.1",
      "@react-native-community/slider": "^5.1.1",
      "@react-native-picker/picker": "2.11.4",
      "@sentry/react-native": "~7.2.0",
      "@shopify/flash-list": "2.0.2",
      "@shopify/react-native-skia": "2.2.12",
      "axios": "^1.6.7",
      "expo": "~54.0.27",
      "expo-application": "~7.0.8",
      "expo-clipboard": "~8.0.8",
      "expo-constants": "~18.0.10",
      "expo-dev-client": "~6.0.20",
      "expo-device": "~8.0.10",
      "expo-document-picker": "~14.0.8",
      "expo-file-system": "~19.0.19",
      "expo-image": "~3.0.11",
      "expo-image-manipulator": "^14.0.8",
      "expo-image-picker": "~17.0.9",
      "expo-intent-launcher": "~13.0.8",
      "expo-linking": "~8.0.10",
      "expo-notifications": "~0.32.14",
      "expo-router": "~6.0.17",
      "expo-screen-orientation": "~9.0.8",
      "expo-status-bar": "~3.0.9",
      "lodash": "^4.17.21",
      "moment": "^2.30.1",
      "nativewind": "^4.2.1",
      "p-queue": "^8.0.1",
      "prettier-plugin-tailwindcss": "^0.5.11",
      "react": "19.1.0",
      "react-dom": "19.1.0",
      "react-native": "0.81.5",
      "react-native-animatable": "^1.4.0",
      "react-native-calendars": "^1.1305.0",
      "react-native-mime-types": "^2.5.0",
      "react-native-mmkv": "^3.2.0",
      "react-native-modal-datetime-picker": "^18.0.0",
      "react-native-pager-view": "6.9.1",
      "react-native-paper": "^5.12.3",
      "react-native-pdf": "^7.0.3",
      "react-native-reanimated": "~4.1.1",
      "react-native-safe-area-context": "~5.6.0",
      "react-native-screens": "~4.16.0",
      "react-native-signature-canvas": "^4.7.2",
      "react-native-svg": "15.12.1",
      "react-native-uuid": "^2.0.3",
      "react-native-vector-icons": "^10.1.0",
      "react-native-view-shot": "4.0.3",
      "react-native-web": "^0.21.2",
      "react-native-webview": "13.15.0",
      "react-native-worklets": "0.5.1",
      "tailwindcss": "^3.4.0"
    },
    "devDependencies": {
      "@babel/core": "^7.24.0",
      "@types/react": "~19.1.10",
      "eslint": "^8.57.0",
      "eslint-config-expo": "~10.0.0",
      "eslint-config-prettier": "^9.1.0",
      "eslint-import-resolver-alias": "^1.1.2",
      "eslint-import-resolver-typescript": "^3.6.3",
      "eslint-plugin-import": "^2.31.0",
      "eslint-plugin-prettier": "^5.2.1",
      "expo-atlas": "^0.4.0",
      "metro": "^0.83.1",
      "metro-react-native-babel-preset": "^0.76.0",
      "metro-resolver": "^0.82.5",
      "prettier": "^3.3.3",
      "typescript": "~5.9.2"
    },
    "expo": {
      "doctor": {
        "reactNativeDirectoryCheck": {
          "listUnknownPackages": false
        }
      }
    },
    "private": true,
    "packageManager": "yarn@1.22.22+sha512.a6b2f7906b721bba3d67d4aff083df04dad64c399707841b7acf00f6b133b7ac24255f2652fa22ae3534329dc6180534e98d17432037ff6fd140556e2bb3137e"
  };

  return (
    <main className="min-h-screen pt-20 bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark">
        <div className="container mx-auto px-4 pt-8">
          <h1 className="text-4xl font-bold mb-6 text-center font-ibmPlexMono italic">
            PWG Windows & Doors - Mobile App
          </h1>

          <div className="flex justify-center gap-4 mb-8">
            <button
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
              aria-label="GitHub Repository is private"
              disabled
            >
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Repo is Private
            </button>
            <button
              onClick={() => setShowPackageJson(true)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-150"
              aria-label="View package.json"
            >
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              View package.json
            </button>
          </div>

          {/* First Video */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video
                src="/videos/pwg_web.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-8 space-y-8 font-karla">
            <section>
              <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
                Project Overview
              </h2>
              <p>
                Developed a comprehensive React Native mobile application for
                PWG Windows & Doors engineers using Expo SDK 54 with native modules.
                The app enables efficient on-site assessments of custom windows and doors,
                featuring robust offline capabilities, data synchronization, and enterprise-level
                state management to streamline workflows and replace paper-based processes.
              </p>
            </section>

            {/* Second Video - Moved and Resized */}
            <div className="my-8 max-w-lg mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <video
                  src="/videos/pwg_tablet.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 font-karla">
            <section>
              <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
                Technical Overview
              </h2>
              <p className="mb-4">
                Engineered a sophisticated React Native application
                demonstrating expertise in mobile development, offline-first
                architecture, and complex state management. The project
                showcases proficiency in building enterprise-level mobile
                solutions with robust offline capabilities, efficient data
                synchronization, and comprehensive error tracking via Sentry.
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Architecture & Stack
              </h3>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>
                  <strong>Platform:</strong> React Native with Expo SDK 54
                </li>
                <li>
                  <strong>Language:</strong> TypeScript
                </li>
                <li>
                  <strong>Build:</strong> Expo Dev Client with Native Modules
                </li>
                <li>
                  <strong>Navigation:</strong> Expo Router
                </li>
                <li>
                  <strong>State Management:</strong> Context API, AsyncStorage
                </li>
                <li>
                  <strong>Architecture:</strong> Offline-first with queue-based
                  sync
                </li>
                <li>
                  <strong>API:</strong> RESTful API integration (with retry
                  logic)
                </li>
                <li>
                  <strong>Error Tracking:</strong> Sentry
                </li>
                <li>
                  <strong>Styling:</strong> NativeWind (Tailwind for RN) or
                  similar
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Core Functionality</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Comprehensive offline data capture and storage.</li>
                <li>Automated background data synchronization.</li>
                <li>
                  Queue system for managing offline actions (create, update,
                  delete).
                </li>
                <li>Custom hooks for encapsulating complex business logic.</li>
                <li>
                  Native module integration for device-specific features (e.g.,
                  camera, GPS).
                </li>
                <li>Detailed error reporting and monitoring.</li>
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  Technologies Used
                </h3>
                <div className="flex justify-start items-center flex-wrap">
                  <Image
                    src="/images/icons/react.webp"
                    alt="React Native"
                    width={50}
                    height={50}
                    className="m-2"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/js.webp"
                    alt="JavaScript"
                    width={50}
                    height={50}
                    className="m-2"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/tailwind.webp"
                    alt="Tailwind CSS / NativeWind"
                    width={50}
                    height={50}
                    className="m-2 py-1"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/expoGo.svg"
                    alt="Expo"
                    width={50}
                    height={50}
                    className="m-2"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/github.webp"
                    alt="GitHub"
                    width={50}
                    height={50}
                    className="m-2"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </section>
          </div>

        </div>

        {/* Package.json Modal */}
        {showPackageJson && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPackageJson(false)}
          >
            <div
              className="bg-theme-bg-light dark:bg-theme-bg-dark rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-300 dark:border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-theme-text-light dark:text-theme-text-dark">package.json</h3>
                <button
                  onClick={() => setShowPackageJson(false)}
                  className="text-theme-text-light dark:text-theme-text-dark opacity-70 hover:opacity-100 text-2xl"
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>
              <div className="overflow-auto max-h-[calc(90vh-4rem)]">
                <pre className="p-4 text-xs bg-gray-100 dark:bg-gray-900 text-theme-text-light dark:text-theme-text-dark whitespace-pre-wrap break-words">
                  <code>{JSON.stringify(packageJson, null, 2)}</code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </main>
  );
};

export default PWG;
