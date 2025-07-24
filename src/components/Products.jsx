import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Products({ link, ...data }) {
    let count = 0;
    let { categoryName } = useParams();
    let [products, setProducts] = useState({ products: [] });
    let [loading, setLoading] = useState(true);
    let loadingBodyStyle = { height: "100vh", position: "absolute", translate: "transform(-50%,-50%)", top: "50%", left: "50%" }


    useEffect(() => {
        //use below turnery operater
        link = categoryName ? link + categoryName : link;
        //fetch data from api
        fetch(link)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setProducts(data);
                    setLoading(false);
                }, 2000)
                return data;
            });
    }, [loading])

    return loading ? (
        <>
            <div style={loadingBodyStyle}>
                <div
                    class="spinner-border"
                    style={{ height: "20vh", width: "20vh" }}
                    role="status"
                >
                    <span
                        class="sr-only"
                        style={{ height: "20vh", width: "20vh" }}
                    ></span>
                </div>
            </div>
        </>
    ) : (
        <>
            {Math.random()}
            <div>
                {products.products.map((value, index) => {
                    return (
                        // use bs5 card from bootstrap
                        <div key={index} className="card text-start">
                            <img
                                className="card-img-top"
                                src={value.images[0]}
                                alt="Title"
                                height={300}
                            />
                            <div className="card-body">
                                <h4 className="card-title">{value.title}</h4>
                                <p className="card-text">{value.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Products;