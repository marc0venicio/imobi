import React, { useState } from 'react'
import ImobiCards from '../../common/cards/ImobiCards';
import PaginationExpert from '../../common/pagination/Pagination';
import Pagination from '../../common/pagination/Pagination';
import './contentcard.scss'

function ContentCard() {
  const initial = [
    {id: 1, cidade: "Manaus", Região: "Sul", Preço: "550000", quartos: 5, banheiros: 3, metrosQuadrados: 500, img: "https://dummyimage.com/600x400/000/7CFC00"},
    {id: 2, cidade: "Manaus", Região: "Sul", Preço: "550000", quartos: 5, banheiros: 3, metrosQuadrados: 500, img: "https://dummyimage.com/600x400/000/7CFC00"},
    {id: 3, cidade: "Manaus", Região: "Sul", Preço: "550000", quartos: 5, banheiros: 3, metrosQuadrados: 500, img: "https://dummyimage.com/600x400/000/7CFC00"},
    {id: 4, cidade: "Manaus", Região: "Sul", Preço: "550000", quartos: 5, banheiros: 3, metrosQuadrados: 500, img: "https://dummyimage.com/600x400/000/7CFC00"},
    {id: 5, cidade: "Manaus", Região: "Sul", Preço: "550000", quartos: 5, banheiros: 3, metrosQuadrados: 500, img: "https://dummyimage.com/600x400/000/7CFC00"},
    {id: 6, cidade: "Manaus", Região: "Sul", Preço: "550000", quartos: 5, banheiros: 3, metrosQuadrados: 500, img: "https://dummyimage.com/600x400/000/7CFC00"},
    {id: 7, cidade: "Manaus", Região: "Sul", Preço: "550000", quartos: 5, banheiros: 3, metrosQuadrados: 500, img: "https://dummyimage.com/600x400/000/7CFC00"},
    {id: 8, cidade: "Manaus", Região: "Sul", Preço: "550000", quartos: 5, banheiros: 3, metrosQuadrados: 500, img: "https://dummyimage.com/600x400/000/7CFC00"},
    {id: 9, cidade: "Manaus", Região: "Sul", Preço: "550000", quartos: 5, banheiros: 3, metrosQuadrados: 500, img: "https://dummyimage.com/600x400/000/7CFC00"},
    {id: 10, cidade: "Manaus", Região: "Sul", Preço: "550000", quartos: 5, banheiros: 3, metrosQuadrados: 500, img: "https://dummyimage.com/600x400/000/7CFC00"},
    {id: 11, cidade: "Manaus", Região: "Sul", Preço: "550000", quartos: 5, banheiros: 3, metrosQuadrados: 500, img: "https://dummyimage.com/600x400/000/7CFC00"},
    {id: 12, cidade: "Manaus", Região: "Sul", Preço: "550000", quartos: 5, banheiros: 3, metrosQuadrados: 500, img: "https://dummyimage.com/600x400/000/7CFC00"},
    {id: 13, cidade: "Manaus", Região: "Sul", Preço: "550000", quartos: 5, banheiros: 3, metrosQuadrados: 500, img: "https://dummyimage.com/600x400/000/7CFC00"},
    {id: 14, cidade: "Manaus", Região: "Sul", Preço: "550000", quartos: 5, banheiros: 3, metrosQuadrados: 500, img: "https://dummyimage.com/600x400/000/7CFC00"},
  ];



  const [imoveis, setImoveis] = useState(initial);
  return (
    <div className='container col-12'>
        <div className="row">
           {imoveis.map((value, key) => {
        return (
            <div className='col-sm-3 mt-3' key={key}>
                    <ImobiCards imgSrc={value.img} />
              {/* <img src={slide.img} alt={`slide${index}`} /> */}
            </div>
          );
      })} 
        </div>
        <div className='pagination text-center'>
            <PaginationExpert className='pagination text-center' />
        </div>
    </div>
  )
}

export default ContentCard