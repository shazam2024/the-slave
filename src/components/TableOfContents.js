import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock } from 'lucide-react';
import { useBookData } from '../hooks/useBookData';
import { useTranslations } from '../hooks/useTranslations';

const TableOfContents = () => {
  const bookData = useBookData();
  const { t } = useTranslations();
  const totalChapters = bookData.parts.reduce((total, part) => total + part.chapters.length, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
          {t('tableOfContentsTitle')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {bookData.title} • {bookData.parts.length} {t('parts')} • {totalChapters} {t('chapters')}
        </p>
      </div>

      <div className="space-y-8">
        {bookData.parts.map((part) => (
          <div key={part.partNumber} className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border-4 border-amber-300 dark:border-gray-600">
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
              {t('part')} {part.partNumber}: {part.partTitle}
            </h2>

            <div className="space-y-4">
              {part.chapters.map((chapter) => (
                <Link
                  key={chapter.id}
                  to={`/chapter/${chapter.id}`}
                  className="block p-4 rounded-lg border border-gray-100 dark:border-gray-600 hover:border-amber-300 dark:hover:border-amber-600 hover:bg-amber-50 dark:hover:bg-gray-700 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-serif font-semibold text-gray-900 dark:text-gray-100 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors duration-200">
                        {t('chapterLabel')} {chapter.id}: {chapter.title}
                      </h3>
                      <div className="flex items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{chapter.readingTime}</span>
                      </div>
                    </div>
                    <BookOpen className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-200" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Reading Progress */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border-4 border-amber-300 dark:border-gray-600 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {t('readyToBegin')}
          </h3>
          <Link
            to={`/chapter/${bookData.parts[0].chapters[0].id}`}
            className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            {t('startReadingBtn')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
