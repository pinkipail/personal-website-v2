import { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

export default function useScrollProgress() {
  const [scrolled, setScrolled] = useState();
  const { y: scrollY } = useWindowScroll();
  useEffect(() => {
    const winScroll = scrollY;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPos = +((winScroll / height) * 100).toFixed(3);
    setScrolled(scrollPos);
  }, [scrollY]);
  return scrolled || 0;
}
