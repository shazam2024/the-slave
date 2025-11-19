import React from 'react';
import { User, BookOpen, Heart } from 'lucide-react';
import { useBookData } from '../hooks/useBookData';
import { useTranslations } from '../hooks/useTranslations';

const AboutPage = () => {
  const bookData = useBookData();
  const { t } = useTranslations();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
          {t('aboutTheAuthorTitle')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t('learnMoreAboutCreator')} {bookData.title}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {/* Author Info */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 border-4 border-amber-300 dark:border-gray-600">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mr-4">
              <User className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100">
                {bookData.author}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{t('philosopherWriter')}</p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {t('authorDescription')}
          </p>

          <div className="space-y-3">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <BookOpen className="w-5 h-5 mr-3 text-amber-500" />
              <span>{t('specializesIn')}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Heart className="w-5 h-5 mr-3 text-amber-500" />
              <span>{t('committedTo')}</span>
            </div>
          </div>
        </div>

        {/* Book Description */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 border-4 border-amber-300 dark:border-gray-600">
          <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6">
            {t('aboutThisBook')}
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {bookData.description}
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t('whatYouWillDiscover')}
              </h4>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>• {t('hiddenChains')}</li>
                <li>• {t('practicalSteps')}</li>
                <li>• {t('powerOfAwareness')}</li>
                <li>• {t('livingAuthentically')}</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t('whoThisBookIsFor')}
              </h4>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>• {t('seekersOfPersonalFreedom')}</li>
                <li>• {t('thoseQuestioningSocietalNorms')}</li>
                <li>• {t('individualsOnSpiritualJourney')}</li>
                <li>• {t('anyoneReadyToBreakFree')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 border-4 border-amber-300 dark:border-gray-600">
        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
          {t('corePhilosophy')}
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-amber-200 dark:bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-amber-700 dark:text-amber-300" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {t('selfAwareness')}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('selfAwarenessDesc')}
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-amber-200 dark:bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-amber-700 dark:text-amber-300" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {t('authenticLiving')}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('authenticLivingDesc')}
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-amber-200 dark:bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-6 h-6 text-amber-700 dark:text-amber-300" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {t('personalLiberation')}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('personalLiberationDesc')}
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 border-4 border-amber-300 dark:border-gray-600 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {t('beginYourJourney')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t('exploreDepths')}
          </p>
          <a
            href="/toc"
            className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            {t('startReadingBtn')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
