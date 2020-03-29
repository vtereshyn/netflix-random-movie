import React, { FunctionComponent, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainContainer: {
    maxWidth: 1225,
    width: '100%',
    margin: '0 auto',
    padding: '0 20px'
  }
});

interface Props {
  children: ReactNode;
}

const Main: FunctionComponent<Props> = ({ children, ...props }) => {
  const classes = useStyles(props);
  return <div className={classes.mainContainer}>{children}</div>;
};

export default Main;
