import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from './routes/home';
import Wip from './routes/wip';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <div>
          <App />
          <Home />
          <Footer />
        </div>
      } />
      <Route
        path="*"
        element={
          <div>
            <App />
            <Wip />
            <Footer />
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);