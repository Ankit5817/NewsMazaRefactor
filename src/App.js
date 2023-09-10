import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
