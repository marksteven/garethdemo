import React, { Component } from "react";
import Layout from "../components/layout";
import Intro from "../components/mask";
import SEO from "../components/seo";
import Carousel from "../components/carousel";
import AboutSection from "../components/aboutSection";
import Card from "../components/card";
import { MDBRow } from "mdbreact";
import Amplify from "aws-amplify";
import config from "../aws-exports";
Amplify.configure(config);

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Home"
            keywords={[
              `gatsby`,
              `MDBReact`,
              `react`,
              `Material Design For Bootstrap`,
            ]}
          />
          <Carousel />
          <Intro />
          <main>
            <AboutSection />
            <section id="cardSection">
              <h2 className="h1-responsive text-center font-weight-bold mb-5">
                Now with simple authentication
              </h2>
              <MDBRow className="m-0" center>
                <Card />
                <Card />
                <Card />
              </MDBRow>
            </section>
          </main>
        </Layout>
      </>
    );
  }
}

export default App;
