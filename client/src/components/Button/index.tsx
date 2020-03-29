import React, { FunctionComponent, ReactNode } from 'react';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  primaryButton: {
    background: '#E50914',
    borderRadius: 3,
    color: '#fff',
    padding: '10px 15px',
    outline: 'none',
    minWidth: 185,
    cursor: 'pointer',
    transition: 'opacity 0.2s ease-in',
    textTransform: 'uppercase',
    border: 'none',
    letterSpacing: 1,
    font: {
      size: '1.4rem',
      weight: 600
    },

    '&:hover': {
      opacity: 0.75
    }
  },

  secondaryButton: {
    composes: '$primaryButton',
    background: '#fff',
    color: '#000'
  }
});

interface Props {
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const PrimaryButton: FunctionComponent<Props> = props => {
  const { disabled, children, onClick } = props;
  const classes = useStyles(props);
  return (
    <button
      type="button"
      disabled={disabled}
      className={classes.primaryButton}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const SecondaryButton: FunctionComponent<Props> = props => {
  const { disabled, children, onClick } = props;
  const classes = useStyles(props);
  return (
    <button
      type="button"
      disabled={disabled}
      className={classes.secondaryButton}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
