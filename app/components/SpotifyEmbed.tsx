import React from 'react';

interface SpotifyEmbedProps {
  albumId: string;
  width?: string;
  height?: string;
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({
  albumId,
  width = "100%",
  height = "100%" // Changed to relative unit
}) => {
  const iframeSrc = `https://open.spotify.com/embed/album/${albumId}?utm_source=generator`;

  return (
    <iframe
      className="w-full h-full p-6"
      src={iframeSrc}
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
};

export default SpotifyEmbed;
