import { defineConfig } from "slidev-prerender";

export default defineConfig({
  slidevDist: "./dist",
  outDir: "./dist-prerender",
  port: 3030,
  pages: [
    {
      fileName: "1",
      meta: {
        title: "内定者懇親会",
        description: "26卒エンジニア職・市村悠馬の内定者懇親会での発表スライドです。自己紹介と今後の目標について紹介します。",
        ogImage: "https://petaxa.github.io/pre-joiner-gathering/asstes/slide-imgs/0.png",
      },
    },
    {
      fileName: "2",
      meta: {
        title: "自己紹介 - 内定者懇親会",
        description: "自己紹介。茨城県つくば市出身、宇宙・サッカー・スキー・ゲームが好きです。BEENOSでインターン経験があります。",
        ogImage: "https://petaxa.github.io/pre-joiner-gathering/asstes/slide-imgs/1.png",
      },
    },
    {
      fileName: "3",
      meta: {
        title: "目標: Vueをもっと理解する - 内定者懇親会",
        description: "専門性を高める土台作り、技術選定への貢献、JavaScriptの未来との距離を近づけることを目標にVueの理解を深めます。",
        ogImage: "https://petaxa.github.io/pre-joiner-gathering/asstes/slide-imgs/2.png",
      },
    },
    {
      fileName: "4",
      meta: {
        title: "WHY - 内定者懇親会",
        description: "専門性を高める土台を作りたい、Nuxt2→Nuxt3の技術選定に貢献したい、JavaScriptの未来と近い距離で活動したい理由を説明します。",
        ogImage: "https://petaxa.github.io/pre-joiner-gathering/asstes/slide-imgs/3.png",
      },
    },
    {
      fileName: "5",
      meta: {
        title: "何をやる？ - 内定者懇親会",
        description: "Vueの内部実装を読んで記事を書く、vue-fes-2025-websiteの実装を理解・活用、Vite Environment APIを理解する取り組みを紹介します。",
        ogImage: "https://petaxa.github.io/pre-joiner-gathering/asstes/slide-imgs/4.png",
      },
    },
    {
      fileName: "6",
      meta: {
        title: "進捗 - 内定者懇親会",
        description: "Vueの内部実装記事の執筆完了、ポートフォリオサイト作成完了、Vite Environment APIの学習進行中の進捗状況を報告します。",
        ogImage: "https://petaxa.github.io/pre-joiner-gathering/asstes/slide-imgs/5.png",
      },
    },
    {
      fileName: "7",
      meta: {
        title: "よろしくお願いします！ - 内定者懇親会",
        description: "内定者懇親会のまとめ。市村悠馬の自己紹介と今後の目標についての発表を終了します。",
        ogImage: "https://petaxa.github.io/pre-joiner-gathering/asstes/slide-imgs/6.png",
      },
    },
  ],
});
