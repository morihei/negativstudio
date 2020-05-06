import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { useIntl, Link  } from "gatsby-plugin-intl"
import Navigation from "../components/navigation"
import Language from "../components/language"
import containerModule from "./sass/header.module.scss"
import logo from "../images/icons/logo.svg"
import sandwich from "../images/icons/sandwich.svg"
import mail from "../images/icons/mail.svg"
import closeMenu from "../images/icons/top.svg"


const Header = () => {
    const intl = useIntl()
    const[menuOpen, toggleMenuOpen] = useState(false);

    const imageSwitch = (menuOpen ?  closeMenu : sandwich);
    const textSwitch = (menuOpen ?  "CLOSE" : "MENU");

return(

<header>
 <BackdropBlur menuOpen={menuOpen} className={containerModule.headerContainer}>
    <div >
        <div className={containerModule.navigationWrapper}>
            <div className={containerModule.navigationLogo}>
                < Link to = "/" > <img src={logo} alt="negativ studio logo" /></Link>               
            </div>
            <div className={containerModule.navigationCategory}>
              <div className={containerModule.navigationInner}>
               <div className={containerModule.sandwichHolder}> 
               <MenuSandwich className={containerModule.menuSandwich} menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}
                >
                <div className={containerModule.menuText}>{textSwitch}</div><div className={containerModule.sandwich}> <img src={imageSwitch} alt="menu icon" /></div></MenuSandwich>
                </div>
                <div className={containerModule.buttonMain}>               
                    <Link to="/contact"><img src={mail} alt="contact icon" /> <div className={containerModule.buttonText}> {intl.formatMessage({ id: "header.reachme" })}</div></Link>
                </div>
                <div className={containerModule.languageHolder}>
                   <Language />
                </div>
              </div>
            </div>
        </div>
    </div>
    </BackdropBlur>
    <NavigationPage menuOpen={menuOpen}>
        <Navigation />
    </NavigationPage>
</header>
    )
}


Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header


const BackdropBlur = styled.div`
    -webkit-backdrop-filter: ${({ menuOpen }) => (menuOpen ? "blur(0px)" : "blur(10px)")};
    backdrop-filter: ${({ menuOpen }) => (menuOpen ? "blur(0px)" : "blur(10px)")};
    background-color: ${({ menuOpen }) => (menuOpen ? "rgba(250, 250, 250, 0)" : "rgba(250, 250, 250, 0.6)")};
    transition: all 0.3s ease-in-out;
`
const MenuSandwich = styled.div`
    width: 12%;
    cursor: pointer;
    img{ 
        animation-name: ${({ menuOpen }) => (menuOpen ? "positionl" : "none")}; 
        animation-duration: .8s;
        animation-iteration-count: infinite;
         animation-direction: alternate;
         animation-timing-function: ease-in-out; 
         animation-delay: 0;
         animation-play-state: running;
      @keyframes positionl {
        0% { padding-left: 0px; }
        100% { padding-left:10px; }
       
      }
    }

`
const NavigationPage = styled.div`
    transition: transform 300ms ease-in-out;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    transform: ${({ menuOpen }) => (menuOpen ? "translateX(0)" : "translateX(-100%)")};

    
`