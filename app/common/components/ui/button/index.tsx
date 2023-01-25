import { ButtonHTMLAttributes, FC } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button: FC<IButton> = ({ children, className, ...rest }) => {
  return (
    <button
      className={`w-48 h-12 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l 
        focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium 
        rounded-3xl border-0 text-md px-5 py-2.5 text-center transition-all ease-in-out ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
