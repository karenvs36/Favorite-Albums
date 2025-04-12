import React from 'react';

interface SpotifyEmbedProps {
  albumId: string;
  width?: string;
  height?: string;
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({
  albumId
}) => {
  const iframeSrc = `https://open.spotify.com/embed/album/${albumId}?utm_source=generator`;

  return (
    <iframe
      className="w-full h-full p-6"
      src={iframeSrc}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
};

export default SpotifyEmbed;
