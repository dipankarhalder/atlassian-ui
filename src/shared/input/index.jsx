import inputStyle from './input.module.css';

export function Input({ label, type = 'text', valText, register, required }) {
  return (
    <div className={inputStyle.appInputField}>
      <input
        placeholder={label}
        type={type}
        {...register(valText, { required })}
      />
    </div>
  );
}
