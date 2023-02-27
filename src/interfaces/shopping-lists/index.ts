export interface ShoppingListProducts {
  productId: number
  quantity: number
}

export interface shoppingListInterface {
  name: string
  status: string
  products: ShoppingListProducts[]
}

interface ShoppingListUpdatedProducts extends Pick<ShoppingListProducts, 'productId'> {
  completed?: boolean
}

export interface ShoppingListUpdate {
  status: string
  products: ShoppingListUpdatedProducts[]
}
