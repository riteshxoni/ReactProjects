import React from 'react'

const Product = ({item}) => {
  return (
    <div className="col-10 col-md-4 col-lg-3 ">
        <div className="card">
            <img src={item.image} className="card-img-top" alt="..." height="200px"/>
            <div className="card-body">
            <h5 className="card-title text-truncate">{item.title}</h5>
            <p className="card-text text-truncate">{item.description}</p>
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item text-capitalize">{item.category}</li>
            <li className="list-group-item">$ {item.price}</li>
            <li className="list-group-item d-flex justify-content-between">
                <div>★ {item.rating.rate}</div>
                <div>{item.rating.count}</div>
            </li>
            </ul>
            <div className="card-body">
            <a href="#" className="btn btn-primary w-100">Buy</a>
            </div>
        </div>
    </div>
    
  )
}

export default Product