import Banner from "./Banner";
import logo from "../assets/logo.png";
// import Cart from './Cart'
import ShoppingList from "./ShoppingList";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputValue = formData.get('my_input');
    console.log('Formulaire soumis avec:', inputValue);
    // Traitez les données du formulaire ici
  };

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      {/* <Cart /> */}
      <ShoppingList />

      <form onSubmit={handleSubmit}>
        <input type='text' name='my_input' defaultValue='Tapez votre texte' />
        <button type='submit'>Entrer</button>
      </form>
    </div>
  );
}

export default App;
