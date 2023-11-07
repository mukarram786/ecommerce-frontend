import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/axios";
import {showSuccessNotification, showErrorNotification} from '../../Notification/Notification'

function CategoriesDropdown(loggedUser) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
      .get("api/v1/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        // showErrorNotification(error.response.data.error);
      });
  }, [loggedUser]);

  return (
    <>
      <li className="nav-item dropdown navbar-dropdown">
        <a
          className="nav-link dropdown-toggle text-white"
          href="#"
          id="productsDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </a>
        <ul className="dropdown-menu" aria-labelledby="productsDropdown">
          {categories.map((category, index) => {
          const categoryUrl = `/products/${category.id}/${category.name}`;

            return (
              <li key={index} className="dropdown-link">
                <Link to={categoryUrl} className="dropdown-item">
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    </>
  );
}

export default CategoriesDropdown;
