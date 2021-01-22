import React from 'react';
import styled from 'styled-components'
import logo from '../images/logo2.png'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ContainedButtons from './MaterialButton';
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

const StyledBtnContainer = styled.div`
  visibility: visible;
  display: flex;

  @media (max-width: 700px){
    visibility: hidden;
  }
`

const MobileHeader = styled(Toolbar)`
  display: none;
  

  @media (min-width:320px) and (max-width: 699px){
    display: flex;
    justify-content: center;
  }

`

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title}>
            <LogoHeader src={logo} />
          </Typography>

          <StyledBtnContainer>
            <ContainedButtons client={"Quem Somos"} />
            <ContainedButtons
              client={"Cliente"}
              btnClient={props.onClickClient} />
            <ContainedButtons
              client={"Anunciante"}
              btnClient={props.onClickSeller} />
          </StyledBtnContainer>
        </Toolbar>

        <MobileHeader>
          <ContainedButtons
            client={"Cliente"}
            btnClient={props.onClickClient} />
          <ContainedButtons
            client={"Anunciante"}
            btnClient={props.onClickSeller} />
        </MobileHeader>
      </AppBar>
    </div>
  );
}