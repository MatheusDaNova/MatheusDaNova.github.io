import React from "react";

const ProjetoItens = ({item}) => {
    return(
        <div className="projetos__card" key={item.id}>
            <img src={item.image} alt="" className="projetos__img"/>

            <h3 className="projetos__title">{item.title}</h3>
            <a href="" className="projetos__button">
                Demo <i className="bx bx-right-arrow-alt projetos__button-icon"></i>
            </a>
        </div>
    )
}
export default ProjetoItens