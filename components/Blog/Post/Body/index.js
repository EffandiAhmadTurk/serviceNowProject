import styles from './Body.module.scss';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const Body = ({ body, relatedPosts, audience }) => {
  useEffect(() => {
    // Add cript for infogram
    const script = document.createElement('script');
    script.type = 'text/javascript';
    const code = `!function(e,i,n,s){var t="InfogramEmbeds",d=e.getElementsByTagName("script")[0];if(window[t]&&window[t].initialized)window[t].process&&window[t].process();else if(!e.getElementById(n)){var o=e.createElement("script");o.async=1,o.id=n,o.src="https://e.infogram.com/js/dist/embed-loader-min.js",d.parentNode.insertBefore(o,d)}}(document,0,"infogram-async");`;
    try {
      script.appendChild(document.createTextNode(code));
      document.head.appendChild(script);
    } catch (e) {
      script.text = code;
      document.head.appendChild(script);
    }

    // Add Sell Ad Banner Link
    const adBanners = document.getElementsByClassName('blog-banner');
    const link = document.createElement('a');

    const slug = audience === 'Buyer' ? 'buy' : 'sell';

    link.href = `${window.location.origin}/${slug}`;
    [].forEach.call(adBanners, banner => {
      banner.parentNode.insertBefore(link, banner);
      link.appendChild(banner);

      if (audience === 'Buyer') {
        banner.classList.add('buyer-banner');
      } else {
        banner.classList.add('seller-banner');
      }
    });

    // Add HVR cta Banner Link
    const hvrCtas = document.getElementsByClassName('blog-hvr-cta');
    const hvrLink = document.createElement('a');
    hvrLink.href = `http://valuations.felixhomes.com/`;
    hvrLink.target = '_blank';
    [].forEach.call(hvrCtas, banner => {
      banner.parentNode.insertBefore(hvrLink, banner);
      hvrLink.appendChild(banner);
    });

    // Add Related posts
    const relatedPostsContainer = document.getElementById('related-posts');
    if (relatedPostsContainer && relatedPosts) {
      // Heading
      const relatedPostHeading = document.createElement('h3');
      relatedPostHeading.innerText = 'You may also find interesting:';
      relatedPostsContainer.appendChild(relatedPostHeading);

      // Post Items
      const postItems = document.createElement('div');
      postItems.className = 'related-post-items';
      relatedPostsContainer.appendChild(postItems);

      relatedPosts?.forEach((post, idx) => {
        if (idx < 2) {
          // Post Item
          const postItem = document.createElement('a');
          postItem.className = 'related-post-item';
          postItem.href = `${window.location.origin}/blog/${post.slug}`;
          // Image
          const postImage = document.createElement('img');
          postImage.src = post.image.formats?.thumbnail.url || post.image.url;
          postItem.appendChild(postImage);
          // Title
          const postTitle = document.createElement('h4');
          postTitle.innerText = post.title;
          postItem.appendChild(postTitle);
          postItems.appendChild(postItem);
        }
      });
    }
  }, [relatedPosts]);
  return (
    <section id="post-body" className={styles['container']}>
      <ReactMarkdown allowDangerousHtml>{body}</ReactMarkdown>
    </section>
  );
};

export default Body;
