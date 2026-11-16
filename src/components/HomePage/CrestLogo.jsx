import React from 'react';
import skpdLogo from '../../assets/logo.webp';

export default function CrestLogo({ className = '', width = 112, height = 112, marginTop = '30px', style = {} }) {
  return (
    <div
      className={`crest-logo-wrapper ${className}`}
      style={{
        '--logo-w': typeof width === 'number' ? `${width}px` : width,
        '--logo-h': typeof height === 'number' ? `${height}px` : height,
        width: 'var(--logo-w)',
        height: 'var(--logo-h)',
        marginTop: marginTop,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        ...style,
      }}
      role="img"
      aria-label="S.K.P.D. Alumni Association Logo"
    >
      <img
        src={skpdLogo}
        alt="S.K.P.D. Schools' Alumni Association"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
          filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.14))',
        }}
      />
    </div>
  );
}
