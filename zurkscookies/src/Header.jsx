export default function Header() {
    return (
        <header className="header">
            <img src="vite.svg" width="40px" alt="React logo" />
            <nav >
              <ul className="nav-list">
              <li className="nav-list-item"><a href="/">This is a hyperlink to another page</a></li>
                      <li className="nav-list-item"><a href="/">Link 2</a></li>
                      <li className="nav-list-item"><a href="/">Link 3</a></li>
  
              </ul>
            </nav>
        </header>
    )
  }