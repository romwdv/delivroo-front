import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Car = ({ cart, setCart }) => {
  const fdl = 2.5;
  const total = cart.reduce(
    (acc, curr) => acc + Number(curr.price) * curr.quantity,
    0,
  );

  // Fonctions + / -
  const increment = (id) => {
    setCart(
      cart.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)),
    );
  };

  const decrement = (id) => {
    setCart(
      cart
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0), // filtre si quantity atteint 0
    );
  };

  return (
    <div className="cart">
      <div className="cart-card">
        <button
          className={cart.length > 0 ? "cart-validate" : "cart-empty"}
          disabled={cart.length === 0}
        >
          {" "}
          mon panier
        </button>
        {/* start */}
        {cart.length > 0 ? (
          <div className="cart-items">
            {cart.map((item) => {
              return (
                <div className="items" key={item.id}>
                  <div className="counter">
                    <span onClick={() => decrement(item.id)}>
                      <CiCircleMinus />
                    </span>
                    {item.quantity}
                    <span onClick={() => increment(item.id)}>
                      <CiCirclePlus />
                    </span>
                  </div>
                  <div className="title">{item.title}</div>
                  <div className="price">
                    {(Number(item.price) * item.quantity).toFixed(2)}€
                  </div>
                </div>
              );
            })}
            <div className="sous-totaux">
              <div className="sous-total">
                <span>Sous-total</span>
                <span>{total.toFixed(2)}€</span>
              </div>
              <div className="sous-total">
                <span>Frais de livraison</span>
                <span>{fdl.toFixed(2)}€</span>
              </div>
            </div>
            <div className="totaux">
              <span>Total</span>
              <span>{(total + fdl).toFixed(2)}€</span>
            </div>
          </div>
        ) : (
          <div className="empty">
            <LiaShoppingBagSolid size={80} color={"#969696"} />
            <span>Votre Panier est vide...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Car;
