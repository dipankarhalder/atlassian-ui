export function Input({ label, register, required }) {
  return (
    <div className="app-input-field">
      <input placeholder={label} {...register(label, { required })} />
    </div>
  );
}
