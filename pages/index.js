import Head from 'next/head';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default function Home({ articles }) {
  console.log(articles);
  const titleList = articles.map((article) => {
    return <h3 key={article.id}>{article.title}</h3>;
  });

  return (
    <div>
      <Head>
        <title>Next.js Blog</title>
        <meta
          name='keywords'
          content='web development, programming'
        />
      </Head>
      {titleList}
    </div>
  );
}
