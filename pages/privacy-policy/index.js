import PrivacyPolicy from 'components/Disclaimers/PrivacyPolicy';
import PageLayout from '../../layouts/PageLayout';
import Head from 'next/head';

const PrivacyPolicyPage = () => {
  return (
    <PageLayout
      title="Privacy Policy | felix"
      description="Felix Privacy Policy."
      isNavTransparent={false}
    >
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <PrivacyPolicy />
    </PageLayout>
  );
};

export default PrivacyPolicyPage;
