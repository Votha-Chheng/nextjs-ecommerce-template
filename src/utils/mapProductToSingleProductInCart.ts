import { SingleProductInCart } from "@/@types/cart"
import { Product } from "@/@types/product"

export const mapProductToSingleProductInCart = (product: Product, qty: number, color: string|null): SingleProductInCart => {
  return {
    productId: product._id,
    nom : product.nom,
    category: product.category,
    qty,
    stock: product.stock,
    image : product.images[0],
    prix : product.prix,
    couleur: color ?? "aucune"
  }
}