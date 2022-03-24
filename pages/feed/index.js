import Head from 'next/head';
import dynamic from 'next/dynamic';
import PageLayout from '../../layouts/PageLayout';
import withLogin from '../../utils/auth/withLogin';

const ForSale = dynamic(() => import('../../components/HomesForSale'), {
  ssr: false,
});

const HomesForSalePage = () => {
  return (
    <>
      <Head>
        {/* De-indexes as its csr and holds no seo value */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <PageLayout
        title="Middle Tennessee Homes For Sale | felix"
        description="Search real estate listings for sale in Middle Tennessee"
        isNavTransparent={false}
      >
        <ForSale />
      </PageLayout>
    </>
  );
};

export default withLogin(HomesForSalePage);
