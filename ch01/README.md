# 1주차 - 기본 환경설정, docker 기본명령어

~~준비물 : AWS회원가입~~

사이트가서다운
1. iterm
2. oh-my-zsh
3. zsh-autosuggestions

## 내용
- aws ubuntu ec2 instance 설정, ssh 로그인

- Docker, zsh, neovim등 개발환경설정
    - https://docs.docker.com/engine/install/ubuntu/
    - apt install zsh
    - https://ohmyz.sh/#install

- repo관리 및 OT
    - 진행할 내용
    - 과제
    - github pr생성 (github id 요구)

- Docker cli 기본 명령어
    - run / exec / stop / log
        - docker pull
        - docker image ls
        - docker run hello-world
        - docker의 종료시점에 대해 설명
        - docker run -it ubuntu bash
        - image 찾는순서
        - daemon으로 실행 -d (ctrl p + q)
        - docker ps
        - docker exec (세션에 대한 설명, while true; do echo 1; sleep 2; done)
        - docker stop/kill (Root process에 SIGTERM, SIGKILL, rolling 배포방식에서의 gracefully shutdown)
        - docker rm / --rm
        - --name, env, port(포트포워딩) 옵션

- 다음주차 frontend 잠깐 설명
    - react
        - run
        - build

## 과제

- Frontend build된 파일 실행방법조사
- docker명령어 익숙해지도록 연습해보기
