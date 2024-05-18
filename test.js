

const aa = /a/gm

let txt = `![image.png](https://cdn.steemitimages.com/DQmZJQwi6ApuJAv9nDTqUTP32DG4ek6a644AoFLHWJcptSj/image.png)

이전시간에 SEO 최적화 방법에 대해서 포스팅을 한적이 있다.

이전포스팅 
* https://steemit.com/hive-101145/@yonggyu01/part-1-2km

해당 포스팅을 작성하면서 기존에 만들었던 windows 프로젝트에 meta 태그등을 추가해서 

SEO 최적화를 해봤다.

이전 프로젝트는 HTML + CSS + Javascript 만을 사용해서 만든 프로젝트였고

HTML파일 내부에 모든 데이터가 존재하기에 

최적화 하기에는 매우 좋은 상황이었다.

그럼 React는 어떨까?

* SPA 앱으로 제작된 React 프로젝트는


![image.png](https://cdn.steemitimages.com/DQmPr42xutj7G9po9jqCJ9XmPAgxkXXW7H44fv6j3YE5eDB/image.png)

이런식으로 비어있는 html파일과 자바스크립트 파일을 클라이언트 측에 전달하여

유저 요청에 의해 필요한 데이터만을 업데이트하여 페이지를 계속 변경해서 보여준다.

화면 깜빡임 없이 매우 부드러운 화면전환이 되어 사용자에게 좋은 사용환경을 제공한다.



검색엔진에서는 HTML파일을 읽어서 분류를 하는데  React같은 SPA 방식으로 개발된 페이지에서는

HTML파일의 내용이 비어있어  자바스크립트까지 전부 검색엔진에서 읽고 해석을 해야한다는 말이 된다.

국내  네이버 같은 검색엔진에서는 SPA로 제작된 페이지를 크롤링 하기 어려운듯 보이나

구글에서는 JS파일을 크롤링하는 기능이 있다고는 한다.

SPA로 제작된 홈페이지를 노출을 시켜주는지는 모르겠으나 이렇게 구글 검색엔진에 SEO 최적화를 하는 방법이 있다고 하여 

React로 만든 SPA 앱을 구글에서 검색최적화시키는 방법에 대해서 적어보려고 한다.


![image.png](https://cdn.steemitimages.com/DQmQZeaQe2B8zyhTBdYY7jy5Nz6NGZXaY6zFHm4XBi3ADXG/image.png)

저번 포스팅에서 작성했던 head 태그에 들어가는 
meta 태그들은 검색결과에 중요한 영향을 미친다.
해당 태그에  SEO 요소들이 있기 때문에 페이지마다 달라지도록 해야하지만 
SPA로 제작된 페이지에서는 head 태그를 업데이트할 수 없지만

이러한 meta태그를 페이지별로 업데이트 해주는 라이브러리가 존재한다.


![image.png](https://cdn.steemitimages.com/DQmTUeGr256AQ21FUQ3s6K9jmDgMWePu5qEGhBDYnyeYH2T/image.png)
 react-helmet은 메타데이터의 설정을 도와주는 라이브러리이다.

SPA의 경우 하나의 html 파일 내부에서 요소들을 렌더링하므로, 각각의 페이지에 맞는 메타데이터를 작성하기 힘들다는 단점 → CSR의 단점인 SEO 최적화 불리


![image.png](https://cdn.steemitimages.com/DQmc2tRWRoEtBfxPMvi2cZ2tAJQXw8hgHuCtDPtYbhbuGYr/image.png)

사용해보기 위해 npm에 가봤더니 

 react-helmet 은 가장 최근 업데이트가 4년 전이고, react-helmet-async이  react-helmet에서 포크되어 나온 라이브러리로 사용법은 거의 동일하고 사용자수도 꾸준하게 늘고있는걸 볼수가 있다.

react-helmet-async 이걸 사용해서 SEO최적화를 해보는게 좋을듯 하다.

이 방식 말고도 다른 방식이 몇가지 존재한다.


![image.png](https://cdn.steemitimages.com/DQmVjkwehU7YrsNuePx4Jwm1FYVi1RZiTnRXsbfVeAapNUf/image.png)

Next.js를 사용해 SSR방식으로 처리하거나
 react-snap 라이브러리를 사용하여 빌드될 때 미리 렌더링을 하는 방식도 있겠다.

SSG(Static Site Generation / Static Rendering) :
배포 시점, 즉 빌드 시에 정적 파일을 생성하는 방식.

오늘은 react-helmet-async 사용해 SEO 최적화 방식을 사용해보도록 하겠다.


![image.png](https://cdn.steemitimages.com/DQmcMxaGSMfGy2NMPCr4A1mkdcAST132ydCuB3NEkXgBszJ/image.png)

사용방법은 단순하다

index.js 혹은 app.js파일에서 최상위 태그를 HelmetProvider 태그로 감싸주고

그 내부에 Helmet 태그 속에 타이틀 태그를 넣어주면 끝이다.
내 프로젝트에 적용시켜 보겠다.


![image.png](https://cdn.steemitimages.com/DQmNidZF2tLgifHjAo3F8K8ekwbaN3Em8ULkpzvppcK2JtD/image.png)

임포트 시킨뒤


![image.png](https://cdn.steemitimages.com/DQmRMLtNHVuGRZ1C3wqzWC598k7Q1GJkqqaNWSguu1Co7T5/image.png)

이런식으로 Helmet 태그 내부에 타이틀을 변경시켜봤다.

리엑트 앱에 Public 폴더에 존재하는 index.html파일에는 이미 Title이 존재한다.


![image.png](https://cdn.steemitimages.com/DQmNRjdof8ZrgDGBYguCwRs9whpYmh45NyBX14dSwVRFu4X/image.png)

이상태에서 어떤식으로 화면에 표시되는지 테스트 해보자


![image.png](https://cdn.steemitimages.com/DQmV4A9Ev8UoJnhW94742HZLmVUpxE1RXpkQSc76kwjC7xD/image.png)

타이틀이 변경되었다는걸 볼 수 있다.

Helmet 으로 메타태그를 수정이 되는데


![image.png](https://cdn.steemitimages.com/DQmWAqyD2YU5A2kFJsWKZiXe8f5FkwB6FpwxXktB4CJe8KC/image.png)


내용을 조금더 추가했다.


![image.png](https://cdn.steemitimages.com/DQmc4mnJy5Qd8X4imu6imEQEYQfTVWKhMgjMPdqc2Arskkm/image.png)

이런식으로 메타태그를 추가하는걸 쉽게 할 수 있다.


여기에 크롤러를 위한 최적화를 추가하면 조금더 나은 페이지로 개선이 가능하다.
![image.png](https://cdn.steemitimages.com/DQmQc3So8w1NspN3mX4s3vUv37i4hCHatDmeF1ppM4nES8E/image.png)

pre-rendered를 위해 사용하는 라이브러리인데

웹 크롤러가 해당 프로젝트를 빠르게 볼 수 있도록  페이지의 모든 요소를 사전로드하는 프로세스를 의미한다

 prerender 서비스는 페이지 요청을 낚아채어 사용자가 크롤러인지 여부를 확인하여 크롤러인 경우 캐시 된 버전의 페이지를 전달한다.

즉, 크롤러를 위한 최적화 작업이다.

참고 : https://github.com/stereobooster/react-snap
 
사용법은 간단한데


![image.png](https://cdn.steemitimages.com/DQmbs9icSg9QLyCpgk61XD6LNNw1z3BW7nbjf5YKmgq9rBw/image.png)

참고 사이트에 적혀있는 내용대로 

해당 내용만 추가해주면 된다.


<hr>
스테픈 2km 완료
휴우

![image.png](https://cdn.steemitimages.com/DQmQgJpH7sXtfijJHdVbwJiLUyg99fAdricwSyUa2v1f8MW/image.png)`

// console.log(txt.replace(/\(.*?\)/,''))
console.log(txt.replace(/<hr>.*$/gm, ''))  

