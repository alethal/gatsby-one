import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>2nd page</h1>
    <p>Blah.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
