import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import logo from "../images/logoH.png";
import StyledButton from "../MaterialUI/MaterialButton";

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

const HeaderLogo = styled.img`
  height: 50px;
`;
const HeaderToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .btn-container {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
  }

  @media (max-width: 550px) {
    justify-content: center;
    flex-direction: column;

    .btn-container {
      margin: 0 -25px;
    }
  }
`;

const WrapperAppBar = styled(AppBar)`
  width: 100vw;
  left: 0;
`;

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <WrapperAppBar>
          <HeaderToolBar>
            <HeaderLogo src={logo} alt="" onClick={props.onClickHome} />
            <div className="btn-container">
              <StyledButton texto="Sobre" onClickBtn={props.onclickAboutUs} />
              <StyledButton texto="Cliente" onClickBtn={props.onClickClient} />
              <StyledButton
                texto="Anunciante"
                onClickBtn={props.onClickAdvertiser}
              />
            </div>
          </HeaderToolBar>
        </WrapperAppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
