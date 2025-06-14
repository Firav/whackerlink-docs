import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import {useEffect} from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="img/whackerlink-logo.png" class="container" alt="WhackerLink Logo" style={{width: "800px", height: "auto"}}></img>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Getting started with WhackerLink
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  useEffect(() => {
    window.location.replace('/whackerlink-docs/docs/intro');
  }, []);
  return null;
}
