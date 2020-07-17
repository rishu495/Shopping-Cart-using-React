import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component{  

  constructor(){
    super();    
    this.state={
        products: [
            {
                title:'Phone',
                price:9999,
                qty:1,
                img:'https://images-na.ssl-images-amazon.com/images/I/41hJFa-AiPL.jpg',
                id:1
            },
            {
                title:'Watch',
                price:999,
                qty:1,
                img:'https://images-na.ssl-images-amazon.com/images/I/71vKyimxsiL._UX342_.jpg',
                id:2
            },
            {
                title:'Laptop',
                price:63000,
                qty:1,
                img:'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oYjc?ver=a28c',
                id:3    
            }
        ]
    }
  }
  
  handleIncreaseQuantity=(product)=>{
    const { products }= this.state;
    const index= products.indexOf(product);
    products[index].qty+=1;
  
    this.setState({
        products: products
    })
  }
  
  handleDecreaseQuantity=(product)=>{
    const { products }= this.state;
    const index= products.indexOf(product);
    if(products[index].qty===0){
        return ;
    }
    products[index].qty-=1;
  
    this.setState({
        products: products
    })
  }
  
  handleDeleteProduct=(id)=>{
    const { products }=this.state;
    const items=products.filter((item)=>item.id!==id);
    this.setState({
        products:items
    })
  }
  
  getCartCount=()=>{
    const{ products }= this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })

    return count;
  }


  getCartTotal=()=>{
    const{ products }=this.state;
    let cartTotal=0;
    
    products.map((product)=>{
      cartTotal=cartTotal+(product.qty*product.price);
    })
    return cartTotal;
  }

  render(){
    const { products }= this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products={ products }
          onIncreaseQuantity={ this.handleIncreaseQuantity }
          onDecreaseQuantity={ this.handleDecreaseQuantity }
          onDeleteProduct={ this.handleDeleteProduct }
        />
        <div style={{ padding:10, fontSize:20 }}>TOTAL:{this.getCartTotal()}</div>
      </div>
      
    );
  }
  
}

export default App;
