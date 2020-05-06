import React from "react"
import Layout from "../components/layout"
import Shoots from "../components/shoots"
import SEO from "../components/seo"
import { useIntl } from "gatsby-plugin-intl"
import projectsModule from "../components/sass/projects.module.scss"
import ScrollToTop from "react-scroll-up"


const ProjectPage = () => {

  const intl = useIntl()

  return(
  <Layout>
    <SEO title={intl.formatMessage({ id: "seo_projects" })} />

      <Shoots />
      <section className={projectsModule.backtoTop}>
      <ScrollToTop style ={{

        position: 'initial',
        bottom: 'initial',
        right: 'initial'
      }
      }
      
      duration={300} showUnder={160}>
        <div className={projectsModule.backtoWrapper}>
          <div className={projectsModule.topIcon}></div> 
            <h4>
                {intl.formatMessage({ id: "projects.backto" })}
            </h4>
        </div>
        </ScrollToTop>
      </section>
  </Layout>
  )
} 

export default ProjectPage
