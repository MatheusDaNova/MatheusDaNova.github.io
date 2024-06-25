import React, { useState } from "react";
import "./Servicos.css";

const Servicos = () =>{
        const [toggleState, seToggleState] = useState(0);

        const toggleTab = (index) => {
            seToggleState(index);
        }

    return (
       <section className="servicos section" id="servicos">
         <h2 className="section__title">Serviços</h2>
         <span className="section__subtitle">Quais serviços presto</span>

        <div className="servicos__container container grid">
            <div className="servicos__content">
                <div>
                    <i className="uil uil servicos__icon"></i>
                    <h3 className="servicos__title">
                        Product <br /> Designer
                    </h3> 
                </div>

                <span className="servicos__button" onClick={() => toggleTab(1)}>Saiba mais 
                    <i className="uil uil-arrow-right servicos__button-icon"></i>
                </span>

                <div className={toggleState === 1 ?  "servicos__modal active-modal" : "servicos__modal"}>

                    <div className="servicos__modal-content">
                        <i onClick={() => toggleTab(0)} class="uil uil-times servicos__modal-close"></i>
                        
                        <h3 className="servicos__modal-title">Develop 1</h3>
                        <p className="servicos__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.</p>

                        <ul className="servicos__modal-servicos grid">
                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Desenvolvo a interface do usuário</p>
                            </li>

                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Desenvolvo a interface do usuário</p>
                            </li>

                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Desenvolvo a interface do usuário</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="servicos__content">
                <div>
                    <i className="uil uil servicos__icon"></i>
                    <h3 className="servicos__title">
                        Product <br /> Designer
                    </h3> 
                </div>

                <span className="servicos__button" onClick={() => toggleTab(2)}>Saiba mais 
                    <i className="uil uil-arrow-right servicos__button-icon"></i>
                </span>

                <div className={ toggleState=== 2 ?   "servicos__modal active-modal" : "servicos__modal"}>

                    <div className="servicos__modal-content">
                        <i onClick={() => toggleTab(0)} className="ui uil-times servicos__modal-close"></i>
                        
                        <h3 className="servicos__modal-title">Develop 2</h3>
                        <p className="servicos__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.</p>

                        <ul className="servicos__modal-servicos grid">
                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Desenvolvo a interface do usuário</p>
                            </li>

                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Desenvolvo a interface do usuário</p>
                            </li>

                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Desenvolvo a interface do usuário</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="servicos__content">
                <div>
                    <i className="uil uil servicos__icon"></i>
                    <h3 className="servicos__title">
                        Product <br /> Designer
                    </h3> 
                </div>

                <span className="servicos__button" onClick={() =>toggleTab(3)}>Saiba mais 
                    <i className="uil uil-arrow-right servicos__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "servicos__modal active-modal" : "servicos__modal"}>

                    <div className="servicos__modal-content">
                        <i onClick={() => toggleTab(0)} className="ui uil-times servicos__modal-close"></i>
                        
                        <h3 className="servicos__modal-title">Develop 3</h3>
                        <p className="servicos__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.</p>

                        <ul className="servicos__modal-servicos grid">
                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Desenvolvo a interface do usuário</p>
                            </li>

                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Desenvolvo a interface do usuário</p>
                            </li>

                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Desenvolvo a interface do usuário</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
       </section>
    )
}

export default Servicos