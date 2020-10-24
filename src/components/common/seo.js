/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ lang, title, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={site.siteMetadata.title}
      titleTemplate={`${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: `${site.siteMetadata.description}`
        },
        {
          name: `author`,
          content: `${site.siteMetadata.author}`
        }
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  title: '',
  meta: []
};

SEO.propTypes = {
  title: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.any)
};

export default SEO;
