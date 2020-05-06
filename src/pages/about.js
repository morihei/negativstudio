import React from "react"
import {  useIntl, Link, FormattedMessage  } from "gatsby-plugin-intl"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutModule from "../components/sass/about.module.scss"
import contact from "../images/icons/mail.svg"

const AboutPage = () => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`

  query {
    
      oliverImage: file(
      relativePath: {
       eq: "oliver.jpg" }) {
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
    <SEO title={intl.formatMessage({ id: "seo_about" })} />
  <section className={aboutModule.company}>
    <div className={aboutModule.quoteSection}>
      <div className={aboutModule.quoteWrapper}>
          <h1>  {intl.formatMessage({ id: "about.quote" })} <br />
          {intl.formatMessage({ id: "about.quote-two" })} </h1>
        </div>  
      <div className={aboutModule.headerWrapper}>
      <div className={aboutModule.headerContainer}>
       <div className={aboutModule.patternIcon}><span></span></div> 
          <p>{intl.formatMessage({ id: "about.hero-one" })}</p>
          <div className={aboutModule.patternIcon}><span className={aboutModule.rightIcon}></span></div> 
        </div>   
      </div>
      <div className={aboutModule.blockWrapper}>
          <div className={aboutModule.blockDescription}>
          <p>{intl.formatMessage({ id: "about.description-one" })}
          <br />
            {intl.formatMessage({ id: "about.description-two" })}
            </p> 
          </div>
          <div className={aboutModule.blockDescription}>
             <p>{intl.formatMessage({ id: "about.description-one-right" })}
             <br />
             {intl.formatMessage({ id: "about.description-two-right" })}
            </p> 
          </div>
      </div>
      <div className={aboutModule.quoteSecondWrapper}>
        <div className={aboutModule.quoteSecondContainer}>
          <p> {intl.formatMessage({ id: "about.life" })}</p> 
          <p className={aboutModule.bolderPromo}> {intl.formatMessage({ id: "about.focus" })} <span className={aboutModule.purpleText}>{intl.formatMessage({ id: "about.capture" })}</span> </p> 
          <p>{intl.formatMessage({ id: "about.develop" })}  </p> 
          <p> {intl.formatMessage({ id: "about.things" })}  <span className={aboutModule.yellowText}>{intl.formatMessage({ id: "about.shot" })}</span></p> 
        </div>
      </div>
    </div>
    </section>
    <section className={aboutModule.author}>
      <div className={aboutModule.authorHeader}>
        <div className={aboutModule.authorName}>
           <div className={aboutModule.patternIcon}>
             </div> 
              <h2>
                 {intl.formatMessage({ id: "about.professional" })} 
              </h2>
           </div>      
      </div>

       <div className={aboutModule.authorDescription}>
         <div className={aboutModule.imageHolder}>
          <Img fluid={data.oliverImage.childImageSharp.fluid} />
         </div>
         <div className={aboutModule.description}>
        
           <h1> {intl.formatMessage({ id: "about.oliver" })}</h1>
            <div className={aboutModule.aboutMe}>
             <p>{intl.formatMessage({ id: "about.description-three" })}
             <br /> <br />
             {intl.formatMessage({ id: "about.description-four" })}
              
            </p> 
          </div>
          <div className={aboutModule.buttonMain}>
             <Link to="/contact"><img src={contact} alt="contact icon" /> <div className={aboutModule.buttonText}> {intl.formatMessage({ id: "about.link-contact" })}</div></Link>
           </div>
         </div>
       </div>
    </section>
    <section className={aboutModule.adriatic}>
      <div className={aboutModule.adriaticHolder}>
         <h2> {intl.formatMessage({ id: "about.location" })}</h2>
           <p> {intl.formatMessage({ id: "about.answer-one" })}</p>
          <p> {intl.formatMessage({ id: "about.answer-two" })}</p>
          <p> {intl.formatMessage({ id: "about.answer-three" })}</p>
          <p> {intl.formatMessage({ id: "about.answer-four" })}</p>
         <div className={aboutModule.conclusion}>
          <p> <FormattedMessage
              id="about.conclusion"
               values={{ br: <br />  }}
            /></p>
         </div>
      </div>
    </section>
    <section className={aboutModule.clientList}>
      <div className={aboutModule.clientListWrapper}>
        <h2>
        {intl.formatMessage({ id: "about.clients" })}
       </h2>
        <ul>
          <li>
          <div className={aboutModule.listElementContainer}>
            <h3>
              Valamar
            </h3>
            <span className={aboutModule.hotelName}></span> 
            </div>
          </li>
          <li>
          <div className={aboutModule.listElementContainer}>
            <h3>
              Hotel Milenij
            </h3>
            <span className={aboutModule.hotelNameSecond}></span> 
            </div>
          </li>
          <li>
          <div className={aboutModule.listElementContainer}>
            <h3>
              Jadran d.d.
            </h3>
            <span className={aboutModule.vilaName}></span> 
            </div>
          </li>
          <li>
          <div className={aboutModule.listElementContainer}>
            <h3>
              Villa Gigi
            </h3>
            <span className={aboutModule.vilaName}></span> 
            </div>
          </li>
          <li>
          <div className={aboutModule.listElementContainer}>
            <h3>
              Villa Fužine
            </h3>
            <span className={aboutModule.vilaName}></span> 
            </div>
          </li>
        </ul> 
      </div>
      <div className={aboutModule.adriaticHolderInfo}>
          <p>  Foto Luigi, obrt za fotografiju i multimediju<br />
          vl. David Kurti<br />
          M. Tita 90/2, Opatija<br />
          Poslovnica Lovran Šet. M. Tita 50, Lovran<br />
          OIB 24529544753<br />
          IBAN HR2424020061100164963 Erste Bank<br />
          PDV ID/ VAT ID HR24529544753</p>
      </div>
    </section>
 
  </Layout>
  ) 
}

export default AboutPage
