import Head from 'next/head';
import PageLayout from '../layouts/PageLayout';
import Error from '../components/Error';

const Page404 = () => (
  <>
    <Head>
      <meta name="prerender-status-code" content="404" />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <PageLayout navVariant="content" title="404 Not Found | felix">
      <Error error={404} />
    </PageLayout>
  </>
);

export default Page404;
