import React, { Component } from "react";
import Item from "./Item";
import '../App.css';
import { ProductConsumer } from "../Context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="index">
          <div className="container m-0 p-0 mx-auto">
            <div className="row m-0 p-0 d-flex justify-content-center">
              <ProductConsumer>
                {value => {
                  if (this.props.type === "web-dev") {
                    return value.products
                      .filter(item => {
                        return (
                          item.tech.some(techno => {
                            return (
                              (techno.indexOf("HTML") !== -1 ||
                                techno.indexOf("Node") !== -1 ||
                                techno.indexOf("React") !== -1 ||
                                techno.indexOf("JavaScript") !== -1) === true
                            );
                          }) === true
                        );
                      })
                      .map(item => {
                        return (
                          <Item key={item.id} product={item} type="web-dev" />
                        );
                      });
                      
                  } 
                  else if (this.props.type === "programming") {
                    return value.products
                      .filter(item => {
                        return (
                          item.tech.some(techno => {
                            return (
                              (techno.indexOf("NodeJS") !== -1 ||
                                techno.indexOf("JavaScript") !== -1 ||
                                techno.indexOf("Python") !== -1 ||
                                techno.indexOf("C++") !== -1||
                                techno.indexOf("C#") !== -1||
                                techno.indexOf("Java") !== -1) === true
                            );
                          }) === true
                        );
                      })
                      .map(item => {
                        return (
                          <Item key={item.id} product={item} type="web-dev" />
                        );
                      });
                      
                  } 
                  else if (this.props.type === "design") {
                    return value.products
                      .filter(item => {
                        return (
                          item.tech.some(techno => {
                            return (
                              (techno.indexOf("CSS") !== -1) === true
                            );
                          }) === true
                        );
                      })
                      .map(item => {
                        return (
                          <Item key={item.id} product={item} type="web-dev" />
                        );
                      });
                      
                  } 
                  else {
                    const { search } = value;
                    return value.products
                      .slice(0)
                      .reverse()
                      .filter(product => {
                        return (
                          product.title
                            .toLowerCase()
                            .indexOf(search.toLowerCase()) !== -1 ||
                          product.tech.some(techno => {
                            return (
                              techno
                                .toLowerCase()
                                .indexOf(search.toLowerCase()) !== -1
                            );
                          }) === true
                        );
                      })
                      .map(product => {
                        return <Item key={product.id} product={product} />;
                      });
                  }
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
