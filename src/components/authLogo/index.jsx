import altlogo from '../../assets/images/logo.svg';

export const AuthLogo = ({ content }) => {
  return (
    <div className="app-logo">
      <img src={altlogo} alt={content.atlas} />
    </div>
  );
};
