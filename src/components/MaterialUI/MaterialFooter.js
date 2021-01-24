import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import styled from "styled-components";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import logoImage from "../images/logoH.png";

const DivFooter = styled(BottomNavigation)`
  display: flex;
  background-color: #8661b6;
  justify-content: space-between;
  flex-wrap:wrap;
`;
const DivButtonSocial = styled.div`
  display: flex;

  @media (max-width: 454px) {
    margin: auto;
  }
`;

const DivItemsRight = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 694px) {
    display: none;
  }
`;

const RightButtons = styled(BottomNavigationAction)`
  color: #ffffff;
  width: 120px;
  /* height: 100%; */
  font-size: 100px;
`;

const Button = styled(BottomNavigationAction)`
  padding: 0;
`;

const DivLogo = styled.div`
  display: flex;
  width: 120px;
  margin: 0 6px;
  padding: 2px 0px;

  @media(max-width:454px) {
      display: none;
  }
`;

const Logo = styled.img`
  width: 100%;
`;

export default function SimpleBottomNavigation() {

  return (
    <DivFooter>
      <DivLogo>
        <Logo src={logoImage} alt="Logo" />
      </DivLogo>
      <DivButtonSocial>
        <a href="https://www.whatsapp.com" target="_blank">
          <Button
            label="Whatsapp"
            value="Whatsapp"
            icon={<WhatsAppIcon style={{ color: "#ffffff" }} />}
          />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <Button
            label="Twitter"
            value="Twitter"
            icon={<TwitterIcon style={{ color: "#ffffff" }} />}
          />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <Button
            label="Instagram"
            value="Instagram"
            icon={<InstagramIcon style={{ color: "#ffffff" }} />}
          />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <Button
            label="Facebook"
            value="Facebook"
            icon={<FacebookIcon style={{ color: "#ffffff" }} />}
          />
        </a>
      </DivButtonSocial>
      <DivItemsRight>
        <RightButtons
          label="Fale conosco"
          value="Fale conosco"
          showLabel={true}
        />

        <RightButtons
          label="Termos de uso"
          value="Termos de uso"
          showLabel={true}
        />
      </DivItemsRight>
    </DivFooter>
  );
}