import React from "react";
import ReactStars from "react-rating-stars-component";
import StarRatings from "react-star-ratings"
import { Link } from "react-router-dom";
const SpecialProduct = ({ product }) => {
  if (!product) return null;
  const {
    title,
    // _id,
    // slug,
    // description,
    price,
    // category,
    brand,
    quantity,
    sold,
    // color,
    // tags,
    totalrating,
    images,
    // ratings,
    // createdAt,
    // updatedAt,
  } = product;
  return (
    <>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img src={images[0]?.url ? images[0]?.url : "images/watch.jpg"} className="img-fluid" alt={title} />
            </div>
            <div className="special-product-content">
              <h5 className="brand">{brand}</h5>
              <h6 className="title">{title}</h6>
              <StarRatings
                rating={Number(totalrating)}
                starRatedColor="#ffd700"
                numberOfStars={5}
                name="rating"
                starSpacing="2px"
                starDimension="15px"
              />
              <p className="price">
                <span className="red-p">${price}</span> &nbsp;{" "}
              </p>
              <div className="discount-till d-flex align-items-center gap-6">
                <p className="mb-0">
                  <b>5 </b>days
                </p>
                <div className="d-flex gap-6 align-items-center">
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Products: {quantity}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={quantity / quantity + sold * 100}
                    aria-valuemin={quantity}
                    style={{ width: quantity / quantity + sold * 100 + "%" }}
                    aria-valuemax={sold + quantity}
                  ></div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
