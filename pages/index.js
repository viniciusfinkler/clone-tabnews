import githubLogoBlack from "assets/images/github-logo-black.svg";
import backgroundImg from "assets/images/background.png";

function Home() {
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      <div className="header">
        <div className="title">
          <h1>PackYourBags</h1>
        </div>
        <p>
          O <b>PackYourBags</b> é um projeto <i>open source</i> que está em
          estágio de construção. É uma comunidade onde os <b>viajantes</b>{" "}
          poderão compartilhar suas <b>experiências</b> <br /> e <b>auxiliar</b>{" "}
          outros que procuram uma luz para guiá-los na próxima aventura. Sua{" "}
          <b>viagem dos sonhos</b> se tornará muito melhor partindo daqui.
        </p>
        <div className="content">
          <button className="action">
            <img
              src={githubLogoBlack.src}
              width={40}
              height={40}
              alt="GitHub logo"
            />
            <a
              className="link"
              target="_blank"
              href="https://github.com/viniciusfinkler/clone-tabnews"
            >
              Acompanhe pelo GitHub
            </a>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-size: cover;
            button {
              font-family: inherit;
            }

            .header {
              max-width: 80vw;
              .title {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 5px 5px 0 0;
                background-color: #6d8196;
                h1 {
                  font-size: 32px;
                  color: #ffffe3;
                  margin: 8px;
                  padding: 8px;
                }
              }

              gap: 24px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background-color: white;
              border-radius: 10px;
              border-style: solid;
              border-color: #4a4a4a;
              margin-bottom: 24px;

              p {
                margin: 0 16px;
                font-size: 22px;
                color: black;
                text-align: justify;
                margin-top: 0;
                padding: 8px;
              }

              b {
                color: #6d8196;
              }
            }

            .content {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 40px;
              padding: 16px;
            }

            .action {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 16px;
              background-color: white;
              border-radius: 10px;
              border-style: solid;
              border-width: 3px;
              border-color: #6d8196;
              padding: 16px;
              cursor: pointer;
              transition: 1s;
            }

            .action:hover {
              background-color: lightgray;
            }

            .link {
              text-decoration: none;
              color: black;
              font-size: 18px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
