// TODO: create a component that displays a single bakery item
function MickeyItem(prop) {
    // TODO: use useState to create a state variable to hold the state of the cart
    /* add your cart state code here */

    const updateCart = prop.updateCart;
    const cart = prop.cart;
    const item = prop.item;
    
    const handleClick = () => {
        console.log(prop.item.name);
        updateCart([...cart, item]);
    }

    
    return (
        <div class ="items">
            <img src={item.image}></img>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p><button onClick={handleClick}>Add to Cart</button>
        </div>
    );
  }
  
export default MickeyItem;