import React from 'react';
import logo from '../images/logo2.png'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ContainedButtons from './MaterialButton';
import Category from './MaterialCategorys'
import { LogoHeader } from '../../Styled';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title}>
            <LogoHeader src={logo} />
          </Typography>
          <ContainedButtons client={"Quem Somos"} />
          <ContainedButtons client={"Cliente"} />
          <ContainedButtons client={"Anunciante"} />
        </Toolbar>
        <Toolbar>
          <Category />
        </Toolbar>
      </AppBar>
    </div>
  );
}