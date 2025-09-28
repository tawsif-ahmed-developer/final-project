import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Layouts from "./components/Layouts"
import ProductDitails from "./pages/ProductDitails"
import Contacts from "./pages/Contacts"
import Cart from "./pages/Cart"

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layouts/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/shop/:id" element={<ProductDitails/>}></Route>
    <Route path="/contact" element={<Contacts/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
  </Route>
))





function App() {

  return (
    <>
      <RouterProvider router={router} ></RouterProvider>
    </>
  )
}

export default App


