<p align="middle" >
  <img width="200px;" src="./src/images/subway_emoji.png"/>
</p>
<h2 align="middle">level1 - 지하철 노선도 관리 SPA</h2>
<p align="middle">Browser History API를 이용해 구현하는 지하철 노선도 관리 SPA</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>

# 🔥 Projects!

<p align="middle">
  <img src="./src/images/readme/subway_app_preview.png">
</p>

## 🎯 step1

### Webpack을 통한 번들링

- [x] Webpack에서 babel을 설정한다.
- [x] 기타 플러그인 및 설정은 본인이 필요에 따라 추가한다.

### 라우팅 기능

- [x] Browser History Api를 이용하여 SPA처럼 라우팅을 적용한다.
  - [x] 첫 페이지의 URL은 `/`이다.
  - [x] [역 관리] 메뉴의 URL은 `/stations`이다.
  - [x] [노선 관리] 메뉴의 URL은 `/lines`이다.
  - [x] [구간 관리] 메뉴의 URL은 `/sections`이다.
  - [x] [전체 보기] 메뉴의 URL은 `/map`이다.
  - [x] [길 찾기] 메뉴의 URL은 `/search`이다.
  - [x] [로그인] 메뉴의 URL은 `/login`이다.
  - [x] [회원가입] 메뉴의 URL은 `/signup`이다.

### 회원 기능

- [x] 유저는 회원 가입을 할 수 있다,
  - [x] 회원 가입시 받는 정보는 `email`, `name`, `password`이다.
- [x] 유저는 로그인 할 수 있다.
  - [x] 로그인한 유저만, 서비스에 접근이 가능하다.
  - [x] 로그인하지 않은 유저에게는 로그인 페이지로 리다이렉트 된다.
  - [x] 로그인하면 `/` 루트 페이지로 이동한다.
- [x] 유저는 로그아웃할 수 있다.
  - [x] 로그아웃하면 `/login` 로그인 페이지로 돌아온다.

### UI/UX

- [x] 입력 폼이 보여질 때, autofocus 되도록 한다.
- [x] 버튼에 hover하거나 focus 되었을 때의 스타일을 적용한다.
- [x] 꼭 입력해야하는 폼에는 required 속성을 적용한다.
- [x] form 안에 들어있는 제출 버튼은 `type="submit"`을 적용한다.

## 🎯🎯 step2

### 지하철역 관리 기능

- [ ] 지하철역을 등록할 수 있다.
  - [ ] 지하철역은 2글자 이상이어야 한다.
  - [ ] 엔터키 또는 마우스 클릭으로 역을 추가할 수 있어야 한다.
  - [ ] 지하철역의 이름은 최대 20자 이하이다.
  - [ ] 중복된 지하철역은 추가할 수 없다.
- [ ] 지하철역의 이름을 수정할 수 있다.
  - [ ] 수정하는 UI는 modal을 이용하여 수정할 수 있게 한다.
- [ ] 지하철역을 삭제할 수 있다.
  - [ ] 삭제 시 confirm을 이용하여 한 번 더 유저가 확인할 수 있어야 한다.
  - [ ] 이미 노선에 등록된 역인 경우 삭제할 수 없다.

### 지하철 노선 관리 기능

- [ ] 지하철 노선을 등록할 수 있다.
  - [ ] 지하철 노선의 이름은 2글자 이상이어야 한다.
  - [ ] 중복된 지하철 노선 이름이 등록될 수 없다.
  - [ ] 지하철 노선의 이름은 최대 10자 이하이다.
- [ ] 지하철 노선을 수정 수 있다.
  - [ ] 지하철 노선의 이름, 첫차 시간, 막차 시간, 간격, 색상을 수정할 수 있다.
- [ ] 지하철 노선을 삭제할 수 있다.
  - [ ] 삭제 시 confirm을 이용하여 한 번 더 유저가 확인할 수 있어야 한다.
- [ ] 지하철 노선을 조회 할 수 있다.
  - [ ] 지하철 노선을 클릭하면 modal로 첫차 시간, 막차 시간, 간격을 확인할 수 있다.
  - [ ] 해당 UI는 스스로 구현한다.

### 지하철 구간 관리 기능

- [ ] 지하철 노선에 구간을 추가, 수정, 삭제할 수 있다.
- [ ] 구간 조회 시, 노선을 변경하면 해당 노선의 Color로 Select 엘리먼트의 배경색을 변경한다.

## 🎯🎯🎯 step3

### 전체보기 기능

- [ ] 노선의 상행 종점부터 하행 종점까지 연결된 순서대로 노선과 역 목록을 조회할 수 있다.
- [ ] 조회를 위한 UI는 스스로 만든다.

### 길찾기 기능

- [ ] 출발역과 도착역을 입력받아 경로를 조회한다.
- [ ] 경로 조회 시 총 거리, 총 소요 시간을 함께 출력한다.
- [ ] 경로 조회 시 최단 거리 또는 최소 시간 옵션을 선택할 수 있다.
- [ ] 길 찾기를 위한 UI는 스스로 만든다.

<br>

## ⚙️ Before Started

#### <img alt="Tip" src="https://img.shields.io/static/v1.svg?label=&message=Tip&style=flat-square&color=673ab8"> 로컬에서 서버 띄워서 손쉽게 static resources 변경 및 확인하는 방법

로컬에서 웹서버를 띄워 html, css, js 등을 실시간으로 손쉽게 테스트해 볼 수 있습니다. 이를 위해서는 우선 npm이 설치되어 있어야 합니다. 구글에 `npm install` 이란 키워드로 각자의 운영체제에 맞게끔 npm을 설치해주세요. 이후 아래의 명령어를 통해 실시간으로 웹페이지를 테스트해볼 수 있습니다.

```
npm install -g live-server
```

실행은 아래의 커맨드로 할 수 있습니다.

```
live-server 폴더명
```

<br>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/javascript-subway/issues)에 등록해주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-subway/blob/main/LICENSE) licensed.
