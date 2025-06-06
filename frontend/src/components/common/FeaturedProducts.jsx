import React from 'react'
import FeaturedImg from "../../assets/images/featured/featured-1.jpg";

const FeaturedProducts = () => {
  return (
      <section className="section-2 py-5">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="row mt-3">
            <div className="col-md-3 col-6">
              <div className="product card border-0">
                <div className="card-img">
                  <img src={FeaturedImg} className="w-100" alt="" />
                </div>
                <div className="card-body pt-3">
                  <a href="">Grey Coat for Men</a>
                  <div className="price">$50.00 <span className="text-decoration-line-through">$80.26</span></div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="product card border-0">
                <div className="card-img">
                  <img src={FeaturedImg} className="w-100" alt="" />
                </div>
                <div className="card-body pt-3">
                  <a href="">Grey Coat for Men</a>
                  <div className="price">$50.00 <span className="text-decoration-line-through">$80.26</span></div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="product card border-0">
                <div className="card-img">
                  <img src={FeaturedImg} className="w-100" alt="" />
                </div>
                <div className="card-body pt-3">
                  <a href="">Grey Coat for Men</a>
                  <div className="price">$50.00 <span className="text-decoration-line-through">$80.26</span></div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="product card border-0">
                <div className="card-img">
                  <img src={FeaturedImg} className="w-100" alt="" />
                </div>
                <div className="card-body pt-3">
                  <a href="">Grey Coat for Men</a>
                  <div className="price">$50.00 <span className="text-decoration-line-through">$80.26</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FeaturedProducts