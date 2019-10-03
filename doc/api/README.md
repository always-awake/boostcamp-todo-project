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
     + **taskListPk**: task list's pk (String)
     + **content**: task content (String)
 
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
