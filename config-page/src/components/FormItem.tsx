import React from 'react';

interface FormItemProps {
  label: string;
  description?: string;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const FormItem: React.FC<FormItemProps> = ({
  label,
  description,
  className,
  children,
  onClick,
}) => (
  <div className={`pebble-item ${className}`} onClick={onClick}>
    <div className="pebble-label-group">
      <label>{label}</label>
      {description && <span className="pebble-description">{description}</span>}
    </div>
    {children}
  </div>
);
