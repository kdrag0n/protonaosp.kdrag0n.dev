import React from 'react';
import clsx from 'clsx';
import styles from './Screenshots.module.css';

export default function Screenshot({name, alt, width, height, showCaption, large}) {
  return (
    <div className={clsx(styles.screenshotContainer)}>
      <picture>
        <source type="image/webp" srcSet={`../../static/img/screenshots/${name}.webp`} />
        <source type="image/png" srcSet={`../../static/img/screenshots/${name}.png`} />
        <img
          className={clsx(styles.screenshot, large ? styles.screenshotLarge : "")}
          width={width}
          height={height}
          src={`../../static/img/screenshots/${name}.png`} alt={alt} />
      </picture>

      {showCaption &&
        <>
          <br />
          <span className={clsx(styles.screenshotCaption)}>{alt}</span>
        </>
      }
    </div>
  );
}

Screenshot.defaultProps = {
  width: 205,
  height: 433,
  showCaption: true,
  large: false,
};
