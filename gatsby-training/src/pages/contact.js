import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contacts</h1>
      <p>This is a contacts page.</p>
      <p>
        Contact me on{" "}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </p>
    </Layout>
  )
}
export default ContactPage
