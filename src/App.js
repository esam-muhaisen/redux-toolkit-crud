import "./App.css";
import Cart from "./Components/Cart";
import Dashboard from "./Components/Dashboard";
import Product from "./Components/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Components/Root";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
