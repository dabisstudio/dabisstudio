'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styled from '@emotion/styled';

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const CarouselTrack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const CarouselSlide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
`;

const CarouselIndicator = styled.button<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
`;

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    if (trackRef.current) {
      gsap.to(trackRef.current, {
        x: `-${index * 100}%`,
        duration: 0.5,
        ease: 'power3.out'
      });
      setCurrentIndex(index);
    }
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  useEffect(() => {
    // Auto-advance carousel every 5 seconds
    const interval = setInterval(goToNextSlide, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <CarouselContainer>
      <CarouselTrack ref={trackRef}>
        {images.map((image, index) => (
          <CarouselSlide key={index}>
            <CarouselImage src={image} alt={`${title} - Image ${index + 1}`} />
          </CarouselSlide>
        ))}
      </CarouselTrack>

      <CarouselArrow className="left" onClick={goToPrevSlide}>
        ←
      </CarouselArrow>

      <CarouselArrow className="right" onClick={goToNextSlide}>
        →
      </CarouselArrow>

      <CarouselIndicators>
        {images.map((_, index) => (
          <CarouselIndicator
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </CarouselIndicators>
    </CarouselContainer>
  );
}
