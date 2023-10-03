import React, { useState } from "react";
import "./AboutPage.css";
import GithubCard from "./gitcard";

const AboutPage = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleLogoClick = () => {
    setClickCount(clickCount + 1);

    if (clickCount >= 10) {
      const nyanCat = document.getElementById("nyan-cat");
      if (nyanCat) {
        nyanCat.style.animation = "nyanCatAnimation 2.3s linear infinite";
        nyanCat.style.opacity = "1";
        alert("Nyan Cat apareceu!");
      }
    }
  };
  return (
    <div className="about-page">
      <div id="nyan-cat" className="nyan-cat"></div>
      <div className="top-section">
        <div className="image-container">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="image-ag"
          />
          <h1>+</h1>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            version="1.1"
            height="10em"
            width="10em"
            xmlns="http://www.w3.org/2000/svg"
            className="logo"
            id="logo"
            onClick={handleLogoClick}
          >
            <defs></defs>
            <path d="M840 192h-56v-72c0-13.3-10.7-24-24-24H168c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h592c13.3 0 24-10.7 24-24V256h32v200H465c-22.1 0-40 17.9-40 40v136h-44c-4.4 0-8 3.6-8 8v228c0 0.6 0.1 1.3 0.2 1.9-0.1 2-0.2 4.1-0.2 6.1 0 46.4 37.6 84 84 84s84-37.6 84-84c0-2.1-0.1-4.1-0.2-6.1 0.1-0.6 0.2-1.2 0.2-1.9V640c0-4.4-3.6-8-8-8h-44V520h351c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40zM720 352H208V160h512v192zM477 876c0 11-9 20-20 20s-20-9-20-20V696h40v180z"></path>
          </svg>
        </div>
      </div>
      <div className="bottom-section">
        <div className="project-info">
          <div className="info-box">
            <h2>Objetivo do Projeto</h2>
            <p>
              O objetivo do projeto é divulgar e valorizar conteúdos artísticos
              vinculados com a cultura brasileira, dando preferência a artistas
              nacionais. Além disso, em segundo plano, o projeto tem como
              finalidade mostrar que a educação e a tecnologia podem andar de
              mãos dadas, uma vez que é um trabalho desenvolvido por alunos do
              Terceiro Ano Ensino Médio do Colégio Águia de Prata sob supervisão
              do professor Filipe Lopes.
            </p>
          </div>
          <div className="info-box">
            <h2>Turma do 3º Ano do Ensino Médio</h2>
            <p>O projeto foi feito pela turma do 3º ano do Ensino Médio.</p>
          </div>
          <GithubCard dataUser="lucaseduardo1656" dataTheme="dark" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
