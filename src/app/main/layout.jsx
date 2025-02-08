'use client';
// Styles
import '@/main/_assets/styles/main.scss';
// Components
import { Footer } from '@/main/_components/organisms/Footer';
import { Header } from '@/main/_components/organisms/Header';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  const pathname = usePathname();

  const getPageClass = () => {
    switch (pathname) {
      case '/main':
      case '/main/home':
        return 'landing';
      case '/main/about-us':
        return 'about';
      case '/main/services':
        return 'services';
      case '/main/contact-us':
        return 'contact';
      case '/main/blog':
        return 'blog';
      default:
        return '';
    }
  };

  return (
    <div className={`${getPageClass()}`}>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
