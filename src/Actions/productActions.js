import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types"



export const fetchProducts = () => async (dispatch) =>{
    const res = await fetch("http://localhost:5000/api/products")
    const data = await res.json();
    
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data
    })
}

export const filterProducts = (products, size) => (dispatch) =>{
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items: size === ""? products : products.filter(x => x.availableSizes.indexOf(size) >= 0 )
        }
    })
}

export const sortProducts = (filteredProducts, sort) => (dispatch) =>{
    const sortedProducts = filteredProducts.slice()
    if (sort === "Latest"){
        sortedProducts.sort((a,b) =>(a.id > b.id ? 1: -1))
    } else{
        sortedProducts.sort((a,b) => (
            sort === "Lowest" ? 
            a.price > b.price ? 1: -1 //lowest to highest
            :
            a.price > b.price ? //highest to lowest
            -1 : 1
        ))
    }
    dispatch(
        {
            type: ORDER_PRODUCTS_BY_PRICE,
            payload: {
                sort: sort,
                items: sortedProducts
            }
        }
    )
}