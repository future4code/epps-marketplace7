import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import CreateIcon from "@material-ui/icons/Create";
import logo from "../images/logo2.png";
import { LogoHeader, MenuItem } from "../../Styled";
import styled from 'styled-components';
import { JobsList } from './../JobsList';
import ContainedButtons from "../MaterialUI/MaterialButton";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const NinjaDrawer = styled(Drawer)`
.MuiDrawer-paper{
    top: 40px;
}
`;

export const ClientsPage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title}>
            <LogoHeader src={logo} />
          </Typography>
          <ContainedButtons client={"sair"} onClick={props.onClickSair} />
        </Toolbar>
      </AppBar>
      <NinjaDrawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <MenuItem>
            <CardTravelIcon /> Trabalhos Cadastrados
          </MenuItem>
          <Divider />
          <MenuItem>
            <CreateIcon />
            Cadastrar novos trabalhos
          </MenuItem>
        </div>
      </NinjaDrawer>
      <main className={classes.content}>
        <Toolbar />
        <JobsList />
      </main>
    </div>
  );
}
