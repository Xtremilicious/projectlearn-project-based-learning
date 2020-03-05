import React, { Component } from 'react';
import { Items} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        products: [],
        detailItem: [],
        modalOpen: false,
        modalProduct: [],
        search: ''
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        Items.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];

        })
        this.setState(() => {
            return { products: tempProducts }
        })
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailItem: product }
        })
    };
    
    handleSearch = (query) => {
        this.setState(()=> {
            return {
                search: query
            }
        });
    };
    resetSearch = () => {
        this.setState(()=> {
            return {
                search: ''
            }
        });
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        })
    };
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    };


    render() {
        return (
            
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                handleSearch: this.handleSearch,
                resetSearch: this.resetSearch
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };