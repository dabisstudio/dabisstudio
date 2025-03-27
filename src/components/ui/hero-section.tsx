'use client';

import { ReactNode, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import ThreeScene from './three-scene';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundType?: 'three' | 'video' | 'image';
  backgroundSrc?: string;
  overlayText?: string;
  children?: ReactNode;
  height?: string;
  textColor?: string;
  alignment?: 'left' | 'center' | 'right';
}

const HeroContainer = styled.section<{ height: string }>`
  position: relative;
  width: 100%;
  height: ${props => props.height};
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const BackgroundImage = styled.div<{ src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const OverlayText = styled.div<{ alignment: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${props =>
    props.alignment === 'left' ? 'flex-start' :
    props.alignment === 'right' ? 'flex-end' : 'center'
  };
  align-items: center;
  z-index: 2;
  font-size: 8vw;
  font-weight: 700;
  opacity: 0.3;
  color: white;
  text-transform: uppercase;
  padding: 0 5%;
`;

const Content = styled.div<{ alignment: string, textColor: string }>`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props =>
    props.alignment === 'left' ? 'flex-start' :
    props.alignment === 'right' ? 'flex-end' : 'center'
  };
  padding: 2rem;
  color: ${props => props.textColor};
  text-align: ${props => props.alignment};
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function HeroSection({
  title,
  subtitle,
  backgroundType = 'three',
  backgroundSrc,
  overlayText,
  children,
  height = '90vh',
  textColor = 'white',
  alignment = 'center'
}: HeroSectionProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const tl = gsap.timeline();

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    });

    if (subtitleRef.current) {
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.5');
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <HeroContainer height={height}>
      {backgroundType === 'three' && (
        <ThreeScene className="absolute inset-0 z-0" />
      )}

      {backgroundType === 'video' && backgroundSrc && (
        <BackgroundVideo autoPlay loop muted playsInline>
          <source src={backgroundSrc} type="video/mp4" />
        </BackgroundVideo>
      )}

      {backgroundType === 'image' && backgroundSrc && (
        <BackgroundImage src={backgroundSrc} />
      )}

      <Overlay />

      {overlayText && (
        <OverlayText alignment={alignment}>
          {overlayText}
        </OverlayText>
      )}

      <Content alignment={alignment} textColor={textColor}>
        <Title ref={titleRef} style={{ transform: 'translateY(30px)' }}>
          {title}
        </Title>

        {subtitle && (
          <Subtitle ref={subtitleRef} style={{ transform: 'translateY(30px)' }}>
            {subtitle}
          </Subtitle>
        )}

        {children}
      </Content>
    </HeroContainer>
  );
}
