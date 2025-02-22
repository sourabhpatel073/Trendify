import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../Components/ProductsPage/Sidebar";
import { getAllProducts, getProducts } from "../Redux/ProductReducer/action";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Navmain from "../Components/HomePage/Navmain";

const ProductPage = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  let { loading, productsData, allData } = useSelector(
    (store) => store.ProductReducer
  );
  let location = useLocation();

  const initialsortdata = searchParams.get("sortingByPrice");

  const [sortingByPrice, setSortingByPrice] = useState(initialsortdata || "");
  const handleGoBack = () => {
    navigate("/");
  };

  const urlPath = location.pathname.split("/");

  // let data = {
  //   params: {
  //     tag: searchParams.getAll("categorytag"),
  //     _sort: searchParams.get("sortingByPrice") && "price",
  //     _order: searchParams.get("sortingByPrice"),
  //     price_gte: searchParams.getAll("sortrange").join("").split("-")[0],
  //     price_lte: searchParams.getAll("sortrange").join("").split("-")[1],
  //     _page: searchParams.get("pageno"),
  //     _limit: 15,
  //     category: category || "men",
  //     brand: searchParams.getAll("brandrange"),
  //   },
  // };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getProducts(data))
  // }, [location.search]);

  return (
    <div>
      {/* <Banner/> */}
      <Navmain />
    </div>
  );
};

export default ProductPage;
