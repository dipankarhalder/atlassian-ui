import inputStyle from './input.module.css';

export function Input({ label, register, required }) {
  return (
    <div className={inputStyle.appInputField}>
      <input placeholder={label} {...register(label, { required })} />
    </div>
  );
}
