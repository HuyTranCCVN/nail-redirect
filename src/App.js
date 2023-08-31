import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if(window.location.host.includes('facebook.com' || 'fbclid')) {
      window.location.href = 'https://nailsforus.com';
    }

    // if (window.location.hostname !== 'localhost') {
      
    // }


    // window.location.href = 'https://nailsforus.com';
  }, []);

  return null;
}
