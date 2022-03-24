import Head from 'next/head';
import PageLayout from '../layouts/PageLayout';
import Error from '../components/Error';

const Page410 = () => (
  <>
    <Head>
      <meta name="prerender-status-code" content="410" />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <PageLayout navVariant="content" title="410 Not Found | felix">
      <Error error={410} />
    </PageLayout>
  </>
);

export default Page410;
