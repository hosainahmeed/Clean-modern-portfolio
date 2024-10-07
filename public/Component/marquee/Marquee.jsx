import  { useState } from 'react';
import styles from './Marquee.module.css';

function Marquee({ text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.marqueeContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`py-12 text-5xl ${styles.marqueeContent} ${isHovered ? styles.paused : ''}`}>
        <h1 className='font-bold'>{text}</h1>
      </div>
    </div>
  );
}

export default Marquee;