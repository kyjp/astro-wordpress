import './style.sass'

const Header = () => {
  return (
    <header>
      <div className="c-header__inner">
        <div>
          <nav>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">News</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <h1>Ekzm</h1>
        </div>
        <div>
          <a href="">Menu</a>
        </div>
      </div>
    </header>
  )
}

export default Header
