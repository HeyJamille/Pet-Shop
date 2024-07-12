import React from 'react';
import { Link } from 'react-router-dom'; // Usado para navegação interna

// Assets
import loginImage from '../assets/FotoFundo/animais2.jpeg';
import image from '../assets/FotoFundo/animais2.jpeg';

// Components
import Button from '../components/ui/Btn'

const Login = () => {
  // Função para lidar com o submit do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione aqui a lógica para autenticação
    console.log('Formulário enviado');
  };

  return (
    <article className="flex justify-center items-center h-screen bg-custom-radial p-5">
      <section className="flex flex-col gap-10 bg-white h-auto w-full p-5 rounded-lg sm:w-[350px]"> 
        <div className="text-center"> 
          <h2>Bem-vindo de volta</h2>
          <p>Entre em sua conta</p>
        </div>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex items-center w-full">
            <label className="flex-shrink-0" htmlFor="nome">Nome:</label>
            <input 
              className="flex-grow ml-5 outline-none border-b-2" 
              type="text" 
              placeholder="Digite seu nome" 
              required 
            />
          </div>

          <div className="flex items-center w-full mb-5">
            <label className="flex-shrink-0" htmlFor="senha">Senha: </label>
            <input  
              className="flex-grow ml-[10px] outline-none border-b-2" 
              type="password" 
              placeholder="Digite sua senha" 
              required 
            />
          </div>
          
          <Button type="submit">Entrar</Button>
          <p className="text-center mt-1">Não possui conta? <Link className="hover:text-pink-500" to="/register">Cadastre-se.</Link> </p>
          </form>
      </section>
    </article>
  );
};

export default Login;
