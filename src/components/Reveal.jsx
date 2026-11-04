import React from 'react';
import { useInView } from '../hooks/useInView';

export const Reveal = ({ children, className = '', delay = 0, style = {}, as: Tag = 'div' }) => {
  const [ref, inView] = useInView();
  const delayClass = delay === 1 ? 'reveal-delay-1'
    : delay === 2 ? 'reveal-delay-2'
    : delay === 3 ? 'reveal-delay-3'
    : delay === 4 ? 'reveal-delay-4'
    : '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${delayClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
};
