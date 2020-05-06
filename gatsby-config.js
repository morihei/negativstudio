module.exports = {
    siteMetadata: {
        title: `Negativ Studio`,
        description: `Negativ studio is a interior photography collectiv that provides the latest client service for people who want their real estate value increase significantly`,
        author: `SP Enterprise`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,  
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
    
        {
            resolve: `gatsby-plugin-intl`,
            options: {
              path: `${__dirname}/src/intl`,
              languages: [`hr`, `en`],
              defaultLanguage: `hr`,
              redirect: true,
              redirectComponent: require.resolve(`./src/components/redirect.js`),
            },
          },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}