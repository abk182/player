import React, { FC } from 'react';
import MUIButton, { ButtonProps } from '@material-ui/core/Button';
import { useTheme } from 'src/App/Theme/Provider';
import styles from './style.css';

const Button: FC<ButtonProps> = ({ className, ...props }: ButtonProps) => {
  const { theme } = useTheme();
  return (
    <MUIButton
      variant="contained"
      className={`${className ?? ''} ${styles['container']} ${theme}`}
      {...props}
    />
  );
};

export default Button;
