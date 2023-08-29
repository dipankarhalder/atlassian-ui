import mainHead from '../main.module.css';

export const AuthHead = ({ content }) => {
  return (
    <div className={mainHead.appHeading}>
      <h1>{content.heading}</h1>
    </div>
  );
};
