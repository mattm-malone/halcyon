import React from 'react';

interface FormItemProps {
  label: string;
  description?: string;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  htmlFor?: string;
}

interface FormItemLabelProps {
  label: string;
  description?: string;
  htmlFor?: string;
}

export const FormItemLabel: React.FC<FormItemLabelProps> = ({
  label,
  description,
  htmlFor,
}) => {
  const Component = htmlFor ? 'label' : 'div';
  return (
    <Component className="pebble-label-group" htmlFor={htmlFor}>
      <span>{label}</span>
      {description && <span className="pebble-description">{description}</span>}
    </Component>
  );
};

export const FormItem: React.FC<FormItemProps> = ({
  label,
  description,
  className,
  children,
  onClick,
  htmlFor,
}) => (
  <div className={`pebble-item ${className}`} onClick={onClick}>
    <FormItemLabel label={label} description={description} htmlFor={htmlFor} />
    {children}
  </div>
);
