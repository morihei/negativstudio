import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import footerModule from "./sass/footer.module.scss"

const languageName = {
  hr: "HR",
  en: "EN",
  
}

const Language = () => {
  return (
    <div className={footerModule.languageInner}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button className={footerModule.buttonLanguage}
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `#fafafa` : `rgba(255,255,255, 0.5)`,
                background: 'none',
                border: 'none',
                outline: 'none',
                textDecoration: `none`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
              <span style={{
                  display: currentLocale === language ? `flex` : `none`
              }}
              
              ></span>
            </button>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language