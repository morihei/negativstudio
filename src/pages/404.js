import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useIntl , FormattedMessage } from "gatsby-plugin-intl"
import notfoundModule from "../components/sass/header.module.scss"

const NotFoundPage = () => {
  const intl = useIntl()
  
  return(
  <Layout>
    <SEO title={intl.formatMessage({ id: "notfound.title" })} />
    <div className={notfoundModule.notFoundContainer}>
      <div className={notfoundModule.notFoundInner}>
         <h1><FormattedMessage
              id="notfound.description"
               values={{ br: <br />  }}
            /></h1>
         <p>{intl.formatMessage({ id: "notfound.paragraph" })}</p>
      </div>
    </div>
  </Layout>
  )
}
export default NotFoundPage
