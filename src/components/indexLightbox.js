import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightboxHome"

const IndexLightbox = () => (

  <StaticQuery

    query={graphql`

      query {
        projectImagesShowcase: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
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
        
             <Lightbox projectImages={data.projectImagesShowcase.edges} />
       
} />


)
export default IndexLightbox