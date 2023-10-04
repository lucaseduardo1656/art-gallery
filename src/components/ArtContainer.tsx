import React from "react";
import "./ArtContainer.css";

type ArtData = {
  id: number;
  title: string;
  ano: number;
  artist: string;
  description: string;
  imageUrl: string;
};

const ArtContainer = ({
  id,
  title,
  artist,
  ano,
  description,
  imageUrl,
}: ArtData) => {
  return (
    <div className="art-container">
      <div className="imageconteiner">
        <img src={imageUrl} alt={title} className="imagem" />
      </div>
      <div className="infoconteiner">
        <div className="content">
          <h1 className="">{title}</h1>
          <p className="">Ano:{ano}</p>
          <p className="">Artista: {artist}</p>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtContainer;
