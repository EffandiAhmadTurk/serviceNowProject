const axios = require('axios');
const querystring = require('querystring');
const { BLOG_PAGE_SIZE } = require('../utils/constants');

exports.getPost = async slug => {
  try {
    const { data: post } = await axios.get(
      `${process.env.CONTENT_BASE_URL}/posts?slug=${slug}`
    );
    return post[0];
  } catch (error) {
    console.log(`Error in getPost: ${error.message}`);
    return null;
  }
};

exports.getPosts = async ({ pageNum, categoryId }) => {
  try {
    const skip = BLOG_PAGE_SIZE * (pageNum - 1);
    const pageQuery = pageNum
      ? `start=${skip}&_limit=${BLOG_PAGE_SIZE}`
      : 'limit=-1';
    const categoryQuery = categoryId ? `postCategory=${categoryId}` : '';

    const postsUri = `${process.env.CONTENT_BASE_URL}/posts?_${pageQuery}&${categoryQuery}&_sort=createdAt:DESC`;

    const postsCountUri = `${process.env.CONTENT_BASE_URL}/posts/count?${categoryQuery}`;

    const { data: posts } = await axios.get(postsUri);
    const { data: count } = await axios.get(postsCountUri);

    const postsObj = {
      posts,
      count,
    };

    return postsObj;
  } catch (error) {
    console.log(`Error in getPosts: ${error.message}`);
    return {
      posts: null,
      count: null,
    };
  }
};

exports.getRelatedPosts = async ({ categoryId }) => {
  try {
    const postsUri = `${process.env.CONTENT_BASE_URL}/posts?_limit=5&postCategory=${categoryId}&_sort=createdAt:DESC`;

    console.log(postsUri);
    const { data: posts } = await axios.get(postsUri);

    const postsObj = {
      posts,
    };

    return postsObj;
  } catch (error) {
    console.log(`Error in getPosts: ${error.message}`);
    return {
      posts: [],
      count: null,
    };
  }
};

exports.getPostsByIds = async postIds => {
  try {
    const query = querystring.stringify({
      id_in: postIds,
    });
    const { data: posts } = await axios.get(
      `${process.env.CONTENT_BASE_URL}/posts?${query}`
    );
    return posts;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

exports.getFeaturedPosts = async query => {
  try {
    const { limit } = query || {};

    const postsUri = `${
      process.env.CONTENT_BASE_URL
    }/posts?isFeatured=true&_sort=createdAt:DESC${
      limit ? `&_limit=${limit}` : ''
    }`;

    const { data: featuredPosts } = await axios.get(postsUri);

    return featuredPosts;
  } catch (error) {
    console.log(`Error in getFeaturedPosts: ${error.message}`);
    return [];
  }
};

exports.getPage = async slug => {
  try {
    const { data: page } = await axios.get(
      `${process.env.CONTENT_BASE_URL}/pages?slug=${slug}`
    );

    return page[0];
  } catch (error) {
    console.log(`Error in getPage: ${error.message}`);
    return null;
  }
};

exports.getPages = async () => {
  try {
    const { data: pages } = await axios.get(
      `${process.env.CONTENT_BASE_URL}/pages?_limit=-1`
    );

    return pages;
  } catch (error) {
    console.log(`Error in getPages: ${error.message}`);
    return [];
  }
};

exports.getReviews = async pageNum => {
  try {
    const reviewsUri = `${process.env.CONTENT_BASE_URL}/reviews?_sort=publishedOn:desc`;

    const { data: reviews } = await axios.get(reviewsUri);

    return reviews;
  } catch (error) {
    console.log(`Error in getReviews: ${error.message}`);
    return [];
  }
};

exports.getLocationContent = async slug => {
  try {
    const locationUri = `${process.env.CONTENT_BASE_URL}/locations?slug=${slug}`;
    const { data: locationArr } = await axios.get(locationUri);

    const location = locationArr[0] || null;

    return location;
  } catch (error) {
    console.log(`Error in getLocationContent: ${error.message}`);
    return null;
  }
};

exports.getCategory = async slug => {
  try {
    const uri = `${process.env.CONTENT_BASE_URL}/post-categories?slug=${slug}`;
    const { data: categories } = await axios.get(uri);

    return categories[0];
  } catch (error) {
    console.log(`Error in getCategory: ${error.message}`);
    return null;
  }
};

exports.getCategories = async () => {
  try {
    const uri = `${process.env.CONTENT_BASE_URL}/post-categories`;
    const { data: categories } = await axios.get(uri);

    return categories;
  } catch (error) {
    console.log(`Error in getCategories: ${error.message}`);
    return [];
  }
};

exports.getLocationReviewsOfUser = async userId => {
  try {
    const uri = `${process.env.CONTENT_BASE_URL}/location-reviews`;
    const { data: reviews } = await axios.get(uri, {
      params: {
        user: userId,
      },
    });
    return reviews;
  } catch (error) {
    console.log('Error @ getLocationReviewsOfUser:', error.message);
    throw error;
  }
};

exports.createLocationReview = async (reviewInfo = {}) => {
  try {
    const uri = `${process.env.CONTENT_BASE_URL}/location-reviews`;
    const { data: review } = await axios.post(uri, reviewInfo);
    return review;
  } catch (error) {
    console.log('Error @ createLocationReview:', error.message);
    throw error;
  }
};

exports.getLocationsByIds = async ids => {
  try {
    const uri = `${process.env.CONTENT_BASE_URL}/locations`;

    const { data: similarLocations } = await axios.get(uri, {
      params: { id_in: ids },
    });
    return similarLocations;
  } catch (error) {
    // console.log('error', error);
    throw error;
  }
};

exports.getFaqs = async type => {
  try {
    const uri = `${process.env.CONTENT_BASE_URL}/faqs${
      type ? `?type=${type}` : ''
    }`;

    const { data: faqs } = await axios.get(uri);

    return faqs;
  } catch (error) {
    console.log('Error @ getFAQs:', error.message);
    return [];
  }
};

exports.updateUser = async user => {
  try {
    const updatedUser = await axios.put(
      `https://admin.felixhomes.com/users/${user.id}?token=TYUwNneMApMsHKmrbpJsNaggSgUsvT`,
      {
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
      }
    );
    return updatedUser;
  } catch (error) {
    console.log(error);
    return null;
  }
};
