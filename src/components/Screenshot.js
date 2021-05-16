import React from 'react';

export default function Screenshot({name, alt}) {
  return (
    <picture>
      <source type="image/webp" srcset={`../../static/img/screenshots/${name}.webp`} />
      <source type="image/png" srcset={`../../static/img/screenshots/${name}.png`} />
      <img width="205" height="433" src={`../../static/img/screenshots/${name}.png`} alt={alt} />
    </picture>
  );
}
