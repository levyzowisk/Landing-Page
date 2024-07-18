import Props from "../components/Props"
// import "./PropsPage.css"

function PropsPage() {
  let produtos = [
    {
      nome:"Tenis",
      descricao:"Tenis legal",
      valor:300
    },
    {
      nome:"Tenis",
      descricao:"Tenis legal",
      valor:300,
      discount:true
    },
    {
      nome:"Tenis",
      descricao:"Tenis legal",
      valor:300
    },
    {
      nome:"Tenis",
      descricao:"Tenis legal",
      valor:300
    }
  ]
    return (
      <>
      <div id="container" className="bg-dark ">
      {
          produtos.map((produto,index) => (
            <Props 
              key={index}
              nome={produto.nome}
              descricao={produto.descricao}
              valor={produto.valor}
            />
          ))
        }
      </div>  
        
      </> 
    )
  }
  
  export default PropsPage