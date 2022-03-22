import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Landing from "./routes/LandingRoute";
import SearchResult from "./routes/SearchResultRoute";
import PostCheckout from "./routes/PostCheckoutRoute";
import "./App.css";
import { ItunesProvider } from "./store/itunesContext";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <ItunesProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="result" element={<SearchResult />} />
        <Route path="review" element={<PostCheckout />} />
      </Routes>
    </ItunesProvider>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
