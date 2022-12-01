<script setup>
import { reactive, computed, ref } from 'vue'
import useValidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

const salerList = [
    {
        id:1,
        name:'Каталог',
        href:'#'
    },
    {
        id:2,
        name:'Акции',
        href:'#'
    },
    {
        id:3,
        name:'Бренды',
        href:'#'
    }
]
const aboutList = [
    {
        id:1,
        name:'О компании',
        href:'#'
    },
    {
        id:2,
        name:'Новости',
        href:'#'
    },
    {
        id:3,
        name:'Команда',
        href:'#'
    }
]

const state = reactive({
      email: '',
})
const feedback = ref('')
const rules = computed(() => ({
 email: {
    required:helpers.withMessage('Это поле обязательно к заполнению', required),
    email: helpers.withMessage('Неверный email', email),
  },
}))
const v = useValidate(rules, state)
const submit = ()=> {
	v.value.$validate()
	if (!v.value.$error) {
		feedback.value = 'Форма зарегистрирована'
	} else {
		feedback.value = ''
	}
	setTimeout(() => {
		state.email = ''
		feedback.value = ''
	}, 1000)
}
</script>


<template>
    <footer class="footer">
       <div class="container footer__container">
            <div class="footer__saler">
                <h3 class="footer__title">покупателям</h3>
                <ul class="footer__list">
                    <li
                        v-for="link in salerList"
                        :key="link.id"
                    >
                        <a
                            :href="link.href"
                            class="footer__link"
                        >{{ link.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="footer__about">
                <h3 class="footer__title">о нас</h3>
                <ul class="footer__list">
                    <li
                        v-for="link in aboutList"
                        :key="link.id"
                    >
                        <a
                            :href="link.href"
                            class="footer__link"
                        >{{ link.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="footer__form">
                <h3 class="footer__title">Узнайте первыми о новинках и акциях</h3>
                <form @submit.prevent="submit" novalidate>
                    <div class="footer__field">
                        <input
                            v-model.trim="state.email"
                            @blur="v.email.$touch"
                            :error="v.email.$errors"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Адрес электронной почты"
                        >
                        <svg class="footer__field-close" width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.700012 9.06641L9.05007 0.88337" stroke="#C4C4C4"/>
                            <path d="M9.25165 9.06641L0.901606 0.883353" stroke="#C4C4C4"/>
                        </svg>
                    </div>
                    <div class="footer__feedback"> {{ feedback }}</div>
                    <transition name="error" appear>
                        <div class="footer__err" v-if="v.email.$error"> {{ v.email.$errors[0].$message }} </div>
                    </transition>
                    <button
                        type="submit"
                        class="footer__btn"

                    >Подписаться</button>
                </form>
            </div>
       </div>
    </footer>
</template>



<style lang="scss" scoped>
.footer {
    width: 100%;
    background: var(--secondary-color);
    padding: 70px 0;
    margin-top: auto;
    color:var(--main-color);

    &__container {
        display: grid;
        grid-template-columns: 1fr 1fr 40%;
        padding: 0 128px;
    }

    &__saler {
        width: 100%;
        height: 100%;
    }

    &__title {
        font-size: 16px;
        letter-spacing: var(--letter-spacing);
        text-transform: uppercase;
        font-weight: 400;
    }

    &__list {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 16px;
    }

    &__link {
        display: inline-block;
        position: relative;
        color:var(--main-color);
        letter-spacing: var(--letter-spacing);
        padding: 4px 0;
    }
    &__field {
        position: relative;
        width: 100%;
        height: 44px;
        margin-top: 45px;

        #email {
            display: block;
            width: 100%;
            height: 100%;
            padding: 12px 16px;

            &::placeholder {
                color:var(--darkGrey-color) ;
                letter-spacing: var(--letter-spacing);
                font-size: 14px;
            }
        }

        &-close {
            position: absolute;
            top: 50%;
            right: 16px;
            cursor: pointer;
            transform: translateY(-50%);
        }
    }

    &__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 28px;
        font-size: 14px;
        color: var(--secondary-color);
        letter-spacing: var(--letter-spacing);
        margin-left: auto;
        margin-top: 35px;
        cursor: pointer;
        transition: var(--transition);
        border: none;

        &:hover, &:focus {
            background: var(--darkGrey-color);
            color: var(--main-color);
        }
    }

    &__err {
        position: absolute;
        margin-top: 8px;
        color: rgb(229, 104, 104);
    }

    &__feedback {
        position: absolute;
        margin-top: 8px;
    }
    .error-enter-active {
        transition: all 0.3s ease-out;
    }
    .error-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .error-enter-from {
        transform: translateX(-50px);
        opacity: 0;
    }
    .error-leave-to {
        transform: translateX(150px);
        opacity: 0;
    }
}
@media(max-width:840px) {
    .footer {
        &__container {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-rows: repeat(2, minmax(0, 1fr));
            row-gap: 58px;
            padding: 0 20px;
        }

        &__form {
            grid-column: span 2;
        }
    }
}
@media(max-width:576px) {
    .footer {
        &__container {
            row-gap: 28px;

        }
    }
}
</style>