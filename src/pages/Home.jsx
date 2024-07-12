import React from 'react';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// ui
import Button from '../components/ui/Btn';

// Assets
import cachorro from '../assets/Main/cachorro.jpeg';
import gato from '../assets/Main/gato.jpeg';
import peixe from '../assets/Main/peixe.jpeg';
import passaro from '../assets/Main/passaro.jpeg';
import bannerImage from '../assets/Main/banner.jpeg'; // Supondo que esta seja a imagem do banner

const Home = () => {
  const animals = [
    { name: 'Cachorros', image: cachorro, link: 'CM_cachorro.html' },
    { name: 'Gatos', image: gato, link: 'CM_gato.html' },
    { name: 'Peixes', image: peixe, link: 'CM_peixe.html' },
    { name: 'Pássaros', image: passaro, link: 'CM_passaro.html' },
  ];

  return (
    <article>
      <Header />

      <section className="md:flex flex-row justify-center items-center mt-5">
        <h2 className="mb-[50px] p-5 pt-10 text-center md:w-[40%] lg:text-[25px] lg:p-14">Venha ser cliente de um dos melhores PetShop de Fortaleza!</h2>
        <img className="h-full w-full sm:h-[400px] md:w-[60%] md:h-[500px]" src={bannerImage} alt="Banner" />
      </section>

      <section className="flex flex-col items-center p-5">
        <h1 className="text-center p-5">O que você poderá consultar em nosso site?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 w-full">
          {animals.map((animal, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md hover:-translate-y-1 hover:scale-110 duration-300">
              <img className="h-24 w-auto mb-4" src={animal.image} alt={`imagem de ${animal.name.toLowerCase()}`} />
              <p className="mb-4">{animal.name}</p>
              <a href={animal.link}>
                <Button>Conheça Mais</Button> 
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </article>
  );
};

export default Home;
