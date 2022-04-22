import React from 'react';

import styles from './Button.module.scss';
import cn from 'classnames';

interface Props {
  disabled?: boolean;
  onClick?: (any: any) => void;
  size: 'sm' | 'md' | 'xl';
  style?: 'primary' | 'secondary';
}

const Button: React.FC<Props> = (props) => {
  const {
    children,
    disabled = false,
    onClick,
    size,
    style = 'primary',
  } = props;
  return (
    <button
      className={cn(styles.button, styles[size], {
        [styles['button-secondary']]: style === 'secondary',
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
