export function Button({ label, typebtn }) {
  return (
    <div className="app-button-field">
      <button type={typebtn}>{label}</button>
    </div>
  );
}
