React Router
===================
### react router 라이브러리 사용 이유

**SPA란?**  
서버에서 새 페이지를 불러오지 않고 현재 페이지의 컴포넌트를 통해 동적으로 작동하여 클라이언트와 소통하는 웹 어플리케이션. url path가 아닌 state로 관리한다.
SPA를 사용하면 몇가지 문제점이 발생한다. 특정 페이지를 즐겨찾기로 등록하기 어렵고, 뒤로가기를 누르면 해당 페이지 안에서 이동하는 것이 아닌 다른 웹사이트로 이동한다. 또한, 새로고침하면 사      용중이던 컴포넌트가 아닌 최초에 렌더링 된 컴포넌트로 이동한다. 이 문제를 해결하기 위해 사용하는 것이 리액트 라우터 라이브러리이다.

**react router 사용시 이점**  
앱에서 발생하는 라우팅이 브라우저 내장 API와 완벽하게 연동된다. 따라서 url path로 라우팅이 가능함과 동시에 페이지는 SPA 동작을 하게 된다.

**react router의 핵심 컴포넌트**  
1. Link
  html의 `<a>`와 비슷한 기능이다. `<Link to=''>`는 `<a href="">` 와 비슷하게 이동 경로를 지정한다. 
2. Route
  Link to가 현재 주소창을 가리키는 경우 보여줄 컴포넌트를 지정한다. ex) `<Route path='/First' component={First} />` 이때 path에는 경로, component에는 매치되었을때 보여줄 컴포넌트를 할   당한다. 아래 예시와 같이 to prop에 / 만 입력할 경우, /로 시작하는 모든 url 경로와 매치된다. 즉, 컴포넌트가 url 경로와 상관없이 보여지게된다. 아래의 예시를 보자. 홈페이지에 들어가면       Home, Subpage, Profile 컴포넌트가 모두 렌더링 될 것이다. 따라서 `<Route exact path=~~>`와 같이 작성하는게 좋다.
  ~~react-router v6부터 exact 옵션을 사용하지 않는다. 앞부분만 일치하여도 전부 매칭되던 디폴트 매칭 규칙이 정확히 일치하여야 매칭되는 것으로 바뀌었다. 만약 여러 라우팅을 매칭시키고 싶다면 `<Route path='name/*' />`과 같이 쓰면 된다. (name으로 시작되는 모든 라우팅 매칭.)~~
3. Router
  `<Route>`와 `<Link>`를 묶어주는 기능이다. `<Route>`와 `<Link>` 컴포넌트는 DOM 트리 상에서 반드시 `<Router>`를 공통 상위 컴포넌트로 가진다.
    
 ```
    <Router>
      <header>
        <Link to="/">Home</Link>
        <Link to="/sub">SUb Page</Link>
        <Link to="/profile">Profile</Link>
      </header>
      <Route path="/" component={Home} />
      <Route path="/sub" component={SubPage} />
      <Route path="/profile" component={Profile} />
    </Router>
```


**이 외의 컴포넌트**
1. Switch
   존재하지 않는 경로로 접근하려할 때 에러페이지를 띄우고 싶은 경우에는 다음과 같이 path값이 없는 Route를 사용하면 된다.
   `<Route component={PageNotFound} />`
   하지만 존재하지 않는 경로로 접근하는 경우가 아니더라도 렌더링되는 문제점이 있다. 라우터가 path를 매칭시킬 때, path값이 없기 때문에 무조건 렌더링 해버린다.
   이와 같은 문제를 해결하기위해 Switch를 사용한다. Switch는 여러개가 매칭되어도 가장 먼저 매칭된, 즉 맨 위의 Route만 보여준다.
   _react-router v6부터 Switch 대신 Routes를 사용한다_
3. Not a Found
4. Redirect

**Link vs NavLink**  
네비게이션 바를 만들면서 NavLink라는 걸 알게 되었다.
NavLink는 특정 링크에 스타일을 넣을 수 있는, Link의 special version이라고 할 수 있다. 어떻게 스타일을 적용할 수 있는 걸까?
바로 `activeStyle`과 `activeClassName` 속성을 이용한다. 현재 웹페이지 URL과 NavLink to가 가리키는 경로가 일치하면 activeStyle과 activeClassName이 활성화된다.
