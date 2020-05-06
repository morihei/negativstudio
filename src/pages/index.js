import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexLightbox from "../components/indexLightbox"
import { useIntl, Link ,FormattedMessage } from "gatsby-plugin-intl"
import indexModule from "../components/sass/index.module.scss"
import BackgroundImage from 'gatsby-background-image'
import socialFb from "../images/icons/facebook.svg"
import socialIn from "../images/icons/instagram.svg"
import house from "../images/icons/house.svg"
import projects from "../images/icons/projects.svg" 
import contact from "../images/icons/mail.svg"

const IndexPage = () =>{

  const intl = useIntl()
   const data = useStaticQuery(graphql`

  query {
    mobileImage: file(
      relativePath: { 
         eq: "negativ-studio-mini.png" }) {
            childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
        }
      }
    } 
    desktopImage: file(
      relativePath: {
         eq: "web-main-kv.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
        } 
      }
    }
    desktopImage2: file(
      relativePath: {
         eq: "what-is-negativ.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
        } 
      }
    }

  }
`)



  return(
    
  <Layout>  
    <SEO title={intl.formatMessage({ id: "seo_home" })} />
    <section className={indexModule.headerIntro}>
      <BackgroundImage
        className={indexModule.imageHolder}
        fluid={data.desktopImage.childImageSharp.fluid}
      >
      <div className={indexModule.headerWrapper}>
      <div className={indexModule.quoteMain}>
        <div className={indexModule.quoteWrapper}>
          <h1><FormattedMessage
              id="quote"
               values={{ br: <br />  }}
            /> </h1>
           <h4>{intl.formatMessage({ id: "quote_author" })}</h4>
        </div>  
          <div className={indexModule.bottomSecondary}>
            <div className={indexModule.scrollDirecion}>
              <span className={indexModule.scrollLine}></span><div>scroll</div>
            </div> 
            <div className={indexModule.socialContainer}>
            <div className={indexModule.facebook}>
              <a href="https://www.facebook.com/Negativ-studio-104852501175336/">
                <img src={socialFb} alt="facebook" />
              </a>
            </div>
              <div className={indexModule.instagram}>
               <a href="https://www.instagram.com/negativ_studio_opatija/">
                  <img src={socialIn} alt="instagram" />
                </a>
              </div>
            </div>   
          </div> 
       </div> 
      </div>
    </BackgroundImage>
    </section>
    <section className={indexModule.whatIs}>
            <h1><FormattedMessage id="what_is"
              values={{span: (word) => <span>{word}</span>}} />         
             </h1>
              <p> <FormattedMessage id="what_description"
              values={{span: (word) => <span className={indexModule.strongText}>{word}</span>}} />     </p> <br />
          <BackgroundImage
          fluid={data.desktopImage2.childImageSharp.fluid}
          >
        <div className={indexModule.whatIsHolder}>
              <p>{intl.formatMessage({ id: "what_description_second" })}</p>
            
              <div className={indexModule.buttonMain}>               
                <Link to="/about"><img src={house} alt="house icon" /> <div className={indexModule.buttonText}>{intl.formatMessage({ id: "link_about" })}</div></Link>
              </div>
        </div> 
        <div className={indexModule.didYou}>
          <p> {intl.formatMessage({ id: "did_you_know" })}</p> 
          <p className={indexModule.bolderPromo}> <FormattedMessage id="did_you_know_second"
              values={{span: (word) => <span className={indexModule.purpleText}>{word}</span>}} /></p> 
          <p> {intl.formatMessage({ id: "did_you_know" })}</p> 
        </div>
     </BackgroundImage>
    </section>
    <section className={indexModule.recentWork}>
      <div className={indexModule.recentWrapper}>
      <div className={indexModule.recentTop}>
        <div className={indexModule.recentHeader}>
          <div className={indexModule.headerName}>
            <div className={indexModule.patternIcon}></div> 
               <h2>
               {intl.formatMessage({ id: "recent" })}
                </h2>
          </div>
          
          </div>
          <div className={indexModule.seeAll}>
            <Link to="/projects">
               <h5>
               {intl.formatMessage({ id: "see_all" })}
               </h5>
             <span className={indexModule.seeIcon}></span> 
            </Link>
          </div>
        </div>
          <p>
          {intl.formatMessage({ id: "snaps" })}
          </p>
      </div>
      <div className={indexModule.recentProject}>
        <div className={indexModule.recentHolder}>
          <IndexLightbox />
        </div>
       </div>
         <div className={indexModule.projectInfo}>
            <div className={indexModule.projectHeader}>
             <div className={indexModule.projectName}>
              <div className={indexModule.projectIcon}></div> 
                 <h2>
                 {intl.formatMessage({ id: "stanger" })}
                 </h2>
              </div>
                <p>
                {intl.formatMessage({ id: "stanger_desc" })}
               </p>
             </div>
           </div>
    </section>
    <section className={indexModule.howWe}>
      <div className={indexModule.howWeHolder}>
        <h1> <FormattedMessage id="how"
              values={{span: (word) => <span>{word}</span>}} />  </h1>
          <p><FormattedMessage
              id="how_desc"
               values={{ br: <br />  }}
            /></p>
      <div className={indexModule.descriptionList}>
        <ul>
          <li>
            <div className={indexModule.listElementContainer}>
            <span className={indexModule.drone}></span> 
              <h2>
                {intl.formatMessage({ id: "drone" })}
              </h2>
              <div className={indexModule.textContainer}>
               {intl.formatMessage({ id: "drone_desc" })}
              </div>
            </div>
          </li>
          <li>
          <div className={indexModule.listElementContainer}>
            <span className={indexModule.camera}></span> 
              <h2>
                {intl.formatMessage({ id: "camera" })}
              </h2>
              <div className={indexModule.textContainer}>
                {intl.formatMessage({ id: "camera_desc" })} 
              </div>
            </div>           
          </li>
          <li>
          <div className={indexModule.listElementContainer}>
          <span className={indexModule.lights}></span> 
            <h2>
             {intl.formatMessage({ id: "lights" })}
            </h2>
            <div className={indexModule.textContainer}>
             {intl.formatMessage({ id: "lights_desc" })}
            </div>
          </div>            
          </li>
        </ul>
      </div>
      <div className={indexModule.buttonMain}>               
        <Link to="/projects"><img src={projects} alt="projects icon" /> <div className={indexModule.buttonText}>{intl.formatMessage({ id: "link_projects" })}</div></Link>
      </div>
     </div>
    </section>
    <section className={indexModule.convinced}>
      <div className={indexModule.convincedHolder}>
        <h1><FormattedMessage id="convinced"
              values={{span: (word) => <span>{word}</span>}} /> </h1>
          <p><FormattedMessage
              id="convinced_desc"
               values={{ br: <br />  }}
            /></p>
          <div className={indexModule.buttonMain}>               
        <Link to="/contact"><img src={contact} alt="contact icon" /> <div className={indexModule.buttonText}>{intl.formatMessage({ id: "link_contact" })}</div></Link>
      </div>
     </div>
    </section>
  
  </Layout>
  )
}

export default IndexPage







