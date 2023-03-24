import React from 'react';
import './style.css' 

export default function Habilidades() {
    return(

        <section className='ContainerSkills ' id='Habilidades'>

            <h2 className='titleSobre'>Habilidades</h2>

            <div className='BoxSkills'>

            <div className='CardSkills'>
                <div className='reverso'>
                <h4 className='titleSkills'> Html </h4>
                 <img src='./assets/html.png' className="imgSkills"/>
                 </div>
                 <a href='https://www.devmedia.com.br/certificado/tecnologia/html/luiz-roberto-13' className='CERTIFICADO 'target={"_blank"}> Certificado </a>
            </div>
            

            <div className='CardSkills'>
                <div className='reverso'>
                <h4 className='titleSkills'> Css </h4>
                 <img src='./assets/CSS.png' className='imgSkills'/>
                 </div>
                 <a href='https://www.devmedia.com.br/certificado/tecnologia/css/luiz-roberto-13' className='CERTIFICADO ' target={"_blank"}> Certificado </a>
            </div>

            <div className='CardSkills'>
                <div className='reverso'>
                <h4 className='titleSkills'> Javascript </h4>
                 <img src='./assets/javascript.png' className='imgSkills'/>
                 </div>
                 <a href='https://www.devmedia.com.br/certificado/tecnologia/javascript/luiz-roberto-13' className='CERTIFICADO ' target={"_blank"}> Certificado </a>
            </div>
            

            <div className='CardSkills'>
            <div className='reverso'>
                <h4 className='titleSkills'> React</h4>
                 <img src='./assets/react.png' className='imgSkills'/>
                 </div>
                 <a href='https://www.devmedia.com.br/certificado/tecnologia/react/luiz-roberto-13' className='CERTIFICADO ' target={"_blank"}> Certificado </a>
            </div>
            

            <div className='CardSkills'>
            <div className='reverso'>
                <h4 className='titleSkills'> Git </h4>
                 <img src='./assets/Git.png' className='imgSkills'/>
                 </div>
                 <a href='https://www.devmedia.com.br/certificado/tecnologia/git/luiz-roberto-13' className='CERTIFICADO ' target={"_blank"} > Certificado </a>
            </div>
            

            <div className='CardSkills'>
            <div className='reverso'>
                <h4 className='titleSkills'> SQL </h4>
                 <img src='./assets/sql.png' className='imgSkills'/>
                 </div>
                 <a href='https://www.devmedia.com.br/certificado/tecnologia/sql/luiz-roberto-13' className='CERTIFICADO 'target={"_blank"}> Certificado </a>
            </div>
          

            </div>
        </section>
    )
}
