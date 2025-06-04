import React from "react";
import Layout from "./common/Layout";
import ProductImg from "../assets/images/products/product-1.jpg";

const Shop = () => {
  return (
    <Layout>
      <div className="container">
        <nav aria-label="breadcrumb" className="py-4">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Shop
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-3">
            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3 className="mb-3">Categories</h3>
                <ul>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Kids
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Mens
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Womens
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3 className="mb-3">Brands</h3>
                <ul>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Gucci
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Chanel
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Prada
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Puma
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Nike
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row pb-5">
            <div className="col-md-4 col-6">
              <div className="product card border-0">
                <div className="card-img">
                  <img src={ProductImg} className="w-100" alt="" />
                </div>
                <div className="card-body pt-3">
                  <a href="">Grey Coat for Men</a>
                  <div className="price">
                    $50.00{" "}
                    <span className="text-decoration-line-through">$80.26</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="product card border-0">
                <div className="card-img">
                  <img src={ProductImg} className="w-100" alt="" />
                </div>
                <div className="card-body pt-3">
                  <a href="">Grey Coat for Men</a>
                  <div className="price">
                    $50.00{" "}
                    <span className="text-decoration-line-through">$80.26</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="product card border-0">
                <div className="card-img">
                  <img src={ProductImg} className="w-100" alt="" />
                </div>
                <div className="card-body pt-3">
                  <a href="">Grey Coat for Men</a>
                  <div className="price">
                    $50.00{" "}
                    <span className="text-decoration-line-through">$80.26</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="product card border-0">
                <div className="card-img">
                  <img src={ProductImg} className="w-100" alt="" />
                </div>
                <div className="card-body pt-3">
                  <a href="">Grey Coat for Men</a>
                  <div className="price">
                    $50.00{" "}
                    <span className="text-decoration-line-through">$80.26</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="product card border-0">
                <div className="card-img">
                  <img src={ProductImg} className="w-100" alt="" />
                </div>
                <div className="card-body pt-3">
                  <a href="">Grey Coat for Men</a>
                  <div className="price">
                    $50.00{" "}
                    <span className="text-decoration-line-through">$80.26</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
