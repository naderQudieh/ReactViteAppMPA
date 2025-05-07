export default function Header() {
    return (
        <header style={{
            backgroundColor: '#1a1a1a',
            color: 'white',
            padding: '1rem',
            marginBottom: '2rem'
        }}>
            <div id="loading-indicator">
                <div id="loading">  </div>
            </div>
            <nav> 
                <a href="/src/pages/home/index.html" style={{ color: 'white', marginRight: '1rem' }}>Home</a>
                <a href="/src/pages/dashboard/index.html" style={{ color: 'white' }}>Dashboard</a>
            </nav>
        </header>
    )
}