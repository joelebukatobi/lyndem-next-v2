import InitPreline from '@/preline.initialize';

// Metadata
export const metadata = {
  title: 'Lyndem Edutainment',
  description: 'Admin Dashboard',
};

// Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <InitPreline />
        {children}
      </body>
    </html>
  );
}
