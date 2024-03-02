const cart = [];

const handleCart = (state=cart, action) =>{
    const product = action.payload
    switch(action.type){
        case "ADDITEM":
            // Check if product already in cart
            const exist = state.find((x) => x.id === product.id)
            if(exist){
                // Increase the quantity
                state = state.map((x)=>x.id ===product.id?{...x, qty: x.qty+1}:x)
            }
            else{
                state = [...state, {...product, qty:1}]
            }
            return state;
        case "DELITEM":
            const exist2 = state.find((x) => x.id === product.id)
            if(exist2.qty === 1){
                state = state.filter((x)=>x.id!==exist2.id)
            }
            else{
                state = state.map((x)=> x.id===product.id?{...x, qty:x.qty-1}:x)
            }
            return state;

        default:
            return state;
    }
}

export default handleCart