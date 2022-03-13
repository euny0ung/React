React Router
===================
### react router 라이브러리 사용 이유

**SPA란?** 서버에서 새 페이지를 불러오지 않고 현재 페이지의 컴포넌트를 통해 동적으로 작동하여 클라이언트와 소통하는 웹 어플리케이션. url path가 아닌 state로 관리한다.
SPA를 사용하면 몇가지 문제점이 발생한다. 특정 페이지를 즐겨찾기로 등록하기 어렵고, 뒤로가기를 누르면 해당 페이지 안에서 이동하는 것이 아닌 다른 웹사이트로 이동한다. 또한, 새로고침하면 사      용중이던 컴포넌트가 아닌 최초에 렌더링 된 컴포넌트로 이동한다. 이 문제를 해결하기 위해 사용하는 것이 리액트 라우터 라이브러리이다.

**react router 사용시 이점**
앱에서 발생하는 라우팅이 브라우저 내장 API와 완벽하게 연동된다. 따라서 url path로 라우팅이 가능함과 동시에 페이지는 SPA 동작을 하게 된다.

**react router의 핵심 컴포넌트**
<Link>
  html의 <a>와 비슷한 기능이다. Link to=''는 a href="" 와 비슷하게 이동 경로를 지정한다.
<Route>
  Link to가 현재 주소창을 가리키는 경우 보여줄 컴포넌트를 지정한다. ex) <Route path='/First' component={First} /> 이때 path에는 경로, component에는 매치되었을때 보여줄 컴포넌트를 할당한다.
<Router>
  <Route>와 <Link>를 묶어주는 기능이다. <Route>와 <Link> 컴포넌트는 DOM 트리 상에서 반드시 <Router>를 공통 상위 컴포넌트로 가진다.
  *ex) <Router>
      <header>
        <Link to="/">Home</Link>
        <Link to="/sub">SUb Page</Link>
        <Link to="/profile">Profile</Link>
      </header>
      <Route path="/" exact component={Home} />
      <Route path="/sub" component={SubPage} />
      <Route path="/profile" component={Profile} />
    </Router>*
