import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayer({
  source,
  className,
}: {
  source: string;
  className: string;
}) {
  const ref = React.createRef<any>();
  return (
    <ReactPlayer
      ref={ref}
      url={source}
      playing
      controls
      config={{ file: { attributes: { id: 'audio-element' } } }}
      height="auto"
      className={className}
    />
  );
}
