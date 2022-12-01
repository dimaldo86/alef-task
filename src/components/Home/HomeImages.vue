<script setup>
const images = [
    {
        id:1,
        name:'right-img-1',
        src:require('@/assets/img/home/images/right-img-1.png')
    },
    {
        id:2,
        name:'right-img-2',
        src:require('@/assets/img/home/images/right-img-2.png')
    },
    {
        id:3,
        name:'right-img-3',
        src:require('@/assets/img/home/images/right-img-3.png')
    },
    {
        id:4,
        name:'right-img-4',
        src:require('@/assets/img/home/images/right-img-4.png')
    },
]
</script>

<template>
    <section class="images">
        <div class="images__wrap">
            <div class="images__left">
                <img  src="@/assets/img/home/images/left-img.png" alt="big">
            </div>
            <div class="images__right">
               <div class="images__right-wrap">
                    <img src="../../assets/img/home/images/right-img-1.png" alt="right-img">
               </div>
               <div class="images__right-wrap">
                    <img src="../../assets/img/home/images/right-img-2.png" alt="right-img">
               </div>
               <div class="images__right-wrap">
                    <img src="../../assets/img/home/images/right-img-3.png" alt="right-img">
                    <div class="images__right-info">
                        <div class="images__right-top">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="2.5" width="13" height="13" rx="1.5" stroke="white"/>
                                <path d="M2.33784 2.63126L2.33784 2.49958C2.33784 1.39501 3.23327 0.499584 4.33784 0.499585L13.5 0.49959C14.6045 0.49959 15.5 1.39502 15.5 2.49959L15.5 11.9382C15.5 12.9853 14.5159 13.7537 13.5 13.4997V13.4997" stroke="white"/>
                            </svg>
                        </div>
                        <div class="images__right-center">
                            <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.752161 10.9953C0.638177 9.54198 1.78674 8.2998 3.24451 8.2998H28.7555C30.2133 8.2998 31.3618 9.54198 31.2478 10.9953L29.5851 32.1953C29.4831 33.4962 28.3976 34.4998 27.0927 34.4998H4.90725C3.60235 34.4998 2.51694 33.4962 2.41491 32.1953L0.752161 10.9953Z" stroke="white"/>
                                <path d="M7.004 18.4857C7.004 18.4857 6.54373 1 15.5 1C24.4563 1 23.996 18.4857 23.996 18.4857" stroke="white"/>
                            </svg>

                            <span>Узнай, что на мне</span>
                        </div>
                        <div class="images__right-bottom">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4287 7.25725L13.7612 5.03654L17.1965 5.46595L18.5 7.63849V10.3206L12.0145 18.1959L5.93878 10.2507L5.05633 8.04458L6.34555 5.89588L9.35443 4.60636L11.6159 7.32009L12.0665 7.86089L12.4287 7.25725Z" fill="white" stroke="white"/>
                                <path d="M11.9 7.0948C10.6998 1.47892 1.40879 5.90389 5.76035 11.6018C10.1119 17.2996 12.4 19.4908 12.4 19.4908" stroke="white"/>
                                <path d="M11.8941 7.0948C13.0943 1.47892 22.7304 5.90389 18.3788 11.6018C14.0273 17.2996 11.7 19.5 11.7 19.5" stroke="white"/>
                                <path d="M11.391 6.70752L12.4043 6.70757L12.3834 7.24079H11.391V6.70752Z" fill="white"/>
                            </svg>


                            <span>200</span>
                        </div>
                    </div>
               </div>
               <div class="images__right-wrap">
                    <img src="../../assets/img/home/images/right-img-4.png" alt="right-img">
               </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .images {
        max-width: 1410px;
        height: 764px;
        padding: 32px 10px;
        margin: 0 auto;

        &__wrap {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            flex-wrap: nowrap;
        }

        &__left {
            width: 50%;
            height: 100%;
        }

        &__right {
            width: 50%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat((2, 1fr));
            grid-template-rows: repeat((2, 1fr));
            gap: 16px;


            &-wrap:nth-child(3) {
                position: relative;
            }

            &-info {
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                padding: 18px;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 5;
                background-color: var(--secondary-color);
                opacity: 0.7;
                cursor: pointer;
            }

            &-top  {
                margin-left: auto;
                width: 24px;
                height: 24px;
            }

            &-center {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0 auto;

                span {
                    display: block;
                    color: #fff;
                    margin-top: 7px;
                }
            }

            &-bottom {
                display: flex;
                align-items: center;
                span {
                    color: #fff;
                    margin-left: 2px;
                }
            }



        }
    }

    @media (max-width:890px) {
        .images {
            padding: 0;
            height: auto;

            &__wrap {
                flex-wrap: wrap;
            }

           &__left, &__right {
            width: 100%;
           }
        }
    }
</style>