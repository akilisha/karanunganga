import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import {ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
            {/*<SignedOut>*/}
            {/*    <SignInButton className="button button--secondary button--lg"></SignInButton>*/}
            {/*</SignedOut>*/}
            {/*<SignedIn>*/}
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
                style={{marginRight: "20px"}}>
                Karibu - 👷‍♂️
              </Link>
                {/*<UserButton />*/}
            {/*</SignedIn>*/}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
      // <ClerkProvider publishableKey={siteConfig.customFields.APP_PUBLISHABLE_KEY}>
        <Layout
          title={`Hello from ${siteConfig.title}`}
          description="Description will go into a meta tag in <head />">
          <HomepageHeader />
          <main>
            <HomepageFeatures />
          </main>
        </Layout>
      // </ClerkProvider>
  );
}
