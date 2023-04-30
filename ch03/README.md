# 3주차 - Frontend Dockerfile 제작

### 3주차 - Frontend Dockerfile 더 잘짜보기

- Runtime과 BuildTime
    - Dockerfile에서 Runtime 조건이 추가되어야한다면?
    - 스크립트에 대해서 signal handling 작동여부 검사
    - exec란?
- tini에 대해
    - Root process 와 signal handling
    - trap
    - tini
- Dockerfile cache에 대해서
    - layer
    - RUN 에따른 용량차이 - apt를 이용해 체크해보기
- multi stage build란?
    - 이미지 크기 줄이기
    - alpine이란?
    - M1 mac에서의 환경설정.... (DOCKER_DEFAULT_PLATFORM=linux/amd64)
- cache, multi stage build, tini까지 포함된 Dockerfile제작해보기
- gosu와 tini에 대해
    - Dockerfile의 USER 명령어
    - 권한 및 gosu란? 권한드랍이란?
- docker-entrypoint.sh란?
    - entrypoint란? + 예시 [nodejs](https://github.com/nodejs/docker-node)

## 과제
- 기존파일 nginx버전도 Dockerfile도 최대한 수정해보기
- 주어진 문서 읽어보기
    - [컨테이너 빌드에 대한 권장사항](https://cloud.google.com/architecture/best-practices-for-building-containers?hl=ko)
    - [avoid_running_as_root](https://cloud.google.com/architecture/best-practices-for-operating-containers?hl=ko#avoid_running_as_root)
    - [vercel의 dockerfile예제](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile)
