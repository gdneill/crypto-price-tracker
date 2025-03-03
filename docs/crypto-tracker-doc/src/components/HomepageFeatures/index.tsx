import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Project Setup',
    description: (
      <>
        Provides step-by-step instructions on setting up the Crypto Price Tracker, including dependencies, environment variables, and running the application locally.
      </>
    ),
  },
  {
    title: 'API Integration',
    description: (
      <>
        Explains how the application fetches cryptocurrency data from the CoinCap API, including API request structure, authentication, and handling search queries.
      </>
    ),
  },
  {
    title: 'State Management',
    description: (
      <>
        Covers the use of React's useState and useEffect hooks for managing search queries, asset data, loading states, and error handling to ensure smooth UI updates.
      </>
    ),
  },
  {
    title: 'Challenges & Solutions',
    description: (
      <>
        Highlights key development challenges, such as optimizing API usage during testing and fixing search functionality issues, along with the solutions implemented to address them.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
