import headerStyles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Next.js </span> Blog 🚀
      </h1>
      <p className={headerStyles.description}>
        Get the latest Next.js news and updates here.
      </p>
    </div>
  );
};

export default Header;
