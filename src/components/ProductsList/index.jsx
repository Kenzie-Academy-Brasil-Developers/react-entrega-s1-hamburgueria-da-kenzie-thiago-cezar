import { useState, useEffect } from "react";
import Cart from "../Cart";
import Top from "../Header";
import { UlSt, LiSt, MainSt } from "./style";

function Ul() {
  const [arrDados, setArrDados] = useState([]);
  const [search, setSearch] = useState(arrDados);
  const [arrCart, setArrCart] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setArrDados(response);
        setSearch(response);
      })
      .catch((err) => console.log(err));
  }, []);

  function Card(item) {
    function console(item) {
      setArrCart([...arrCart, item]);
    }

    return (
      <LiSt key={item.id}>
        <img src={item.img} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <h4>R$ {item.price.toFixed(2)}</h4>
          <button
            onClick={() =>
              arrCart.some((elem) => elem === item) ? null : console(item)
            }
          >
            Adicionar
          </button>
        </div>
      </LiSt>
    );
  }

  return (
    <>
      <Top setSearch={setSearch} search={search} arrDados={arrDados} />
      <MainSt>
        <UlSt>{search.map((elem) => Card(elem))}</UlSt>
        <Cart arrCart={arrCart} setArrCart={setArrCart} />
      </MainSt>
    </>
  );
}

export default Ul;
