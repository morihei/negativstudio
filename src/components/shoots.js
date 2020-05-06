import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import Lightbox from "./lightbox"
import projectsModule from "./sass/projects.module.scss"


const Shoots = ({intl}) => (
  

  <StaticQuery

    query={graphql`

      query {
        projectImages1: allFile(filter: {relativeDirectory: {eq: "projects/stanger"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        projectImages2: allFile(filter: {relativeDirectory: {eq: "projects/fuzine"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        projectImages3: allFile(filter: {relativeDirectory: {eq: "projects/jadran"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        projectImages4: allFile(filter: {relativeDirectory: {eq: "projects/istra"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        projectImages5: allFile(filter: {relativeDirectory: {eq: "projects/lovran"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        projectImages6: allFile(filter: {relativeDirectory: {eq: "projects/umag"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
 

    render={data => 
        <section className={projectsModule.projectOne}>
        <div className={projectsModule.quoteWrapper}>
          <h1> 
           {intl.formatMessage({ id: "projects.ourshoots" })}
          </h1>
        </div> 
        <div className={projectsModule.year}>
         2020
        </div>
        <div className={projectsModule.projectWrapper}>
           <div className={projectsModule.recentHeader}>
            <div className={projectsModule.headerName}>
             <div className={projectsModule.patternIcon}></div> 
               <h2>
                   VILLA ŠTANGER
                </h2>
            </div>
            <p>
           {intl.formatMessage({ id: "projects.project-one" })}
            </p>
          </div>
          <div className={projectsModule.imageWrapper}>
           <div className={projectsModule.imageInner}>
              <Lightbox projectImages={data.projectImages1.edges} />
           </div>
          </div>
        </div> 
        <div className={projectsModule.projectTwo}>
          <div className={projectsModule.year}>
            2019
          </div>
          <div className={projectsModule.projectWrapper}>
            <div className={projectsModule.recentHeader}>
              <div className={projectsModule.headerName}>
              <div className={projectsModule.patternIcon}></div> 
                <h2>
                    VILLA FUŽINE
                </h2>
              </div>
              <p>
              {intl.formatMessage({ id: "projects.project-two" })}
              </p>
            </div>
            <div className={projectsModule.imageWrapper}>
            <div className={projectsModule.imageInner}>
             <Lightbox projectImages={data.projectImages2.edges} />
            </div>
            </div>
          </div> 
        </div>
        <div className={projectsModule.projectThree}>
          <div className={projectsModule.year}>
             2019
          </div>
          <div className={projectsModule.projectWrapper}>
            <div className={projectsModule.recentHeader}>
              <div className={projectsModule.headerName}>
              <div className={projectsModule.patternIcon}></div> 
                <h2>
                    VILLA JADRAN
                </h2>
              </div>
              <p>
              {intl.formatMessage({ id: "projects.project-three" })}
               
              </p>
            </div>
            <div className={projectsModule.imageWrapper}>
            <div className={projectsModule.imageInner}>
             <Lightbox projectImages={data.projectImages3.edges} />
            </div>
            </div>
          </div> 
        </div>
        <div className={projectsModule.projectFour}>
          <div className={projectsModule.year}>
             2019
          </div>
          <div className={projectsModule.projectWrapper}>
            <div className={projectsModule.recentHeader}>
              <div className={projectsModule.headerName}>
              <div className={projectsModule.patternIcon}></div> 
                <h2>
                    VILLA ISTRA
                </h2>
              </div>
              <p>
              {intl.formatMessage({ id: "projects.project-four" })}
              </p>
            </div>
            <div className={projectsModule.imageWrapper}>
            <div className={projectsModule.imageInner}>
             <Lightbox projectImages={data.projectImages4.edges} />
            </div>
            </div>
          </div> 
        </div>
        <div className={projectsModule.projectFive}>
          <div className={projectsModule.year}>
            2019
          </div>
          <div className={projectsModule.projectWrapper}>
            <div className={projectsModule.recentHeader}>
              <div className={projectsModule.headerName}>
              <div className={projectsModule.patternIcon}></div> 
                <h2>
                    VILLA LOVRAN
                </h2>
              </div>
              <p>
              {intl.formatMessage({ id: "projects.project-five" })} 
              </p>
            </div>
            <div className={projectsModule.imageWrapper}>
            <div className={projectsModule.imageInner}>
             <Lightbox projectImages={data.projectImages5.edges} />
            </div>
            </div>
          </div> 
        </div>
        <div className={projectsModule.projectSix}>
          <div className={projectsModule.year}>
            2019
          </div>
          <div className={projectsModule.projectWrapper}>
            <div className={projectsModule.recentHeader}>
              <div className={projectsModule.headerName}>
              <div className={projectsModule.patternIcon}></div> 
                <h2>
                    VILLA UMAG
                </h2>
              </div>
              <p>
              {intl.formatMessage({ id: "projects.project-six" })}
              </p>
            </div>
            <div className={projectsModule.imageWrapper}>
            <div className={projectsModule.imageInner}>
             <Lightbox projectImages={data.projectImages6.edges} />
            </div>
            </div>
          </div> 
        </div>
      </section>
} />


)
export default injectIntl(Shoots)