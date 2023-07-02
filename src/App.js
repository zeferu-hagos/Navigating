import { Routes, Route } from "react-router-dom";
//import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { OrderSummery } from "./components/OrderSummery";
import { NoMatch } from "./components/NoMatch";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import React from "react";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./components/auth";
import { Login } from "./components/Login";
import { RequiereAuth } from "./components/RequiereAuth";
const LazyAbout = React.lazy(()=>import("./components/About"))
function App() {
  return (
    <AuthProvider>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="about" element={<React.Suspense fallback = "Loading..."><LazyAbout /></React.Suspense>} />
        <Route path="order-summery" element={<OrderSummery />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="products" element={<Products />}>
          <Route index element = {<FeaturedProducts/>}/>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element = {<NewProducts/>}/>
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<RequiereAuth><Profile /></RequiereAuth>} />
        <Route path="login" element = {<Login/>}/>
      </Routes>
      </AuthProvider>
  );
}

export default App;
