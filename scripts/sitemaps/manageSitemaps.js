const CronJob = require('cron').CronJob;
const generateListingPagesSitemap = require('./generateListingPagesSitemap');
const generateResourcePagesSitemap = require('./generateResourcePagesSitemap');
const generateBlogPostsSitemap = require('./generateBlogPostsSitemap');
const generateParentSitemap = require('./generateParentSitemap');
const generateListingFilterPagesSitemap = require('./generateListingFilterPagesSitemap');
const generateBlogCategoriesSitemap = require('./generateBlogCategoriesSitemap');
const generateCitiesSitemap = require('./generateCitiesSitemap');
const generateZipCodesSitemap = require('./generateZipCodesSitemap');
const generateNeighborhoodsSitemap = require('./generateNeighborhoodsSitemap');
const generateCountiesSitemap = require('./generateCountiesSitemap');
const generateOffMarketListingSitemaps = require('./generateOffMarketListingSitemaps');

const generateSiteMaps = async () => {
  try {
    const listingsSitemapSlug = await generateListingPagesSitemap();
    const resourceSitemapSlug = await generateResourcePagesSitemap();
    const blogPostsSitemapSlug = await generateBlogPostsSitemap();
    const listingFilterSitemapSlug = await generateListingFilterPagesSitemap();
    const blogCategoriesSlug = await generateBlogCategoriesSitemap();
    const citiesSitemapSlug = await generateCitiesSitemap();
    const zipCodesSitemapSlug = await generateZipCodesSitemap();
    const neighborhoodsSitemapSlug = await generateNeighborhoodsSitemap();
    const generateCountiesSitemapSlug = await generateCountiesSitemap();
    const offMarketListingsSitemapSlugs = await generateOffMarketListingSitemaps();

    const slugs = [
      listingsSitemapSlug,
      resourceSitemapSlug,
      blogPostsSitemapSlug,
      citiesSitemapSlug,
      listingFilterSitemapSlug,
      blogCategoriesSlug,
      zipCodesSitemapSlug,
      neighborhoodsSitemapSlug,
      generateCountiesSitemapSlug,
      ...offMarketListingsSitemapSlugs,
    ];

    await generateParentSitemap(slugs);
    console.log('🤖: Created new sitemaps');
  } catch (error) {
    console.log('🤖: Error generating sitemaps ', error.message);
  }
};

// Updates sitemaps at 2pm and 2am
const scheduledSiteMap = new CronJob(
  '0 2,14 * * *',
  async () => {
    generateSiteMaps();
    console.log('🤖: Created scheduled sitemaps');
  },
  null,
  true,
  'America/Los_Angeles'
);

generateSiteMaps();

// Generate Sitemaps every 12 hours
console.log('🤖: Scheduled sitemap creations');
scheduledSiteMap.start();
