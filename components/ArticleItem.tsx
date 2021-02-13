import Link from 'next/link';
import articleStyles from '../styles/Article.module.scss';

export const ArticleItem = ({ article }) => {
  const { id, title, excerpt } = article;
  return (
    <Link href='/article/[id]' as={`article/${id}`}>
      <a className={articleStyles.card}>
        <h3>{title} &rarr;</h3>
        <p>{excerpt}</p>
      </a>
    </Link>
  );
};
