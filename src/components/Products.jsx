

const Products = ({ product }) => {
    return (
        <div className="card w-96 bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
                <p className="text-xl font-bold">Available Product : {product.stock}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Products;