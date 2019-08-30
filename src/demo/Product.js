import React, { Component } from 'react';

const Product = () => {
    return (
        <div className="col-lg-9 order-2 order-lg-1">
            <div className="row align">
                <div className="col-md-12 mb-5">
                    <div className="float-md-left">
                        <h2 className="text-black h5">Shop All</h2>
                    </div>
                    <div className="d-flex">
                        <div className="dropdown mr-1 ml-md-auto">
                            <button type="button" className="btn btn-white btn-sm dropdown-toggle px-4" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Latest
                                        </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                <a className="dropdown-item" href="#">Men</a>
                                <a className="dropdown-item" href="#">Women</a>
                                <a className="dropdown-item" href="#">Children</a>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-white btn-sm dropdown-toggle px-4" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                <a className="dropdown-item" href="#">Relevance</a>
                                <a className="dropdown-item" href="#">Name, A to Z</a>
                                <a className="dropdown-item" href="#">Name, Z to A</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Price, low to high</a>
                                <a className="dropdown-item" href="#">Price, high to low</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="products-wrap border-top-0">
                    <div className="container-fluid">
                        <div className="row no-gutters products">
                            <div className="col-6 col-md-6 col-lg-6 border-top">
                                <a href="shop-single.html" className="item">
                                    <img src="images/product_1.jpg" alt="Image" className="img-fluid" />
                                    <div className="item-info">
                                        <h3>The Shoe</h3>
                                        <span className="collection d-block">Summer Collection</span>
                                        <strong className="price">$9.50</strong>
                                    </div>
                                </a>
                            </div>
                            <div className="col-6 col-md-6 col-lg-6 border-top">
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
                            <div className="col-6 col-md-6 col-lg-6">
                                <a href="shop-single.html" className="item">
                                    <img src="images/product_3.jpg" alt="Image" className="img-fluid" />
                                    <div className="item-info">
                                        <h3>The Belt</h3>
                                        <span className="collection d-block">Summer Collection</span>
                                        <strong className="price">$9.50</strong>
                                    </div>
                                </a>
                            </div>
                            <div className="col-6 col-md-6 col-lg-6">
                                <a href="shop-single.html" className="item">
                                    <img src="images/product_1.jpg" alt="Image" className="img-fluid" />
                                    <div className="item-info">
                                        <h3>The Shoe</h3>
                                        <span className="collection d-block">Summer Collection</span>
                                        <strong className="price">$9.50</strong>
                                    </div>
                                </a>
                            </div>
                            <div className="col-6 col-md-6 col-lg-6">
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
                            <div className="col-6 col-md-6 col-lg-6">
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
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="site-block-27">
                        <ul>
                            <li><a href="#">&lt;</a></li>
                            <li className="active"><span>1</span></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">&gt;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;