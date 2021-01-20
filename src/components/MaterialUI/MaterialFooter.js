import React from 'react'
import styled from 'styled-components'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import logoImage from '../images/logoV.png'

const DivFooter = styled(BottomNavigation)`
display: flex;
background-color: #8661b6;
justify-content: space-between;
`
const DivButtonSocial = styled.div`
display: flex;
`
const DivItemsRight = styled.div`
display: flex;
align-items: center;
`

const RightButtons = styled(BottomNavigationAction)`
color: #ffffff;
width: 120px;
height: 100%;
font-size: 100px;
`

const Button = styled(BottomNavigationAction)`
padding: 0px 0px 0px 0px;
`

const DivLogo = styled.div`
display: flex;
width: 100px;
margin: 4px;
padding-left: 10px;
`

const Logo = styled.img`
width: 100%;
height: 100%;
object-fit: fill;
`


export default class MaterialFooter extends React.Component {
    render() {
        return (
            <DivFooter >
                <DivLogo>
                    <Logo src={logoImage} alt="Logo" />
                </DivLogo>
                <DivButtonSocial>
                    <Button label="Whatsapp" value="Whatsapp" icon={<WhatsAppIcon style={{ color: '#ffffff' }} />} />
                    <Button label="Twitter" value="Twitter" icon={<TwitterIcon style={{ color: '#ffffff' }} />} />
                    <Button label="Instagram" value="Instagram" icon={<InstagramIcon style={{ color: '#ffffff' }} />} />
                    <Button label="Facebook" value="Facebook" icon={<FacebookIcon style={{ color: '#ffffff' }} />} />
                </DivButtonSocial>
                <DivItemsRight>
                    <RightButtons label="Fale conosco" value="Fale conosco" showLabel={true} />
                    <RightButtons label="Termos de uso" value="Termos de uso" showLabel={true} />
                </DivItemsRight>
            </DivFooter>
        )
    }
}