import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { CenterYear, YearText } from '../TimeIntervalBlock.styles';
import { Event } from '../../../hooks/useMainPageState';

interface Props {
  eventsData: Event[];
  activeCategory: string;
}

const CenterYearComponent: React.FC<Props> = ({ eventsData, activeCategory }) => {
  const [startYear, setStartYear] = useState(0);
  const [endYear, setEndYear] = useState(0);
  
  const startYearObj = useRef({ value: 0 });
  const endYearObj = useRef({ value: 0 });

  useEffect(() => {
    if (eventsData.length > 0) {
      const newStartYear = eventsData[0]?.year ?? 0;
      const newEndYear = eventsData[eventsData.length - 1]?.year ?? 0;

      gsap.to(startYearObj.current, {
        value: newStartYear,
        duration: 1,
        ease: 'power1.inOut',
        onUpdate: () => {
          setStartYear(Math.floor(startYearObj.current.value));
        }
      });

      gsap.to(endYearObj.current, {
        value: newEndYear,
        duration: 1,
        ease: 'back',
        onUpdate: () => {
          setEndYear(Math.floor(endYearObj.current.value));
        }
      });
    }
  }, [eventsData, activeCategory]);

  return (
    <CenterYear>
      <YearText>
        <span className='first-year'>
          {eventsData.length > 0 ? startYear : ''}
        </span>
        {' '}
        <span>
          {eventsData.length > 0 ? endYear : ''}
        </span>
      </YearText>
    </CenterYear>
  );
};

export default CenterYearComponent;
