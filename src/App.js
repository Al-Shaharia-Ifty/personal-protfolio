import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </div>
  );
}

export default App;
