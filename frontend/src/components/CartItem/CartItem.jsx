import React from 'react'

function CartItem(props) {
    return (
        <tr>
            <td class="p-4 px-6 text-center whitespace-nowrap">{props.name}</td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
                <div>
                    <button class="px-2 py-0 shadow">-</button>
                    <input
                        type="text"
                        name="qty"
                        value="2"
                        class="w-12 text-center bg-bg_light outline-none"
                    />
                    <button class="px-2 py-0 shadow">+</button>
                </div>
            </td>
            <td class="p-4 px-6 text-center whitespace-nowrap">{'\u20A8 '}{props.price}</td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
                <button class="px-2 py-0 text-red-100 bg-red-600 rounded">
                    x
                </button>
            </td>
        </tr>
    )
}

export default CartItem