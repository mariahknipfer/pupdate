function load(component) {
  return () =>
    import(/* webpackChunkName: "[request]" */ `@/views/${component}/index.vue`)
}

export default [
  {
    path: '/',
    name: 'dashboard',
    component: load('Dashboard')
  }
]
