
### Frontend build된 파일 실행 방법

1. npm start 명령어는 Node.js 환경에서 실행되는 javaScript 어플리케이션을 시작하는 명령어 보통 npm start 명령어는 프로젝트의 package.json파일에 설정된 start 스크립트를 실행한다.

2. start 스크립트가 실행되면 node.js환경에서 프로젝트를 실해하게된다. 이 과정에서 node.js는 package.json 파일에 설정된 dependencies와 devDependencies를 확인하고 필요한 모듈을 자동으로 설치한다. 이후에 start 스크립트에 설정된 명령어가 실행되어 서버 어플리케이션이 실행된다. 

3. npm build 명령어를 실행하면 보통 프로젝트의 소스 코드를 빌드하여 build 폴더를 생성한다. 이 build 폴더에는 최적화된 코드와 필요한 자원 파일(css, img, font)이 포함되어 있다. 

4. 이 build 폴더를 실행하여 배포용 파일을 생성하거나 로컬에서 어플리케이션을 실행할 수 있다. 


5. 가장 간단한 방법은 node.js의 "http-server"모듈을 이용하는 것이다. 

    * npm install -g http-server
    
    * http-server ./build
    
    -> 이제 브라우저에서 http://localhost:8080 또는 http://127.0.0.18080 주소로 접속해 어플리케이션을 확인할 수 있음. 
    
    <p align="center">
        <img width="1512" alt="스크린샷 2023-04-09 오후 1 31 34" src="https://user-images.githubusercontent.com/65451455/230754760-761660c5-e818-4a51-bcaf-959d21351561.png" width="50%" height="20%">
    </p>
    
    

    
6. http-server는 Node.js환경에서 동작하는 정적 파일 서버이다. 이 모듈은 로컬에서 HTML, CSS, JS파일들을 실행하기 위한 간단한 방법을 제공한다.


7. "http-server"말고도 Apache Http server, Nginx등 다양한 정적 파일 서버를 사용할 수 있다. 
