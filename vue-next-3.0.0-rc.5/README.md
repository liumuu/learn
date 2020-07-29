# Vue-next

[https://learn.kaikeba.com/catalog/211600](https://learn.kaikeba.com/catalog/211600)

## start

`yarn --ignore-scripts`

`"dev": "node scripts/dev.js --sourcemap"`

## structure

vue

- compiler-dom

  - compiler-core

- reactivity

- runtime-dom

  - runtime-core

## initialization process

componentEffect

reactiveEffect

effect

setupRenderEffect

mountComponent

processComponent

patch

render

mount

app.mount

(anonymous)

## read code

createApp:

`packages\runtime-dom\src\index.ts`

createRenderer:

`packages\runtime-core\src\renderer.ts`

baseCreateRenderer:

`packages\runtime-core\src\apiCreateApp.ts`

`return { render, hydrate, createApp: createAppAPI(render, hydrate)}`

createAppAPI:

`packages\runtime-core\src\apiCreateApp.ts`

mount:

render:

`packages\runtime-core\src\renderer.ts`

patch:

processComponent:

mountComponent:

setupComponent:

setupStatefulComponent:

setup:

finishComponentSetup:

**FEATURE_OPTIONS_API**:

setupRenderEffect:

renderComponentRoot:

`packages\runtime-core\src\componentRenderUtils.ts`

patch:

`packages\runtime-core\src\renderer.ts`

### 静态方法 → 实力方法
