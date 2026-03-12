import { IVenda } from '../Context/DataContext'

const VendaItem = ({venda}: {venda: IVenda}) => {
  return (
    <div className='venda box'>
      <a href="" style={{fontFamily: "monospace"}}>{venda.id}</a>
      <span>{venda.nome}</span>
      <span>{venda.preco.toLocaleString('pt-br', {style: "currency", currency: "BRL"})}</span>
    </div>
  )
}

export default VendaItem
