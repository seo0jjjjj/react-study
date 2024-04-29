import './MyPage.css'


const CorepageStyles = {
    corePageStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // 화면 전체 높이를 차지
        backgroundColor: 'lightgrey', // 사이드 회색 배경

    },
    centralContentStyle: {
        width: '800px', // 중앙 영역의 가로 너비
        height: '1000px',// 중앙 영역의 세로 너비
        backgroundColor: 'white', // 중앙 영역의 배경색
        padding: '20px 0px', // 내부 여백
    },
    sideContentStyle: {
        flex: '1', // 나머지 영역을 균등하게 나눔
        backgroundColor: '243243243', // 사이드 회색 배경
        height: '100%', // 높이를 화면 전체로
    },
};


export const MyPage = () => {
    return (
        <div style={CorepageStyles.corePageStyle}>
            <div style={CorepageStyles.centralContentStyle}>
                <ul>
                    <li><div><span> 내가 작성한 글 보기 </span></div></li>
                    <li>내가 작성한 댓글 보기</li>
                    <li>댓글 보기</li>
                    <li>회원 정보 수정</li>
                </ul>
            </div>
        </div>
    )
}