---
highlighter: shiki
css: unocss
colorSchema: dark
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
  x: 80
  y: 40
  deg: 150
---

# 自己紹介

<div v-click></div>
<div v-click></div>
<div v-click></div>
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
    <img src="/tsukuba.png" w-30 rounded-full alt="つくば市が赤く塗られた茨城県の白地図"/>
    <p>茨城県つくば市</p>
  </div>

  <div absolute right-60
    v-motion
    :initial="{ x:-200, y: 200, opacity: 0 }"
    :click-2="{ x: 0, y: 0, opacity: 1 }"
    :duration="1000">
    <h3>好きなもの</h3>
    <div relative>
      <div absolute top-1 w-20>
        <img class="z-0" src="/h3-fip.png" rounded-full alt="H3ロケット飛行状況表示システムのスクリーンショット" />
        <p class="m-0!">宇宙</p>
      </div>
      <div absolute left-19 w-20>
        <img src="/kashima.jpg" rounded-full alt="鹿島アントラーズのメンバーが試合前にエンジンを組んでいる画像" />
        <p class="m-0!">サッカー</p>
      </div>
      <div absolute top-5 left-37 w-20>
        <img src="/atomic.jpg" rounded-full alt="アトミックのスキー板を履いたプレイヤーがスキーのターンをしている画像" />
        <p class="m-0!">スキー</p>
      </div>
      <div absolute top-20 left-48 w-20>
        <img src="/valorant.jpeg" rounded-full alt="Valorantのプレイ画面" />
        <p class="m-0!">ゲーム</p>
      </div>
    </div>
  </div>
  <div absolute left-10 bottom-10
    v-motion
    :initial="{ x:250, y: 0, opacity: 0 }"
    :click-3="{ x: 0, y: 0, opacity: 1 }"
    :duration="1000">
    <h3>BEENOSインターン</h3>
    <p>サマーインターン: Groobee</p>
    <p>内定者インターン: AIX Buygent</p>
  </div>
  <div absolute right-35 bottom-60
    v-motion
    :initial="{ x:-230, y: 0, opacity: 0 }"
    :click-4="{ x: 0, y: 0, opacity: 1 }"
    :duration="1000">
    <h3>技術</h3>
    <div w-30 relative>
      <img src="/vue.png" h-20 absolute left-10 alt="Vue.jsのロゴ"/>
      <img src="/viteplus.png" h-15 absolute top-15 left-25 alt="viteplusのロゴ"/>
      <img src="/standard.png" h-20 absolute top-25 left-10 alt="EcmaのロゴとW3cのロゴ"/>
    </div>
  </div>
</div>

---
layout: quote
bgCenter:
  x: 10
  y: 15
  deg: 80
---

# 目標: Vueをもっと理解する

---
layout: quote
bgCenter:
  x: 50
  y: 30
  deg: 10
---

# WHY

- 専門性を高める土台を作りたい
- Nuxt2 → Nuxt3, 4<span text-xs> (or Nuxt/Vue → ??? / ??? → Nuxt/Vue)</span>の技術選定に貢献したい
- JavaScriptの未来と近い距離で活動したい

---
layout: two-cols-header
bgCenter:
  x: 40
  y: 70
  deg: 160
---

<div v-click="[1,3]"></div>

# 何をやる？

::left::

<div h-100 flex="~ col" items-center justify-center>
  <ul flex="~ col gap-10">
    <li
      v-motion
      :initial="{opacity:1}"
      :click-1="{opacity:1}"
      :click-2-4="{opacity:0.1}"
    >
      Vueの内部実装を読んで記事をひとつ書く
    </li>
    <li
      v-motion
      :initial="{opacity:1}"
      :click-1="{opacity:0.1}"
      :click-2="{opacity:1}"
      :click-3="{opacity:0.1}"
    >
      vue-fes-2025-websiteの実装を理解し、活用する
    </li>
    <li
      v-motion
      :initial="{opacity:1}"
      :click-1-3="{opacity:0.1}"
      :click-3="{opacity:1}"
    >
      Vite Environment APIを理解する
    </li>
  </ul>
</div>

::right::

<div h-100 flex="~ col" items-center justify-center>
  <v-switch transition="fade">
    <template #1>
      <ul
        v-motion
        :initial="{opacity: 0}"
        :click-1="{opacity: 1}"
        :click-2="{opacity: 0}"
        :leave="{opacity: 1}"
        :duration="600">
        <li>「OptionsAPIはCompositionsAPIを土台にしています！」の意味を確かめる</li>
        <li>ドキュメントの冒頭に書いてあるんだけど、これに固執して深掘りしてみる</li>
      </ul>
    </template>
    <template #2>
      <ul
        v-motion
        :initial="{opacity: 0}"
        :click-2="{opacity: 1}"
        :click-3="{opacity: 0}"
        :leave="{opacity: 1}"
        :duration="600">
        <li>モダンな技術構成、品質の高い設計を吸収する</li>
        <li>吸収した知見をもとにポートフォリオサイトを作る</li>
      </ul>
    </template>
    <template #3>
      <ul
        v-motion
        :initial="{opacity: 0}"
        :click-3="{opacity: 1}"
        :leave="{opacity: 1}"
        :duration="600">
        <li>すべてがViteプラグインになる前に理解したい</li>
        <li>SlidevをSSR化したい</li>
      </ul>
    </template>
  </v-switch>
</div>

---
layout: two-cols-header
bgCenter:
  x: 70
  y: 20
  deg: 20
---

# 進捗

::left::

<div h-100 flex="~ col" items-center justify-center>
  <ul flex="~ col gap-10">
    <li
      v-motion
      :initial="{opacity:1}"
      :click-1="{opacity:1}"
      :click-2-4="{opacity:0.1}"
    >
      Vueの内部実装を読んで記事をひとつ書く<span px2 bg-hex-9dd4a270 rounded>Done!</span>
    </li>
    <li
      v-motion
      :initial="{opacity:1}"
      :click-1="{opacity:0.1}"
      :click-2="{opacity:1}"
      :click-3="{opacity:0.1}"
    >
      vue-fes-2025-websiteの実装を理解し、活用する<span px2 bg-hex-9dd4a270 rounded>Done!</span>
    </li>
    <li
      v-motion
      :initial="{opacity:1}"
      :click-1-3="{opacity:0.1}"
      :click-3="{opacity:1}"
    >
      Vite Environment APIを理解する<span px2 bg-hex-515bd670 rounded>Inprogress</span>
    </li>
  </ul>
</div>

::right::

<div h-100 flex="~ col" items-center justify-center>
<!-- NOTE: これ、v-ifと$clickでもっとスマートに実装できるのでは？ -->
  <v-switch>
    <template #1>
      <div
        v-click="[1,2]"
        v-motion
        :initial="{opacity: 0}"
        :click-1="{opacity: 1}"
        :click-2="{opacity: 0}"
        :leave="{opacity: 1}"
        :duration="600"
      >
        <p>vuejs/coreを読んで記事を一本書いた🎉</p>
        <a href="https://zenn.dev/comm_vue_nuxt/articles/cc9649a445181a" target=”_blank”><img src="/article.png" alt="Zennの記事「「Options API は Composition API を土台にしている」ってどういうこと？」のOG画像"/></a>
      </div>
    </template>
    <template #2>
      <div
        v-motion
        :initial="{opacity: 0}"
        :click-2="{opacity: 1}"
        :click-3="{opacity: 0}"
        :duration="600"
      >
        <p>アーキテクチャをがっつり参考にしてポートフォリオサイトを作成🎉</p>
        <p>参考にしたポイントをまとめて記事にしたい...</p>
        <a href="https://www.petaxa.com/" target=”_blank”><img src="/portfolio.png" alt="筆者のポートフォリオサイトのメインビューのスクリーンショット"/></a>
      </div>
    </template>
    <template #3>
      <div
        v-motion
        :initial="{opacity: 0}"
        :click-3="{opacity: 1}"
        :click-4="{opacity: 0}"
        :duration="600"
      >
        <p>ドキュメントはサラッと読んだ</p>
        <p>slidevに組み込みながら勉強する</p>
      </div>
    </template>
  </v-switch>
</div>

---
layout: center
bgCenter:
  x: 50
  y: 60
  deg: 20
---

# よろしくお願いします！
