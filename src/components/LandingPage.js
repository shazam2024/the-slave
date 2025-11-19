import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Play } from 'lucide-react';
import { useBookData } from '../hooks/useBookData';
import { useTranslations } from '../hooks/useTranslations';

const LandingPage = () => {
  const bookData = useBookData();
  const { t } = useTranslations();

  return (
    <div className="max-w-4xl mx-auto text-center">
      {/* Book Cover */}
      <div className="mb-12">
        <div className="relative mx-auto w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[28rem] bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-200 dark:to-yellow-200 rounded-lg border-4 border-amber-400 dark:border-amber-500 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center">
          <BookOpen className="w-24 h-24 text-amber-600 dark:text-amber-400 mb-6" />
          <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-gray-900 mb-2">
            {bookData.title}
          </h1>
          <p className="text-lg text-amber-700 dark:text-amber-700 mb-4">
            {t('bookSubtitle')}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-700">
            {t('by')} {bookData.author}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-12 max-w-2xl mx-auto">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {bookData.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-600 dark:text-gray-400">
          <span>{bookData.parts.length} {t('parts')}</span>
          <span>{bookData.parts.reduce((total, part) => total + part.chapters.length, 0)} {t('chapters')}</span>
          <span>{t('philosophicalExploration')}</span>
        </div>
      </div>

      {/* Call to Action */}
      <div className="space-y-4">
        <Link
          to="/toc"
          className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          <Play className="w-5 h-5 mr-2" />
          {t('startReading')}
        </Link>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8">
          <Link
            to="/toc"
            className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors duration-200"
          >
            {t('tableOfContents')}
          </Link>
          <Link
            to="/about"
            className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors duration-200"
          >
            {t('aboutTheAuthor')}
          </Link>
        </div>
      </div>

      {/* Preview */}
      <div className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6">
          {t('preview')}
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-serif font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {bookData.parts[0].chapters[0].title}
          </h3>
          <div
            className="text-gray-700 dark:text-gray-300 leading-relaxed font-serif text-left prose prose-gray dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: bookData.parts[0].chapters[0].content.substring(0, 300) + '...'
            }}
          />
          <Link
            to={`/chapter/${bookData.parts[0].chapters[0].id}`}
            className="inline-block mt-4 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors duration-200"
          >
            {t('continueReading')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
