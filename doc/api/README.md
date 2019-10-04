API Documentation
=================
* **굵은 글씨**로 표시된 Key는 필수값
* 사용자 인증은 passport-local 이용
    - [passport 공식 문서](http://www.passportjs.org/packages/passport-local/)

## API 목록
* User API
* Task API
 
 
 ## Task API
 ### Create task
 > task 생성
 - Request `POST /tasks`
   * Body
     + **projectPk**: task list가 속해있는 project의 Pk
     + **taskListPk**: task list의 pk
     + **content**: task 내용 (String)
 
 - Response `HTTP 201 Created`
 ```js
// success
{
    "msg": "task가 성공적으로 생성되었습니다."
}

// fail 
{
    "msg": "일시적 오류입니다. 다시 시도해주세요."
}
 ```

 ### modify task
 > task 수정
 - Request `PUT /tasks/:taskPk`
   * Body
     + **projectPk**: task list가 속해있는 project의 Pk (유저의 권한을 파악하기 위함)
     + **content**: task 수정할 내용 (String)
 
 - Response `HTTP 200 Ok`
 ```js
// success
{
    "msg": "task가 성공적으로 수정되었습니다."
}

// fail 
{
    "msg": "일시적 오류입니다. 다시 시도해주세요."
}
 ```

 ### remove task
 > task 삭제
 - Request `DELETE /tasks/:taskPk`
   * Body
     + **projectPk**: task list가 속해있는 project의 Pk (유저의 권한을 파악하기 위함)
 
 - Response `HTTP 204 No Content`
 
### check id duplication (validation)
> 아이디 중복 체크
- Request `GET /tasks/validation/?id={userId}`
  
- Response <br>
  
`HTTP 406 Not Acceptable`
```json
{
    "checked_id": "user1",
    "id_duplication": true,
    "msg": "중복된 아이디입니다."
}
```
`HTTP 200 Ok`
```json
{
    "checked_id": "user10",
    "id_duplication": false,
    "msg": "사용 가능한 아이디입니다."
}
```

### sign up
> 유저 회원가입
- Request `POST /users/accounts`
   * Body
     + **uploadImg**: 유저 프로필 파일
     + **id**: 유저 아이디
     + **password**: 유저 비밀번호
     + **name**: 유저 이름
- Response <br>
  
`HTTP 401 Not Unauthorized`
```js
// 중복된 아이디를 이용해 회원가입을 요청할 경우

{
    "message": "사용할 수 없는 아이디입니다."
}
```

`HTTP 201 Created`
```json
{
    "auth_user": {
        "pk": 7,
        "id": "user21",
        "name": "유저11",
        "password": "admin12345",
        "is_superuser": 0
    },
    "msg": "정상적으로 회원가입"
}
```

`HTTP 401 Unauthorized`
```js
// 데이터 베이스 처리 오류 또는 필수필드 request body에 넣지 않았을 경우

{
    "message": "일시적 오류입니다. 다시 시도해주세요."
}
```