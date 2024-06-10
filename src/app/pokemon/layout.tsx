import { redirect } from 'next/navigation';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLogged = false;

  if (!isLogged) redirect('/');

  return <>{children}</>;
}
