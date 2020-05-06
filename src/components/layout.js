/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "normalize.css" 
import Header from "./header"
import Footer from "./footer"
import "./sass/main.scss"
import containerModule from "./sass/header.module.scss"



const Layout = ({ children }) => {
    const data = useStaticQuery(graphql `
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


    return (<> <div className={containerModule.container}>
   
      <div className={containerModule.contentContainer}>
        < Header siteTitle = { data.site.siteMetadata.title } />
        <main > { children } </main> 
      </div>
      <div className={containerModule.footerContainer}>
    <Footer />
     </div> </div></>)
  

}


Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
