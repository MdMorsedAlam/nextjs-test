

const productsDataGet=async()=>{

    const res = await fetch("http://localhost:3000/api/products",{
        method:"GET"});

    return res.json();
}
const ProductsPage=async ()=>{

 
    const products=await productsDataGet();


    return(
        <h1>Products Page : {products.length}</h1>
    )
}

export default ProductsPage;