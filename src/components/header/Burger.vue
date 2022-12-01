<script setup>
import { ref, computed } from 'vue'
import { useSidebarStore } from '@/store/store'

const store = useSidebarStore()

const isBurgerActive = computed(() => {
    return store.isNavOpen
})

const toggleBurger = () => {
    store.toggleNav()
}
</script>

<template>
    <div
        class="burger"
        :class="{ 'active' : isBurgerActive }"
        @click.prevent="toggleBurger">
        <slot>
            <div  class="burger__button">
                <span class="burger__bar burger__bar-top"></span>
                <span class="burger__bar burger__bar-center"></span>
                <span class="burger__bar burger__bar-bottom"></span>
            </div>
        </slot>
    </div>
</template>

<style lang="scss" scoped>
@media(max-width:992px) {
    .burger {
        margin-left: 32px;
        &.active .burger__bar-top {
            transform: rotate(45deg)
        }
        &.active .burger__bar-center {
            opacity: 0;
        }
        &.active .burger__bar-bottom {
            transform: rotate(-45deg)
        }
        &__button {
            position: relative;
            height: 30px;
            width: 32px;
            display: block;
            z-index: 999;
            border: 0;
            border-radius: 0;
            background-color: transparent;
            pointer-events: all;
            transition: transform .6s cubic-bezier(.165,.84,.44,1);
        }
        &__bar {
            background-color: #130f40;
            position: absolute;
            top: 50%;
            right: 6px;
            left: 6px;
            height: 2px;
            width: auto;
            margin-top: -1px;
            transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);

            &-top {
                transform: translateY(-6px);
            }

            &-center {
                transform-origin: 100% 50%;
                transform: scaleX(.8);
            }

            &-bottom {
                transform: translateY(6px);
            }
        }
    }
}
</style>