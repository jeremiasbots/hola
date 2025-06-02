import '../App.css'
import NavBar from '../Components/NavBar';
import FloatingParticles from '../Components/ParticulasFlotantes';

function HomePage() {
  return (
    <>
      <NavBar />
      <section id='Home'>
      <div className="glow-bottom-left"></div>
      <div className="homepage">
        <div className="hero-content">
          <h1><span className="green">Sebastian Sirrett</span><br />Front-End Developer</h1>
          <p>
            Programador front-end con conocimientos de Frameworks de JS, y creación de Bots de Discord
          </p>
          <div className="buttons">
            <a href="#"><button className="filled">View Projects</button></a>
            <a href="#"><button className="outlined">Contact Me</button></a>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default HomePage;