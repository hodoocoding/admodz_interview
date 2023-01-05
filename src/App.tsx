import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { ProductList } from "components/productList";
import { Sidebar } from "components/sidebar";

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <div className="App">
      <Routes location={background || location}>
        <Route path="/" element={<ProductList />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/product/:id" element={<Sidebar />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
