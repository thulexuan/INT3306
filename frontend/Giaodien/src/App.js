import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Slide from "./component/Slide";
import ServiceHome from "./component/ServiceHome";
import GalleryHome from "./component/GalleryHome";
import OfferBlock from "./component/OfferBlock";
import Review from "./component/Review";
import BlogHome from "./component/BlogHome";
import Blog from "./component/Blog";
import Footer from "./component/Footer";
import Cars from "./component/Cars";
import Store from "./component/Store";
import { Routes, Route } from "react-router-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";
import ThisStore from "./component/ThisStore";
import Warranty from "./component/Warranty";
import News from "./component/News";
import Contact from "./component/Contact";
import Cars1 from "./component/Cars1";
import Admin from "./component/Admin";
import ThisFactory from "./component/ThisFactory";
import ThisWarranty from "./component/ThisWarranty";
import AdminDo from "./component/AdminDo";
import Factories from "./component/Factories";
import Warranty_centers from "./component/Warranty_centers";
import Stores from "./component/Stores";
import Login from "./component/Login/Login";
import FactoryProduct from "./component/FactoryProduct/FactoryProduct";
import FactoryStatistic from "./component/FactoryProduct/FactoryStatistic";
import StoreProduct from "./component/StoreProduct/StoreProduct";
import WarrantyProduct from "./component/WarrantyProduct/WarrantyProduct";
import FactoryFailedProduct from "./component/FactoryProduct/FactoryFailedProduct";
import WarrantyStatisticDone from "./component/WarrantyProduct/WarrantyStatisticDone";
import WarrantyStatisticFailed from "./component/WarrantyProduct/WarrantyStatisticFailed";
import ProductListByFactory from "./component/AdminStatistic/ViewProductByFactory";
import ProductListByStore from "./component/AdminStatistic/ViewProductByStore";
import ProductListByWarranty from "./component/AdminStatistic/ViewProductByWarranty";
import FactoryStatisticByYear from "./component/FactoryProduct/FactoryStatisticByYear";
import StoreStatisticByYear from "./component/StoreProduct/StoreStatisticByYear";
import ViewProductByStatus from "./component/AdminStatistic/ViewProductByStatus";
import AllProducts from "./component/Products";
import Aproducts from "./component/Aproducts";
import ProductLine from "./component/ProductLine";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Slide />
              <ServiceHome />
              <GalleryHome />
              <OfferBlock />
              <Review />
              <BlogHome />
              <Blog />
            </div>
          }
        >

        </Route>
      </Routes>

      <Routes>
        <Route
          path="/cars"
          element={
            <div>
              <Cars />
              <Cars1 />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/store"
          element={
            <div>
              <Store />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/warranty"
          element={
            <div>
              <Warranty />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/news"
          element={
            <div>
              <News />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/contact"
          element={
            <div>
              <Contact />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/admin"
          element={
            <div>
              <Admin />
            </div>
          }
        >
          <Route path="all_products" element={<AllProducts />}></Route>
          <Route path="all_product_lines" element={<ProductLine />}></Route>
          <Route path="factories" element={<Factories />}></Route>
          <Route path="stores" element={<Stores />}></Route>
          <Route path="warranty_centers" element={<Warranty_centers />}></Route>
          <Route path="statisticbyfactory" element={<ProductListByFactory />}></Route>
          <Route path="statisticbystore" element={<ProductListByStore />}></Route>
          <Route path="statisticbywarranty" element={<ProductListByWarranty />}></Route>
          <Route path="statisticbystatus" element={<ViewProductByStatus />}></Route>
        </Route>
      </Routes>

      <Routes>
        <Route
          path="/thisfactory"
          element={
            <div>
              <ThisFactory />
            </div>
          }
        >
          <Route path="view_products" element={<FactoryProduct />}></Route>
          <Route path="view_failed_products" element={<FactoryFailedProduct />}></Route>
          <Route path="statistic_sold_product" element={<FactoryStatisticByYear />}></Route>
          <Route path="statistic_failed_by_productline" element={<FactoryStatistic />}></Route>

        </Route>
      </Routes>

      <Routes>
        <Route
          path="/thisstore"
          element={
            <div>
              <ThisStore />
            </div>
          }
        >
          <Route path="view_products" element={<StoreProduct />}></Route>
          <Route path="statistic_sold_product" element={<StoreStatisticByYear />}></Route>


        </Route>
      </Routes>

      <Routes>
        <Route
          path="/thiswarranty"
          element={
            <div>
              <ThisWarranty />
            </div>
          }
        >
          <Route path="view_products" element={<WarrantyProduct />}></Route>
          <Route path="statistic_done" element={<WarrantyStatisticDone />}></Route>
          <Route path="statistic_failed" element={<WarrantyStatisticFailed />}></Route>

        </Route>
      </Routes>





      <Footer />
    </ >
  );
};

export default App;
