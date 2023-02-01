/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  interface ComponentCustomProperties {
    $filters: any
  }
  const component: DefineComponent<{}, {}, any>
  export default component
}