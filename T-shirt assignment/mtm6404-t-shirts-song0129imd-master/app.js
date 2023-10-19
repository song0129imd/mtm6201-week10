// Renders the App component inside the element with the id "root" in the HTML document.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//  t-shirt data
const tshirts = [
  {
    title: "Blue T-Shirt",
    image: "images/blue-t-shirt.jpg",
    price: 7.99,
    stock: 4,
    quantity: 1,
  },
  {
    title: "Bright Purple T-Shirt",
    image: "images/bright-purple-t-shirt.jpg",
    price: 5.99,
    stock: 1,
    quantity: 1,
  },
  {
    title: "Cobalt Blue T-Shirt",
    image: "images/cobalt-blue-t-shirt.jpg",
    price: 9.99,
    stock: 5,
    quantity: 1,
  },
  {
    title: "Green T-Shirt",
    image: "images/green-t-shirt.jpg",
    price: 6.99,
    stock: 0,
    quantity: 1,
  },
  {
    title: "Grey T-Shirt",
    image: "images/blue-t-shirt.jpg",
    price: 4.99,
    stock: 2,
    quantity: 1,
  },
  {
    title: "Light Green T-Shirt",
    image: "images/light-green-t-shirt.jpg",
    price: 7.99,
    stock: 4,
    quantity: 1,
  },
  {
    title: "Purple T-Shirt",
    image: "images/purple-t-shirt.jpg",
    price: 7.99,
    stock: 0,
    quantity: 1,
  },
  {
    title: "Red T-Shirt",
    image: "images/red-t-shirt.jpg",
    price: 6.99,
    stock: 3,
    quantity: 1,
  },
  {
    title: "Teal T-Shirt",
    image: "images/teal-t-shirt.jpg",
    price: 7.99,
    stock: 2,
    quantity: 1,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Tshirtshop />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>React Tshirt Co.</h1>;
    </div>
  );
}

function Buy({ stock, quantity }) {
  return (
    <form>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="0"
          min="1"
          max={stock}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Buy
        </button>
      </div>
    </form>
  );
}

function Tshirtshop() {
  const tshirt = tshirts[0];
  const { stock, quantity } = tshirt;

  return (
    <main className="shop">
      <h2>Our Selection</h2>
      <ul className="tshirts">
        {tshirts.map((tshirt) => (
          <Tshirt tshirtObj={tshirt} key={tshirt.title} />
        ))}
      </ul>
      {/* <Tshirt
        title="Teal T-Shirt"
        photoName="images/teal-t-shirt.jpg"
        price={7.99}
        stock={2}
        quantity={1}
      /> */}
      {/* <div className="row">
        <div className="col-4">
          <Buy stock={tshirt.stock} quantity={tshirt.quantity} />
        </div>
      </div> */}
    </main>
  );
}

// function Tshirt(props) {
//   return (
//     <ul>
//       <img src={props.tshirtObj.image} alt={props.tshirtObj.title} />
//       <h3>{props.tshirtObj.title}</h3>
//       <p>{props.tshirtObj.price}</p>
//       {/* <p>Current stock is {props.tshirtObj.stock}</p> */}
//       {props.tshirtObj.stock > 0 ? (
//         <p>Current stock is {props.tshirtObj.stock}</p>
//       ) : (
//         <p>Out of Stock</p>
//       )}
//       <Buy stock={props.tshirtObj.stock} quantity={props.tshirtObj.quantity} />
//     </ul>
//   );
// }

function Tshirt(props) {
  const { title, image, price, stock, quantity } = props.tshirtObj;
  const [selectedQuantity, setSelectedQuantity] = React.useState(1);
  const [currentStock, setCurrentStock] = React.useState(stock);

  const handleBuyClick = () => {
    if (currentStock >= selectedQuantity) {
      // Decrease the stock by the selected quantity
      setCurrentStock(currentStock - selectedQuantity);
    }
  };

  return (
    <div className="tshirt">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      {currentStock > 0 ? (
        <div>
          <p>Current stock is {currentStock}</p>
          <div className="buy">
            <select
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
            >
              {[...Array(currentStock)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <button
              onClick={handleBuyClick}
              className="btn btn-outline-secondary"
            >
              Buy
            </button>
          </div>
        </div>
      ) : (
        <p>Out of Stock</p>
      )}
    </div>
  );
}
