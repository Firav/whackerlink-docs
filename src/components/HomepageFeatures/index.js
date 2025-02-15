import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'In-Game Radio Integration',
    Svg: require('@site/static/img/radio.svg').default,
    description: (
      <>
        WhackerLink provides seamless in-game radio communication, allowing players to interact as they would with real-life radio systems. 
        This feature enhances the authenticity of role-playing scenarios by simulating realistic radio transmissions. 
      </>
    ),
  },
  {
    title: 'Dispatch Console Connectivity',
    Svg: require('@site/static/img/headset.svg').default,
    description: (
      <>
        WhackerLink has the ability for a dispatch console to connects with in-game radios, enabling dispatchers to communicate directly with players. 
        This setup facilitates coordinated operations and efficient management of role-playing activities.
      </>
    ),
  },
  {
    title: 'P25 Paging System',
    Svg: require('@site/static/img/pager.svg').default,
    description: (
      <>
        WhackerLink features a P25 paging system that allows dispatchers to send pages from the console to in-game radios. 
        This function is useful for alerting specific players or groups about important events or calls to action within the game environment
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
