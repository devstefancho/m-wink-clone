export const menus = [
    {name: ["홈"], url: {path: "/", params: ""}},
    {name: ["과목별 학습"], subMenu: [
            {name: ["한글 국어"], url: {path: "/subject", params: "/kor"}},
            {name: ["수학 연산"], url: {path: "/subject", params: "/math"}},
            {name: ["영어"], url: {path: "/subject", params: "/eng"}},
            {name: ["독서"], url: {path: "/subject", params: "/reading"}},
            {name: ["선택 활동"], url: {path: "/subject", params: "/activity"}},
        ], url: {path: "/subject", params: "/kor"}},
    {name: ["연령별 학습"], subMenu: [
            {name:["4~6세"], url: {path: "/age", params: "/begin"}},
            {name:["7세"], url: {path: "/age", params: "/middle" }},
            {name:["8세"], url: {path: "/age", params: "/high"}}
        ], url: {path: "/age", params: "/begin"}},
    {name: ["유료학습", "br", "신청"], url: {path: "/apply", params: ""}},
    {name: ["윙크선생님", "br", "모집"], url: {path: "/teacher", params: ""}},
]   ;

export const banner= {
    menus: [
        ["<"], ['무료학습 신청'], ['HOME']
    ],
    process: ["배송정보 입력", "아이정보 입력", "학습단계 설정"],
    title: ["무료학습 신청"],
    description: ["학부모님, 배송을 위해 아래의 정보를 입력해 주세요.", "br", "입력한 배송지로 학습전용 단말기와 교재 등이 배송됩니다."],
    label: { parentName: "이름", parent: "양육자 구분", call: "휴대폰 번호", address: "주소"},
    placeholder: { parentName: "학부모 이름 입력", call: "휴대폰번호 입력(-생략)"},
    information: {call: "휴대폰으로 전송된 인증번호를 입력한 후, [인증번호 확인] 버튼을 누르세요.", address: "학습기 및 교재 배송을 위해 정확한 주소를 입력해주셔야 합니다."}
}

export const company= {
    menus: [
        ["<"], ['회사소개'], ['HOME']
    ],
}

export const footer = {
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

