import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TableOfContents from './components/TableOfContents';
import ChapterReader from './components/ChapterReader';
import AboutPage from './components/AboutPage';
import Header from './components/Header';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <DarkModeProvider>
        <Router>
          <div className="min-h-screen bg-amber-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-amber-950 dark:to-gray-900 text-gray-900 dark:text-amber-50 transition-colors duration-300" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill-rule="evenodd"%3E%3Cg fill="%239C6B4A" fill-opacity="0.02"%3E%3Cpath d="m0 40l40-40h-40v40zm40 0v-40h-40l40 40z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}>
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/toc" element={<TableOfContents />} />
                <Route path="/chapter/:id" element={<ChapterReader />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </main>
          </div>
        </Router>
      </DarkModeProvider>
    </LanguageProvider>
  );
}

export default App;
