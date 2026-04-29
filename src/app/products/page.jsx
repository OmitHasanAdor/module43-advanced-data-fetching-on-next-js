import Products from "@/components/Products";

const product =async()=>{
// const res= await fetch('http://localhost:5000/products', { cache : 'no-store' })
const res= await fetch('http://localhost:5000/products',{next:{revalidate:5}})
return res.json()
}
const ProductPage = async() => {
    const products = await product();
    return (
        <div>
            <h3>Products : {products.length}</h3>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[90%] mx-auto my-10">
                {
                    products.map(product=> <Products key={product.id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default ProductPage;