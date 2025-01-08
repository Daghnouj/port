import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import meter50 from "../assets/skills/meter/50.svg";
import meter55 from "../assets/skills/meter/55.svg";
import meter60 from "../assets/skills/meter/60.svg";
import meter65 from "../assets/skills/meter/65.svg";
import meter70 from "../assets/skills/meter/70.svg";
import meter75 from "../assets/skills/meter/75.svg";
import meter80 from "../assets/skills/meter/80.svg";
import meter85 from "../assets/skills/meter/85.svg";
import meter90 from "../assets/skills/meter/90.svg";
import meter95 from "../assets/skills/meter/95.svg";

import arrow1 from "../assets/skills/arrow1.svg";
import arrow2 from "../assets/skills/arrow2.svg";
import colorSharp from "../assets/skills/color-sharp.png"

import { styles } from "../styles";


export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="skills">
          <div className="container mx-auto">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow">
                          <h2>Skills</h2>
                          <p>Here are the core competencies that define my professional profile</p>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                  <img src={meter80} alt="Image" />
                                  <h5>Spring Boot / Angular</h5>
                              </div>
                              <div className="item">
                                  <img src={meter80} alt="Image" />
                                  <h5>Node / React</h5>
                              </div>
                              <div className="item">
                                  <img src={meter65} alt="Image" />
                                  <h5>Devops</h5>
                              </div>
                          
                              <div className="item">
                                  <img src={meter60} alt="Image" />
                                  <h5>.NET</h5>
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
          
      </section>
    )
  }