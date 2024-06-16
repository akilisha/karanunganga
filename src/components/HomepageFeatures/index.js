import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The Vision',
    Svg: require('@site/static/img/the_vision.svg').default,
    description: (
      <>
        Collective responsibility to ourselves and the extended family to give
          all members the best shot at success.
      </>
    ),
  },
  {
    title: 'The Mission',
    Svg: require('@site/static/img/the_mission.svg').default,
    description: (
      <>
        Our guiding pillars from which we draw inspiration to be the best versions of
          ourselves and leading by example
      </>
    ),
  },
  {
    title: 'The Commitment',
    Svg: require('@site/static/img/the_committment.svg').default,
    description: (
      <>
        Failing is not failure if you learn something from it. Think of it as a learning
          moment - appreciate the lesson.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
