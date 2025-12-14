import { useState } from "react";

function Home() {
    return <div className="container">
                <div className="header">
                  <h1>Você foi escolhido como cobaia do meu novo projeto.</h1>
                  <h2>Então dá play no vídeo e aproveita pra dançar ao som de MC Andinho:</h2>
                </div>
                <div className="body">
                    <iframe width="350" height="200" src="https://www.youtube.com/embed/fOYHfvREq_8?si=tsUHEJjFKYkT0nIZ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                
                    <img src="https://25.media.tumblr.com/tumblr_maiks37LUo1qj9zwno1_250.gif" alt="Gato dançante"/>
                </div>
        <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          gap: 64px;
          background-image: url('https://i.pinimg.com/originals/34/ac/31/34ac31c2ab7103586c407ec93ee15e7d.gif');
          background-size: cover; 
          height: 100vh;
          overflow: hidden;
          padding: 16px;
          margin:0;

          .header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h1 {
                font-size: 50px;
                background-color: black;
                color: white;
                margin: 8px;
            }
            h2 {
                font-size: 36px;
                background-color: black;
                color: white;
                margin: 8px;
            }
          }
          .body {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 24px;

            img {
                height: 400px;
                width: 200px;
            }
          }
        }
        @media screen and (max-width: 600px) {
          .container {
          display: flex;
          flex-direction: column;
          gap: 24px;
          background-image: url('https://i.pinimg.com/originals/34/ac/31/34ac31c2ab7103586c407ec93ee15e7d.gif');
          background-size: cover; 
          height: 100vh;
          overflow: auto;
          padding: 16px;
          margin:0;

          .header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h1 {
                font-size: 32px;
                background-color: black;
                color: white;
                margin: 8px;
            }
            h2 {
                font-size: 24px;
                background-color: black;
                color: white;
                margin: 8px;
            }
          }
          .body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 24px;

            img {
                height: 200px;
                width: 100px;
                margin-bottom: 16px;
            }
          }
        }
        }
      `}</style>
    </div>;
    
}

export default Home;