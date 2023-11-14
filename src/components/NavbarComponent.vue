<script setup></script>
<template>
  <header class="header">
    <nav class="header__navigation">
      <RouterLink class="header__link" :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink class="header__link" :to="{ name: 'addProject' }">Add new</RouterLink>
    </nav>
  </header>
</template>
<style scoped lang="scss">
.header {
  padding: 40px 0;
  // .header__navigation
  &__navigation {
    text-align: center;
  }

  // .header__link
  &__link {
    display: inline-block;
    margin: 0 25px;
    color: $nav-link-color;
    font-size: 18px;
    transition: color 0.3s;
    &:hover {
      color: $nav-link-active-color;
    }
    &.router-link-active {
      border-bottom: 2px solid $nav-link-active-border-color;
      box-sizing: content-box;
      padding-bottom: 4px;
    }
  }
}
</style>
