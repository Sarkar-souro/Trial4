import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false)

    const getProducts = async () => {
        setLoading(true)
        const res = await axios.get("https://dummyjson.com/products?limit=10");
        const data= res.data.products;
        setProducts(data);
        setLoading(false);
    };

    useEffect (() => {
        getProducts();
    }, [])

    const HandlePagination = async () => {
        setLoading(true);
        const res = await axios.get(`https://dummyjson.com/products?limit=10&skip=${page*10}`);
        const data = await res.data.products;
        setProducts(data);
        setLoading(false);
    };
    useEffect(() =>{
        HandlePagination();
    }, [page]);
    
    
    function handlePrevPage () {
        if (page<=0){
            setPage(0);
        } else {
            setPage((prev) => prev - 1);
        }
    }


    function handleNextPage () {
        if(page >=9){
            setPage(0);
        } else {
            setPage((prev) => prev + 1);
        }
    }

    return (
        <>
        <div className="col-4 mx-auto mt-3 d-flex justify.content-between align-items-center">
            <button className="btn btn-secondary" onClick={handlePrevPage}>
                PREV
            </button>
            <p className="my-auto">{page + 1} of 10</p>
            <button className="btn btn-secondary" onClick={handleNextPage}>
                NEXT
            </button>
        </div>

        {loading  ?(
        <div>Loading...</div>
      ) : (
        <div className ="col-10 mx-auto d-flex flex-wrap justify-content-center">
            {products ?.map((products,  index) =>  {
                return (
                    
                    <div
                        key={index}
                        className="card my-2"
                        style={{width: "18 rem"}}
                        >
                            <div className="card-body">
                                <img
                                    src={products.thumbnail}
                                    className="card-img-top"
                                    alt={products.thumbmail}
                                    style={{height: "250 px"}}
                                />
                                <h5 className="card-title mt-2">{products.title}</h5>
                                <p className="card-text">
                                    <b>{" ₹ "+products.price}</b>
                                </p>

                                <button className="btn btn-primary">Add to Cart</button>
                            </div>

                        </div>
                    

                )})}
            
                
            </div>
      )}
      </>
    )
            }
export default Products;