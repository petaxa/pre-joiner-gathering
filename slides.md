---
highlighter: shiki
css: unocss
colorSchema: light
transition: fade-out
mdc: true
layout: center
lang: ja
title: 内定者懇親会
bgCenter:
  x: 50
  y: 50
  deg: 20
---

# 内定者懇親会

---
bgCenter:
  x: 10
  y: 20
  deg: 150
---

# 自己紹介

<div v-click></div>

<div relative w-full h-full>
  <div w-full absolute inset-x-0 bottom-10 flex="~ col" items-center>
    <img src="/icon.jpg" w-50 rounded-full alt="笑顔でピースしている私"/>
    <p>26卒エンジニア職</p>
    <h3 font-bold>市村 悠馬</h3>
  </div>

  <div absolute top-0 left-30
    v-motion
    :initial="{ x:200, y: 200, opacity: 0 }"
    :click-1="{ x: 0, y: 0, opacity: 1 }"
    :duration="1000">
    <h3>出身</h3>
    <img src="/tsukuba.png" w-30 rounded-full alt="笑顔でピースしている私"/>
    <p>茨城県つくば市</p>
  </div>

  <div absolute right-60
    v-motion
    :initial="{ x:-200, y: 200, opacity: 0 }"
    :click-1="{ x: 0, y: 0, opacity: 1 }"
    :duration="1000">
    <h3>好きなもの</h3>
    <div relative>
      <img src="/h3-fip.png" w-20 rounded-full absolute top-1 alt="笑顔でピースしている私"/>
      <img src="/kashima.jpg" w-20 rounded-full absolute left-19 alt="笑顔でピースしている私"/>
      <img src="/atomic.jpg" w-20 rounded-full absolute left-37 top-5 alt="笑顔でピースしている私"/>
      <img src="/valorant.jpeg" w-20 rounded-full absolute left-48 top-20 alt="笑顔でピースしている私"/>
    </div>
  </div>
  <div absolute right-35 bottom-60
    v-motion
    :initial="{ x:-230, y: 0, opacity: 0 }"
    :click-1="{ x: 0, y: 0, opacity: 1 }"
    :duration="1000">
    <h3>技術</h3>
    <div w-30 relative>
      <img src="/vue.png" h-20 absolute left-10 alt="笑顔でピースしている私"/>
      <img src="/viteplus.png" h-15 absolute top-15 left-25 alt="笑顔でピースしている私"/>
      <img src="/standard.png" h-20 absolute top-25 left-10 alt="笑顔でピースしている私"/>
    </div>
  </div>
  <div absolute left-10 bottom-10
    v-motion
    :initial="{ x:250, y: 0, opacity: 0 }"
    :click-1="{ x: 0, y: 0, opacity: 1 }"
    :duration="1000">
    <h3>BEENOSインターン</h3>
    <p>サマーインターン: Groobee</p>
    <p>内定者インターン: AIX Buygent</p>
  </div>
</div>

---
layout: quote
bgCenter:
  x: 10
  y: 50
  deg: 46
---

# Hello

<div
  v-click="[0,1]"
  v-motion
  :initial="{ x: 0 }"
  :enter="{ x: 0, y: 0 }"
  :click-1="{ x: 0, y: 30 }"
  :click-2="{ y: 60 }"
  :click-2-4="{ x: 40 }"
  :leave="{ y: 0, x: 80 }"
>
  Slidev
</div>
