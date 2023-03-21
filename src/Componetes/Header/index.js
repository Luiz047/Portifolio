import React from "react";
import './style.css';

export default function Header() {
    return(
        <header>
            <div className="LimitadorWidth">
                <a className="logo" href="#Banner"> LZ </a>
            <nav>
                 <a href="#Sobre">Sobre</a>
                 <a href="#Habilidades">Habilidades </a>
                 <a href="#Projetos">Projetos</a>
            </nav>
            </div>
        </header>
    )
}