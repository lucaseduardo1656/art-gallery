import React from "react";
import "./ArtContainer.css";
import { RiUserSearchLine } from "react-icons/ri";

type ArtData = {
  id: number;
  title: string;
  ano: number;
  artist: string;
  description: string;
  imageUrl: string;
  link: string;
};

const ArtContainer = ({
  id,
  title,
  artist,
  ano,
  description,
  imageUrl,
  link,
}: ArtData) => {
  const redirectToGoogleArts = () => {
    const googleArtsUrl = `${link}`;
    window.open(googleArtsUrl, "_blank");
  };

  return (
    <div className="art-container">
      <div className="imageconteiner">
        <img src={imageUrl} alt={title} className="imagem" />
      </div>
      <div className="infoconteiner">
        <div className="content">
          <h1>{title}</h1>
          <p>Ano: {ano}</p>
          <p>Artista: {artist}</p>
          <p>{description}</p>
          <span>
            <RiUserSearchLine onClick={redirectToGoogleArts} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArtContainer;
