<script setup>
import { useCartStore } from '@/store/store'
import { ref } from 'vue'

const product =  {
      "id": "1",
      "title": "Пижама для девочек",
      "article": "02765/46",
      "reviews": "14",
      "currentPrice": "800",
      "oldPrice": "1500",
      images : [
    {
        id:1,
        name:'detail-img-1',
        src:require('@/assets/img/home/detail/detail-img-1.png')
    },
    {
        id:2,
        name:'detail-img-2',
        src:require('@/assets/img/home/detail/detail-img-2.png')
    },
    {
        id:3,
        name:'detail-img-3',
        src:require('@/assets/img/home/detail/detail-img-3.png')
    },
    {
        id:4,
        name:'detail-img-4',
        src:require('@/assets/img/home/detail/detail-img-4.png')
    },
    {
        id:5,
        name:'detail-img-5',
        src:require('@/assets/img/home/detail/detail-img-5.png')
    },
    ],

}

const { images } = product
const paths = images.map(item => item.src)
const currentImg = ref(0)

const nextImg = (i) => {
    currentImg.value = i
}

const quantity = ref(1)

const changeQuantity = (type) => {
    if (type === 'minus') {
        quantity.value === 1 ? (quantity.value = 1) : quantity.value--
    }
    if (type === 'plus') {
        quantity.value === 30 ? (quantity.value = 30) : quantity.value++
    }
}

const message = ref(false)
const cartStore = useCartStore()
let timer

const addToCart = (product, quantity) => {
    cartStore.addToCart(product,quantity)
    message.value = `<b>"${product.title}"</b> в количестве <b>${quantity}</b> шт. добавлен в корзину`
    clearTimeout(timer)
    timer = setTimeout(() => {
        message.value = ''
    }, 3000)
}

const addToFavorite = (product, quantity) => {
    cartStore.addToFavorite(product,quantity)
    message.value = `<b>"${product.title}"</b> в количестве <b>${quantity}</b> шт. добавлен в избранное`
    clearTimeout(timer)
    timer = setTimeout(() => {
        message.value = ''
    }, 3000)
}

</script>

<template>
    <section class="detail">
            <div class="detail__wrap">
                <div class="detail__img">
                    <img :src="product.images[currentImg].src" alt="Detail">
                    <div class="detail__img-small">
                        <div
                            class="detail__img-wrap"
                            v-for="(item, i) in images"
                            :key="item.id"
                            @click="nextImg(i)"
                        >
                            <img
                                :src="item.src"
                                :alt="item.name"
                            >
                        </div>
                </div>
                </div>

                <div class="detail__info" :="product">
                    <h3 class="detail__title">{{ product.title }}</h3>
                    <div class="detail__part">Арт. {{ product.article }}</div>
                    <div class="detail__feedback">
                        <span>Отзывы</span>
                        <span class="detail__feedback-star">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.635L8.09 9.5L7.27 5.985L10 3.62L6.405 3.315L5 0L3.595 3.315L0 3.62L2.73 5.985L1.91 9.5L5 7.635Z" fill="#333333"/>
                            </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.635L8.09 9.5L7.27 5.985L10 3.62L6.405 3.315L5 0L3.595 3.315L0 3.62L2.73 5.985L1.91 9.5L5 7.635Z" fill="#333333"/>
                            </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.635L8.09 9.5L7.27 5.985L10 3.62L6.405 3.315L5 0L3.595 3.315L0 3.62L2.73 5.985L1.91 9.5L5 7.635Z" fill="#333333"/>
                            </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.635L8.09 9.5L7.27 5.985L10 3.62L6.405 3.315L5 0L3.595 3.315L0 3.62L2.73 5.985L1.91 9.5L5 7.635Z" fill="#333333"/>
                            </svg>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_5140)">
                                <path d="M6 3.565L6.485 4.71L6.72 5.265L7.32 5.315L8.555 5.42L7.615 6.235L7.16 6.63L7.295 7.22L7.575 8.425L6.515 7.785L6 7.465L5.485 7.775L4.425 8.415L4.705 7.21L4.84 6.62L4.385 6.225L3.445 5.41L4.68 5.305L5.28 5.255L5.515 4.7L6 3.565ZM6 1L4.595 4.315L1 4.62L3.73 6.985L2.91 10.5L6 8.635L9.09 10.5L8.27 6.985L11 4.62L7.405 4.315L6 1Z" fill="#333333"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_5140">
                                <rect width="12" height="12" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span>{{product.reviews}} отзывов</span>
                        <span>
                            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9 8L1 14.5" stroke="#333333"/>
                            </svg>
                        </span>
                    </div>
                    <div class="detail__price">
                        <span class="detail__price-new">{{ product.currentPrice }} ₽</span>
                        <span class="detail__price-old">{{ product.oldPrice }} ₽</span>
                        <span>
                            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9 8L1 14.5" stroke="#333333"/>
                            </svg>
                        </span>
                    </div>
                    <div class="detail__discount">
                        <span>скидка -36%</span>
                        <span>акция -20%</span>
                    </div>
                    <div class="detail__size">
                        <select name="size" id="size">
                            <option class="detail__size-default" >Выбрать размер</option>
                            <option value="22">22</option>
                            <option value="24">24</option>
                            <option value="26">26</option>
                        </select>
                    </div>
                    <div class="detail__determine">Определить размер</div>
                    <div class="detail__cart">
                        <div class="detail__wrapper">
                            <div class="detail__cart-count">
                                <span class="detail__cart-plus" @click="changeQuantity('plus')">+</span>
                                <span>{{ quantity }}</span>
                                <span class="detail__cart-minus" @click="changeQuantity('minus')">-</span>
                            </div>
                            <div class="detail__cart-right" >
                                <button class="detail__cart-btn" @click="addToCart(product, quantity)">Добавить в корзину</button>
                                <button class="detail__cart-favorite" @click="addToFavorite(product,quantity)">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.90002 3.0948C6.69981 -2.52108 -2.59119 1.90389 1.76037 7.60175C6.11193 13.2996 8.40002 15.4908 8.40002 15.4908" stroke="#FFFFFF"/>
                                        <path d="M7.89415 3.0948C9.09435 -2.52108 18.7304 1.90389 14.3789 7.60175C10.0273 13.2996 7.70001 15.5 7.70001 15.5" stroke="#FFFFFF"/>
                                        <path d="M7.39099 2.70752L8.4043 2.70757L8.38337 3.24079H7.39099V2.70752Z" fill="#FFFFFF"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="detail__message message">
                            <transition name="message">
                                <div class="message__info" v-if="message" v-html="message" />
                            </transition>
                        </div>
                    </div>
                    <div class="detail__sale">Купить в 1 клик</div>
                    <div class="detail__footer">
                        <div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="7" stroke="#333333"/>
                                <path d="M4 6C4.24928 6 6.75787 4.5 6.75787 4.5H8.00429H9.25071C9.25071 4.5 11.7507 6 12 6" stroke="#333333"/>
                                <path d="M4.01577 5.39283L4.01576 7.17806L5.76075 7.4756L5.76075 11.9386" stroke="#333333"/>
                                <path d="M11.9842 5.39283L11.9842 7.17806L10.2393 7.4756L10.2478 11.9386" stroke="#333333"/>
                                <line x1="5.51145" y1="11.4385" x2="10.4971" y2="11.4385" stroke="#333333"/>
                                <path d="M6.50859 4.5C6.50859 4.5 7.00716 6.28522 8.00429 6.28522C9.00142 6.28522 9.49999 4.5 9.49999 4.5" stroke="#333333"/>
                            </svg>
                            <span>Описание товара</span>
                        </div>
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="9" r="7" fill="white" stroke="#333333"/>
                                <path d="M8.55453 4.5L8.55453 9.70613L12.5 12" stroke="#333333"/>
                            </svg>
                            <span>Доставка и возврат</span>
                        </div>
                        <div>
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="13" height="9" rx="0.5" stroke="#333333"/>
                                <rect x="1" y="3" width="12" height="2" fill="#333333"/>
                            </svg>
                            <span>Способы оплаты</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail__more">
                <a>Посмотреть все стили</a>
            </div>
    </section>
</template>

<style lang="scss" scoped>
.detail {
    padding: 24px 0 20px;
    height: 963px;

    &__wrap {
        display: flex;
        justify-content: space-between;
        column-gap: 20px;
        width: 100%;
        height: 100%;
        max-width:1410px;
        padding: 0 10px;
        margin: 0 auto;
    }

    &__img {
        width: 50%;
        height: 100%;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit:cover;
            object-position: center center;
        }

        &-small {
            position: absolute;

            top: 24px;
            left: 24px;
            cursor: pointer;

        }
        &-wrap {
            width: 70px;
            height: 91px;
            margin-bottom: 7px;
            opacity: 0.6;
            cursor: pointer;
            transition: var(--transition);

            &:last-child {
                margin-bottom: 0;
            }

            &:hover {
                opacity: 1;
            }
        }
    }

    &__info {
            width: 50%;
            display: flex;
            flex-direction: column;
    }

    &__title {
        font-size: 18px;
        letter-spacing: var(--letter-spacing);
        font-weight: 600;
        margin-top: 10px;
    }

    &__part {
        font-size: 12px;
        color:var(--darkGrey-color);
        margin-top: 8px;
    }

    &__feedback {
        margin-top: 18px;
        letter-spacing: var(--letter-spacing);
        width: 240px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            display: flex;
            align-items: center;
        }
    }

    &__price {
        display: flex;
        align-items: center;
        margin-top: 46px;
        letter-spacing: var(--letter-spacing);

        span {
            display: flex;
            align-items: center;
        }

        &-new {
            font-size: 24px;
            font-weight: 700;
            margin-right: 12px;
            text-transform: uppercase;
        }

        &-old {
            text-decoration-line: line-through;
            color:var(--darkGrey-color);
            margin-right: 20px;
        }
    }

    &__discount {
        margin-top: 12px;

        span {
            padding: 4px 8px;
            border: 1px solid var(--secondary-color);
            margin-right: 8px;
            font-size: 12px;
            letter-spacing: var(--letter-spacing);

            &:last-child {
                margin-right: 0;
            }
        }
    }

    &__size {
        margin-top: 32px;
        position: relative;
        max-width: 315px;
        width: 100%;
        height: 44px;

        select {
            width: 100%;
            height: 100%;
            padding: 12px 16px;
            border:1px solid var(--secondary-color);
        }

        &-default {
            letter-spacing: var(--letter-spacing);
            font-size: 14px;
        }

        &-down {
            position: absolute;
            top: 50%;
            right: 16px;
            transform: translateY(-50%);
        }
    }

    &__determine {
        margin-top: 12px;
        letter-spacing:var(--letter-spacing);
        text-decoration-line: underline;
        transition: var(--transition);
        cursor: pointer;

        &:hover {
            transform: translateX(2px);
        }
    }

    &__cart {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100%;

        &-count {
            display: flex;
            align-items: center;
            justify-content: space-between;
            letter-spacing: var(--letter-spacing);
            width: 145px;
            padding: 12px 20px;
            height: 100%;
            background-color: var(--lightGrey-color);

            span {
                width: 33%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        &-plus, &-minus {
            cursor: pointer;
            transition:var(--transition);

            &:hover {
                background-color: var(--darkGrey-color);
                color: var(--main-color);
            }
        }

        &-right {
            display: flex;
            align-items: center;
            height:100%;
            margin-left: 12px;
        }

        &-btn {
            padding: 12px 28px;
            height: 100%;
            color: #fff;
            letter-spacing: var(--letter-spacing);
            background-color: var(--secondary-color);
            border: none;
            transition: var(--transition);
            cursor: pointer;
            font-size: 14px;

            &:hover {
                background-color: var(--darkGrey-color);
            }
        }

        &-favorite {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 4px;
            width: 44px;
            height: 100%;
            border: none;
            background-color: var(--secondary-color);
            transition: var(--transition);
            cursor: pointer;

            &:hover {
                background-color: var(--darkGrey-color);
            }
        }
    }

    &__wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        height: 44px;
    }

    &__sale {
        margin-top: 12px;
        letter-spacing: var(--letter-spacing);
        text-decoration-line: underline;
        transition: var(--transition);
        cursor: pointer;

        &:hover {
            transform: translateX(2px);
        }
    }

    &__footer {
        margin-top: 29px;
        border-top: 0.5px solid var(--border-color);

        div {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 167px;

            &:nth-child(1) {
                margin-top: 24px;

                svg {
                    margin-right:7px;
                }
            }

            &:nth-child(2), &:nth-child(3) {
                margin-top: 12px;

                svg {
                    margin-right:7.5px;
                }
            }

            &:nth-child(2) {
                svg {
                    margin-right: 6.5px;
                }
            }
        }
        span {
            letter-spacing: var(--letter-spacing);
            text-decoration-line:underline;
            cursor: pointer;
            transition: var(--transition);

            &:hover {
                transform: translateX(2px);
            }
        }
    }

    &__more {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 8px;

        a {
            display: block;
            margin: 0 auto;
            letter-spacing: var(--letter-spacing);
            text-decoration-line: underline;
            cursor: pointer;
            transition: var(--transition);

            &:hover {
                transform: translateX(2px);
            }
        }
    }
    .message {
        width: 100%;

        &__info {
            // position: absolute;
            margin-top: 15px;
        }
    }

}
    .message-enter-active {
        transition: all 0.3s ease-out;
    }
    .message-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .message-enter-from {
        transform: translateX(-50px);
        opacity: 0;
    }
    .message-leave-to {
        transform: translateX(150px);
        opacity: 0;
    }
@media (max-width:1024px) {
    .detail {
        height: 835px;
    }
}
@media (max-width:890px) {
    .detail {
        padding-top:0;
        height: auto;

        &__wrap {
            flex-direction: column;
            padding: 0;
        }
        &__img, &__info {
            width: 100%;
        }

        &__info {
            padding: 0 20px;
        }
    }
}
@media (max-width:576px) {
    .detail {
        &__cart {
            &-right {
                margin-left: 0;
                margin-top: 15px;
                height: 44px;
            }
        }

        &__wrapper {
            flex-direction: column;
            height: auto;
            align-items: flex-start;
        }
       &__img {
            &-wrap {
                width: 40px;
                height: 52px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit:cover;
                    filter: opacity(0.6);
                }
            }
       }
    }
}
</style>