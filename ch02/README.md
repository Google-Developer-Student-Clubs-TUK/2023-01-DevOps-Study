# 2주차 - Frontend Dockerfile 제작

## 내용

- 과제 + a
    - webserver에 대해 설명
    - express로 만든 웹서버 설명
    - graceful shutdown 예시 설명

- Dockerfile 제작방법
    - FROM
    - RUN
    - COPY
    - WORKDIR
    - CMD
    - build 방법
    - 포함하는 파일, .dockerignore

- Frontend Dockerfile 제작
    - FROM, COPY, RUN으로 간단하게 구성ㄴ
    - 실행
    - port -p 옵션
    - signal handling 작동여부 검사 - 3주차에 원인설명 지금은 추측해보기

- nginx webserver에 대해 설명
    - reverse proxy에 대한 설명
    - nginx.conf파일 만들어보기

## 과제

- 3주차 내용이 조금많아서 예습 ( cache, multi stage build )
- 예습한 내용을 가지고 nginx 버전 Dockerfile 직접 제작 해보기

ch02 폴더안에서 Dockerfile을 제작후 \
본인의 git id에 맞는 폴더를 생성한후 완성된 파일을 이동 \

ch02/{githubId} 브랜치 생성후 PR
