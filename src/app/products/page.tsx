import { CardItem } from "./Item";


const productsDataGet=async()=>{

    const res = await fetch("http://localhost:3000/api/products",{
        method:"GET"});

    return res.json();
}
const ProductsPage=async ()=>{

 
    const products=await productsDataGet();


    return(
       <section className="w-full flex justify-center items-center flex-col mt-10">
        <h1>Products Page : {products.length}</h1>

        <div className="flex w-full justify-between items-center" >
        {
    products.map((item:any,index:number)=> <CardItem key={index} item={item}/>)
}
    </div>

       </section>
    )
}

export default ProductsPage;