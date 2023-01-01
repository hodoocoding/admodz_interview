import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductAddForm } from "components/productAddForm";
import { ProductList } from "components/productList";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header>아몬즈 인터뷰 프로젝트</header>
        <Routes>
          <Route path="/" element={<ProductAddForm />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
