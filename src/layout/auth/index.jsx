import authLayout from './authlayout.module.css';

export function AuthLayout({ children }) {
  return (
    <div className={authLayout.appAuthWrapper}>
      <div className={authLayout.appAuthContent}>{children}</div>
    </div>
  );
}
