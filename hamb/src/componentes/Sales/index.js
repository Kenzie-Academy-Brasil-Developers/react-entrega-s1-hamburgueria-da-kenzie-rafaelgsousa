import "./style.css"

function Sales({currentSales}){

    return (
        <div className="Sale">
            <div className="subtotal">   Sub Total : R$ {currentSales.reduce((a,e)=>a + e.price,0.00).toFixed(2)}</div>
            <ul className="carrinho">
                
                {currentSales.map((e,index)=> <li key={index}>
                <h3>{e.name}</h3>
                <p className="categoria">Categoria: {e.category}</p>
                <p className="preco">Preço - R$ {e.price}</p>
                </li>)}
            </ul>
        </div>
    )
}

export default Sales