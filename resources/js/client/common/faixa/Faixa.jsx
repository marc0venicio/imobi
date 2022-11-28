import React from 'react'
import { Button } from 'react-bootstrap'
import './faixa.scss'
function Faixa() {
  return (
    <>
    <div className='background card--pseudo-elements'>
      <h2 className='card__title'>Casas em Manaus</h2>
      <div class="box">
        <div className='card__subtitle'>
          <span className="subtitle"> Encontre sua casa</span>
          <h3>AQUI</h3>
        </div>
        <div  className='card__subtitle'>
        <div className="input-group">
          <div className="form-outline mx-3">
            <input type="search" id="form1" className="form-control mx-3" />
          </div>
          <Button type="button" className="btn btn-primary mx-3" style={{borderRadius:"5px"}}>
            <i class="fas fa-search"></i>
          </Button>
        </div>
          {/* <Button>Veja todos os imóveis</Button>
          <Button>Vaivaii laal</Button> */}
        </div>
      </div>
    </div>

    <div className='title__body my-5'>
      <h3 className="tilte">Casas</h3>
      <h2 className="title">À VENDA</h2>
    </div>
    </>
    
  )
}

export default Faixa