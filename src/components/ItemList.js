import React, { Component } from 'react';
import Item from './Item';
import {ProductConsumer} from '../Context';


export default class ProductList extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className=''>
                    <div className='container m-0 p-0 mx-auto'>
                        <div className='row m-0 p-0'>
                            <ProductConsumer>
                                {(value)=>{
                                    const {search} = value;
                                    return value.products.slice(0).reverse().filter((product)=>{
                                        return (product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || product.tech.some(techno=>{return techno.toLowerCase().indexOf(search.toLowerCase()) !== -1}) === true);
                                         }).map(product =>{
                                        return <Item key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}