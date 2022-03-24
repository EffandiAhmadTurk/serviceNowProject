const { getLocationPaths } = require('./controllers/location');
const {
  filterLocationSlugs,
  listingFilters,
} = require('./utils/listingFilterUtils');

module.exports = {
  sass: true, // use .scss files
  modules: true,
  webpack: (config, { dev, isServer }) => {
    // Fixes build issue related to webpack https://github.com/vercel/next.js/issues/10161
    if (config.optimization.splitChunks) {
      config.optimization.splitChunks.cacheGroups.shared = {
        name: 'app-other',
        test: /\.css$/,
        chunks: 'all',
        enforce: true,
      };
    }
    if (isServer && !dev) {
      require('./utils/generateRobotsTxtFile.js');
      require('./scripts/sitemaps/manageSitemaps');
    }
    return config;
  },
  images: {
    domains: ['images.felixhomes.co'],
  },
  async redirects() {
    const cities = await getLocationPaths(['City']);
    const zipCodes = await getLocationPaths(['Zip Code']);
    const neighborhoods = await getLocationPaths(['Neighborhood']);

    const cityRedirects = [];
    cities.forEach(({ path, slug }) => {
      if (path) {
        // Handle sitemap redirects
        cityRedirects.push({
          source: `/sitemap/${slug}`,
          destination: path,
          permanent: true,
        });
        // Handle location page redirects
        cityRedirects.push({
          source: `/homes-for-sale/${slug}`,
          destination: path,
          permanent: true,
        });
      }
    });

    const zipCodeRedirects = [];
    zipCodes.map(({ path, slug }) => {
      if (path) {
        // Handle sitemap redirects
        zipCodeRedirects.push({
          source: `/sitemap/${slug}`,
          destination: path,
          permanent: true,
        });
        // Handle location page redirects
        zipCodeRedirects.push({
          source: `/homes-for-sale/${slug}`,
          destination: path,
          permanent: true,
        });
      }
    });

    const neighborhoodRedirects = [];
    neighborhoods.map(({ path, slug }) => {
      if (path) {
        // Handle location page redirects
        neighborhoodRedirects.push({
          source: `/homes-for-sale/${slug}`,
          destination: path,
          permanent: true,
        });
      }
    });

    // Filter Pages Redirects
    const filterPagesRedirects = [];
    filterLocationSlugs.forEach(slug => {
      listingFilters.forEach(filter => {
        const redirectObj = {
          source: `/homes-for-sale/${slug}/${filter.slug}`,
          destination: `/homes-for-sale/city/tn/${slug}/${filter.slug}`,
          permanent: true,
        };
        filterPagesRedirects.push(redirectObj);
      });
    });

    return [
      { source: '/about.html', destination: '/about', permanent: true },
      {
        source: '/blog-articles/10-moving-day.html',
        destination: '/blog/tips-for-moving-day',
        permanent: true,
      },
      {
        source: '/faq.html',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/buy.html',
        destination: '/buy',
        permanent: true,
      },
      {
        source: '/buyer-how-it-works.html',
        destination: '/buy',
        permanent: true,
      },
      {
        source: '/blog-articles/tos.html',
        destination: '/tos',
        permanent: true,
      },
      {
        source: '/tos.html',
        destination: '/tos',
        permanent: true,
      },
      {
        source: '/blog-articles/timeline.html',
        destination: '/marketing',
        permanent: true,
      },
      {
        source: '/blog-articles/careers.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/careers.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog-articles/glossary.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog-articles/veterans.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/hvr',
        destination: 'https://valuations.felixhomes.com',
        permanent: true,
      },
      {
        source: '/glossary.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog-articles/faq.html',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/blog-articles/buy.html',
        destination: '/buy',
        permanent: true,
      },
      {
        source: '/blog-articles/press.html',
        destination: '/about',
        permanent: true,
      },

      {
        source: '/how-it-works-fff.html',
        destination: '/sell',
        permanent: true,
      },
      {
        source: '/veterans.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/search.html',
        destination: '/homes-for-sale',
        permanent: true,
      },
      {
        source: '/veterans.html',
        destination: '/',
        permanent: true,
      },

      {
        source: '/blog-articles/toilet-paper.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog-articles/contact.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/search',
        destination: '/homes-for-sale',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/privacy-policy.html',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/blog-articles/toilet-paper.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/timeline.html',
        destination: '/marketing',
        permanent: true,
      },
      {
        source: '/faq/',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/timeline.html',
        destination: '/marketing',
        permanent: true,
      },
      {
        source: '/timeline.html',
        destination: '/marketing',
        permanent: true,
      },
      {
        source: '/timeline.html',
        destination: '/marketing',
        permanent: true,
      },
      {
        source: '/results.html:id*',
        destination: '/homes-for-sale',
        permanent: true,
      },
      {
        source: '/listings.html',
        destination: '/homes-for-sale',
        permanent: true,
      },
      {
        source: '/press.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/homes-for-sale/bordeaux-hills--river-meadows',
        destination: '/homes-for-sale/bordeaux-hills-river-meadows',
        permanent: true,
      },
      {
        source: '/homes-for-sale',
        destination: '/feed',
        permanent: true,
      },
      // Location related redirects
      {
        source: '/homes-for-sale/belmont',
        destination:
          '/homes-for-sale/neighborhood/tn/nashville/hillsboro-belmont',
        permanent: true,
      },
      {
        source: '/homes-for-sale/antioch-priest-lake',
        destination: '/homes-for-sale/neighborhood/tn/nashville/priest-lake',
        permanent: true,
      },
      {
        source: '/homes-for-sale/bordeaux-whites-creek',
        destination: '/homes-for-sale/neighborhood/tn/nashville/bordeaux',
        permanent: true,
      },
      {
        source: '/homes-for-sale/donelson-hermitage',
        destination: '/homes-for-sale/neighborhood/tn/nashville/donelson',
        permanent: true,
      },
      {
        source: '/homes-for-sale/edge-hill',
        destination: '/homes-for-sale/neighborhood/tn/nashville/edgehill',
        permanent: true,
      },
      {
        source: '/homes-for-sale/neighborhood/tn/nashville/edge-hill',
        destination: '/homes-for-sale/neighborhood/tn/nashville/edgehill',
        permanent: true,
      },
      {
        source: '/homes-for-sale/urbandale-nations',
        destination: '/homes-for-sale/neighborhood/tn/nashville/the-nations',
        permanent: true,
      },
      {
        source: '/homes-for-sale',
        destination: '/feed',
        permanent: true,
      },
      ...cityRedirects,
      ...zipCodeRedirects,
      ...neighborhoodRedirects,

      // Filter Pages Redirects
      ...filterPagesRedirects,
    ];
  },
};
