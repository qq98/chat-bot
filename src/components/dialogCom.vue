<!--
 * @Author: N0ts
 * @Date: 2023-03-02 21:34:33
 * @Description: dialog
 * @FilePath: /chat-gpt/src/components/dialogCom.vue
 * @Mail：mail@n0ts.top
-->

<template>
    <div id="dialog" :class="{ show: props.show }">
        <div id="main">
            <p>{{ props.title }}</p>
            <div id="center">
                <slot name="center" />
            </div>
            <div id="bottom">
                <slot name="bottom" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
    title: string;
    show: boolean;
}>();
</script>

<style scoped lang="less">
#dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    z-index: 5;
    opacity: 0;
    visibility: hidden;

    #main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        min-height: 200px;
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
        box-sizing: border-box;
        text-align: center;
        padding-bottom: 5%;

        > p {
            font-size: 1.2rem;
            margin-bottom: 20px;
        }

        :deep(#center) {
            height: 80%;

            input,
            select {
                outline: none;
                border: none;
                padding: 5px 10px;
                background-color: rgb(236, 236, 236);
                border-radius: 5px;
                box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
                width: 165px;
            }

            select {
                width: 185px;
            }

            p {
                font-size: 0.9rem;
            }

            .tips {
                font-size: 0.8rem;
                color: gray;
                margin-bottom: 10px;
            }

            .panel {
                > div {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    margin-bottom: 5px;

                    p {
                        width: 6rem;
                        text-align: right;
                    }
                }
            }
        }

        :deep(#bottom) {
            width: 100%;
            position: absolute;
            bottom: 5%;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;

            button {
                width: 100px;
                height: 30px;
                border: none;
                border-radius: 5px;
                background-color: #fff;
                margin: 0 10px;
                cursor: pointer;
                color: #fff;

                &:hover {
                    opacity: 0.8;
                }
            }

            .cancel {
                background-color: #e74c3c;
            }

            .success {
                background-color: #27ae60;
            }

            .info {
                background-color: #a4a4a4;
            }
        }
    }
}

.show {
    opacity: 1 !important;
    visibility: visible !important;
}

@media screen and (max-width: 700px) {
    #main {
        width: 80% !important;
        padding: 20px 10px 50px !important;
    }
}
</style>
