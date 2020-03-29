import React, { FunctionComponent, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  contentWrapper: {
    padding: '25px 0'
  }
});

interface Props {
  children: ReactNode;
}

const ContentWrapper: FunctionComponent<Props> = ({ children, ...props }) => {
  const classes = useStyles(props);
  return <div className={classes.contentWrapper}>{children}</div>;
};

export default ContentWrapper;
