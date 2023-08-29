import mainLayout from '../main.module.css';

export function AuthLayout({ children }) {
  return (
    <div className={mainLayout.appAuthWrapper}>
      <div className={mainLayout.appAuthContent}>{children}</div>
    </div>
  );
}
