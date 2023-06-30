import React from 'react';

import { cva } from '../../../styled-system/css';

const button = cva({
  base: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;",
    fontWeight: 700,
    border: 0,
    borderRadius: "3em",
    cursor: "pointer",
    display: "inline-block",
    lineHeight: 1,
  },
  variants: {
    variant: {
      primary: {
        color: "white",
        backgroundColor: "#1ea7fd",
      },
      secondary: {
        color: "#333",
        backgroundColor: "transparent",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
      },
    },
    size: {
      small: {
        fontSize: "12px",
        padding: "10px 16px",
      },
      medium: {
        fontSize: "14px",
        padding: "11px 20px",
      },
      large: {
        fontSize: "16px",
        padding: "12px 24px",
      },
    },
  },
});

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={button({ variant, size })}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
