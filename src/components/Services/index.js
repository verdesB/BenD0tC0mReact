import React from 'react';
import PropTypes from 'prop-types';
import './services.scss';
import code from '../../assets/icon/code.svg'


const Services = ({ services }) => {
  return (
    <section className='services' id='services'>
      <div className='services__text'>
        <h2>My Services</h2>
        <h4>Work with pleasure only</h4>
      </div>

      <div className='services__container'>
        {services.map((service) => (
          <article className='services__box' key={service.service}>
            <img src={service.src} alt={service.alt}></img>
            <h3>{service.service}</h3>
            <p>{service.description}</p>
            <button href='#' className='services__btn'>
              Read More
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      service: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Services;
