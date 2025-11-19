import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Bookmark, Share2, Clock, Home } from 'lucide-react';
import { useBookData } from '../hooks/useBookData';
import { useTranslations } from '../hooks/useTranslations';

const ChapterReader = () => {
  const { id } = useParams();
  const chapterId = parseInt(id);
  const bookData = useBookData();
  const { t } = useTranslations();

  // Find current chapter
  const currentChapter = bookData.parts
    .flatMap(part => part.chapters)
    .find(chapter => chapter.id === chapterId);

  const allChapters = bookData.parts.flatMap(part => part.chapters);
  const currentIndex = allChapters.findIndex(chapter => chapter.id === chapterId);
  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

  const [isBookmarked, setIsBookmarked] = useState(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    return bookmarks.includes(chapterId);
  });

  useEffect(() => {
    if (currentChapter) {
      localStorage.setItem('lastReadChapter', chapterId.toString());
    }
  }, [chapterId, currentChapter]);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    let newBookmarks;
    if (isBookmarked) {
      newBookmarks = bookmarks.filter(id => id !== chapterId);
    } else {
      newBookmarks = [...bookmarks, chapterId];
    }
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    setIsBookmarked(!isBookmarked);
  };

  const shareChapter = () => {
    if (navigator.share) {
      navigator.share({
        title: `${bookData.title} - ${currentChapter.title}`,
        text: `Check out "${currentChapter.title}" from ${bookData.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // Could add a toast notification here
    }
  };

  if (!currentChapter) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {t('chapterNotFound')}
        </h1>
        <Link
          to="/toc"
          className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg"
        >
          <Home className="w-4 h-4 mr-2" />
          {t('backToTableOfContents')}
        </Link>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / allChapters.length) * 100;

  return (
    <div className="max-w-full sm:max-w-4xl mx-auto px-4">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-amber-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 gap-1 sm:gap-0">
          <span>{t('chapterOf')} {currentIndex + 1} {t('of')} {allChapters.length}</span>
          <span>{Math.round(progress)}% {t('complete')}</span>
        </div>
      </div>

      {/* Chapter Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-2">
          {currentChapter.title}
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Clock className="w-4 h-4 mr-1" />
            <span>{currentChapter.readingTime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isBookmarked
                  ? 'bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              aria-label="Bookmark chapter"
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={shareChapter}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Share chapter"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Content */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border-4 border-amber-300 dark:border-gray-600 p-4 sm:p-6 md:p-8 lg:p-12 mx-auto max-w-full sm:max-w-4xl mb-8">
        <div
          className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none font-serif text-gray-800 dark:text-gray-100 text-sm sm:text-base lg:text-lg leading-relaxed"
          style={{
            textAlign: 'justify',
            fontFamily: '"Times New Roman", Times, serif',
            hyphens: 'auto',
            wordBreak: 'break-word'
          }}
          dangerouslySetInnerHTML={{ __html: currentChapter.content }}
        />
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div>
          {prevChapter ? (
            <Link
              to={`/chapter/${prevChapter.id}`}
              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t('previous')}
            </Link>
          ) : (
            <span className="inline-flex items-center px-4 py-2 text-gray-400 dark:text-gray-600 cursor-not-allowed">
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t('previous')}
            </span>
          )}
        </div>

        <Link
          to="/toc"
          className="inline-flex items-center px-4 py-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-800 transition-colors duration-200"
        >
          <Home className="w-4 h-4 mr-1" />
          {t('tableOfContents')}
        </Link>

        <div>
          {nextChapter ? (
            <Link
              to={`/chapter/${nextChapter.id}`}
              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {t('next')}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          ) : (
            <span className="inline-flex items-center px-4 py-2 text-gray-400 dark:text-gray-600 cursor-not-allowed">
              {t('next')}
              <ChevronRight className="w-4 h-4 ml-1" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterReader;
