import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const [user, setUser] = useState(null);
const [admin, setAdmin] = useState(false);
const logger = new Logger("My-Logger");

const [user, setUser] = useState(null);
const [admin, setAdmin] = useState(false);
const logger = new Logger("My-Logger");

const Projects = () => (
  <>
    <Layout>
      <h1>Projects Public Page</h1>

      <Link to="/">Go back homepage</Link>
    </Layout>
  </>
);

export default Projects;
