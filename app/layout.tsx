import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: {
    default: 'CPI Report',
    template: '%s | CPI Report'
  },
  keywords: ['Inflation', 'CPI', 'BLS'],
  description: 'U.S. Inflation Tracker'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Providers>
          <div className="mx-auto flex h-screen max-w-5xl flex-col py-6">
            <Header />
            <main className="grow py-16">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
