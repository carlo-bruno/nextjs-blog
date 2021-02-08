import { server } from '../../../config';
import Link from 'next/link';
import Meta from '../../../components/Meta';
import { useRouter } from 'next/router';

const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;

  const { id, title, body, excerpt } = article;

  return (
    <>
      <Meta title={`Next.js Blog | ${title}`} description={excerpt} />
      <h1>{title}</h1>
      <p>{body}</p>
      <br />
      <Link href='/'>&larr; Go Back</Link>
    </>
  );
};

// mock api fetch
export const getStaticProps = async (context) => {
  const res = await fetch(
    `${server}/api/articles/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  console.log('paths', paths);

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts`
//   );
//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   console.log('paths', paths);

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default article;
