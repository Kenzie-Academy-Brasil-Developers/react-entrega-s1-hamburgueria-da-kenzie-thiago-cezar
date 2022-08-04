import { SectionSt, LiSt } from "./style";

function Cart({ arrCart, setArrCart }) {
  function remover(item) {
    setArrCart(arrCart.filter((elem) => elem !== item));
  }
  function card(item) {
    return (
      <LiSt key={item.id}>
        <section>
          <img src={item.img} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>{item.category}</p>
          </div>
        </section>
        <button onClick={() => remover(item)}>Remover</button>
      </LiSt>
    );
  }
  return (
    <SectionSt>
      <h2>Carrinho de compras</h2>
      {arrCart.length > 0 ? (
        <>
          <ul>{arrCart.map((elem) => card(elem))}</ul>
          <span>
            <h3>Total</h3>
            <p>R$ {arrCart.reduce((pv, cv) => pv + cv.price, 0).toFixed(2)}</p>
          </span>
          <button onClick={() => setArrCart([])}>Remover todos</button>
        </>
      ) : (
        <div>
          <h3>Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </div>
      )}
    </SectionSt>
  );
}

export default Cart;
