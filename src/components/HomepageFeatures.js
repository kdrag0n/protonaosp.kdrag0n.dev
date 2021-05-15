import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Fast and Smooth',
    Svg: require('../../static/img/undraw_fast_loading.svg').default,
    description: (
      <>
        With deep, empirical-proven optimizations throughout the system,
        ProtonAOSP is faster and smoother than other Android distributions.
      </>
    ),
  },
  {
    title: 'Clean UI design',
    Svg: require('../../static/img/undraw_design_components.svg').default,
    description: (
      <>
        ProtonAOSP's typography, attention to details, and color schemes picked
        with state-of-the-art color science make for a clean and elegant UI.
      </>
    ),
  },
  {
    title: 'Privacy',
    Svg: require('../../static/img/undraw_privacy_protection.svg').default,
    description: (
      <>
        ProtonAOSP helps keep your data private with camera and microphone
        indicators, internet &amp; sensor permissions, and microG support.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
