// Assignment 2p
// 1) Show all products by sorting on price (low high)
// 2) Show only those products whose price is greater than 45000, sorted by price (high to low)
// 3) Show all products after increasing their price by 10%.
// 4) Show all products whose name starts with 'a' or 'A'
// 5) Show top 3 most expensive products
// 6) Show all products with price labeled as (Below average or Above average)
// */

function Sortproduct() {

    let products = [
        {
            name: "Mobile",
            price: 60000,
            status: true,
        },
        {
            name: "LED",
            price: 50000,
            status: true,
        },
        {
            name: "Bike",
            price: 40000,
            status: false,
        },

    ];

    let sortProduct = [...products].sort((a, b) => a.price - b.price);
    let productsPrice = products.filter(f => f.price > 45000);
    let productSort = [...productsPrice].sort((a, b) => b.price - a.price);
    let totalSum = products.reduce((a, c) => a + c.price, 0);
    let totalAverage = totalSum / products.length;



    return (
        <>
            <h1>products sorts</h1>
            <br />
            {sortProduct.map((item, index) => (
                <p key={index}>{item.name} - Rs.{item.price}</p>
            ))}
            <hr />
            <br />
            {productSort.map((m, i) => (<p key={i}>{m.name} - Rs. {m.price}</p>))}
            <hr />
            <br />
            {products.map((p, i) => (<p key={i}>{p.name} - Rs. {(p.price * 0.1) + p.price}</p>))};
            <hr />
            <br />
            {products.map((m, i) => (<p key={i}>{m.name}--Rs.{m.price}--{m.price > totalAverage ? " Above average" : " Below average"}</p>))};
            <hr />
        </>

    )

};

export default Sortproduct;