const Post = ({ id }) => {
  return <p>Post: {id}</p>;
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  if (params.id === '10') {
    const response = await fetch("https://api.jsonbin.io/v3/b/67c05a3de41b4d34e49dc9bb/latest", {
      headers: {
        "X-Master-Key": "$2a$10$QpJdYd8k1Wmrv9sLo1chReU2Yg8aSWG5iemaA4UfXxvgYcsCmrStS",
        "X-Bin-Meta": false
      }
    });
    const data = await response.json();
    if (data.featureFlag) {
      return {
        notFound: true,
        revalidate: 60
      };
    }
  }

  return {
    props: {
      id: params.id,
    },
    revalidate: 60
  };
}

export default Post;
