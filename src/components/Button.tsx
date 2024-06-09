import { ButtonHTMLAttributes } from 'react';

type Props = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonComponent({
  children,
  ...props
}: Props) {
  return (
    <button
      className='bg-black border p-2 rounded hover:bg-blue-200 hover:text-black'
      {...props}
    >
      {children}
    </button>
  );
}
