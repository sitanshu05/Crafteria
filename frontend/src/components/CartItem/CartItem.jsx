import React,{useState} from 'react'

function CartItem(props) {

    const[quantity,setQuantity] = useState(1)

    

    const Minus = () =>{
        
        if(quantity==0){
            return
        }else{
            let value = quantity -1;
            setQuantity(value)
        }
    }

    const Plus = () =>{
        
            let value = quantity + 1;
            setQuantity(value)
    }


    return (
        <tr>
            <td class="p-4 px-6 text-center whitespace-nowrap">{props.name}</td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
                <div>
                    <input
                        type="text"
                        name="qty"
                        value={quantity}
                        class="w-12 text-center bg-bg_light outline-none"
                    />
                </div>
            </td>
            <td class="p-4 px-6 text-center whitespace-nowrap">{'\u20A8 '}{props.price}</td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
                <button class="px-2 py-0 text-red-100 bg-red-600 rounded " onClick={props.removeProduct}>
                    x
                </button>
            </td>
        </tr>
    )
}

export default CartItem