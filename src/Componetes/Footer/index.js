import React from "react";
import './style.css';

export default function Footer() {
    return(
        <footer>
            <div className="rodape limite-largura">
                <div className="rodape-conteudo">
                    <h2>Contato</h2>
                    <div>
                        <img src="./assets/local.png" title="Ícone local" alt="Ícone local"/>
                        <span>Itapema, SC</span>
                    </div>
                    <div>
                        <img src="./assets/telefone.png" title="Ícone telefone" alt="Ícone telefone"/>
                        <span>Telefone: (47) 99682-8896</span>
                    </div>
                   
                </div>
                <div className="rodape-conteudo">
                    <h2> Redes Sociais</h2>
                    <div>
                        <img src="./assets/fb.png" title="Ícone facebook" alt="Ícone facebook"/>
                        <span>/AgenciaDeViagem</span>
                    </div>
                    <div>
                        <img src="./assets/ig.png" title="Ícone instagram" alt="Ícone instagram"/>
                        <span>@luiz.rfj</span>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}