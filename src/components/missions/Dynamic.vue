<template>
    <component v-if="c" :is="c" :key="c.__file"></component>
</template>

<script>
export default {
  data: () => ({
    c: null
  }),
  methods: {
    updateComponent(param) {
      // The dynamic import
      import(`./${param}.vue`).then(module => {
        this.c = module.default;
      })
    }
  },
  beforeRouteEnter(to, from, next) {
    // When first entering the route
    next(vm => vm.updateComponent(to.params.dynamic));
  },
  beforeRouteUpdate(to, from, next) {
    // When changing from one dynamic route to another
    this.updateComponent(to.params.dynamic);
    next();
  }
}
</script>
