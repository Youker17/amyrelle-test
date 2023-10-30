import React from 'react';

const TextArea = ({
  placeholder,
  name,
  className,
  label,
  onChange,
  inputContainerStyle = '',
}) => {
  return (
    <div className={inputContainerStyle}>
      <label className="text-base font-medium text-gray-900">
        {label}
      </label>
      <div className=" relative text-gray-400 focus-within:text-gray-600 w-full">
        <textarea
          autoComplete="off"
          placeholder={placeholder}
          className={className}
          name={name}
          onChange={onChange}
          spellCheck="false"
          rows={5}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;