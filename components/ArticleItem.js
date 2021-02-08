import Link from 'next/link';
import articleStyles from '../styles/Article.module.scss';

export const ArticleItem = ({ article }) => {
  console.log('ArticleItem', article);
  const { id, title, body } = article;
  return (
    <Link href='/article/[id]' as={`article/${id}`}>
      <a className={articleStyles.card}>
        <h3>{title} &rarr;</h3>
        <p>{body}</p>
      </a>
    </Link>
  );
};
