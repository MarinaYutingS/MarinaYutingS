import { Link } from 'react-router-dom';

const Nav = (search, setSearch) => {
    return (
        <nav className="Nav">
            <h1>nav</h1>
            {/* <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Users</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search Users"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form> */}
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/post">User</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav