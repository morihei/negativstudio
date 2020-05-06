import { useStaticQuery, graphql} from "gatsby"
import { useIntl, Link  } from "gatsby-plugin-intl"
import React from "react"
import navigationModule from "./sass/header.module.scss"
import socialFb from "../images/icons/facebook.svg"
import socialIn from "../images/icons/instagram.svg"

const Navigation = () => {

    const intl = useIntl()

    const data = useStaticQuery(graphql`
    query{
    site {
        siteMetadata {
            title
            }
        }
    }
`)


return(

    <div className={navigationModule.navigationContainer}> 
      <div className={navigationModule.backdrop}>
        <div className={navigationModule.textWrapper}>
           <div className={navigationModule.textContainer}>
            <div className={navigationModule.navigationText}>
                <h1>
                    <Link to="/projects"><span className={navigationModule.navNumber}>01</span> <div>{intl.formatMessage({ id: "navigation.work" })}</div></Link>
                </h1>
            </div>   
            <div className={navigationModule.navigationText}>
                <h1>
                    <Link to="/about"><span className={navigationModule.navNumber}>02</span>  <div>{intl.formatMessage({ id: "navigation.about_us" })}</div></Link>
                </h1>
            </div>
            <div className={navigationModule.navigationText}>
                <h1>
                    <Link to="/contact"><span className={navigationModule.navNumber}>03</span>  <div>{intl.formatMessage({ id: "navigation.contact_us" })}</div></Link>
                </h1>
            </div>
         </div> 
        </div>
        <div className={navigationModule.bottomSecondary}>
            <div className={navigationModule.scrollDirecion}>
             <Link to="/"> © {data.site.siteMetadata.title}</Link> 
            </div> 
            <div className={navigationModule.socialContainer}>
                <div className={navigationModule.facebook}>
                    <a href="https://www.facebook.com/Negativ-studio-104852501175336/">
                     <img src={socialFb} alt="facebook" />
                    </a>
                 </div>
                  <div className={navigationModule.instagram}>
                      <a href="https://www.instagram.com/negativ_studio_opatija/">
                          <img src={socialIn} alt="instagram" />
                      </a>
                  </div>
             </div>   
          </div> 
        </div>
    </div>

    )
}

export default Navigation

