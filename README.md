필수 의존성 설치
npm install express mysql body-parser dotenv
npm install --save-dev nodemon

서버 실행
node server.js
터미널에 MySQL 연결 성공, 서버가 포트 3000에서 시작되었습니다. 메시지가 출력되면 정상입니다.

API 테스트 (Postman 사용):
POST /api/signup
복사
{
    "name": "John Doe",
    "id": "johndoe@email.com",
    "password": "mypassword"
}
GET /api/user/johndoe@email.com

Firebase 전환 대비
API 인터페이스 고정: /api/signup, /api/user/:id 형식의 엔드포인트를 유지.
현재 로컬 MySQL에서 데이터를 저장하고 API를 반환하는 로직과 동일하게 Firebase로의 전환 시 구조를 변경하지 않고 Firebase Authentication 및 Firestore와 통합 가능합니다.