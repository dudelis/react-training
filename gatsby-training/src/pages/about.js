import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout>
        <h1>About</h1>
            <p>This is about page.</p>
            <p>If you want to contact me click <Link to="/contact">Contact me</Link></p>
      </Layout>
    )
}
export default AboutPage;