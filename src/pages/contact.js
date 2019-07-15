import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>My Contact</h1>
        <p>
          The best way to reach me is to via{" "}
          <a href="https://google.com" target="_blank">
            google
          </a>{" "}
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
