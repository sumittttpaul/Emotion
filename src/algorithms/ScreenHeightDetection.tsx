import { useState, useEffect } from 'react';

export default function useScreenheight() {
  const [LargeHeight, setLargeHeight] = useState(false);
  const [MediumHeight, setMediumHeight] = useState(false);
  const [SmallHeight, setSmallHeight] = useState(false);
  const getScreenHeight = () => {
    if (window) {
      const LargeSize = window.matchMedia('Screen and (min-height: 800px)');
      const MediumSize = window.matchMedia('Screen and (min-height: 600px)');
      const SmallSize = window.matchMedia('Screen and (min-height: 400px)');
      if (LargeSize.matches) setLargeHeight(true);
      else setLargeHeight(false);
      if (MediumSize.matches) setMediumHeight(true);
      else setMediumHeight(false);
      if (SmallSize.matches) setSmallHeight(true);
      else setSmallHeight(false);
    }
  };
  useEffect(() => {
    getScreenHeight();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    window.addEventListener('resize', getScreenHeight);
    return () => window.removeEventListener('resize', getScreenHeight);
  }); // eslint-disable-line react-hooks/exhaustive-deps
  return { LargeHeight, MediumHeight, SmallHeight };
}
