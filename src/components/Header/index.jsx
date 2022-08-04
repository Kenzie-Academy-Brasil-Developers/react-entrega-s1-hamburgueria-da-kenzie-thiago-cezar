import logo from "../../img/logo.svg";
import { Header } from "./headerCss";

function Top({ setSearch, arrDados }) {
  function busca(event) {
    const value = event.target.value.toLowerCase();
    setSearch(
      arrDados.filter(
        (elem) =>
          elem.name.toLowerCase().includes(value) ||
          elem.category.toLowerCase().includes(value)
      )
    );
  }

  return (
    <Header>
      <img src={logo} alt="logo" />
      <form>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(event) => busca(event)}
        />
        <button>Pesquisar</button>
      </form>
    </Header>
  );
}

export default Top;
