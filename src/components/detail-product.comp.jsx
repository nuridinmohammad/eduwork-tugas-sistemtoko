import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetail, getVarian } from "../apis/product.api";
import { formatRupiah } from "../utils";

const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const [varian, setVarian] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getDetail(id)
      .then((res) => setProduct(res.data))
      .catch((e) => console.error(e));
    getVarian(id)
      .then((res) => setVarian(res.data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="row">
      <div className="col-md">
        <div className="mt-3">
          <div className="card">
            <div className="card-header text-center">Product Detail</div>
            <div className="card-body">
              <p className="card-text">{product.product_name}</p>
              <p className="card-text">
                before discount :
                {formatRupiah(product.product_price_before_discount)}
              </p>
              <p className="card-text">
                buy price :{formatRupiah(product.product_buy_price)}
              </p>
              <p className="card-text">{formatRupiah(product.product_price)}</p>

              <p className="card-text">
                product weight :{product.product_weight}
              </p>

              <p className="card-text">
                quantity stock:{product.product_qty_stock}
              </p>

              <p className="card-text">{product.product_description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md">
        <div className="mt-3">
          <div className="card">
            <div className="card-header text-center">Product Varian</div>
            {varian.map((item) => (
              <div key={item.id}>
                <div className="card-body">
                  <span >
                    Varian : <span className="text-uppercase fw-bold">{item.varian_keyword_value}</span>
                  </span>
                  <p className="card-text">{item.product_name}</p>
                  <p className="card-text">
                    before discount :
                    {formatRupiah(item.product_price_before_discount)}
                  </p>
                  <p className="card-text">
                    buy price :{formatRupiah(item.product_buy_price)}
                  </p>
                  <p className="card-text">
                    {formatRupiah(item.product_price)}
                  </p>
                  <p className="card-text">
                    product weight :{item.product_weight}
                  </p>
                  <p className="card-text">
                    quantity stock:{item.product_qty_stock}
                  </p>
                  <p className="card-text">{item.product_description}</p>
                </div>
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
