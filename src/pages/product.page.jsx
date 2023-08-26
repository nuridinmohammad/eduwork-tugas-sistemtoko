import { useEffect, useState } from "react";

import { getCategories, getProducts } from "../apis/product.api";
import CardProductComp from "../components/card-product.comp";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState("");
  const [params, setParams] = useState({
    page: 1,
    sorting: "",
    cat: "",
    search: "",
  });

  useEffect(() => {
    getProducts(params)
      .then((res) => {
        setProducts(res.data.aaData);
      })
      .catch((error) => console.error(error));
    getCategories()
      .then((res) => {
        setCategories(res.data.aaData);
      })
      .catch((error) => console.error(error));
  }, [params]);
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-3 mt-2 d-flex align-items-center gap-3">
          <div>Sorting</div>
          <select
            className="form-select"
            onChange={(e) => {
              setParams({ ...params, sorting: e.target.value });
            }}
            value={params.sorting}
            name="sorting"
            role="button"
          >
            <option value="">-</option>
            <option value="Latest">Latest</option>
            <option value="cheapest">cheapest</option>
            <option value="expensive">expensive</option>
          </select>
        </div>

        <div className="col-md-3 mt-2 d-flex align-items-center gap-3">
          <div>Kategori</div>
          <select
            className="form-select"
            onChange={(e) => {
              setParams({ ...params, cat: e.target.value });
            }}
            value={params.cat}
            name="sorting"
            role="button"
          >
            <option value="">-</option>
            {categories.map((item, i) => (
              <option key={i} value={item.product_category_id}>
                {item.product_category_name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3 mt-2 d-flex align-items-center gap-3">
          <div>Cari </div>
          <input
            className="form-control"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setParams({ ...params, search: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="mt-5 d-flex flex-wrap justify-content-center gap-3">
        {products ? (
          <CardProductComp products={products} />
        ) : (
          <h6 className="text-center">No products found</h6>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
