## w-mobile clone
mobile page를 클론하는 것을 목표로 함.

### structure
크게 header - contents - footer 디렉토리로 구성되어 있음.
```
.
├── README.md
├── dist
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.js       // 전체페이지 Route 및 layout
│   ├── Banner.js    // 하단 무료신청 배너 및 카카오톡 이미지
│   ├── contents
│   │   ├── DetailButton.js             // 과목별 학습의 페이지 넘어가는 버튼 (하단에 위치)
│   │   ├── DisplayBanner
│   │   │   └── DisplayBanner.js        // 무료신청 배너를 눌렀을 때 랜더링되는 페이지
│   │   ├── DisplayCompany              // 회사소개 페이지
│   │   │   └── DisplayCompany.js
│   │   ├── DisplayContents             // 메뉴의 컨텐츠 랜더링
│   │   │   ├── Home.js                 // 홈
│   │   │   ├── HomeCarousel.js         // 홈의 이미지 슬라이더
│   │   │   ├── LearnByAges.js          // 연령별 학습
│   │   │   ├── LearnBySubject.js       // 과목별 학습
│   │   │   ├── Recruit.js              // 윙크 선생님 모집
│   │   │   ├── Registration.js         // 유료학습 신청
│   │   │   └── index.js                // index.js
│   │   ├── TabDivider.js               // main 메뉴와 서브메뉴 사이에 있는 white space
│   │   ├── TabMainMenu.js              // main 메뉴 탭
│   │   ├── TabMenu.js                  // 무료신청, 회사소개에 사용되는 메뉴 탭
│   │   ├── TabSubMenu.js               // sub 메뉴 탭
│   │   ├── TabWrapper.js               // 메뉴 탭의 Wrapper
│   │   └── index.js                    // TabWrapper, DisplayContents의 index.js
│   ├── footer
│   │   └── index.js        // footer 메뉴 및 copyright
│   ├── header
│   │   └── index.js        // wink logo
│   ├── index.js
│   ├── router.js                 // url router 변수들
│   ├── server.js                 // 가상 backend api
│   ├── source                    // database
│   │   └── source.js
│   └── stylesheet
│       └── main.scss             // 공통 css
├── webpack.config.common.js             // 공통 script
├── webpack.config.dev.js                // 개발 script
└── webpack.config.prod.js               // 빌드 script
```
### features

#### webpack 구성
- [x] loader 사용 (style, css, sass, file, babel, html)
- [x] plugin 사용 (HtmlWebpackPlugin)
- [x] common, dev(webpack-dev-server 사용), prod 분할 사용

#### menu 구성
- [x] menu 구성 (menu, sub-menu)
- [x] scroll 이벤트로 메뉴 sticky position 적용
- [x] file-loader로 js내 image import => 과도한 import로 용량이 너무 커짐
- [x] sub menu 선택시 main menu acitive 상태 유지

#### page 구성
- [x] 과제별 학습 페이지 하단에 다음 페이지로 넘어가는 버튼 적용
- [x] scroll 이벤트로 하단에 무료신청배너 및 카카오톡 상담버튼 적용
- [x] page 별 url 라우팅
- [x] Home 화면에 video 슬라이더 적용
- [ ] video slider 썸네일(poster)이 다른페이지를 다녀왔을때 완전 랜더링이 안됨
- [ ] 무료신청 페이지 아래에 있는 신청폼 (작성 중)

#### 기타
- [x] server.js에 가상의 backend api 구성
- [x] source.js에 사용할 데이터베이스 구성
- [x] favicon 적용 (HtmlWebpackPlugin 사용)

#### library 사용
- [x] [CSS] antd, antd-mobile, react-icons
- [x] [FETCH] mirage js
- [x] [ROUTE] react-router-dom

### 고찰 및 재점검
- structure 구성시에 component를(ex. TabMenu) 무리하게 재사용하려다가 오히려 로직이 많이 꼬여서 시간낭비를 많이 함
- menu에 따라 랜더링할때, 초기에 menu id를 state로 받아와서 랜더링하여, 코드가 지저분해짐,
- 또한 Router를 초기에 적용하지 않아 마지막에 Router를 전부 달아주는데에 시간을 많이 소모함.
