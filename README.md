# Custom DID with React + Typescript 🌎

DID(Digital Information Display) system with customizing the layout, color and contents

## Goals 💡

- Atomic Design Pattern React App 구현<br />
  (Foundation -> Atomic -> Component -> Template -> Page)
- resizable component 생성
- draggable component 생성

## Updates 📝

- 250102 프로젝트 생성

## Folder Structure 📁

```
src/

+-- assets/
|   +-- font/
|   +-- icon/ (.svg files for icon)
|   +-- background/

+-- foundation/ (definitions of design attributes and values)
|   +-- layout.ts : align, padding, margin, corner radius
|   +-- color.ts : color palette, color theme (surface/text/border/icon/divider)
|   +-- icon.ts : icon size, icon name
|   +-- spacing.ts : spacing sizes (px)
|   +-- typography.ts : font size, font weight, line height

+-- atom/ (default & smallest UI Component)
|   +-- Container.tsx (body container for aligning with grid or flex)
|   +-- Text.tsx (Display, Heading, Title, Body, Lable)
|   +-- Input.tsx (Text Field, Dropdown, Radio, Checkbox...)
|   +-- Icon.tsx

+-- component/ (reusable UI Components having atoms combined)
|   +-- Button.tsx
|   +-- ResizableBox.tsx

+-- template/ (UI Componets for specific context)
|   +-- settings

+-- pages/
|   +-- main
|   +-- settings
.
.
.
```

## Convention

### 1) Naming Conventions 📝

- file, page, component name: PascalCase
- folder name, route path: nocase
- variable, function: camelCase
- constant variable: SCREAMING_SNAKE_CASE
- html tag properties (ex. className, id etc.): skewer-case

#### ❗️주의 
  - 화면 파일명이 길어지는 경우 최대 35자, 영단어 5개까지로 제한.
  - 상세조회 화면 파일은 Detail, 신규등록/수정 화면 파일은 Form으로 끝나는 이름으로 사용.

#### 📚 참고 
[**Airbnb JavaScript Style Guide**](https://github.com/airbnb/javascript)

```
1. Avoid single letter names. Be descriptive with your naming.
  1-1. Also, Avoid Mental Mapping.

2. Use camelCase when naming objects, functions, and instances.

3. Use PascalCase only when naming constructors or classes. (also file name)

...
```

### 2) Commit Messages 💬

|태그|설명|
|---|----|
|`feat: `|기능 추가|
|`fix: `|버그를 고친 경우 🛠|
|`refactor: `|프로덕션 코드 리팩토링 |
|`comment: `|필요한 주석 추가 및 변경 💬|
|`chore: `|빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) ⚙️|
|`docs: `|문서를 수정한 경우 📝|
|`style: `|CSS 등 사용자 UI 디자인 변경 🎨|
|`rename: `|파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 ✍️|
|`remove: `|파일을 삭제하는 작업만 수행한 경우 🗑️|



## Getting Started 🚀

This project was bootstrapped with [Create React App(CRA)](https://github.com/facebook/create-react-app).

**Node.js 설치 필수**

```
npm install npx -g
npx create-react-app custom-did-react-ts --template typescript
npm i styled-components
```

## Quick Start 🚀

### 1. clone project & install modules

```
git clone https://github.com/LotteRsp/RSP_2.0_DesignSystem.git
npm install
```

### 2. start react app (web app)

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. build

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
