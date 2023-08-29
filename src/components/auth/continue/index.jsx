import mainContinue from '../main.module.css';

export const AuthContinue = ({ content }) => {
  return (
    <div className={mainContinue.appContinue}>
      <h5>{content.continue}</h5>
    </div>
  );
};
