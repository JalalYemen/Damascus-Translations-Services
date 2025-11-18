import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.ourStory.title')}</h2>
          <p className="text-lg text-gray-700 mb-4">
            {t('about.ourStory.paragraph1')}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            {t('about.ourStory.paragraph2')}
          </p>
          <p className="text-lg text-gray-700">
            {t('about.ourStory.paragraph3')}
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('about.team.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-blue-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('about.team.member1.name')}</h3>
                <p className="text-blue-600 mb-3">{t('about.team.member1.position')}</p>
                <p className="text-gray-600">{t('about.team.member1.bio')}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-blue-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('about.team.member2.name')}</h3>
                <p className="text-blue-600 mb-3">{t('about.team.member2.position')}</p>
                <p className="text-gray-600">{t('about.team.member2.bio')}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-blue-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('about.team.member3.name')}</h3>
                <p className="text-blue-600 mb-3">{t('about.team.member3.position')}</p>
                <p className="text-gray-600">{t('about.team.member3.bio')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('about.values.quality.title')}</h3>
                <p className="text-gray-600">{t('about.values.quality.description')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('about.values.confidentiality.title')}</h3>
                <p className="text-gray-600">{t('about.values.confidentiality.description')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('about.values.timeliness.title')}</h3>
                <p className="text-gray-600">{t('about.values.timeliness.description')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('about.values.cultural.title')}</h3>
                <p className="text-gray-600">{t('about.values.cultural.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
