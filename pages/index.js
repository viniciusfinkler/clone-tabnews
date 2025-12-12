function Home() {
    return <div className="container">
        <div className="header">
            <h1>PARABÉNS! Você foi escolhido como cobaia do projeto novo que estou fazendo.</h1>
            <h2>Aproveita para assistir o Mini Messi em ação:.</h2>
            <img src="https://i.makeagif.com/media/12-07-2023/M2o1oi.gif"
             alt="Mini Messi"/>  
        </div>  
        <style jsx>{`
        .container {
          margin: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .header {
            display: flex;
            flex-direction: column;
            h1 {
                color: red;
            }
            .subheader {
                display: flex;
                gap: 8px;
                align-items: center;
                justify-content: center;
            }
        }
        img {
            height: 400px;
            widht: 300px;
        }
      `}</style>
    </div>;
    
}

export default Home;