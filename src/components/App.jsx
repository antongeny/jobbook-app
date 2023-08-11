import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { setUser } from "../store/userSlice";
import Home from "./Home";
import Companies from "./Companies"
import Login from "./Login";
// import Logout from "./Logout";
// import Navbar from "./mainPage/Navbar";
// import AboutUs from "./AboutUs";
const App = () => {
  //custom hooks:
  const dispatch = useDispatch();

  //selectors:

  //? Login with token
  const { user } = useSelector((state) => state.user);
  // const { cart, quantity } = useSelector((state) => state.cart);

  const loginWithToken = async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const response = await axios.get("/api/auth", {
        headers: {
          authorization: token,
        },
      });
      dispatch(setUser(response.data));
    }
  };

  // const fetchUserCart = async () => {
  //   const userCart = user.id;
  //   const response = await axios.post("/api/carts/usercart", { userCart });
  //   dispatch(setCart(response.data));
  // };

  // const updateCartIcon = (cart) => {
  //   cart.length && dispatch(setQuantity(cart[0].cartQuantity));
  // };

  useEffect(() => {
    loginWithToken();
  }, []);

  //? We could probably repurpose useEffect for current job listings?

  // useEffect(() => {
  //   if (user.id) {
  //     fetchUserCart();
  //   }
  // }, [user]);

  // useEffect(() => {
  //   updateCartIcon(cart);
  // }, [cart]);

  return (
    <div>
      <div>

        {/* <nav>
        <Navbar user={user} quantity={quantity} />
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
          <Route path="/companies" element={<Companies />} />
          {/* <Route
            path="/products/:id"

            element={<SingleProduct cart={cart} quantity={quantity} />}
          />
          <Route
            path="/carts/usercart"
            element={<Cart quantity={quantity} />}
          />
          <Route
            path="/allUsers"
            element={<AllUsers user={user} quantity={quantity} />}
          />
          <Route
            path="/allUsers/:id"
            element={<SingleUser quantity={quantity} />}
          /> */}
          <Route exact path="/*" element={<p>Page Not Found</p>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
