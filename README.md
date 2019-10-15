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


## 使用vh vw布局
npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano --S

配置 postcssrc
"postcss-px-to-viewport": 
{ 
    viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
    viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 
    unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
    viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw 
    selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 
    minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
    mediaQuery: false // 允许在媒体查询中转换`px` 
}

npm i cssnano-preset-advanced -D

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
