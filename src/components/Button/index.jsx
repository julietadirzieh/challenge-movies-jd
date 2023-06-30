const Button = ({ children, light, className, ...rest }) => {
  return (
    <button
      type="button"
      className={`${className} ${
        light
          ? "ml-4 p-4 rounded-lg shadow-lg shadow-gray-800 bg-gray-200 hover:bg-gray-800 hover:text-white transition duration-500"
          : "mx-auto p-4 my-4 rounded-lg bg-gray-800 hover:bg-gray-600 text-white transition duration-500"
      }
      ${rest.disabled && "opacity-50 cursor-not-allowed hover:none"}'}} `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
