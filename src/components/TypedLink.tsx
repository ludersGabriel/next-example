import type { Route } from 'next';
import Link, { LinkProps } from 'next/link';

type Props = {
  children: React.ReactNode;
} & LinkProps<Route>;

export default function TypedLink({ children, ...props }: Props) {
  return <Link {...props}>{children}</Link>;
}
