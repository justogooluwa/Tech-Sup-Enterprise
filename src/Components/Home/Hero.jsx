import "./Hero.css"
import pap from "../../assets/papp.jpeg"

function Hero(){
    return(
        <>
        <div className="hero-container">
      <div className="hero-text" data-aos="fade-right">
        <p className="subheading">------------TECH SUP ENTERPRISE</p>
        <h1>
          GOOD <span className="highlight">TASTE</span> IS <br />
          THE <span className="highlight">ENEMY</span> OF <br />
          <span className="highlight">CREATIVITY</span>.
        </h1>
        <p className="description">
          WELCOME, WHERE WE BELIEVE THAT PAP IS MORE THAN JUST SUSTENANCE – IT’S AN EXPERIENCE. OUR MENU FEATURES A VARIETY OF DISHES THAT ARE EXPERTLY PREPARED WITH FRESH, LOCALLY SOURCED INGREDIENTS AND SERVED IN A WARM AND INVITING ATMOSPHERE.
        </p>
        {/* <button className="menu-btn">TODAY'S MENU</button> */}
      </div>
      <div className="hero-image" data-aos="fade-left">
        <img src={pap} alt="drink" />
      </div>
    </div>

        </>
    )
}

export default Hero;