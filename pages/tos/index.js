import TermsOfService from 'components/Disclaimers/TermsOfService';
import PageLayout from '../../layouts/PageLayout';
import Head from 'next/head';

const TOSPage = () => {
  return (
    <PageLayout
      title="Terms Of Service | felix"
      description="felix Terms Of Service"
      isNavTransparent={false}
    >
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <TermsOfService />
    </PageLayout>
  );
};

export default TOSPage;
