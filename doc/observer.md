## 옵저버 패턴
### 옵저버 패턴 구조도
![옵저버구조 md](https://user-images.githubusercontent.com/40539104/66619421-dd236c80-ec17-11e9-9f67-a3ab15d788e2.jpeg)
* 뷰
    - 유저 인터렉션으로 인한 데이터 변경 및 초기 데이터 로딩을 위해 컨트롤러 객체 조작
    - 옵저버 구독
        + 구독 시, 이벤트 명, 뷰 객체, 핸들러 함수 등록    
* 컨트롤러
    - 뷰의 호출에 따라 서버에 적절한 요청을 하는 객체
    - 서버에서 받은 데이터를 모델에 저장하는 역할을 하는 객체
* 모델
    - 컨트롤러로부터 데이터를 받으면 옵저버의 noti 함수실행
        + 매개 변수로 이벤트명과 서버로부터 전달받은 데이터를 넘겨줌
* 뷰와 모델 분리하고자 컨트롤러 객체를 구현