import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Paginate({
  pages,
  page,
  keyword = "",
  isAdmin = false,
  filterBy = "",
  category_slug = "",
  brand_slug = "",
  minPrice = "",
  maxPrice = "",
}) {
  const getSearchQuery = (pageNumber) => {
    return `?keyword=${keyword}&filter_by=${filterBy}&page=${pageNumber}&category_slug=${category_slug}&brand_slug=${brand_slug}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
  };

  return (
    pages > 1 && (
      <div className="d-flex justify-content-center my-3">
        <Pagination className="custom-pagination">
          {[...Array(pages).keys()].map((x) => (
            <LinkContainer
              key={x + 1}
              to={{
                pathname: !isAdmin ? "/" : "/admin/productlist",
                search: getSearchQuery(x + 1),
              }}
            >
              <Pagination.Item
                active={x + 1 === page}
                className={`page-item ${x + 1 === page ? "active-page" : ""}`}
              >
                {x + 1}
              </Pagination.Item>
            </LinkContainer>
          ))}
        </Pagination>
      </div>
    )
  );
}

export default Paginate;
