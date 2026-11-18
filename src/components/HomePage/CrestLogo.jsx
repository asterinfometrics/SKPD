import skpdLogo from '../../assets/logo.webp';

export default function CrestLogo({ className = '', width, height, style = {} }) {
  const customStyles = { ...style };
  if (width !== undefined) {
    customStyles['--default-logo-w'] = typeof width === 'number' ? `${width}px` : width;
  }
  if (height !== undefined) {
    customStyles['--default-logo-h'] = typeof height === 'number' ? `${height}px` : height;
  }

  return (
    <div
      className={`crest-logo-wrapper ${className}`}
      style={customStyles}
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