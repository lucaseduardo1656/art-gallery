import React, { useEffect, useState } from "react";
import "./style.css";
import nFormatter from "./format.js";

const GithubCard: React.FC<{ dataUser: string; dataTheme?: string }> = ({
  dataUser,
  dataTheme,
}) => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    fetchData(dataUser).then((response) => {
      setUserData(response);
    });
  }, [dataUser]);

  useEffect(() => {
    if (dataTheme === "dark") {
      document.querySelector(".card")?.classList.add("dark");
    } else {
      document.querySelector(".card")?.classList.remove("dark");
    }
  }, [dataTheme]);

  const fetchData = async (user: string) => {
    const response = await fetch(`https://api.github.com/users/${user}`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };

  const createCard = (user: any) => {
    return (
      <>
        <div className="cover"></div>
        <div className="card-wrapper">
          <a
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener"
          >
            <img
              id="github-logo"
              src="https://i.ibb.co/frv5pB3/github-logo.png"
              alt="github-logo"
            />
          </a>
          <div className="card-header">
            <div className="card-img-wrapper">
              <img
                src={`https://avatars.githubusercontent.com/${user.login}`}
              />
            </div>
            <h1>
              <a
                className="card-title"
                href={user.html_url}
                target="_blank"
                rel="noopener"
              >
                {user.name}
              </a>
            </h1>
            <div className="card-responsename">
              <a href={user.html_url} target="_blank" rel="noopener">
                @{user.login}
              </a>
            </div>
            <p className="card-desc">{user.bio ?? ""}</p>
            <div className="card-footer">
              <div className="footer-box">
                <div className="box-wrapper">
                  <div className="count">{nFormatter(user.followers)}</div>
                  <div className="box-text">Followers</div>
                </div>
                <div className="box-wrapper">
                  <div className="count">{nFormatter(user.following)}</div>
                  <div className="box-text">Following</div>
                </div>
                <div className="box-wrapper">
                  <div className="count">{nFormatter(user.public_repos)}</div>
                  <div className="box-text">Repositories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="card">{userData && createCard(userData)}</div>
    </>
  );
};

export default GithubCard;
