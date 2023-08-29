import mainFooter from '../main.module.css';

export const AuthFooter = ({ content }) => {
  return (
    <div className={mainFooter.appFooter}>
      <p>{content.footerText}</p>
    </div>
  );
};
