import "./style.css"
import Product from "./../Product"
import {useState} from "react"

function MenuContainer({filter,showProducts,handleClick}){
    
    const [nome, setNome]=useState("")
    
    return (
        <div className="conteiner">
            <div className="labelpesqusia">
                <input value={nome} onChange={e=>setNome(e.target.value)} className="pesquisa"></input>
                <button className="botaopesquisa" onClick={()=>showProducts(nome)}>Pesquisa</button>
            </div>
            <ul className="Menu">
                {filter.map((e,index)=>{
                    return <Product produto={e} key={index} handleClick={handleClick}/>
                })}
            </ul>
        </div>
    )
}

export default MenuContainer