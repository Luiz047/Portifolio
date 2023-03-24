import React from 'react';
import './style.css' 

export default function Sobre() {
    return(

        <section className='ContainerSobre' id='Sobre'>
          <div className='BoxSobre'>
            <h2 className='titleSobre'>Sobre </h2>
            <p className='pSobre'>Olá, me chamo Luiz. Sou um Desenvolvedor Front-end e estou estudando Back-end, gosto de café, esportes e videogames.
             Meu portfólio tem projetos que desenvolvi Durante  sobre as tecnologias da web. 
             Embora não tenha experiência profissional, estou sempre procurando novas oportunidades para aprender e crescer nesta área emocionante.
             Vamos trabalhar juntos em seu próximo projeto e transformar ideias em realidade!</p>

             <div className='secao-barras'>

          <div className='barras'>
            <div className='skill'>
              <p>Inglês</p>
              <p>70%</p>
            </div>
            <div className='barra'>
              <div class="progress-bar1"></div>
            </div>
          </div>

          <div className='barras'>

            <div className='skill'>
              <p>Trabalho em equipe</p>
              <p>100%</p>
            </div>

            <div className='barra'>
              <div class="progress-bar2"></div>
            </div>

          </div>
          <div className='barras'>
            <div className='skill'>
              <p>Resiliência</p>
              <p>100%</p>
            </div>
            <div className='barra'>
              <div class="progress-bar3">

              </div>
            </div>

          </div>
          <div className='barras'>
            <div className='skill'>
              <p>Comunicação</p>
              <p>100%</p>
            </div>
            <div className='barra'>
              <div class="progress-bar4">

              </div>
            </div>
          </div>

        </div>
        </div>
        </section>
    )
}