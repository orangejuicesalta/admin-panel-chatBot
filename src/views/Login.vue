<script setup lang="ts">
import { ref, reactive } from "vue";
import closedEyeIcon from "@/assets/icons/eye-closed.svg";
import openEyeIcon from "@/assets/icons/eye-open.svg";
import { useAuthStore } from "../store/authorization";

const store = useAuthStore();
let activeKey = ref("2");
const textType = ref("password");
const user = reactive({
  username: "",
  password: "",
});
const icon = ref(closedEyeIcon);

const onClick = () => {
  store.login(user.username, user.password);
};
const onRegister = () => {
  store.register(user.username, user.password);
};
const toggleEye = () => {
  textType.value = textType.value === "password" ? "text" : "password";
  icon.value = textType.value === "password" ? closedEyeIcon : openEyeIcon;
};
</script>

<template>
  <main class="w-full h-full mt-[140px] flex items-center flex-col gap-[40px]">
    <img src="../assets/logo.svg" alt="logo" class="w-[70px] h-auto" />
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Регистрация">
        <div class="w-full flex flex-col items-center gap-[32px] pt-[60px]">
          <a-form :model="user" @finish="onRegister">
            <div>
              <a-form-item name="username" class="mb-8">
                <a-input
                  type="text"
                  v-model:value="user.username"
                  placeholder="Логин"
                >
                  <template #prefix>
                    <img src="../assets/icons/login-user-icon.svg" alt="icon" />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item name="password" class="mb-12">
                <a-input
                  :type="textType"
                  v-model:value="user.password"
                  placeholder="Пароль"
                >
                  <template #prefix>
                    <img src="../assets/icons/lock-icon.svg" alt="icon"
                  /></template>
                  <template #suffix>
                    <img
                      @click="toggleEye"
                      :src="icon"
                      alt="icon"
                      class="cursor-pointer"
                  /></template>
                </a-input>
              </a-form-item>
            </div>
            <div>
              <a-form-item>
                <button
                  class="w-full flex flex-row justify-center items-center bg-primary-color active:opacity-70 transition-all text-white pt-4 text-lg py-4 gap-3 rounded-lg"
                  type="submit"
                >
                  <span>Зарегистрироваться</span>
                  <a-spin v-if="store.loading" />
                </button>
              </a-form-item>
            </div>
          </a-form>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Вход по логину">
        <div class="w-full flex flex-col items-center gap-[32px] pt-[60px]">
          <a-form :model="user" @finish="onClick">
            <div>
              <a-form-item name="username" class="mb-8">
                <a-input
                  type="text"
                  v-model:value="user.username"
                  placeholder="Логин"
                >
                  <template #prefix>
                    <img src="../assets/icons/login-user-icon.svg" alt="icon" />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item name="password" class="mb-12">
                <a-input
                  :type="textType"
                  v-model:value="user.password"
                  placeholder="Пароль"
                >
                  <template #prefix>
                    <img src="../assets/icons/lock-icon.svg" alt="icon"
                  /></template>
                  <template #suffix>
                    <img
                      @click="toggleEye"
                      :src="icon"
                      alt="icon"
                      class="cursor-pointer"
                  /></template>
                </a-input>
              </a-form-item>
            </div>
            <div>
              <a-form-item>
                <button
                  class="w-full flex flex-row justify-center items-center bg-primary-color active:opacity-70 transition-all text-white pt-4 text-lg py-4 gap-3 rounded-lg"
                  type="submit"
                >
                  <span>Войти</span>
                  <a-spin v-if="store.loading" />
                </button>
              </a-form-item>
            </div>
          </a-form>
        </div>
      </a-tab-pane>
    </a-tabs>
  </main>
</template>

<style>
.ant-tabs-nav-operations {
  @apply !hidden;
}

.ant-tabs-tab {
  @apply !rounded-[100px];
}

.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab,
.ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab {
  @apply bg-primary-color !text-sm !leading-5;
}

.ant-tabs-tab-btn {
  @apply font-normal text-base leading-5;
}

.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  @apply text-white;
}

.ant-tabs-tab-active {
  @apply !bg-primary-color !border-b-0;
}

.ant-tabs-tab {
  @apply text-main-dark border-0 bg-transparent py-2 px-11 !ml-0;
}

.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab,
.ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab {
  @apply bg-[#eef3f4] border-none;
}

.ant-tabs-ink-bar,
.ant-tabs-ink-bar-animated {
  background: transparent;
}

.ant-tabs-nav-wrap {
  @apply flex w-full items-center justify-center;
}

.ant-tabs-nav-list {
  @apply bg-gray-100 text-sm font-medium !border-transparent !rounded-[100px];
}

.ant-tabs-nav::before {
  @apply !border-none;
}

.ant-input-affix-wrapper {
  @apply border-[1px] border-transparent rounded-[5px] px-[20px] py-[16px];
}

.ant-form {
  @apply w-full;
}

.ant-input-prefix {
  @apply mr-[15px];
}

.ant-tabs-nav {
  @apply mb-0 !important;
}

.ant-input {
  @apply text-base font-normal;
}
</style>
