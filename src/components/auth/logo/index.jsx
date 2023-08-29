import altlogo from '../../../assets/images/logo.svg';
import mainLogo from '../main.module.css';

export const AuthLogo = ({ content }) => {
  return (
    <div className={mainLogo.appLogo}>
      <img src={altlogo} alt={content.atlas} />
    </div>
  );
};
