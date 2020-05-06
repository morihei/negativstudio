import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import {  Link  } from "gatsby-plugin-intl"
import { Dialog } from '@reach/dialog';
import lightBox from "./sass/index.module.scss"

export default class Lightbox extends Component {

  static propTypes = {

    projectImages: PropTypes.array.isRequired,
    
  }
  constructor(props) {
    super(props);
    this.preventDefault = this.preventDefault.bind(this);
    this.state = {
      showLightbox: false,
      selectedImage: null
    };
  }
  preventDefault(e) {
    e.preventDefault();
  }
  render() {
 

    const { projectImages } = this.props;
    const { selectedImage, showLightbox } = this.state;
    
    return (
        <Fragment>
            <div className={lightBox.lightBoxContainer}> 
             {projectImages.map(image => (
                <Link 
                    key={image.node.childImageSharp.fluid.src}
                    to="/"
                    onClick={(e) => this.setState({ showLightbox: true, selectedImage: image },e.preventDefault())}
                >
                  <Img fluid={image.node.childImageSharp.fluid} />
                </Link>
                
             ))}
        {showLightbox && (
            <Dialog aria-label="Project Image" className={lightBox.lightBoxBackground}>
             <div className={lightBox.lightBoxBackgroundInner}>
                 <div className={lightBox.lightBoxBackgroundWrapper}>
                    <Img fluid={selectedImage.node.childImageSharp.fluid} />
                <div className={lightBox.buttonHolder}> 
                 <Link 
                  onClick={(e) => this.setState({ showLightbox: false },e.preventDefault()) }
                  to="/"
                 >Zatvori<span></span></Link>
                </div>
            </div>
          </div>
        </Dialog>
        )}
        </div>
      </Fragment>
    )
  }
}