export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || []

const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

function updateCartInLocalStorage (cart) {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { payloadAction } = action
    const { id } = payloadAction
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {
      const newState = structuredClone(state)
      newState[productInCartIndex].quantity += 1
      updateCartInLocalStorage(newState)
      return newState
    }

    const newState = [...state, { ...payloadAction, quantity: 1 }]
    updateCartInLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { payloadAction } = action
    const { id } = payloadAction
    const newState = state.filter(item => item.id !== id)
    updateCartInLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateCartInLocalStorage([])
    return []
  }
}

export const cartReducer = (state, action) => {
  const { type: actionType } = action

  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
