import "./home.css"


const Home = () => {
    return (
        <div className="all-container">


            <section id="home-1" className="home-1-container">
                <div className="home-1"></div>
                <div className="player"></div>
                <div className="text-player">
                    <h1 className="text-player-name">Tobias Gonzalez</h1>
                    <h3 className="text-player-details">soy desarrollador web full stack</h3>
                </div>
                
            </section>







            <section id="home-2" className="home-2">
                <div className="titulo-proyecto">
                    <h2>Proyectos:</h2>
                </div>
                <div className="container-proyectos">
                    <div id="poke" className="proyectos">
                        <h2 id="poke-titulo">Poke App</h2>
                    </div>
                    <div id="rick" className="proyectos">
                        <h2 id="rick-titulo">Rick And Morty</h2>
                    </div>
                    <div className="proyectos">
                        titulo
                    </div>
                    <div className="proyectos">
                        titulo
                    </div>
                    <div className="proyectos">
                        titulo
                    </div>
                   
                </div>
            </section>








            <section id="home-3" className="home-3">
                <h2>Skills:</h2>
                <div className="container-skills">
                    <div id="skil" className="skills1"></div>
                    <div id="skil" className="skills2"></div>
                    <div id="skil" className="skills3"></div>
                    <div id="skil" className="skills4"></div>
                    <div id="skil" className="skills5"></div>
                    <div id="skil" className="skills6"></div>
                    <div id="skil" className="skills7"></div>
                    <div id="skil" className="skills8"></div>
                    <div id="skil" className="skills9"></div>
                </div>
            </section>




        </div>

    )
}


export default Home