export const getStaticProps = async () => {
  return {
    props: {
      layoutType: "removeLayout",
    },
  };
};

const Signin = () => {
  return <div>Signin</div>;
};

export default Signin;
