import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default class Item extends Component {
  render() {
    const { id, title, img, tech, extURL } = this.props.product;
    return (
      <ItemWrapper className="col-11 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container"
                onClick={() => {
                  value.handleDetail(id);
                }}
              >
              
                  {this.props.type === "web-dev" ? <img src={`../${img}`} alt={title} className="card-img-top" />: 
                  <img src={img} alt={title} className="card-img-top" />}
               
              </div>
            )}
          </ProductConsumer>

          <div className="card-body d-flex-row  m-0 p-0">
            <div className="title m-2">{title}</div>
            <div className="mt-2 mb-2 tech-stack">
              {tech.map(techItem => {
                return <div class="badge badge-secondary m-1">{techItem}</div>;
              })}
            </div>
          </div>
          <a href={extURL} target="_blank" rel='noreferrer noopener' className="button text-center">
          <button className="button">
          <FontAwesomeIcon icon={faLaptopCode} /> Learn
          </button>
          </a>
        </div>
      </ItemWrapper>
    );
  }
}

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ItemWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.7s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      transform: scale(1.05);
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }

  .title {
    font-size: 1.5rem;
    line-height: normal;
    margin-bottom: 0.5rem;
  }
  .button {
    justify-content: flex-end;
    font-size: 1.35rem;
    background: #0f9d58;
    color: white;
    outline: none;
    border: none;
    padding: 0.2rem;
    border-radius: 0 0 0.2rem 0.2rem;
  }
  .badge {
    font-size: 0.85rem;
  }
  .tech-stack {
    text-align: center;
  }
`;
