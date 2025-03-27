'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import styled from '@emotion/styled';

const MenuOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.isOpen ? 1 : 0};
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  transition: opacity 0.3s ease;
`;

const MenuButton = styled.button<{ isOpen: boolean }>`
  background: none;
  border: none;
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
  z-index: 101;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: white;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: transform 0.25s ease-in-out;

    &:nth-of-type(1) {
      top: ${props => props.isOpen ? '9px' : '0px'};
      transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-of-type(2) {
      top: 9px;
      opacity: ${props => props.isOpen ? 0 : 1};
    }

    &:nth-of-type(3) {
      top: ${props => props.isOpen ? '9px' : '18px'};
      transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const MenuItem = styled.div`
  margin: 15px 0;
  overflow: hidden;
`;

const MenuLink = styled(Link)`
  display: inline-block;
  font-size: 2rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }

  &.active:after {
    width: 100%;
  }
`;

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItemsRef = useRef<HTMLDivElement[]>([]);
  const pathname = usePathname();

  const menuItems = [
    { label: 'Works', href: '/works' },
    { label: 'Studio', href: '/studio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen && menuItemsRef.current.length > 0) {
      // Animate menu items when menu opens
      gsap.fromTo(
        menuItemsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power3.out'
        }
      );
    }
  }, [isOpen]);

  return (
    <>
      <MenuButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden"
      >
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>

      <MenuOverlay isOpen={isOpen}>
        <nav>
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.href}
              ref={el => {
                if (el) menuItemsRef.current[index] = el;
              }}
            >
              <MenuLink
                href={item.href}
                className={pathname === item.href ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </MenuLink>
            </MenuItem>
          ))}
        </nav>
      </MenuOverlay>
    </>
  );
}
