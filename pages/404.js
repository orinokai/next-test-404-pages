export default function NotFound({ timestamp }) {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Timestamp: {timestamp}</p>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      timestamp: new Date().toISOString(),
    },
    revalidate: 600
  };
}
