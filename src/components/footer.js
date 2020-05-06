//import PropTypes from "prop-types"
//import { Link } from "gatsby"
import { useIntl, Link  } from "gatsby-plugin-intl"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LanguageFooter from "../components/languageFooter"
import footerModule from "./sass/footer.module.scss"
import socialFb from "../images/icons/facebook-white.svg"
import socialIn from "../images/icons/instagram-white.svg"
import phone from "../images/icons/phone.svg"


const Footer = () => {
    const intl = useIntl()
   const data = useStaticQuery(graphql`
    query{
    site {
        siteMetadata {
            author
            title
            }
        }
    }
`)

return(
    <footer>
        <div className={footerModule.footerContainer}>
            <div className={footerModule.footerWrapper}>             
                <Link className={footerModule.copyright} to="/"> © {data.site.siteMetadata.title}</Link>             
                <div className={footerModule.legalCategory}><Link to="/legal"> <div className={footerModule.legal}> Designed by {data.site.siteMetadata.author}</div><span></span></Link></div>        
                    <div className={footerModule.footerNavigationWrapper}>
                        <div className={footerModule.navigationCategory}>
                            
                                <Link to="/projects"><div className={footerModule.linkWrapper}>{intl.formatMessage({ id: "footer.work" })}</div><span></span></Link>
                           
                        </div>   
                        <div className={footerModule.navigationCategory}>
                        
                                <Link to="/about"><div className={footerModule.linkWrapper}>{intl.formatMessage({ id: "footer.about_us" })}</div><span></span>
                           </Link>
                        </div>
                        <div className={footerModule.navigationCategory}>
                      
                             <Link to="/contact"><div className={footerModule.linkWrapper}>{intl.formatMessage({ id: "footer.contact_us" })}</div><span></span>
                           </Link>
                          
                        </div>
                    </div>
            
                    <div className={footerModule.phoneCategory}>
                      <a href="tel:00385914938966"><img src={phone} alt="phone" /> + (385) 91493 8966</a>
                    </div>
                    <div className={footerModule.bottomLast}>
          
                    <div className={footerModule.socialContainer}>
                        <div className={footerModule.socialInner}>
                         <a href="https://www.facebook.com/Negativ-studio-104852501175336/">
                            <img src={socialFb} alt="facebook" />
                         </a>
                        </div>
                        <div className={footerModule.socialInner}>
                         <a href="https://www.instagram.com/negativ_studio_opatija/">
                            <img src={socialIn} alt="instagram" />
                         </a>   
                        </div>
                    </div>
                    <div className={footerModule.languageHolder}>
                        <LanguageFooter />
                    </div>
                </div>                
            </div>
        </div>
    </footer>
    )        
}


export default Footer