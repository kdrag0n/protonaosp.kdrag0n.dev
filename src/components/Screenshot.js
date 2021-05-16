import React from 'react';
import clsx from 'clsx';
import styles from './Screenshots.module.css';

export default function Screenshot({name, alt}) {
  return (
    <div className={clsx(styles.screenshotContainer)}>
      <picture>
        <source type="image/webp" srcset={`../../static/img/screenshots/${name}.webp`} />
        <source type="image/png" srcset={`../../static/img/screenshots/${name}.png`} />
        <img width="205" height="433" src={`../../static/img/screenshots/${name}.png`} alt={alt} />
      </picture>
      <br />
      <span className={clsx(styles.screenshotCaption)}>{alt}</span>
    </div>
  );
}
