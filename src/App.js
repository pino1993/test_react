import './App.css';
import Product from './Product';

const prodotti= [{
    id:1,
  nome: "10$ amazon + 10P",
  prezzo:50.9,
  img: 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f11902.jpg'

},

{
    id:2,
  nome: "155$ amazon + 80P",
  prezzo:85.7,
  img: 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f14443.jpg'

}];

function App() {
  return (
    <div className="App">
      <section>
          {prodotti.map((prodotto)=>{
              return <Product key={prodotto.id} {...prodotto}/>
          })
          }
     </section>
    </div>
  );
}

export default App;
