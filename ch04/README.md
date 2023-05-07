# 4주차 - Backend Dockerfile 생성, docker compose 이용

## 내용

- backend dockerfile 생성 - 간단

- backend와 postgresql 연결하는법 - 네트워크 관련된 내용
    - postgresql Dockerfile 실행 - docker-entrypoint 확인

- case별 연결방법
    - case1 backend(local),  postgresql(docker)
    - case2 backend(local),  postgresql(local)
    - case3 backend(docker), postgresql(local)
    - case4 backend(docker), postgresql(docker)

- case별 해결(우회)방법
    - case1 -p 포트포워딩옵션
    - case2 localhost연결
    - case3 --add-host host.docker.internal:host-gateway 옵션
    - case4
        - case3 + case1
        - docker network

## 과제
aws free tier 아이디 만들어오기 (2FA 꼭 등록할것)
