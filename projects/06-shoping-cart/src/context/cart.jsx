import { createContext, useState } from 'react'

export const CartContext = createContext()

// eslint-disable-next-line react/prop-types
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addCart = product => {
    const productInCart = cart.findIndex(item => item.id === product.id)

    if (productInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity += 1
      setCart(newCart)
    }

    setCart(prevState => [...prevState, { ...product, quantity: 1 }])
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
