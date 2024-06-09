import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLogged = true;

  return (
    <html lang='en'>
      <body>
        {isLogged ?
          <>
            <Header />
            {children}
            <Footer />
          </>
        : null}
      </body>
    </html>
  );
}
