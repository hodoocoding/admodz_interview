import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductAddForm } from "components/productAddForm";
import { ProductList } from "components/productList";
import { Header } from "components/header";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductAddForm />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
