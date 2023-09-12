import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from './Components/Footer'
import { store } from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="app" style={{backgroundColor: 'black'}}>
      <Provider store={store}>
        <Header />
        <Home />
        <Footer/>
      </Provider>
    </div>
  );
}

export default App;
