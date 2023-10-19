const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);
root.render(<Tshirt />);

const tshirts = [
  {
    title: "Blue T-Shirt",
    image: "blue-t-shirt.jpg",
    price: 7.99,
    stock: 4,
    quantity: 1,
  },
  {
    title: "Bright Purple T-Shirt",
    image: "bright-purple-t-shirt.jpg",
    price: 5.99,
    stock: 1,
    quantity: 1,
  },
  {
    title: "Cobalt Blue T-Shirt",
    image: "cobalt-blue-t-shirt.jpg",
    price: 9.99,
    stock: 5,
    quantity: 1,
  },
  {
    title: "Green T-Shirt",
    image: "green-t-shirt.jpg",
    price: 6.99,
    stock: 0,
    quantity: 1,
  },
  {
    title: "Grey T-Shirt",
    image: "blue-t-shirt.jpg",
    price: 4.99,
    stock: 2,
    quantity: 1,
  },
  {
    title: "Light Green T-Shirt",
    image: "light-green-t-shirt.jpg",
    price: 7.99,
    stock: 4,
    quantity: 1,
  },
  {
    title: "Purple T-Shirt",
    image: "purple-t-shirt.jpg",
    price: 7.99,
    stock: 0,
    quantity: 1,
  },
  {
    title: "Red T-Shirt",
    image: "red-t-shirt.jpg",
    price: 6.99,
    stock: 3,
    quantity: 1,
  },
  {
    title: "Teal T-Shirt",
    image: "teal-t-shirt.jpg",
    price: 7.99,
    stock: 2,
    quantity: 1,
  },
];

const tshirt = tshirts[0];

const { title, image, price, stock, quantity } = tshirt;

function Header() {
  return <h1>React Tshirt Co.</h1>;
}

function Image() {
  return (
    <img
      className="img-fluid"
      src="images/blue-t-shirt.jpg"
      alt="Blue T-Shirt"
    />
  );
}

function Title(props) {
  return <h2>{props.title}</h2>;
}

function Price({ price }) {
  return (
    <p>
      <strong>
        <em>$ {price}</em>
      </strong>
    </p>
  );
}

function Stock({ stock }) {
  return <p>{stock} left!</p>;
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

function Tshirt({ tshirt }) {
  return (
    <main className="col col-12 col-md-6 col-lg-4 my-3">
      <Header />
      <Image title={tshirt.title} image={tshirt.image} />
      <Title title={tshirt.title} />
      <Price price={tshirt.price} />
      <Stock stock={tshirt.stock} />

      <div className="row">
        <div className="col-4">
          <Buy stock={tshirt.stock} quantity={tshirt.quantity} />
        </div>
      </div>
    </main>
  );
}

function App() {
  const [stock, setStock] = React.useState(tshirt.stock);
  const [quantity, setQuantity] = React.useState(tshirt.quantity);

  stock = { stock };
  quantity = { quantity };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>T-Shirts</h1>
        </div>
      </div>
      <div className="row">
        {tshirts.map((tshirt) => (
          <Tshirt key={tshirt.id} tshirt={tshirt} />
        ))}
      </div>
    </div>
  );
}
