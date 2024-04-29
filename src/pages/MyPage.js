import '../style/MyPage.css'
import { users } from '../domain/userInfo.js'
import Profile from '../componant/Profile'

const user = users[0];


export const MyPage = () => {

    return (
        <div className="MyPage">
            <h1>마이페이지</h1>
            <Profile src={user.src} name={user.name} className="bottom-border" />
            <div>
                <ul className="bottom-border">
                    <li><div><span> 내가 작성한 글 보기 </span></div></li>
                    <li>내가 작성한 댓글 보기</li>
                    <li>댓글 보기</li>
                    <li>회원 정보 수정</li>
                </ul>
            </div>
        </div>
    )
}