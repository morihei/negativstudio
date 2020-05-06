import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import containerModule from "./sass/header.module.scss"

const languageName = {
  hr: "HR",
  en: "EN",
  
}

const Language = () => {
  return (
    <div className={containerModule.languageInner}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button className={containerModule.buttonLanguage}
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `#111111` : `rgba(17,17,17, 0.5)`,
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