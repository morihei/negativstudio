import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {  useIntl } from "gatsby-plugin-intl"
import BackgroundImage from 'gatsby-background-image'
import MyForm from "../components/myform"
import contactModule from "../components/sass/contact.module.scss"
import phone from "../images/icons/phone-dark.svg"
import socialFb from "../images/icons/facebook.svg"
import socialIn from "../images/icons/instagram.svg"


const ContactPage = () => {

  const intl = useIntl()

  const data = useStaticQuery(graphql`

  query {
    contactBackgroundImage: file(
      relativePath: {
       eq: "contact.jpg" }) {
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
    <SEO title={intl.formatMessage({ id: "seo_contact" })} />
      <section className={contactModule.contact}>
        <BackgroundImage
            className={contactModule.imageHolder}
            fluid={data.contactBackgroundImage.childImageSharp.fluid}
          >
    <div className={contactModule.quoteSection}>
      <div className={contactModule.quoteWrapper}>
          <h1> 
          {intl.formatMessage({ id: "contact.quote" })} 
          </h1>
      </div>  
      <div className={contactModule.formWrapper}>
       <MyForm />

      <div className={contactModule.phoneWrapper}>
        <div className={contactModule.phoneInner}>
          <p>{intl.formatMessage({ id: "contact.phone" })}</p>
          <div className={contactModule.phoneInfo}>
          <a href="tel:00385914938966"><img src={phone} alt="phone" /> + (385) 91493 8966</a>       
          </div>
        </div>
        <div className={contactModule.socialContainer}>
          <div className={contactModule.facebook}>
            <a href="https://www.facebook.com/Negativ-studio-104852501175336/">
              <img src={socialFb} alt="facebook" />
            </a>
          </div>
            <div className={contactModule.instagram}>
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
  </Layout>
  )
  }

export default ContactPage
