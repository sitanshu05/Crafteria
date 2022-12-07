import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CartItem from '../../components/CartItem/CartItem'
import Footer from '../../components/Footer/Footer'

function Cart() {

  const getProducts = () => {
    return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  }
  
  const removeProduct = (e, item) => {

   
    let product = getProducts()

    product.pop(item)

    localStorage.setItem("cart", JSON.stringify(product))

    window.location.reload(false)


  }


  const getTotal = () =>{
    let products = getProducts()
    let sum = 0;

    for (let i = 0; i < products.length; i++) {
      sum = sum + products[i].price;
      
    }

    return sum
  }
  const [cart, setCart] = useState(getProducts())


    return (
      <div class="container  mx-auto  bg-bg_dark text-white font-header_font">
        <Navbar />
        <div class="w-full overflow-x-auto pb-[3rem]">
          <div class="my-2">
            <h3 class="text-xl font-bold tracking-wider">Shopping Cart</h3>
          </div>
          <table class="w-full shadow-inner">
            <thead>
              <tr class="bg-bg_light">
                <th class="px-6 py-3 font-bold whitespace-nowrap">Product</th>
                <th class="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
                <th class="px-6 py-3 font-bold whitespace-nowrap">Price</th>
                <th class="px-6 py-3 font-bold whitespace-nowrap">Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                cart?.map((data, key) => {
                  return <CartItem
                    name={data?.title}
                    price={data?.price}
                    removeProduct = {removeProduct}
                  />
                })
              }

              {/* <CartItem
              name="Bracelet"
              price="100"
            />
            <CartItem
              name="Vase"
              price="2000"
            /> */}
              <tr>
                <td class="p-4 px-6 text-center whitespace-nowrap"></td>
                <td class="p-4 px-6 text-center whitespace-nowrap">
                  <div class="font-bold">Total Qty - {cart.length}</div>
                </td>
                <td class="p-4 px-6 font-extrabold text-center whitespace-nowrap">
                  Total - {getTotal()} (include tax)
                </td>
                <td class="p-4 px-6 text-center whitespace-nowrap">
                  <button class="px-4 py-1 text-red-600 bg-red-100">
                    Clear All
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-end mt-4 space-x-2">
            <button
              class="
              px-6
              py-3
              text-sm text-gray-800
              bg-bg_medium
              hover:bg-gray-400
            "
            >
              Cannel
            </button>
            <button
              class="
              px-6
              py-3
              text-sm text-white
             bg-bg_light
            "
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  export default Cart