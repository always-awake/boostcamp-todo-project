## Todo API Documentation

### users
- [ ] 회원가입 
- [ ] 로그인(ok)
- [ ] 로그아웃(ok)
- [ ] 어드민 권한 수정 기능

### users/projects
- [ ] 프로젝트에 대한 권한 수정 기능

### projects
- [ ] 특정 프로젝트 조회
- [ ] 프로젝트 생성
- [ ] 프로젝트 삭제
- [ ] task list 순서 수정

### task lists
- [ ] task list 생성
    - projects의 task_list_order  칼럼이 task list의 pk 추가
- [ ] task list 이름 수정
- [ ] task list 삭제
    - projects의 task_list_order 칼럼이 task list의 pk 삭제
- [ ] task 순서 수정

### task
- [x] task 생성
- [x] task 수정
- [x] task 삭제
    - task list의 task_order 칼럼이 task의 pk 삭제
