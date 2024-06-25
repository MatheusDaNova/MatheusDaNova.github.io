import React from "react";

const Qualificacoes = () => {
    return ( 
        <section className="qualificacao section">
            <h2 className="section__title">Qualificações</h2>
            <span className="section__subtitle">Minha formação atualmente</span>


            <div className="qualificacao__container container">
                <div className="qualificacao__tabs">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div className="qualificacao__button qualificacao__active button--flex">
                        <i className="uil uil-graduation-cap qualificacao__icon"></i>{""} Formação 
                    </div>

                    <div className="qualificacao__button button--flex">
                        <i className="uil uil-briefcase-alt qualificacao__icon"></i>{""} Experiência
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle">CEFET</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">2023 - Atualmente</i>
                                </div>
                            </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Qualificacoes