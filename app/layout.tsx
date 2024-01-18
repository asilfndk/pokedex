import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pokedex',
  description: 'Created by @asilfindik & @alperenkarsli',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="flex min-h-screen flex-col items-center p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={250}
                  height={250}
                  className="cursor-pointer"
                />
              </Link>
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
