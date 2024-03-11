import StoreProvider from "./store/StoreProvider";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  );
}

export default App;
