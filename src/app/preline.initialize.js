'use client';
// React
import { useEffect } from 'react';

// Preline
export default function InitPreline() {
  useEffect(() => {
    const loadPreline = async () => {
      const preline = await import('preline/dist/preline'); // Use dist folder explicitly
      if (preline.HSStaticMethods) {
        preline.HSStaticMethods.autoInit();
      }
    };

    loadPreline();
  }, []);

  return null;
}
