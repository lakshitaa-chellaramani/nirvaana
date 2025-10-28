import React from 'react';

interface RetroHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
  color?: string;
}

export default function RetroHeading({
  children,
  level = 1,
  className = '',
  color = 'text-vintage-purple'
}: RetroHeadingProps) {
  const sizes = {
    1: 'text-3xl md:text-5xl mb-6',
    2: 'text-2xl md:text-4xl mb-4',
    3: 'text-xl md:text-2xl mb-3',
  };

  const Tag = `h${level}` as 'h1' | 'h2' | 'h3';

  return React.createElement(
    Tag,
    { className: `retro-text ${sizes[level]} ${color} ${className}` },
    children
  );
}
