'use client';

import React, { useState } from "react";
import Image from "next/image";
import SpotifyEmbed from "./SpotifyEmbed";
import { albums } from "../constants/albums";


export default function Grid() {
  const [hoveredAlbum, setHoveredAlbum] = useState<string | null>(null);

  return (
    <section>
      <div className="grid grid-cols-3 gap-0 bg-gray-900 relative">
        {albums.map(({ src, albumId }, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden group"
            onMouseEnter={() => setHoveredAlbum(albumId)}
            onMouseLeave={() => setHoveredAlbum(null)}
          >
            <Image src={src} alt={`Album ${index + 1}`} fill className="object-cover" />

            {hoveredAlbum === albumId && (
              <div className="absolute inset-0 bg-black bg-opacity-90 flex justify-center items-center">
                <SpotifyEmbed albumId={albumId} width="80%" height="80%" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
