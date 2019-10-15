# qxmx-fe

> 清新冥想

## vue cli 创建项目

## 引入TS
npm i typescript -D
npm i ts-loader@3.5.0 -D

配置 webpack.base.conf.js
entry: {
    app: './src/main.ts'
}
resolve.extensions 添加 .ts
{
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
        appendTsSuffixTo: [/\.vue$/]
    }
},

命令行  tsc --init 初始化tsconfig.json
并配置
{
  "include": ["src/**/*"],
  "exclude": ["node_modules"],
  "compilerOptions": {
      "allowSyntheticDefaultImports": true,
      "experimentalDecorators": true,
      "allowJs": true,
      "module": "esnext",
      "target": "es5",
      "moduleResolution": "node",
      "isolatedModules": true,
      "lib": ["dom", "es5", "es6", "es7", "es2015.promise"],
      "sourceMap": true,
      "pretty": true
  }
}

让 ts识别 vue
src/vue-shim.d.ts
declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

更改文件 添加.vue
import HelloWorld from '@/components/HelloWorld.vue'

改造 文件
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'app',
});
</script>



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
