import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function ProductCategory() {
  let [category,setCategory] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
          .then((res) => res.json())
          .then((data) => {
            setCategory(data);
          });
      },[])
  return (
    <>
      <div className="row">
        {category.map((value, index) => {
          return (
            <div key={index} className="card text-start col-4">
              <div className="card-body">
                <Link
                  to={`/products/category/${value.slug.toLowerCase()}`}
                >
                  <h4 className="card-title">{value.slug}</h4>
                  <p className="card-text">{value.name}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductCategory;