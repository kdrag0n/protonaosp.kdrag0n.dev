import React from 'react';

export default function Screenshot({name, alt}) {
  return (
    <img width="205" height="433" src={`../../static/img/screenshots/${name}.png`} alt={alt} />
  );
}
