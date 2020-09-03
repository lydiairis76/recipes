/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `ha3jjd13fxc8`,
    accessToken: `NRxTisXbQlCZG81Jh1OtN4sRc9LrKgHiZNObgisCQIo`,
       },
     },
  ],
}
