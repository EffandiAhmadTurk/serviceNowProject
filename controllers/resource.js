const { getPage, getPages } = require('../services/content');

exports.getResourcePage = slug => {
  return getPage(slug);
};

exports.getResourcePages = () => {
  return getPages();
};

exports.getResourcePageSuggestions = async currentPageId => {
  const pages = await getPages();

  const suggestions = pages.filter(page => page._id !== currentPageId);

  return suggestions;
};

exports.getLandingPageMenuItems = async () => {
  try {
    const pages = await getPages();

    let menuItems = [];
    pages.forEach(page => {
      if (page.isDisplayedOnMenu) {
        menuItems.push({
          slug: page.slug,
          title: page.label,
        });
      }
    });

    return menuItems;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};
