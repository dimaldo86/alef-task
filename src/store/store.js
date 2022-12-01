import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebarStore', {
    state: () => ({
         isNavOpen: false
    }),
    actions: {
        toggleNav() {
            this.isNavOpen = !this.isNavOpen
        }
    },
  })

  export const useCartStore = defineStore('cartStore', {
    state: () => ({
        cart:[],
        favorite:[]
    }),
    actions : {
        addToCart(product,count) {
            const cartIndex = this.cart.findIndex((el) => el.id === product.id);
            if (cartIndex === -1) {
                this.cart.push({ ...product, count });
            }
        },
        addToFavorite(product,count) {
            const cartIndex = this.favorite.findIndex((el) => el.id === product.id);
            if (cartIndex === -1) {
                this.favorite.push({ ...product, count });
            }
        },
    }
  })