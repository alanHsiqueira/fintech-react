import { NavLink } from 'react-router-dom'
import { IVenda } from '../Context/DataContext'

const VendaItem = ({venda}: {venda: IVenda}) => {
  return (
    <div className='venda box'>
      <NavLink to={`/vendas/${venda.id}`} style={{fontFamily: "monospace"}}>{venda.id}</NavLink>
      <span>{venda.nome}</span>
      <span>{venda.preco.toLocaleString('pt-br', {style: "currency", currency: "BRL"})}</span>
    </div>
  )
}

export default VendaItem
