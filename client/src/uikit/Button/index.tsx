import React, { FC } from 'react';
import MUIButton, { ButtonProps } from '@material-ui/core/Button';

const Button: FC<ButtonProps> = (props) => {
  return <MUIButton {...props} />;
};

export default Button;
