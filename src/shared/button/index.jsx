import buttonStyle from './button.module.css';

export function Button({ label, typebtn }) {
  return (
    <div className={buttonStyle.appButtonField}>
      <button type={typebtn}>{label}</button>
    </div>
  );
}
