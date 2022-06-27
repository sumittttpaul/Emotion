import { useState, useEffect } from 'react';

export default function useScreenSize() {
  const [LargeScreen, setLargeScreen] = useState(false);
  const [MediumScreen, setMediumScreen] = useState(false);
  const [SmallScreen, setSmallScreen] = useState(false);
  const getSizes = () => {
    if (window) {
      const LargeSize = window.matchMedia('Screen and (min-width: 900px)');
      const MediumSize = window.matchMedia(
        'Screen and (min-width: 640px) and (max-width: 900px)'
      );
      const SmallSize = window.matchMedia('Screen and (max-width: 640px)');
      if (LargeSize.matches) setLargeScreen(true);
      else setLargeScreen(false);
      if (MediumSize.matches) setMediumScreen(true);
      else setMediumScreen(false);
      if (SmallSize.matches) setSmallScreen(true);
      else setSmallScreen(false);
    }
  };
  useEffect(() => {
    getSizes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    window.addEventListener('resize', getSizes);
    return () => window.removeEventListener('resize', getSizes);
  }); // eslint-disable-line react-hooks/exhaustive-deps
  return { LargeScreen, MediumScreen, SmallScreen };
}
