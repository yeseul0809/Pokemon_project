# 🔥 Pokemon project

## 🖥️프로젝트 소개

- 포켓몬 도감을 보여주는 웹사이트입니다.

<br>

## 🕰️개발 기간

- 24.07.02~ 07.04

<br>

## 📌기능

- 스크롤을 내릴때 포켓몬 리스트를 일정수만 보여주며 무한스크롤이 적용됩니다.
- 특정 포켓몬을 클릭시 디테일 페이지로 이동하여 상세정보를 보여줍니다.
- 선택된 포켓몬 캐릭터의 이름에 맞는 title 이 적용됩니다.
- 디테일 페이지에서 리스트로 돌아 갈 수 있습니다.

<br>

## 💠기술스택

- NEXT.JS
- TAILWINDCSS
- TYPESCRIPT

<br>

## ✔️주요기능
- 메인페이지
<img src="https://github.com/yeseul0809/Pokemon_project/assets/166012944/5a74b7e0-d2a1-4863-b12c-3e7567bc0ce7" width="800" height="450">

<br>
<br>

- 상세페이지
<img src="https://github.com/yeseul0809/Pokemon_project/assets/166012944/9cf7b177-b45d-4973-ac70-46d8c5d81a9d" width="800" height="450">
<img src="https://github.com/yeseul0809/Pokemon_project/assets/166012944/c1cedab9-26c1-4b81-b6a2-fcd005ab3b0c"  width="800" height="450">

<br>
<br>

- 무한스크롤
  
![포켓몬도감 무한스크롤](https://github.com/yeseul0809/Pokemon_project/assets/166012944/968a47c8-5cd9-435f-a8d5-fc932072433d)

<br>

## 🗂️ 폴더구조

```
📦
├─ .eslintrc.json
├─ .gitignore
├─ .vscode
│  └─ settings.json
├─ README.md
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ favicon.ico
│  ├─ next.svg
│  ├─ pokeball.png
│  └─ vercel.svg
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ pokemons
│  │  │     ├─ [id]
│  │  │     │  └─ route.ts
│  │  │     └─ route.ts
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ pokemons
│  │  │  └─ [id]
│  │  │     ├─ layout.tsx
│  │  │     └─ page.tsx
│  │  └─ provider.tsx
│  ├─ components
│  │  └─ PokemonList.tsx
│  ├─ types
│  │  └─ data.ts
│  └─ utils
│     └─ format.ts
├─ tailwind.config.ts
├─ tsconfig.json
└─ yarn.lock
```

<br>
