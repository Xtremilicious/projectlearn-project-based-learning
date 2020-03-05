import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Item extends Component {
  render() {
    const { id, title, img, tech, extURL } = this.props.product;
    return (
      //       <ItemWrapper className="col-11 mx-auto col-md-6 col-lg-3 my-3">
      //         <div className="card">
      //           <div className="col-4"><ProductConsumer>
      //             {value => (
      //               <div
      //                 className="img-container"
      //                 onClick={() => {
      //                   value.handleDetail(id);
      //                 }}
      //               >

      //                   {this.props.type === "web-dev" ? <img src={`../${img}`} alt={title} className="card-img-top" />:
      //                   <img src={img} alt={title} className="card-img-top" />}

      //               </div>
      //             )}
      //           </ProductConsumer>
      // </div>
      //           <div className="col-8"></div>

      //           <div className="card-body d-flex-row  m-0 p-0">
      //             <div className="title m-2">{title}</div>
      //             <div className="mt-2 mb-2 tech-stack">
      //               {tech.map(techItem => {
      //                 return <div class="badge badge-secondary m-1">{techItem}</div>;
      //               })}
      //             </div>
      //           </div>
      //           <a href={extURL} target="_blank" rel='noreferrer noopener' className="button text-center">
      //           <button className="button">
      //           <FontAwesomeIcon icon={faLaptopCode} /> Learn
      //           </button>
      //           </a>
      //         </div>
      //       </ItemWrapper>
      <ItemWrapper className="col-lg-6 col-11 col-md-6 my-2">
        <a
          href={extURL}
          target="_blank"
          rel="noreferrer noopener"
          style={{ textDecoration: "none", color: "unset", cursor: "pointer" }}
          className="row card-project m-0"
        >
          <div className="col-lg-3 col-md-4 col-4 p-0 ">
            <ProductConsumer>
              {value => (
                <div
                  className="img-container"
                  onClick={() => {
                    value.handleDetail(id);
                  }}
                >
                  {this.props.type === "web-dev" ? (
                    <img
                      src={`../${img}`}
                      alt={title}
                      className="card-img"
                    />
                  ) : (
                    <img src={img} alt={title} className="card-img" />
                  )}
                </div>
              )}
            </ProductConsumer>
          </div>
          <div className="col-lg-9 col-md-8 col-8 p-0">
            <div className="card-content">
              <div className="title m-2">{title}</div>
              <div className="mt-2 mb-2 tech-stack text-left ml-2">
                {tech.map(techItem => {
                  return (
                    <div class="badge badge-secondary m-1">{techItem}</div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* <a
            href={extURL}
            target="_blank"
            rel="noreferrer noopener"
            className="button text-center"
          >
            <button className="button">
              <FontAwesomeIcon icon={faLaptopCode} /> Learn
            </button>
          </a> */}
        </a>
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
  .card-project {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 0.6rem;
  }
  .card-content {
    height: 17vh;
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
    object-fit: cover;
    height: 100%;
  }

  .card-img {
    object-fit: cover;
    min-width: 10vw;
    height: 100%;
    border-radius: 0.6rem 0 0 0.6rem;
  }

  .title {
    font-size: 1.4rem;
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

  @media only screen and (max-width: 600px) {
    .title {
      font-size: 1.2rem;
    }
    .card-content {
      height: fit-content;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1025px) {
    .title {
      font-size: 1.3rem;
    }
    .card-content {
      height: 13vh;
    }
  }
`;
