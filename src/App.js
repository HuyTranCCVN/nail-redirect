import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://nailsforus.com' + window.location.pathname;
  }, []);

  return null;
}
