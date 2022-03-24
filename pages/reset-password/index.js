import Form from '../../components/ResetPassword/Form';

const ResetPassword = ({ code }) => {
  return (
    <main>
      <Form code={code} />
    </main>
  );
};

export async function getServerSideProps({ res, query }) {
  const code = query.code;

  if (!code) {
    res.statusCode = 301;
    res.setHeader('Location', '/');
    return { props: {} };
  }
  return {
    props: {
      code: code,
    },
  };
}

export default ResetPassword;
