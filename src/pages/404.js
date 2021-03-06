import React from "react"

// import Layout from "../layouts/index"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <div className="main-content">
      <div className="container">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </div>
)

export default NotFoundPage
