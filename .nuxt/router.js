import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6476b5ee = () => interopDefault(import('..\\pages\\калькулятор.vue' /* webpackChunkName: "pages/калькулятор" */))
const _7729b56d = () => interopDefault(import('..\\pages\\каталог\\index.vue' /* webpackChunkName: "pages/каталог/index" */))
const _7e6d66f4 = () => interopDefault(import('..\\pages\\контакты.html.vue' /* webpackChunkName: "pages/контакты.html" */))
const _71b016c2 = () => interopDefault(import('..\\pages\\о-компании.html.vue' /* webpackChunkName: "pages/о-компании.html" */))
const _c4ffb7b2 = () => interopDefault(import('..\\pages\\отзывы-столешниц-из-камня.html.vue' /* webpackChunkName: "pages/отзывы-столешниц-из-камня.html" */))
const _0a280177 = () => interopDefault(import('..\\pages\\политика-конфенденциальности.html.vue' /* webpackChunkName: "pages/политика-конфенденциальности.html" */))
const _4cc08c8a = () => interopDefault(import('..\\pages\\тест.vue' /* webpackChunkName: "pages/тест" */))
const _06918b02 = () => interopDefault(import('..\\pages\\цена-за-метр-столешницы.html.vue' /* webpackChunkName: "pages/цена-за-метр-столешницы.html" */))
const _305d00a2 = () => interopDefault(import('..\\pages\\1.html.vue' /* webpackChunkName: "pages/1.html" */))
const _77091bfc = () => interopDefault(import('..\\pages\\calc.vue' /* webpackChunkName: "pages/calc" */))
const _3f64efb1 = () => interopDefault(import('..\\pages\\prices.vue' /* webpackChunkName: "pages/prices" */))
const _3cef304c = () => interopDefault(import('..\\pages\\tables.vue' /* webpackChunkName: "pages/tables" */))
const _3fd90487 = () => interopDefault(import('..\\pages\\информация\\партнерам.html.vue' /* webpackChunkName: "pages/информация/партнерам.html" */))
const _8f76f5b2 = () => interopDefault(import('..\\pages\\информация\\советы-по-уходу.html.vue' /* webpackChunkName: "pages/информация/советы-по-уходу.html" */))
const _7245fb0d = () => interopDefault(import('..\\pages\\каталог\\барные-стойки.html.vue' /* webpackChunkName: "pages/каталог/барные-стойки.html" */))
const _761f4716 = () => interopDefault(import('..\\pages\\каталог\\изделия-из-акрилового-камня.vue' /* webpackChunkName: "pages/каталог/изделия-из-акрилового-камня" */))
const _3a157c3c = () => interopDefault(import('..\\pages\\каталог\\изделия-из-дерева.vue' /* webpackChunkName: "pages/каталог/изделия-из-дерева" */))
const _280da0fc = () => interopDefault(import('..\\pages\\каталог\\изделия-из-жидкого-гранита.vue' /* webpackChunkName: "pages/каталог/изделия-из-жидкого-гранита" */))
const _206be9be = () => interopDefault(import('..\\pages\\каталог\\изделия-из-кварцевого-агломерата.vue' /* webpackChunkName: "pages/каталог/изделия-из-кварцевого-агломерата" */))
const _6bc20ada = () => interopDefault(import('..\\pages\\каталог\\изделия-из-натурального-камня.vue' /* webpackChunkName: "pages/каталог/изделия-из-натурального-камня" */))
const _1a7ea02d = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки.html.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки.html" */))
const _3fe1e973 = () => interopDefault(import('..\\pages\\каталог\\каталог-кромок.html.vue' /* webpackChunkName: "pages/каталог/каталог-кромок.html" */))
const _009456f5 = () => interopDefault(import('..\\pages\\каталог\\каталог-плинтусов\\index.vue' /* webpackChunkName: "pages/каталог/каталог-плинтусов/index" */))
const _777cfa83 = () => interopDefault(import('..\\pages\\каталог\\лестницы-и-ступени-из-камня.html.vue' /* webpackChunkName: "pages/каталог/лестницы-и-ступени-из-камня.html" */))
const _e2d90836 = () => interopDefault(import('..\\pages\\каталог\\подоконники.html.vue' /* webpackChunkName: "pages/каталог/подоконники.html" */))
const _19125ce3 = () => interopDefault(import('..\\pages\\каталог\\ресепшн.html.vue' /* webpackChunkName: "pages/каталог/ресепшн.html" */))
const _57384f7c = () => interopDefault(import('..\\pages\\каталог\\стеновые-панели.html.vue' /* webpackChunkName: "pages/каталог/стеновые-панели.html" */))
const _6e6ec163 = () => interopDefault(import('..\\pages\\каталог\\столешницы.html.vue' /* webpackChunkName: "pages/каталог/столешницы.html" */))
const _cef717fe = () => interopDefault(import('..\\pages\\каталог\\столы.html.vue' /* webpackChunkName: "pages/каталог/столы.html" */))
const _ad420cb0 = () => interopDefault(import('..\\pages\\статьи\\столешница-по-индивидуальным-размерам.html.vue' /* webpackChunkName: "pages/статьи/столешница-по-индивидуальным-размерам.html" */))
const _edbede34 = () => interopDefault(import('..\\pages\\каталог\\барные-стойки\\барная-стойка-из-жидкого-камня.html.vue' /* webpackChunkName: "pages/каталог/барные-стойки/барная-стойка-из-жидкого-камня.html" */))
const _b8c63db8 = () => interopDefault(import('..\\pages\\каталог\\барные-стойки\\барная-стойка-из-натурального-камня.html.vue' /* webpackChunkName: "pages/каталог/барные-стойки/барная-стойка-из-натурального-камня.html" */))
const _374f0608 = () => interopDefault(import('..\\pages\\каталог\\барные-стойки\\барные-стойки-из-акрила.html.vue' /* webpackChunkName: "pages/каталог/барные-стойки/барные-стойки-из-акрила.html" */))
const _132cc7c1 = () => interopDefault(import('..\\pages\\каталог\\барные-стойки\\барные-стойки-из-кварца.html.vue' /* webpackChunkName: "pages/каталог/барные-стойки/барные-стойки-из-кварца.html" */))
const _438d5df8 = () => interopDefault(import('..\\pages\\каталог\\барные-стойки\\галерея-барных-стоек.html.vue' /* webpackChunkName: "pages/каталог/барные-стойки/галерея-барных-стоек.html" */))
const _745400f0 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\для-ванной\\index.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/для-ванной/index" */))
const _07e017c8 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\мойки-из-акрила.html.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/мойки-из-акрила.html" */))
const _389c62f8 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\мойки-из-акрилового-камня-для-ванной\\index.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/мойки-из-акрилового-камня-для-ванной/index" */))
const _36b4628d = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\мойки-из-кварца.html.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/мойки-из-кварца.html" */))
const _abd122de = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\мойки-из-кварцевого-камня-для-ванной.html.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/мойки-из-кварцевого-камня-для-ванной.html" */))
const _5a29fe79 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\мойки-из-нержавеющей-стали\\index.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/мойки-из-нержавеющей-стали/index" */))
const _6a735ba5 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\угловые\\index.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/угловые/index" */))
const _6d94a848 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\classic\\index.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/classic/index" */))
const _233a8d27 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\modern\\index.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/modern/index" */))
const _365c0260 = () => interopDefault(import('..\\pages\\каталог\\лестницы-и-ступени-из-камня\\лестницы-и-ступени-из-кварцевого-агломерата.html.vue' /* webpackChunkName: "pages/каталог/лестницы-и-ступени-из-камня/лестницы-и-ступени-из-кварцевого-агломерата.html" */))
const _72e31f00 = () => interopDefault(import('..\\pages\\каталог\\лестницы-и-ступени-из-камня\\лестницы-из-акрилового-камня.html.vue' /* webpackChunkName: "pages/каталог/лестницы-и-ступени-из-камня/лестницы-из-акрилового-камня.html" */))
const _ee2e9ff4 = () => interopDefault(import('..\\pages\\каталог\\лестницы-и-ступени-из-камня\\лестницы-из-искусственного-камня.html.vue' /* webpackChunkName: "pages/каталог/лестницы-и-ступени-из-камня/лестницы-из-искусственного-камня.html" */))
const _70d4e4bb = () => interopDefault(import('..\\pages\\каталог\\лестницы-и-ступени-из-камня\\лестницы-из-натурального-камня.html.vue' /* webpackChunkName: "pages/каталог/лестницы-и-ступени-из-камня/лестницы-из-натурального-камня.html" */))
const _163efc88 = () => interopDefault(import('..\\pages\\каталог\\подоконники\\подоконники-из-акрила.html.vue' /* webpackChunkName: "pages/каталог/подоконники/подоконники-из-акрила.html" */))
const _4cfd036f = () => interopDefault(import('..\\pages\\каталог\\подоконники\\подоконники-из-жидкого-гранита.html.vue' /* webpackChunkName: "pages/каталог/подоконники/подоконники-из-жидкого-гранита.html" */))
const _23b4cc81 = () => interopDefault(import('..\\pages\\каталог\\подоконники\\подоконники-из-кварца.html.vue' /* webpackChunkName: "pages/каталог/подоконники/подоконники-из-кварца.html" */))
const _1e150fc7 = () => interopDefault(import('..\\pages\\каталог\\подоконники\\подоконники-из-натурального-камня.html.vue' /* webpackChunkName: "pages/каталог/подоконники/подоконники-из-натурального-камня.html" */))
const _105d7efc = () => interopDefault(import('..\\pages\\каталог\\ресепшн\\ресепшн-из-акрила.html.vue' /* webpackChunkName: "pages/каталог/ресепшн/ресепшн-из-акрила.html" */))
const _23ffb9ba = () => interopDefault(import('..\\pages\\каталог\\ресепшн\\ресепшн-из-жидкого-камня.html.vue' /* webpackChunkName: "pages/каталог/ресепшн/ресепшн-из-жидкого-камня.html" */))
const _3f31c9c1 = () => interopDefault(import('..\\pages\\каталог\\ресепшн\\ресепшн-из-кварца.html.vue' /* webpackChunkName: "pages/каталог/ресепшн/ресепшн-из-кварца.html" */))
const _0936cfa8 = () => interopDefault(import('..\\pages\\каталог\\ресепшн\\ресепшн-натуральный-камень.html.vue' /* webpackChunkName: "pages/каталог/ресепшн/ресепшн-натуральный-камень.html" */))
const _6bb112b8 = () => interopDefault(import('..\\pages\\каталог\\стеновые-панели\\галерея-стеновых-панелей.html.vue' /* webpackChunkName: "pages/каталог/стеновые-панели/галерея-стеновых-панелей.html" */))
const _78827722 = () => interopDefault(import('..\\pages\\каталог\\стеновые-панели\\стеновая-панель-из-жидкого-камня.html.vue' /* webpackChunkName: "pages/каталог/стеновые-панели/стеновая-панель-из-жидкого-камня.html" */))
const _22bc2f2a = () => interopDefault(import('..\\pages\\каталог\\стеновые-панели\\стеновая-панель-натуральный-камень.html.vue' /* webpackChunkName: "pages/каталог/стеновые-панели/стеновая-панель-натуральный-камень.html" */))
const _2b876fdc = () => interopDefault(import('..\\pages\\каталог\\стеновые-панели\\стеновые-панели-из-акрила.html.vue' /* webpackChunkName: "pages/каталог/стеновые-панели/стеновые-панели-из-акрила.html" */))
const _5a5bbaa1 = () => interopDefault(import('..\\pages\\каталог\\стеновые-панели\\стеновые-панели-из-кварца.html.vue' /* webpackChunkName: "pages/каталог/стеновые-панели/стеновые-панели-из-кварца.html" */))
const _4729bc0f = () => interopDefault(import('..\\pages\\каталог\\столешницы\\галерея-работ-столешниц-из-акрилового-камня.html.vue' /* webpackChunkName: "pages/каталог/столешницы/галерея-работ-столешниц-из-акрилового-камня.html" */))
const _a8670fe8 = () => interopDefault(import('..\\pages\\каталог\\столешницы\\галерея-работ-столешниц-из-жидкого-гранита.html.vue' /* webpackChunkName: "pages/каталог/столешницы/галерея-работ-столешниц-из-жидкого-гранита.html" */))
const _19bb4344 = () => interopDefault(import('..\\pages\\каталог\\столешницы\\галерея-работ-столешниц-из-кварца.html.vue' /* webpackChunkName: "pages/каталог/столешницы/галерея-работ-столешниц-из-кварца.html" */))
const _3a7ea784 = () => interopDefault(import('..\\pages\\каталог\\столешницы\\галерея-работ.html.vue' /* webpackChunkName: "pages/каталог/столешницы/галерея-работ.html" */))
const _334e2493 = () => interopDefault(import('..\\pages\\каталог\\столешницы\\столешница-из-камня-в-ванную.html.vue' /* webpackChunkName: "pages/каталог/столешницы/столешница-из-камня-в-ванную.html" */))
const _1d2ccb6c = () => interopDefault(import('..\\pages\\каталог\\столешницы\\столешницы-из-акрилового-камня.html.vue' /* webpackChunkName: "pages/каталог/столешницы/столешницы-из-акрилового-камня.html" */))
const _db727836 = () => interopDefault(import('..\\pages\\каталог\\столешницы\\столешницы-из-жидкого-камня.html.vue' /* webpackChunkName: "pages/каталог/столешницы/столешницы-из-жидкого-камня.html" */))
const _0d9da3d4 = () => interopDefault(import('..\\pages\\каталог\\столешницы\\столешницы-из-камня-для-кухни.html.vue' /* webpackChunkName: "pages/каталог/столешницы/столешницы-из-камня-для-кухни.html" */))
const _6cb59f3f = () => interopDefault(import('..\\pages\\каталог\\столешницы\\столешницы-из-кварца.html.vue' /* webpackChunkName: "pages/каталог/столешницы/столешницы-из-кварца.html" */))
const _67a9b585 = () => interopDefault(import('..\\pages\\каталог\\столешницы\\столешницы-из-натурального-камня.html.vue' /* webpackChunkName: "pages/каталог/столешницы/столешницы-из-натурального-камня.html" */))
const _0dc07933 = () => interopDefault(import('..\\pages\\каталог\\столешницы\\столешницы-из-натурального-кварца.html.vue' /* webpackChunkName: "pages/каталог/столешницы/столешницы-из-натурального-кварца.html" */))
const _4537dca0 = () => interopDefault(import('..\\pages\\каталог\\столы\\ванный-столик.html.vue' /* webpackChunkName: "pages/каталог/столы/ванный-столик.html" */))
const _9e570f4a = () => interopDefault(import('..\\pages\\каталог\\столы\\стол-из-акрилового-камня.html.vue' /* webpackChunkName: "pages/каталог/столы/стол-из-акрилового-камня.html" */))
const _10555954 = () => interopDefault(import('..\\pages\\каталог\\столы\\стол-из-натурального-камня.html.vue' /* webpackChunkName: "pages/каталог/столы/стол-из-натурального-камня.html" */))
const _335ecec2 = () => interopDefault(import('..\\pages\\каталог\\столы\\столы-для-гостинной.html.vue' /* webpackChunkName: "pages/каталог/столы/столы-для-гостинной.html" */))
const _0c7238a3 = () => interopDefault(import('..\\pages\\каталог\\столы\\столы-из-жидкого-камня.html.vue' /* webpackChunkName: "pages/каталог/столы/столы-из-жидкого-камня.html" */))
const _46f6377e = () => interopDefault(import('..\\pages\\каталог\\столы\\столы-из-кварца.html.vue' /* webpackChunkName: "pages/каталог/столы/столы-из-кварца.html" */))
const _25e95f14 = () => interopDefault(import('..\\pages\\каталог\\столы\\столы-обеденные.html.vue' /* webpackChunkName: "pages/каталог/столы/столы-обеденные.html" */))
const _0f237820 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\для-ванной\\_id.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/для-ванной/_id" */))
const _6f76f4a9 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\мойки-из-акрила\\_id.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/мойки-из-акрила/_id" */))
const _f9527940 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\мойки-из-акрилового-камня-для-ванной\\_id.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/мойки-из-акрилового-камня-для-ванной/_id" */))
const _c3698124 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\мойки-из-кварца\\_id.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/мойки-из-кварца/_id" */))
const _11ae4b72 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\мойки-из-кварцевого-камня-для-ванной\\_id.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/мойки-из-кварцевого-камня-для-ванной/_id" */))
const _46e74b21 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\мойки-из-нержавеющей-стали\\_id.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/мойки-из-нержавеющей-стали/_id" */))
const _7c03f966 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\угловые\\_id.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/угловые/_id" */))
const _72b4f544 = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\classic\\_id.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/classic/_id" */))
const _7687ad4f = () => interopDefault(import('..\\pages\\каталог\\интегрированные-мойки\\modern\\_id.vue' /* webpackChunkName: "pages/каталог/интегрированные-мойки/modern/_id" */))
const _b10e7358 = () => interopDefault(import('..\\pages\\каталог\\каталог-кромок\\_id.vue' /* webpackChunkName: "pages/каталог/каталог-кромок/_id" */))
const _a874dac6 = () => interopDefault(import('..\\pages\\каталог\\каталог-плинтусов\\_id.vue' /* webpackChunkName: "pages/каталог/каталог-плинтусов/_id" */))
const _c7674f22 = () => interopDefault(import('..\\pages\\каталог\\столешницы\\_столешницы-из-массива-дерева.html.vue' /* webpackChunkName: "pages/каталог/столешницы/_столешницы-из-массива-дерева.html" */))
const _353d3212 = () => interopDefault(import('..\\pages\\каталог\\столешницы\\столешницы-из-массива-дерева.html.vue' /* webpackChunkName: "pages/каталог/столешницы/столешницы-из-массива-дерева.html" */))
const _1c851d62 = () => interopDefault(import('..\\pages\\каталог\\_пол-из-акрилового-камня.html.vue' /* webpackChunkName: "pages/каталог/_пол-из-акрилового-камня.html" */))
const _4cbcec8a = () => interopDefault(import('..\\pages\\каталог\\пол-из-акрилового-камня.html.vue' /* webpackChunkName: "pages/каталог/пол-из-акрилового-камня.html" */))
const _64840fd8 = () => interopDefault(import('..\\pages\\каталог\\_пол-из-камня.html.vue' /* webpackChunkName: "pages/каталог/_пол-из-камня.html" */))
const _393b33b9 = () => interopDefault(import('..\\pages\\каталог\\пол-из-камня.html.vue' /* webpackChunkName: "pages/каталог/пол-из-камня.html" */))
const _bb38416c = () => interopDefault(import('..\\pages\\каталог\\_пол-из-натурального-камня.html.vue' /* webpackChunkName: "pages/каталог/_пол-из-натурального-камня.html" */))
const _3b7177c5 = () => interopDefault(import('..\\pages\\каталог\\пол-из-натурального-камня.html.vue' /* webpackChunkName: "pages/каталог/пол-из-натурального-камня.html" */))
const _eb639a8a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/%D0%BA%D0%B0%D0%BB%D1%8C%D0%BA%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80",
    component: _6476b5ee,
    name: "калькулятор"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3",
    component: _7729b56d,
    name: "каталог"
  }, {
    path: "/%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B.html",
    component: _7e6d66f4,
    name: "контакты.html"
  }, {
    path: "/%D0%BE-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8.html",
    component: _71b016c2,
    name: "о-компании.html"
  }, {
    path: "/%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D1%8B-%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86-%D0%B8%D0%B7-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _c4ffb7b2,
    name: "отзывы-столешниц-из-камня.html"
  }, {
    path: "/%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D0%BD%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.html",
    component: _0a280177,
    name: "политика-конфенденциальности.html"
  }, {
    path: "/%D1%82%D0%B5%D1%81%D1%82",
    component: _4cc08c8a,
    name: "тест"
  }, {
    path: "/%D1%86%D0%B5%D0%BD%D0%B0-%D0%B7%D0%B0-%D0%BC%D0%B5%D1%82%D1%80-%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B.html",
    component: _06918b02,
    name: "цена-за-метр-столешницы.html"
  }, {
    path: "/1.html",
    component: _305d00a2,
    name: "1.html"
  }, {
    path: "/calc",
    component: _77091bfc,
    name: "calc"
  }, {
    path: "/prices",
    component: _3f64efb1,
    name: "prices"
  }, {
    path: "/tables",
    component: _3cef304c,
    name: "tables"
  }, {
    path: "/%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F/%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D0%B0%D0%BC.html",
    component: _3fd90487,
    name: "информация-партнерам.html"
  }, {
    path: "/%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F/%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D1%8B-%D0%BF%D0%BE-%D1%83%D1%85%D0%BE%D0%B4%D1%83.html",
    component: _8f76f5b2,
    name: "информация-советы-по-уходу.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B1%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B8.html",
    component: _7245fb0d,
    name: "каталог-барные-стойки.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%B7%D0%B4%D0%B5%D0%BB%D0%B8%D1%8F-%D0%B8%D0%B7-%D0%B0%D0%BA%D1%80%D0%B8%D0%BB%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F",
    component: _761f4716,
    name: "каталог-изделия-из-акрилового-камня"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%B7%D0%B4%D0%B5%D0%BB%D0%B8%D1%8F-%D0%B8%D0%B7-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%B0",
    component: _3a157c3c,
    name: "каталог-изделия-из-дерева"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%B7%D0%B4%D0%B5%D0%BB%D0%B8%D1%8F-%D0%B8%D0%B7-%D0%B6%D0%B8%D0%B4%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D0%B0",
    component: _280da0fc,
    name: "каталог-изделия-из-жидкого-гранита"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%B7%D0%B4%D0%B5%D0%BB%D0%B8%D1%8F-%D0%B8%D0%B7-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE-%D0%B0%D0%B3%D0%BB%D0%BE%D0%BC%D0%B5%D1%80%D0%B0%D1%82%D0%B0",
    component: _206be9be,
    name: "каталог-изделия-из-кварцевого-агломерата"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%B7%D0%B4%D0%B5%D0%BB%D0%B8%D1%8F-%D0%B8%D0%B7-%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F",
    component: _6bc20ada,
    name: "каталог-изделия-из-натурального-камня"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8.html",
    component: _1a7ea02d,
    name: "каталог-интегрированные-мойки.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D0%BA%D1%80%D0%BE%D0%BC%D0%BE%D0%BA.html",
    component: _3fe1e973,
    name: "каталог-каталог-кромок.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D0%BF%D0%BB%D0%B8%D0%BD%D1%82%D1%83%D1%81%D0%BE%D0%B2",
    component: _009456f5,
    name: "каталог-каталог-плинтусов"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%BB%D0%B5%D1%81%D1%82%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8-%D1%81%D1%82%D1%83%D0%BF%D0%B5%D0%BD%D0%B8-%D0%B8%D0%B7-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _777cfa83,
    name: "каталог-лестницы-и-ступени-из-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8.html",
    component: _e2d90836,
    name: "каталог-подоконники.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%80%D0%B5%D1%81%D0%B5%D0%BF%D1%88%D0%BD.html",
    component: _19125ce3,
    name: "каталог-ресепшн.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%B5%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B8.html",
    component: _57384f7c,
    name: "каталог-стеновые-панели.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B.html",
    component: _6e6ec163,
    name: "каталог-столешницы.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D1%8B.html",
    component: _cef717fe,
    name: "каталог-столы.html"
  }, {
    path: "/%D1%81%D1%82%D0%B0%D1%82%D1%8C%D0%B8/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D0%B0-%D0%BF%D0%BE-%D0%B8%D0%BD%D0%B4%D0%B8%D0%B2%D0%B8%D0%B4%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%BC-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D0%B0%D0%BC.html",
    component: _ad420cb0,
    name: "статьи-столешница-по-индивидуальным-размерам.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B1%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B8/%D0%B1%D0%B0%D1%80%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B0-%D0%B8%D0%B7-%D0%B6%D0%B8%D0%B4%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _edbede34,
    name: "каталог-барные-стойки-барная-стойка-из-жидкого-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B1%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B8/%D0%B1%D0%B0%D1%80%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B0-%D0%B8%D0%B7-%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _b8c63db8,
    name: "каталог-барные-стойки-барная-стойка-из-натурального-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B1%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B8/%D0%B1%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%B0%D0%BA%D1%80%D0%B8%D0%BB%D0%B0.html",
    component: _374f0608,
    name: "каталог-барные-стойки-барные-стойки-из-акрила.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B1%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B8/%D0%B1%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B0.html",
    component: _132cc7c1,
    name: "каталог-барные-стойки-барные-стойки-из-кварца.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B1%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B8/%D0%B3%D0%B0%D0%BB%D0%B5%D1%80%D0%B5%D1%8F-%D0%B1%D0%B0%D1%80%D0%BD%D1%8B%D1%85-%D1%81%D1%82%D0%BE%D0%B5%D0%BA.html",
    component: _438d5df8,
    name: "каталог-барные-стойки-галерея-барных-стоек.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9",
    component: _745400f0,
    name: "каталог-интегрированные-мойки-для-ванной"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%B0%D0%BA%D1%80%D0%B8%D0%BB%D0%B0.html",
    component: _07e017c8,
    name: "каталог-интегрированные-мойки-мойки-из-акрила.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%B0%D0%BA%D1%80%D0%B8%D0%BB%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9",
    component: _389c62f8,
    name: "каталог-интегрированные-мойки-мойки-из-акрилового-камня-для-ванной"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B0.html",
    component: _36b4628d,
    name: "каталог-интегрированные-мойки-мойки-из-кварца.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9.html",
    component: _abd122de,
    name: "каталог-интегрированные-мойки-мойки-из-кварцевого-камня-для-ванной.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%BD%D0%B5%D1%80%D0%B6%D0%B0%D0%B2%D0%B5%D1%8E%D1%89%D0%B5%D0%B9-%D1%81%D1%82%D0%B0%D0%BB%D0%B8",
    component: _5a29fe79,
    name: "каталог-интегрированные-мойки-мойки-из-нержавеющей-стали"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/%D1%83%D0%B3%D0%BB%D0%BE%D0%B2%D1%8B%D0%B5",
    component: _6a735ba5,
    name: "каталог-интегрированные-мойки-угловые"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/classic",
    component: _6d94a848,
    name: "каталог-интегрированные-мойки-classic"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/modern",
    component: _233a8d27,
    name: "каталог-интегрированные-мойки-modern"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%BB%D0%B5%D1%81%D1%82%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8-%D1%81%D1%82%D1%83%D0%BF%D0%B5%D0%BD%D0%B8-%D0%B8%D0%B7-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F/%D0%BB%D0%B5%D1%81%D1%82%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8-%D1%81%D1%82%D1%83%D0%BF%D0%B5%D0%BD%D0%B8-%D0%B8%D0%B7-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE-%D0%B0%D0%B3%D0%BB%D0%BE%D0%BC%D0%B5%D1%80%D0%B0%D1%82%D0%B0.html",
    component: _365c0260,
    name: "каталог-лестницы-и-ступени-из-камня-лестницы-и-ступени-из-кварцевого-агломерата.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%BB%D0%B5%D1%81%D1%82%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8-%D1%81%D1%82%D1%83%D0%BF%D0%B5%D0%BD%D0%B8-%D0%B8%D0%B7-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F/%D0%BB%D0%B5%D1%81%D1%82%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8%D0%B7-%D0%B0%D0%BA%D1%80%D0%B8%D0%BB%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _72e31f00,
    name: "каталог-лестницы-и-ступени-из-камня-лестницы-из-акрилового-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%BB%D0%B5%D1%81%D1%82%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8-%D1%81%D1%82%D1%83%D0%BF%D0%B5%D0%BD%D0%B8-%D0%B8%D0%B7-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F/%D0%BB%D0%B5%D1%81%D1%82%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8%D0%B7-%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _ee2e9ff4,
    name: "каталог-лестницы-и-ступени-из-камня-лестницы-из-искусственного-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%BB%D0%B5%D1%81%D1%82%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8-%D1%81%D1%82%D1%83%D0%BF%D0%B5%D0%BD%D0%B8-%D0%B8%D0%B7-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F/%D0%BB%D0%B5%D1%81%D1%82%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8%D0%B7-%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _70d4e4bb,
    name: "каталог-лестницы-и-ступени-из-камня-лестницы-из-натурального-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%B0%D0%BA%D1%80%D0%B8%D0%BB%D0%B0.html",
    component: _163efc88,
    name: "каталог-подоконники-подоконники-из-акрила.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%B6%D0%B8%D0%B4%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D0%B0.html",
    component: _4cfd036f,
    name: "каталог-подоконники-подоконники-из-жидкого-гранита.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B0.html",
    component: _23b4cc81,
    name: "каталог-подоконники-подоконники-из-кварца.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _1e150fc7,
    name: "каталог-подоконники-подоконники-из-натурального-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%80%D0%B5%D1%81%D0%B5%D0%BF%D1%88%D0%BD/%D1%80%D0%B5%D1%81%D0%B5%D0%BF%D1%88%D0%BD-%D0%B8%D0%B7-%D0%B0%D0%BA%D1%80%D0%B8%D0%BB%D0%B0.html",
    component: _105d7efc,
    name: "каталог-ресепшн-ресепшн-из-акрила.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%80%D0%B5%D1%81%D0%B5%D0%BF%D1%88%D0%BD/%D1%80%D0%B5%D1%81%D0%B5%D0%BF%D1%88%D0%BD-%D0%B8%D0%B7-%D0%B6%D0%B8%D0%B4%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _23ffb9ba,
    name: "каталог-ресепшн-ресепшн-из-жидкого-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%80%D0%B5%D1%81%D0%B5%D0%BF%D1%88%D0%BD/%D1%80%D0%B5%D1%81%D0%B5%D0%BF%D1%88%D0%BD-%D0%B8%D0%B7-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B0.html",
    component: _3f31c9c1,
    name: "каталог-ресепшн-ресепшн-из-кварца.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%80%D0%B5%D1%81%D0%B5%D0%BF%D1%88%D0%BD/%D1%80%D0%B5%D1%81%D0%B5%D0%BF%D1%88%D0%BD-%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C.html",
    component: _0936cfa8,
    name: "каталог-ресепшн-ресепшн-натуральный-камень.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%B5%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B8/%D0%B3%D0%B0%D0%BB%D0%B5%D1%80%D0%B5%D1%8F-%D1%81%D1%82%D0%B5%D0%BD%D0%BE%D0%B2%D1%8B%D1%85-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B5%D0%B9.html",
    component: _6bb112b8,
    name: "каталог-стеновые-панели-галерея-стеновых-панелей.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%B5%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B8/%D1%81%D1%82%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D1%8C-%D0%B8%D0%B7-%D0%B6%D0%B8%D0%B4%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _78827722,
    name: "каталог-стеновые-панели-стеновая-панель-из-жидкого-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%B5%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B8/%D1%81%D1%82%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D1%8C-%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C.html",
    component: _22bc2f2a,
    name: "каталог-стеновые-панели-стеновая-панель-натуральный-камень.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%B5%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B8/%D1%81%D1%82%D0%B5%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B8-%D0%B8%D0%B7-%D0%B0%D0%BA%D1%80%D0%B8%D0%BB%D0%B0.html",
    component: _2b876fdc,
    name: "каталог-стеновые-панели-стеновые-панели-из-акрила.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%B5%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B8/%D1%81%D1%82%D0%B5%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B8-%D0%B8%D0%B7-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B0.html",
    component: _5a5bbaa1,
    name: "каталог-стеновые-панели-стеновые-панели-из-кварца.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B/%D0%B3%D0%B0%D0%BB%D0%B5%D1%80%D0%B5%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%82-%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86-%D0%B8%D0%B7-%D0%B0%D0%BA%D1%80%D0%B8%D0%BB%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _4729bc0f,
    name: "каталог-столешницы-галерея-работ-столешниц-из-акрилового-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B/%D0%B3%D0%B0%D0%BB%D0%B5%D1%80%D0%B5%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%82-%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86-%D0%B8%D0%B7-%D0%B6%D0%B8%D0%B4%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D0%B0.html",
    component: _a8670fe8,
    name: "каталог-столешницы-галерея-работ-столешниц-из-жидкого-гранита.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B/%D0%B3%D0%B0%D0%BB%D0%B5%D1%80%D0%B5%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%82-%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86-%D0%B8%D0%B7-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B0.html",
    component: _19bb4344,
    name: "каталог-столешницы-галерея-работ-столешниц-из-кварца.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B/%D0%B3%D0%B0%D0%BB%D0%B5%D1%80%D0%B5%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%82.html",
    component: _3a7ea784,
    name: "каталог-столешницы-галерея-работ.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D0%B0-%D0%B8%D0%B7-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F-%D0%B2-%D0%B2%D0%B0%D0%BD%D0%BD%D1%83%D1%8E.html",
    component: _334e2493,
    name: "каталог-столешницы-столешница-из-камня-в-ванную.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8%D0%B7-%D0%B0%D0%BA%D1%80%D0%B8%D0%BB%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _1d2ccb6c,
    name: "каталог-столешницы-столешницы-из-акрилового-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8%D0%B7-%D0%B6%D0%B8%D0%B4%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _db727836,
    name: "каталог-столешницы-столешницы-из-жидкого-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8%D0%B7-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%BA%D1%83%D1%85%D0%BD%D0%B8.html",
    component: _0d9da3d4,
    name: "каталог-столешницы-столешницы-из-камня-для-кухни.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8%D0%B7-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B0.html",
    component: _6cb59f3f,
    name: "каталог-столешницы-столешницы-из-кварца.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8%D0%B7-%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _67a9b585,
    name: "каталог-столешницы-столешницы-из-натурального-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8%D0%B7-%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B0.html",
    component: _0dc07933,
    name: "каталог-столешницы-столешницы-из-натурального-кварца.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D1%8B/%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D0%BA.html",
    component: _4537dca0,
    name: "каталог-столы-ванный-столик.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D1%8B/%D1%81%D1%82%D0%BE%D0%BB-%D0%B8%D0%B7-%D0%B0%D0%BA%D1%80%D0%B8%D0%BB%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _9e570f4a,
    name: "каталог-столы-стол-из-акрилового-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D1%8B/%D1%81%D1%82%D0%BE%D0%BB-%D0%B8%D0%B7-%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _10555954,
    name: "каталог-столы-стол-из-натурального-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D1%8B/%D1%81%D1%82%D0%BE%D0%BB%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%BD%D0%BE%D0%B9.html",
    component: _335ecec2,
    name: "каталог-столы-столы-для-гостинной.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D1%8B/%D1%81%D1%82%D0%BE%D0%BB%D1%8B-%D0%B8%D0%B7-%D0%B6%D0%B8%D0%B4%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _0c7238a3,
    name: "каталог-столы-столы-из-жидкого-камня.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D1%8B/%D1%81%D1%82%D0%BE%D0%BB%D1%8B-%D0%B8%D0%B7-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B0.html",
    component: _46f6377e,
    name: "каталог-столы-столы-из-кварца.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D1%8B/%D1%81%D1%82%D0%BE%D0%BB%D1%8B-%D0%BE%D0%B1%D0%B5%D0%B4%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5.html",
    component: _25e95f14,
    name: "каталог-столы-столы-обеденные.html"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9/:id?",
    component: _0f237820,
    name: "каталог-интегрированные-мойки-для-ванной-id"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%B0%D0%BA%D1%80%D0%B8%D0%BB%D0%B0/:id?",
    component: _6f76f4a9,
    name: "каталог-интегрированные-мойки-мойки-из-акрила-id"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%B0%D0%BA%D1%80%D0%B8%D0%BB%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9/:id?",
    component: _f9527940,
    name: "каталог-интегрированные-мойки-мойки-из-акрилового-камня-для-ванной-id"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B0/:id?",
    component: _c3698124,
    name: "каталог-интегрированные-мойки-мойки-из-кварца-id"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9/:id?",
    component: _11ae4b72,
    name: "каталог-интегрированные-мойки-мойки-из-кварцевого-камня-для-ванной-id"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%BD%D0%B5%D1%80%D0%B6%D0%B0%D0%B2%D0%B5%D1%8E%D1%89%D0%B5%D0%B9-%D1%81%D1%82%D0%B0%D0%BB%D0%B8/:id?",
    component: _46e74b21,
    name: "каталог-интегрированные-мойки-мойки-из-нержавеющей-стали-id"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/%D1%83%D0%B3%D0%BB%D0%BE%D0%B2%D1%8B%D0%B5/:id?",
    component: _7c03f966,
    name: "каталог-интегрированные-мойки-угловые-id"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/classic/:id?",
    component: _72b4f544,
    name: "каталог-интегрированные-мойки-classic-id"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B9%D0%BA%D0%B8/modern/:id?",
    component: _7687ad4f,
    name: "каталог-интегрированные-мойки-modern-id"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D0%BA%D1%80%D0%BE%D0%BC%D0%BE%D0%BA/:id?",
    component: _b10e7358,
    name: "каталог-каталог-кромок-id"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D0%BF%D0%BB%D0%B8%D0%BD%D1%82%D1%83%D1%81%D0%BE%D0%B2/:id?",
    component: _a874dac6,
    name: "каталог-каталог-плинтусов-id"
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B/:%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%88%D0%BD%D0%B8%D1%86%D1%8B-%D0%B8%D0%B7-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%B0.html?",
    component: _c7674f22,
    children: [{
      path: "",
      component: _353d3212,
      name: "каталог-столешницы-столешницы-из-массива-дерева.html"
    }]
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/:%D0%BF%D0%BE%D0%BB-%D0%B8%D0%B7-%D0%B0%D0%BA%D1%80%D0%B8%D0%BB%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _1c851d62,
    children: [{
      path: "",
      component: _4cbcec8a,
      name: "каталог-пол-из-акрилового-камня.html"
    }]
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/:%D0%BF%D0%BE%D0%BB-%D0%B8%D0%B7-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _64840fd8,
    children: [{
      path: "",
      component: _393b33b9,
      name: "каталог-пол-из-камня.html"
    }]
  }, {
    path: "/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/:%D0%BF%D0%BE%D0%BB-%D0%B8%D0%B7-%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F.html",
    component: _bb38416c,
    children: [{
      path: "",
      component: _3b7177c5,
      name: "каталог-пол-из-натурального-камня.html"
    }]
  }, {
    path: "/",
    component: _eb639a8a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
