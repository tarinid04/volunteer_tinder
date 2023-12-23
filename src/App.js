import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import TinderCards from 'react-tinder-card';

function App() {
  return ( 
    <>
    <Header />
    <TinderCards />
    <Footer />
    </>
  );
}

export default App;
