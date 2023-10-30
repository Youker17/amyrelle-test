

const Input = ({
  type,
  placeholder,
  name,
  ref,
  className,
  icon,
  label,
  onChange,
  inputContainerStyle=""
}) => {
  return (
    <div className={inputContainerStyle} >
      <label className="text-base font-medium text-gray-900">{label}</label>
      <div className=" relative text-gray-400 focus-within:text-gray-600 w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-full">
          {icon}
        </div>
        <input
          type={type}
          autoComplete="off"
          placeholder={placeholder}
          className={className}
          name={name}
          onChange={onChange}
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default Input;