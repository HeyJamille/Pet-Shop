import React from 'react';
import DataRacaoCachorro from '../utils/DataRacaoCachorro';

// Se o carrinho for um link para a página do carrinho, defina a URL correta
const carrinho = '/carrinho';

// Components 
import Header from '../components/Header';
import Footer from '../components/Footer';

// ui
import Button from '../components/ui/Btn';

const Cachorro = () => {
  return (
    <article className="flex flex-col justify-between bg-slate-100">
      <Header />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 w-full">
        {DataRacaoCachorro.map((product, index) => (
          <li key={index} className="flex flex-col justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-md hover:-translate-y-1 hover:scale-105 duration-300">
            <img className="h-[100px] w-[80px]" src={product.image} alt={`Imagem de ${product.name}`} />
            
            <div className="text-center"> 
              <h2>{product.name}</h2>
              <p>R$: {product.price}</p>
            </div>
            
            <div className="flex flex-row gap-2">
              <p>Quantidade:</p>
              <input className="w-[50%]" type="number" min="1" defaultValue="1" />
            </div>

            <a href={carrinho}>
              <Button>Adicionar ao Carrinho</Button>
            </a>
          </li>
        ))}
      </ul>

      <Footer />
    </article>
  );
};

export default Cachorro;
