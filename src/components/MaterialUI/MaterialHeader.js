import React from "react";
import styled from 'styled-components'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import logo from "../images/logoH.png";
import Button from "../MaterialUI/MaterialButton"

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Logo = styled.img`
height: 50px;
`
const ToolBar = styled(Toolbar)`
display: flex;
justify-content: space-between;
flex-wrap: wrap;

.btn-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media(max-width:550px){
  justify-content: center;
}
`

const WrapperAppBar = styled(AppBar)`
width: 100vw;
left: 0;
`

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <WrapperAppBar>
          <ToolBar>
            <Logo src={logo} alt="" />
            <div className="btn-container">
              <Button client="Quem somos" onClick={props.aboutUs} />
              <Button client="Cliente" onClick={props.client} />
              <Button id="quemSomos" client="Anunciante" onClick={props.advertiser} />
            </div>
          </ToolBar>
        </WrapperAppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
