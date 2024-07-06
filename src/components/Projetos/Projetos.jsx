import React from "react";
import { ProjetosData } from "./Data";
import { projetosNav } from "./Data";
import ProjetoItens from "./ProjetoItens";

const Projetos = () => {
    return (
        <div>
            <div className="projetos__filtros">
                {projetosNav.map((item, index)=>{
                    return (
                        <span className="projetos__item" key={index}>{item.name}</span>
                    )
                })}
            </div>

            <div className="projetos__container container grid">
                {ProjetosData.map((item) =>{
                    return <ProjetoItens item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
} 
export default Projetos;