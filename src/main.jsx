import ReactDOM from "react-dom/client";
import "@/assets/css/reset.scss";
import App from "@/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.Suspense callback={<div>Loading</div>}>

  // </React.Suspense>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
