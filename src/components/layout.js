import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'
import Footer from './footer'
import "./layout.css"
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const Layout = ({ children }) => (
     <>
        <Navbar />
       
          {children}
        
        <Footer />
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
