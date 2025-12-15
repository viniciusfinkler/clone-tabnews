import { useState } from "react";

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpen = () => {
      console.log('open')
      setIsModalOpen(true);
    };

    const handleClose = () => {
      setIsModalOpen(false);
    };

    return <div className="container">
                <div className="header">
                  <h1>Olá!</h1>
                  <h2>Vamos tomar um café essa semana?</h2>
                  <div className="content">
                    <div className="declineWrapper">
                      <button className="decline">NÃO</button>
                    </div>
                    <button className="accept" onClick={handleOpen}>SIM</button>
                  </div>
                </div>
                <div className={`${isModalOpen ? 'modalOpen' : 'modal'}`}>
                    <div className="modalWrapper">
                      <div className="modalAction">
                        <button className="closeModalButton" onClick={handleClose}>X</button>
                      </div>
                      <div className="modalHeader">
                        <span>Excelente escolha!<br/>Me mande um 🧡 para confirmar!<br/></span>
                      </div>
                      <div className="modalContent">
                        <img src="https://i.pinimg.com/originals/e9/26/16/e9261611196ebd98b2d76ab0627699a0.gif" alt="Café GIF"/>
                      </div>
                    </div>
                </div>
        <style jsx>{`
          .container {
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-image: url('https://cdn.wallpapersafari.com/56/63/9nlGN0.gif');
            background-size: contain; 
            height: 100vh;

            button {
              font-family: inherit;
            }

          .header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #e87c58;
            border-radius: 10px;
            border-style: solid;
            border-color: white;
            padding: 16px;
            margin-bottom: 24px;
            h1 {
                font-size: 32px;
                color: white;
                margin: 8px;
                padding: 8px;
            }

            h2 {
              font-size: 24px;
              color: white;
              margin-top: 0;
              padding: 8px;
            }
          }

          .content {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;

            button {
              border-radius: 5px; 

              &.decline {
                height: 50px;
                width: 200px;
                background-color: #964a53;
                border-style: solid;
                color: white;
                border-color: white;
              }

              &.accept {
                transition: 1s;
                height: 50px;
                width: 200px;
                background-color: #4a965e;
                border-style: solid;
                color: white;
                border-color: white;
              }
            } 
          }

          .modal {
            display: none;
          }

          .modalOpen {
            position: absolute;
            font-size: 60px;

            .modalWrapper {
              display: flex;
              flex-direction: column;
              align-items: center;
              border-style: solid;
              border-color: white;
              border-radius: 10px;
              height: 300px;
              width: 500px;
              background-color: #e87c58;

              .modalAction {
                display: flex;
                align-self: end;
                margin: 8px;  

                 .closeModalButton {
                  color: black;
                  background-color: white;
                  border-radius: 10px;
                  border-style: solid;
                  border-color: black;
                  cursor: pointer;
                }

                .closeModalButton:hover {
                  background-color: gray;
                }
              }

              .modalHeader {
                display: flex;
                align-items: center;
                justify-content: space-between;
                text-align: center;
              }

              span {
                color: white;
                font-size: 24px;
                padding: 24px;
              }
            }

            .modalContent {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 32px;

              img {
                height: 100px;
                width: 100px;
              }
            }
          }

          .declineWrapper:hover {
            button {
              visibility: hidden;
            }
          }

          .decline:hover {
            background-color: #5c1d24 !important;
          }

          .accept:hover {
            cursor: pointer;  
            background-color: #143d13 !important;
          }
        }

        @media screen and (max-width: 600px) {
          .container {
            background-size: cover;
            background-image: url('https://i.pinimg.com/originals/0a/61/d7/0a61d7378ef0b113b833f05ec17178ba.gif');
          }

          .header {
            h1 {
              font-size: 24px !important;
            }

            h2 {
              font-size: 18px !important;
            }
          }

          .content {
            button {
              width: 150px !important;
            }
            gap: 0 !important;

            .decline {
              display: none;
            }

            .accept {
              flex: 1;
            }
          }

          .modalWrapper {
              height: 300px !important;
              width: 95vw !important;

              span {
                font-size: 12px;
                padding: 24px;
              }
            }
        }
      `}  </style>
    </div>;
    
}

export default Home;