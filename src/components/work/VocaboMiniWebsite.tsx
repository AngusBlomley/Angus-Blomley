import React from "react";
import { Sparkles } from "lucide-react";

export function VocaboMiniWebsite() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden scale-[0.5] origin-top-left" style={{ width: '200%', height: '200%' }}>
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="flex items-center justify-between gap-12 mb-8">
          {/* Left Column - Text */}
          <div className="flex flex-col w-3/5">
            <h1 className="text-4xl font-semibold mb-4 text-gray-900">
              Vocabo
            </h1>
            <h2 className="text-xl text-gray-600 mb-6">
              Master Vocabulary While You Browse
            </h2>
            <p className="text-gray-500 mb-8 max-w-md">
              Transform your daily browsing into interactive language learning. Vocabo helps you discover and memorize new vocabulary naturally through web content.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-md flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z"/>
                </svg>
                Add to Chrome
              </button>
              <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-semibold shadow-md flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Column - Hero Icon */}
          <div className="w-2/5 flex justify-end">
            <div className="w-80 h-80 bg-vocabo-gradient rounded-2xl flex items-center justify-center shadow-2xl relative">
              {/* Sparkles - behind the icon */}
              <div className="absolute -top-4 -right-4">
                <Sparkles className="w-12 h-12 text-vocabo-secondary animate-sparkle" />
              </div>
              <div className="absolute -bottom-2 -left-4">
                <Sparkles className="w-10 h-10 text-vocabo-primary animate-sparkle" style={{ animationDelay: '2s' }} />
              </div>
              {/* Book icon - in front */}
              <svg className="w-40 h-40 text-white relative z-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">
                Learn Any Language
              </h3>
              <p className="text-sm text-gray-600">
                Supports all languages on Google Translate.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">
                Completely Free!
              </h3>
              <p className="text-sm text-gray-600">
                No cost required.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">
                No Sign Up!
              </h3>
              <p className="text-sm text-gray-600">
                Practice without needing an account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
