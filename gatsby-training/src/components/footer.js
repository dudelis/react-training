import React from "react"

import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return <p>Created by {data.site.siteMetadata.author}. Copyright 2019</p>
}

export default Footer
