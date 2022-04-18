export default function Header(){
    return(
        <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                <img  src="/logo.png" alt="logo" width="60"/>
                <span className="ms-3 fs-4">SuperCode Kino</span>
            </a>
            <a className="nav-link" href="/admin">Admin</a>
        </header>
    )
}