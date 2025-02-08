'use client';

// Header Components
import { LandingHeader } from '@/main/_components/organisms/LandingHeader';
import { AboutHeader } from '@/main/_components/organisms/AboutHeader';
import { ServicesHeader } from '@/main/_components/organisms/ServicesHeader';
import { ContactUsHeader } from '@/main/_components/organisms/ContactUsHeader';

import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  const renderHeaderContent = () => {
    switch (pathname) {
      case '/main/home':
        return <LandingHeader />;
      case '/main/about-us':
        return <AboutHeader />;
      case '/main/our-services':
        return <ServicesHeader />;
      case '/main/contact-us':
        return <ContactUsHeader />;
    }
  };

  return <div>{renderHeaderContent()}</div>;
};
