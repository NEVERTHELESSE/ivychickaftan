import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Header from "./component/header/Header";
import { createContext, lazy, Suspense, useState } from "react";
import HomeLoading from "./home/HomeLoading";
const Home = lazy(() => import("./home/Home"));
const Shop = lazy(() => import("./shop/Shop"));
const Admin = lazy(() => import("./admin/Admin"));
const Payment = lazy(() => import("./payment/Payment"));
const SpecificProduct = lazy(() => import("./product/SpecificProduct"));
const ProtectedRoute = lazy(() => import("./protected/ProtectedRoute"));
const MyDashboard = lazy(() => import("./myDashboard/MyDashboard"));
const MyShop = lazy(() => import("./myshop/MyShop"));
const TrackingOrder = lazy(() => import("./trackingOrder/TrackingOrder"));
const ScrollToTop = lazy(() => import("./component/scrollToTop/ScrollToTop"));
const Contact = lazy(() => import("./component/contact/Contact"));
const ContinueWithPayment = lazy(
  () => import("./continueWithPayment/ContinueWithPayment")
);
const About = lazy(() => import("./about/About"));
const Faq = lazy(() => import("./faq/Faq"));
const ContactUs = lazy(() => import("./contact/ContactUs"));
const Privacy = lazy(() => import("./privacy/Privacy&Policy"));
const Wishlist = lazy(() => import("./wishlist/Wishlist"));
const NotFound = lazy(() => import("./not-found/NotFound"));
const CreateAccount = lazy(() => import("./createAccount/CreateAccount"));
const Login = lazy(() => import("./login/Login"));
const Category = lazy(() => import("./category/Category"));
const Footer = lazy(() => import("./component/footer/Footer"));
const Search = lazy(() => import("./search/Search"));

export const cartContext = createContext(undefined);

function App() {
  const [favourite, setFavourite] = useState(0);
  const [currency, setCurrency] = useState("$");
  const [price, setPrice] = useState(0);
  const api = "http://localhost:9000/api/";

  const [addProduct, setAddProduct] = useState([]);
  const [user, setUser] = useState({
    email: localStorage.getItem("user"),
    username: localStorage.getItem("username"),
    profileUrl: localStorage.getItem("profileUrl"),
  });

  return (
    <BrowserRouter>
      <Provider store={store}>
        <SnackbarProvider>
          <cartContext.Provider
            value={{
              user,
              addProduct,
              setAddProduct,
              price,
              setPrice,
              favourite,
              setFavourite,
              api,
              currency,
              setCurrency,
            }}
          >
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<HomeLoading />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="/shops"
                element={
                  <Suspense fallback="loading">
                    <Shop />
                  </Suspense>
                }
              />
              <Route
                path="/my-dashboard"
                element={
                  <Suspense fallback="loading">
                    <MyDashboard />
                  </Suspense>
                }
              />
              <Route
                path="/my-shop"
                element={
                  <Suspense fallback="loading">
                    <MyShop />
                  </Suspense>
                }
              />
              <Route
                path="/tracking-order"
                element={
                  <Suspense fallback="loading">
                    <TrackingOrder />
                  </Suspense>
                }
              />
              <Route
                path="/about-us"
                element={
                  <Suspense fallback="loading">
                    <About />
                  </Suspense>
                }
              />
              <Route
                path="/faq"
                element={
                  <Suspense fallback="loading">
                    <Faq />
                  </Suspense>
                }
              />
              <Route
                path="/Privacy&Policy"
                element={
                  <Suspense fallback="loading">
                    <Privacy />
                  </Suspense>
                }
              />
              <Route
                path="/contact-us"
                element={
                  <Suspense fallback="loading">
                    <ContactUs />
                  </Suspense>
                }
              />
              <Route
                path="/wishlist"
                element={
                  <Suspense fallback="loading">
                    <Wishlist />
                  </Suspense>
                }
              />
              <Route
                path="/cloth/:id"
                element={
                  <Suspense fallback="loading">
                    <SpecificProduct />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback="loading">
                    <NotFound />
                  </Suspense>
                }
              />
              <Route
                path="register"
                element={
                  <Suspense fallback="loading">
                    <CreateAccount />
                  </Suspense>
                }
              />
              .
              <Route
                path="login"
                element={
                  <Suspense fallback="loading">
                    <Login />
                  </Suspense>
                }
              />
              <Route
                path="search"
                element={
                  <Suspense fallback="loading">
                    <Search />
                  </Suspense>
                }
              />
              <Route
                path="/continuewithpayment"
                element={
                  <Suspense fallback="loading">
                    <ContinueWithPayment />
                  </Suspense>
                }
              />
              <Route
                path="/category"
                element={
                  <Suspense fallback="loading">
                    <Category />
                  </Suspense>
                }
              />
              <Route
                path="/payment"
                element={
                  <Suspense fallback="loading">
                    <Payment />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback="loading">
                    <ProtectedRoute />
                  </Suspense>
                }
              >
                <Route
                  path="/admin"
                  element={
                    <Suspense fallback="loading">
                      <Admin />
                    </Suspense>
                  }
                />
              </Route>
            </Routes>
            <Suspense fallback="loading">
              <Contact />
              <ScrollToTop />
              <Footer />
            </Suspense>
          </cartContext.Provider>
        </SnackbarProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
