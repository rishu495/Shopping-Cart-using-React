import React from 'react';

class CartItem extends React.Component{

    constructor(){
        super();    
        this.state={
            title:'Phone',
            price:'9999',
            qty:'1',
            img:''
        }
    }

    increaseQuantity=()=>{
        console.log(this);
    }

    render(){
        const{title,price,qty}=this.state;
        return (
            <div className="cart-item"> 
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize:25 } }> {title} </div>
                    <div style={ {color: '#777' } }> {price} </div>
                    <div style={ {color: '#777' } }> Qty: {qty} </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                            onClick={this.increaseQuantity}/>

                        <img alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992683.svg" 
                            />
                        <img alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;