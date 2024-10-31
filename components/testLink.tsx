// components/ScrollLink.tsx
import React from 'react';

interface ScrollLinkProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({
  targetId,
  children,
  className,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default ScrollLink;
