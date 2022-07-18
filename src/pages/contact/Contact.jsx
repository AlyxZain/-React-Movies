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
              <p className='overview'>un chicos</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
