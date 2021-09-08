import handleClick from "./../../App"

function Product({produto,handleClick}){
    
    return (
        <>
            <li className="item">
                <h3>{produto.name}</h3>
                <p className="categoria">Categoria: {produto.category}</p>
                <p className="preco">Preço - R$ {produto.price}</p>
                <button className="adicionar" onClick={()=> handleClick(produto.id)}>Adicionar</button>
            </li> 
        </>
    )
}

export default Product