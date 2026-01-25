import React from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  id?: string;
  className?: string;
  description?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  label,
  id,
  className = '',
  description
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  const handleContainerClick = () => {
    onChange(!checked);
  };

  const handleSwitchClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent container click from firing twice
    onChange(!checked);
  };

  return (
    <div 
      className={`form-group toggle-switch-container ${className}`}
      onClick={handleContainerClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onChange(!checked);
        }
      }}
    >
      <div className="toggle-content">
        <label className="text-label">
          {label}
        </label>
        <label 
          className="switch-label"
          onClick={handleSwitchClick}
        >
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={handleChange}
            tabIndex={-1} // Make input not focusable since container handles it
          />
        </label>
      </div>
      {description && (
        <p className="description">{description}</p>
      )}
    </div>
  );
};

export default ToggleSwitch;