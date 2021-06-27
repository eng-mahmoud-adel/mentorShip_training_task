import './App.css';
import Header from './components/header/Header';
import Food from './components/food/Food';
import Events from './components/events/Events';
import Order from './components/order/Order';
import Reservation from './components/reservation/Reservation';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <section className="food-section mt-5 mb-4">
        <Food />
      </section>

      <section className="order-section">
        <Order />
      </section>

      <section className="events-section my-3 my-md-5">
        <Events />
      </section>

      <section className="reservation-section">
        <Reservation />
      </section>

      <Footer />
    </div>
  );
}

export default App;
