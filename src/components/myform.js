// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import {  FormattedMessage } from "gatsby-plugin-intl"
import contact from "../images/icons/mail-blue.svg"
import contactModule from "../components/sass/contact.module.scss"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;

    return (
   
      <form 
      onSubmit={this.submitForm}
      action="https://formspree.io/xnqgarqq"
      method="POST"
      >
      <div className={contactModule.formContainer}>
        <div className={contactModule.formInner}>
         <div className={contactModule.formBlock}>          
           <label>
              <p> <FormattedMessage id="contact.name" /> </p>       
              <input type="text" name="name" id=" about"  placeholder="Your Name" required onFocus={(e) => e.target.placeholder = ""} 
onBlur={(e) => e.target.placeholder = "Your Name"}/>
           </label>
           <label>
             <p><FormattedMessage id="contact.mail" /> </p>
             <input type="email" name="_replyto" id="email" placeholder="Your E-mail" required onFocus={(e) => e.target.placeholder = ""} 
onBlur={(e) => e.target.placeholder = "Your E-mail"}/>
           </label>
           <label>
             <p><FormattedMessage id="contact.subject" /> </p>
               <input type="text" name="subject" id="subject" placeholder="Subject" required onFocus={(e) => e.target.placeholder = ""} 
onBlur={(e) => e.target.placeholder = "Subject"}/>
           </label>
           <div className={contactModule.buttonMain}>
           
            {status === "SUCCESS" ? <p>Thanks!</p> : <button type="submit"><div className={contactModule.centerBlock}><img src={contact} alt="contact icon" /><div className={contactModule.buttonText}><FormattedMessage id="contact.send-it" /></div></div></button>}
            {status === "ERROR" && <p><FormattedMessage id="contact.error" /></p>}
          </div>
       </div>
           <div className={contactModule.formBlockRight}>
              <label>
                  <p><FormattedMessage id="contact.message" /></p>
                 <textarea name="message" id="message" rows="10" placeholder="Your Message" required onFocus={(e) => e.target.placeholder = ""} 
onBlur={(e) => e.target.placeholder = "Your Message"}/>
               </label>
           </div>  
         </div>    
       </div>   
   </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}