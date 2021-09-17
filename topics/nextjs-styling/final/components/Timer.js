import { useEffect, useState } from 'react';
import styles from './Timer.module.css';

export const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [time, setTime]);

  return (
    <div className={styles.timer}>
      <p style={{ color: 'violet' }}>Time:</p>
      <span>{time}</span>
      <style jsx global>{`
        p {
          font-weight: bold;
        }

        span {
          color: red;
        }
      `}</style>
    </div>
  )
};