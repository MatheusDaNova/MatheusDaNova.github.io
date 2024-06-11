import React, { useState } from "react";
import "./header.css";

const Header = () => {
    /* Toggle Menu */
    const[Toggle, show_menu] = useState(false);

    return(
      <header className="header">
          <nav className="nav container">
              <a href="index.html" className='nav__logo'>Matheus</a>
   
              <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                  <ul className="nav__list grid">
                      
                      <li className="nav__item">
                          <a href="#Home" className="nav__link active__link">
                              <i className="uil uil-estate nav__icon"></i> Início
                          </a>
                      </li>
  
                      <li className="nav__item">
                          <a href="#Sobre" className="nav__link">
                              <i className="uil uil-user nav__icon"></i> Sobre 
                          </a>
                      </li>
  
                      <li className="nav__item">
                          <a href="#skills" className="nav__link">
                              <i className="uil uil-file-alt nav__icon"></i> Conhecimentos
                          </a>
                      </li>
  
                      <li className="nav__item">
                          <a href="#services" className="nav__link">
                              <i className="uil uil-briefcase nav__icon"></i> Serviços
                          </a>
                      </li>
  
                      <li className="nav__item">
                          <a href="#portifolio" className="nav__link">
                              <i className="uil uil-scenery nav__icon"></i> Portifolio
                          </a>
                      </li>
  
                      <li className="nav__item">
                          <a href="#contato" className="nav__link">
                              <i className="uil uil-message nav__icon"></i> Contato 
                          </a>
                      </li>
                  </ul>
                  <i className="uil uil-times nav__close"  onClick={() => show_menu(!Toggle)}></i>
              </div>
  
              <div className="nav__toggle" onClick={() => show_menu(!Toggle)}>
              <i class="uil uil-apps" ></i>  
              </div>
          </nav>
      </header>
    );
  
  } ;
  export default Header 