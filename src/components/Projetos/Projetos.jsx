import React, { useEffect, useState } from "react";
import { ProjetosData } from "./Data";
import { projetosNav } from "./Data";
import ProjetoItens from "./ProjetoItens";
import { handleError } from "vue";

const Projetos = () => {
        const [item, setItem] = useState({name: 'all'});
        const [projetos, setProjetos] = useState([]);
        const [active, setActive] = useState(0);

        useEffect(()=> {
            if(item.name === "all"){
                setProjetos(ProjetosData);
            }

            else{
                const novoProjeto = ProjetosData.filter((projeto) => {
                    return projeto.category === item.name;
                });
                setProjetos(novoProjeto);
            }
        }, [item]);

        const handleClick = (e, index)=>{
            setItem({ name: e.target.textContent });
        };
    return (
        <div>
            <div className="projetos__filtros">
                {projetosNav.map((item, index) => {
                    return (
                        <span onClick={(e) =>{ handleClick(e, index);}} className="projetos__item" key={index}>{item.name}</span>
                    )
                })}
            </div>

            <div className="projetos__container container grid">
                { projetos.map((item) =>{
                    return <ProjetoItens item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
} 
export default Projetos;