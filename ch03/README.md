# 3주차 - Frontend Dockerfile 제작

### 3주차 - Frontend Dockerfile 더 잘짜보기

- Runtime과 BuildTime
    - Dockerfile에서 Runtime 조건이 추가되어야한다면?
    - 스크립트에 대해서 signal handling 작동여부 검사
- tini에 대해
    - Root process 와 signal handling
    - trap
    - tini
- Dockerfile cache에 대해서
    - layer
- multi stage build란?
    - 용량 => apt install을 예시로 작성요령설명
    - alpine이란?
    - M1 mac에서의 환경설정.... (DOCKER_DEFAULT_PLATFORM=linux/amd64)
- cache, multi stage build, tini까지 포함된 Dockerfile제작해보기
- gosu와 tini에 대해
    - Dockerfile의 USER 명령어
    - 권한 및 gosu란? 권한드랍이란?
- docker-entrypoint.sh파일 제작
    - entrypoint란? + 예시
    - 간단한 쉘스크립트
    - gosu 포함하여 추가작성
    - docker서비스를 긴급 재시작할수있도록 만드는 trick

## 과제

- CMD와 ENTRYPOINT의 차이점은?
- 기존파일 nginx버전도 수정해보기
