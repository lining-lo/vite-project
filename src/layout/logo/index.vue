<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts" name="Logo">
import setting from '@/setting'
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-style: $base-logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>
