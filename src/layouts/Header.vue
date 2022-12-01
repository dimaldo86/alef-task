<script setup>
import { useCartStore } from '@/store/store'
import BurgerVue from '@/components/header/Burger.vue'
import SideBarVue from '@/components/header/SideBar.vue';

const menuLinks = [
    {
        id:1,
        name:'постельное белье',
        href:'#'
    },
    {
        id:2,
        name:'одежда для дома',
        href:'#'
    },
    {
        id:3,
        name:'Одежда для улицы',
        href:'#'
    },
    {
        id:4,
        name:'ВЫход',
        href:'#'
    }
]

const cartStore = useCartStore()

</script>

<template>
   <header class="header">
       <div class="container">

            <nav class="header__nav">
                <router-link to="/" class="header__logo">logo</router-link>
                <SideBarVue>
                    <ul class="header__menu">
                    <li
                        class="header__menu-item"
                        v-for="link in menuLinks"
                        :key="link.id"
                    >
                        <a
                            class="header__menu-link"
                            :href="link.href">
                            {{link.name}}
                        </a>
                    </li>
                </ul>
                </SideBarVue>

                <div class="header__icon icon">
                    <div class="header__icon-img">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.45945" cy="4.18919" r="3.68919" stroke="#333333"/>
                            <path d="M0.5 15.3379H15.5" stroke="#333333"/>
                            <path d="M0.5 15.84C0.5 12.4347 4.84699 9.91339 8.21429 10.0023C11.4328 10.0872 15.5 12.4347 15.5 15.84" stroke="#333333"/>
                        </svg>
                    </div>
                    <div class="header__icon-img icon__favorite">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.90002 3.0948C6.69981 -2.52108 -2.59119 1.90389 1.76037 7.60175C6.11193 13.2996 8.40002 15.4908 8.40002 15.4908" stroke="#333333"/>
                            <path d="M7.89415 3.0948C9.09435 -2.52108 18.7304 1.90389 14.3789 7.60175C10.0273 13.2996 7.70001 15.5 7.70001 15.5" stroke="#333333"/>
                            <path d="M7.39099 2.70752L8.4043 2.70757L8.38337 3.24079H7.39099V2.70752Z" fill="#333333"/>
                        </svg>
                        <span class="icon__cart-count" v-if="cartStore.favorite.length">  {{ cartStore.favorite.length }}</span>
                    </div>
                    <div class="header__icon-img icon__cart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25468 10.5659C5.13958 9.11201 6.2884 7.86865 7.74689 7.86865H16.2531C17.7116 7.86865 18.8604 9.11201 18.7453 10.566L18.2203 17.1975C18.1174 18.4977 17.0323 19.5002 15.7281 19.5002H8.27189C6.96769 19.5002 5.88261 18.4977 5.77968 17.1975L5.25468 10.5659Z" stroke="#333333"/>
                            <path d="M7.99999 12.5C7.99999 12.5 7.78329 4 12 4C16.2167 4 16 12.5 16 12.5" stroke="#333333"/>
                        </svg>
                        <span class="icon__cart-count" v-if="cartStore.cart.length">  {{ cartStore.cart.length }}</span>
                    </div>
                </div>
                <BurgerVue></BurgerVue>
            </nav>
       </div>
   </header>
</template>

<style lang="scss">
    .header {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 40px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        background: #fff;

        &__nav {
            width: 100%;
            height: 40px;
            padding: 12px 0;
            display: flex;
            align-items: center;
        }

        &__logo {
           color: var(--black-color);
           font-weight: 700;
           font-size: 22px;
           letter-spacing: var(--letter-spacing);
           text-transform: uppercase;
           transition: var(--transition);
           margin-right: auto;

           &:hover {
               opacity: 0.6;
           }
        }

        &__menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
            width: 100%;
            height: 100%;
            list-style-type: none;
            margin: 0 auto;
            z-index: 999;

            &-item {
                width: 100%;

            }

            &-link {
                display: block;
                width: 100%;
                padding: 15px 0;
                color:var(--secondary-color);
                letter-spacing: var(--letter-spacing);
                text-transform: uppercase;
                font-weight: 500;
                transition: var(--transition);
                cursor: pointer;

                &:hover {
                    transform: translateX(5px);
                }
            }
        }

        &__icon {

            display: flex;
            align-items: center;
            justify-content:flex-start;
            margin-left: auto;

            div {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                margin-right: 32px;
                cursor: pointer;
                transition: var(--transition);

                &:hover {
                    transform: translateX(-2px);
                }

                &:last-child {
                    margin-right: 0;
                }
            }

            .icon__cart, .icon__favorite{
                position: relative;

                &-count {
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    background: #000;
                    border-radius: 50%;
                    color: #fff;
                    font-size: 10px;
                    text-decoration: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    left: -10%;
                    bottom: 0;
                }

            }
        }
    }
    @media(max-width:992px) {
        .header {
            height: 66px;

            &__nav {
                height: 66px;
            }
            &__menu {
                display: flex;
            }

            &__item {
                width: 100%;
            }

            &__icon {
                margin-left: auto;
            }

        }
    }
</style>