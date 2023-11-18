<script setup>
const props = defineProps({
  currentFilter: {
    required: true,
    type: String
  }
})
const emits = defineEmits(['filterChange'])
function updateFilter(filter) {
  emits('filterChange', filter)
}
</script>
<template>
  <nav class="filter-nav">
    <button
      class="filter-nav__btn"
      :class="{ 'filter-nav__btn_active': currentFilter === 'all' }"
      @click="updateFilter('all')"
    >
      View all
    </button>
    <button
      class="filter-nav__btn"
      :class="{ 'filter-nav__btn_active': currentFilter === 'completed' }"
      @click="updateFilter('completed')"
    >
      Completed
    </button>
    <button
      class="filter-nav__btn"
      :class="{ 'filter-nav__btn_active': currentFilter === 'uncompleted' }"
      @click="updateFilter('uncompleted')"
    >
      Uncompleted
    </button>
  </nav>
</template>
<style scoped lang="scss">
.filter-nav {
  display: flex;
  justify-content: center;
  column-gap: 25px;
  // .filter-nav__btn
  &__btn {
    color: $filter-nav-btn-color;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    letter-spacing: 1px;
    transition: color 0.3s;
    &_active,
    &:hover {
      color: $filter-nav-btn-color-active;
    }
  }
}
</style>
