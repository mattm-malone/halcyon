import React from 'react';

interface FormItemProps {
  label: string;
  description?: string;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  htmlFor?: string;
}

export const FormItem: React.FC<FormItemProps> = ({
  label,
  description,
  className,
  children,
  onClick,
  htmlFor,
}) => (
  <div className={`pebble-item ${className}`} onClick={onClick}>
    <div className="pebble-label-group">
      <label htmlFor={htmlFor}>{label}</label>
      {description && <span className="pebble-description">{description}</span>}
    </div>
    {children}
  </div>
);
