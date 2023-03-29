import React from 'react';
import './style.css' 

export default function Projetos() {
    return(

        <section className='ContainerProjetos' id='Projetos'>
                <h3 className='titleSobre'>Projetos</h3>
            <div className='BoxProjetos'>
                <div className='CardProjeto'>
                     <img src='./assets/LIINK.png' className='IMGcard'/>
                     <h4>CyberStore</h4>
                     <p className='textP'>Este é um projeto de criação de um site responsivo em React.js para uma loja de joias pertencente a um amigo. A iniciativa tem como objetivo principal atrair novos clientes e promover maior notoriedade ao empreendimento. Durante o desenvolvimento do projeto, pude aprimorar minhas habilidades em React.js e CSS.</p>
                    <div className='ROW'>
                    <a href='https://github.com/Luiz047/CyberStore' className='btnP' target={'_blank'}>GitHub</a>
                    <a href='https://cyber-store-luiz047.vercel.app/' className='btnP' target={'_blank'}>Deploy</a>
                    </div>
                </div>
                <div className='CardProjeto'>
                     <img src='blob:https://vercel.com/5817d505-ec4c-40ec-ab2c-4bf24f2c370b' className='IMGcard'/>
                     <h4>AMORdepet</h4>
                     <p className='textP'>Este foi um projeto de freelancer para criar um website responsivo em React.js para um cliente que possuía um PetShop, com o objetivo de conseguir agendar horarios e aumentar a visibilidade do negócio e atrair mais clientes. Durante o processo de desenvolvimento, pude aperfeiçoar minhas habilidades em React,js, CSS e Git.</p>
                   <div className='ROW'> 
                     <a href='https://github.com/Luiz047/AMORdepet' className='btnP' target={'_blank'}>GitHub</a>
                     <a href='https://amordepet.vercel.app/' className='btnP' target={'_blank'}>Deploy</a>
                   </div>  
                </div>
                <div className='CardProjeto'>
                     <img src='blob:https://vercel.com/9f085016-334e-4a24-8200-b3821f62d734' className='IMGcard'/>
                     <h4>Meu portfólio</h4>
                     <p className='textP'>Este é um projeto do meu site pessoal como Desenvolvedor, feito utilizando React.js . A iniciativa tem como objetivo principal atrair novos clientes e promover maior notoriedade ao empreendimento. Durante o desenvolvimento do projeto, pude aprimorar minhas habilidades em criaçao de Sites em React.js e Css.</p>
                  <div className='ROW'>
                    <a href='https://github.com/Luiz047/Portifolio'className='btnP' target={'_blank'}>GitHub</a> 
                    <a href='https://meuportifoliodev.vercel.app/' className='btnP' target={'_blank'}>Deploy</a>
                   </div>
                </div>
            </div>
        </section>
    )
}
