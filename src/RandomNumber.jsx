import { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { debounce } from 'lodash';

const RandomNumber = () => {
  const [number, setNumber] = useState(0);
  const [finalNumber, setFinalNumber] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const audioRef = useRef(null);

  const animationProps = useSpring({
    number,
    config: { tension: 300, friction: 20 },
    immediate: !isAnimating,
  });

  useEffect(() => {
    if (isAnimating) {
      let start;
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        if (progress < 15000) {
          setNumber(Math.floor(Math.random() * 200) + 1);
          requestAnimationFrame(animate);
        } else {
          setNumber(finalNumber);
          setIsAnimating(false);
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
        }
      };
      requestAnimationFrame(animate);
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  }, [isAnimating, finalNumber]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space' || event.code === 'Enter') {
        debouncedGenerateRandomNumber();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const generateRandomNumber = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      const randomNum = Math.floor(Math.random() * 120) + 1;
      setFinalNumber(randomNum);
    }
  };

  const debouncedGenerateRandomNumber = debounce(generateRandomNumber, 1000, {
    leading: true,
    trailing: false,
  });

  return (
    <div
      className='flex justify-center items-center mask mask-heart bg-pink-500 custom-mask-size cursor-pointer'
      onClick={debouncedGenerateRandomNumber}
    >
      <audio ref={audioRef} src='sound_effect.mp3' />
      <animated.div className='text-9xl font-bold text-pink-100'>
        {animationProps.number.to((n) => n.toFixed(0))}
      </animated.div>
    </div>
  );
};

export default RandomNumber;
