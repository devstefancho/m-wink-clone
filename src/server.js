import { createServer } from "miragejs";

const dummy = { users: [{ id: 1, name: "cho" }] }
const menus = [
    {name: "홈"},
    {name: "과목별 학습", subMenu: [
            {name: "한글 국어"},
            {name: "수학 연산"},
            {name: "영어"},
            {name: "독서"},
            {name: "선택 활동"},
        ]},
    {name: "연령별 학습", subMenu: [
            {name: "4~6세"},
            {name: "7세"},
            {name: "8세"}
        ]},
    {name: "유료학습 신청"},
    {name: "윙크선생님 모집"},
];

const footer = {
    copyright: ["(주)단비교육 서울 강남구 대치동 967-5 정우빌딩",
        "대표이사 권영금",
        "사업자 등록번호 629-87-00476",
        "개인정보 책임자 김철영",
        "통신판매업 신고번호 제 2017-서울강남-03262호",
        "Copyright © 2017 Danbi Edu All right reserved.",
    ],
    contact:[
        "윙크 학부모님 공감센터" ,
        "1522-1244",
        "평일 운영시간 : 10:00~20:00",
    ],
    menus: [
        "회사소개", "이용약관", "개인정보처리방침"
    ]
}


let server = createServer();
server.get("/api/menus", menus )
server.get("/api/footer", footer)