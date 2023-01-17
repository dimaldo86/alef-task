<script setup >
import { computed, ref } from 'vue'
import { useSidebarStore } from '@/store/store'

const store = useSidebarStore()

const isPanelOpen = computed(() => {
    return store.isNavOpen
})

const closeSidebarPanel = ()=> {
        store.toggleNav()
    }
</script>

<template>
    <div class="sidebar">
        <div class="sidebar__backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide" appear>
            <div v-if="isPanelOpen"
                class="sidebar__panel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
    .sidebar {
        &__backdrop {
            background-color:transparent;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            cursor: pointer;
        }

        &__panel {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 277px;
            z-index: 999;
            transition: var(--transition);
            overflow: hidden;
            padding: 66px 30px 10px;
            background-color:#fff;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
    }
.slide-enter-active {
    transition: all 0.5s ease-out;
}
.slide-enter-from {
    // transform: translateY(-50%);
    height: 0;
}
.slide-leave-active {
    transition: all 0.8s ease-in;
}
.slide-leave-to {
    opacity: 0;
    transition: all 0.8s ease-in-out;
    // transform: translateY(-50%);
    height: 0;
}
@media(min-width:992px) {
    .sidebar {
        &__panel {
            display: none;
        }
    }
}

</style>