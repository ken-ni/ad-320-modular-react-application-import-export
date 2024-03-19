import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ContentA } from './components/ContentA';
import { ContentB } from './components/ContentB';

function App() {
  return (
    <div>
      <Header></Header>
      <ContentA></ContentA>
      <ContentB></ContentB>
      <Footer></Footer>
    </div>
  );
}

export default App;
