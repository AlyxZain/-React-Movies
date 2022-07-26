import './contact.scss';

import yo from '../../assets/yo.jpg';
const item = true;

export const Contact = () => {
  return (
    <>
      {item && (
        <>
          <div
            className='banner'
            style={{
              backgroundImage: `url(${yo})`,
            }}></div>
          <div className='mb-3 movie-content container'>
            <div className='movie-content__poster'>
              <div
                className='movie-content__poster__img'
                style={{
                  backgroundImage: `url(${yo})`,
                }}></div>
            </div>
            <div className='movie-content__info'>
              <h1 className='title'>Sebastian Vargas Ramirez</h1>
              <div className='genres'>
                <span className='genres__item'>Front-End Developer</span>
                <span className='genres__item'>HTML</span>
                <span className='genres__item'>CSS</span>
                <span className='genres__item'>JavaScript</span>
                <span className='genres__item'>React</span>
              </div>
              <p className='overview'>
                Hola, soy un desarrollador front-end junior sin experiencia
                laboral. Actualmente estoy estudiando en el bootcamp de henry
                para convertirme en desarrollador FullStack. <br />
                <br />
                Desarrollador Front-end & Técnico de Sistemas, con sólidos
                conocimientos académicos en programación y diseño. <br />→ HTML5
                , CSS3 , SASS , JavaScript , React <br />
                → Bootstrap, Material UI <br />→ Node.js, npm, git, GitHub
                <br />
                <br />
                Mi motivación y capacidad de aprendizaje, mi rápida
                adaptabilidad, mi capacidad de trabajo en equipo, mi dedicación
                al detalle por cada uno de los proyectos que realizo, son
                habilidades que me caracterizan a la hora de desenvolverme en el
                entorno laboral y crecer profesionalmente. .
              </p>
              <div className='genres'>
                <a
                  href='https://api.whatsapp.com/send?phone=573117382082'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span
                    className='genres__item'
                    style={{
                      backgroundColor: 'green',
                    }}>
                    Whatsapp
                  </span>
                </a>

                <a href='mailto:Y.u.u.k.ibrb@gmail.com' target='_blank'>
                  <span
                    className='genres__item'
                    style={{
                      backgroundColor: 'red',
                    }}>
                    Mail
                  </span>
                </a>

                <a href='https://github.com/AlyxZain' target='_blank'>
                  <span
                    className='genres__item'
                    style={{
                      backgroundColor: 'black',
                    }}>
                    GitHub
                  </span>
                </a>

                <a
                  href='https://www.linkedin.com/in/sebastian-vargas-ramirez/'
                  target='_blank'>
                  <span
                    className='genres__item'
                    style={{
                      backgroundColor: '#0e76a8',
                    }}>
                    Linkedin
                  </span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
