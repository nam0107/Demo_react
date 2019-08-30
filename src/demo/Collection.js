import React, { Component } from 'react';

const Collection = () => {
    return (
        <div className="site-section">
            <div className="container">
                <div className="row">
                    <div className="title-section text-center col-12">
                        <h2 className="text-uppercase">The Collections</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 block-3 products-wrap">
                        <div className="nonloop-block-3 owl-carousel">
                            <div className="product">
                                <a href="shop-single.html" className="item">
                                    <img src="images/product_1.jpg" alt="Image" className="img-fluid" />
                                    <div className="item-info">
                                        <h3>The Shoe</h3>
                                        <span className="collection d-block">Summer Collection</span>
                                        <strong className="price">$9.50</strong>
                                    </div>
                                </a>
                            </div>
                            <div className="product">
                                <a href="shop-single.html" className="item">
                                    <span className="tag">Sale</span>
                                    <img src="images/product_2.jpg" alt="Image" className="img-fluid" />
                                    <div className="item-info">
                                        <h3>Marc Jacobs Bag</h3>
                                        <span className="collection d-block">Summer Collection</span>
                                        <strong className="price">$9.50 <del>$30.00</del></strong>
                                    </div>
                                </a>
                            </div>
                            <div className="product">
                                <a href="shop-single.html" className="item">
                                    <img src="images/product_3.jpg" alt="Image" className="img-fluid" />
                                    <div className="item-info">
                                        <h3>The Belt</h3>
                                        <span className="collection d-block">Summer Collection</span>
                                        <strong className="price">$9.50</strong>
                                    </div>
                                </a>
                            </div>
                            <div className="product">
                                <a href="shop-single.html" className="item">
                                    <img src="images/product_1.jpg" alt="Image" className="img-fluid" />
                                    <div className="item-info">
                                        <h3>The Shoe</h3>
                                        <span className="collection d-block">Summer Collection</span>
                                        <strong className="price">$9.50</strong>
                                    </div>
                                </a>
                            </div>
                            <div className="product">
                                <a href="shop-single.html" className="item">
                                    <span className="tag">Sale</span>
                                    <img src="images/product_2.jpg" alt="Image" className="img-fluid" />
                                    <div className="item-info">
                                        <h3>Marc Jacobs Bag</h3>
                                        <span className="collection d-block">Summer Collection</span>
                                        <strong className="price">$9.50 <del>$30.00</del></strong>
                                    </div>
                                </a>
                            </div>
                            <div className="product">
                                <a href="shop-single.html" className="item">
                                    <img src="images/product_3.jpg" alt="Image" className="img-fluid" />
                                    <div className="item-info">
                                        <h3>The Belt</h3>
                                        <span className="collection d-block">Summer Collection</span>
                                        <strong className="price">$9.50</strong>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection;