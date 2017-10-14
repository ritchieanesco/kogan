import React, {Component} from 'react';
import axios from 'axios';
import ProductList from './ProductList';

const Loader = (props) => {
    return (
        <div>
            <button
            className='load-btn'
            onClick={props.onLoadProduct}
            >Load more products</button>
        </div>
    )
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            api: '/api/products/1'
        }
        this.loadProducts = this.loadProducts.bind(this);
        this.updateAirConditioners = this.updateAirConditioners.bind(this);
    }
    updateAirConditioners ( products ) {
        const cubicweights =  products.filter(product => product.category === 'Air Conditioners')
        .map(product => this.calcCubicAverage(product));
        if (!cubicweights.length) {
            return products;
        }
        const avg = cubicweights.reduce( ( p, c ) => p + c, 0) / cubicweights.length;
        products.forEach(function (product) {
            if (product.category === 'Air Conditioners') {
                product.cubicweight = avg;
            }
        })
        return products;
    }
    loadProducts ( ) {
        axios.get(`http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com${this.state.api}`)
        .then(response => {
            let data = this.state.data ? this.state.data.concat(response.data.objects) : [].concat(response.data.objects)
            data = this.updateAirConditioners(data);
            this.setState({
                data: data,
                api: response.data.next
            })
        })
    }
    calcCubicAverage ( obj ) {
        return (obj.size.width*obj.size.height*obj.size.length) * 250;
    }
    componentDidMount () {
        this.loadProducts();
    }
    render () {
        return (
            <main className='main'>
                <h1>Products</h1>
                {!this.state.data ? <p>LOADING</p> : <ProductList products={this.state.data} />}
                {this.state.api && <Loader onLoadProduct={this.loadProducts} />}
            </main>
        )
    }
}

export default Home;