import { useEffect, useState } from "react";
import api from "../../services/axios";
import { useParams } from "react-router";
import Product from "../Product";
import { Pagination } from "antd";
import "./ProductDetails.css";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { categoryId, categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Start from page 1
  const [totalPages, setTotalPages] = useState(1); // Initialize to 1
  const itemsPerPage = 5;
  const SearchPrams =  useSelector(state => state.filter.filter)

  useEffect(() => {
    api
      .get(`/api/v1/categories/${categoryId}/category_product`, {
        params: {
          page: currentPage,
          per_page: itemsPerPage,
          q: SearchPrams ? SearchPrams.term.search : ''
        },
      })
      .then((response) => {
        setProducts(response.data.data);
        setTotalPages(parseInt(response.data.meta.total_count));
        setCurrentPage(parseInt(response.data.meta.current_page));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId, currentPage, SearchPrams]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mt-5">
      <div className="">
        <h1 className="text-center"> {categoryName}</h1>
      </div>
      <div className="d-flex product-details-container">
        {products.map((product, index) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>

      <div className="text-center">
        <Pagination
          current={currentPage}
          total={totalPages}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
