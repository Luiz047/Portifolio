import React from 'react';
import './style.css' 

export default function Sobre() {
    return(

        <section className='ContainerSobre' id='Sobre'>
          <div className='BoxSobre'>
            <h2 className='titleSobre'>Sobre </h2>
            <p className='pSobre'>Olá, me chamo Luiz, Atualmente sou um Desenvolvedor Front-end, e desde que tive o primeiro contato com programação fiquei fascinado com as possibilidades.
              Então comecei a estudar todos os dias para melhorar minhas habilidades nas tecnologias web, alem de programar gosto de café, esportes e Counter Strike.
              Aqui no meu portfólio voce encontrara projetos que desenvolvi Para alguns comercios da minha cidade. 
              Embora não tenha experiência profissional comprovada, estou sempre procurando novas oportunidades para aprender e crescer nesta área!</p>
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
