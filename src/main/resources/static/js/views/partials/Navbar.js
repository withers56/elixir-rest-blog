export default function Navbar(props) {
    return `
        <nav class="d-flex justify-content-between">
        
        <div id="logo">
            <a href="#">BlogPostWebsite.com</a>
        </div>
        
        <div id="links">
            <a href="/" data-link>Home</a>
            <a href="/posts" data-link>Posts</a>
            <a href="/about" data-link>About</a>
            <a href="/login" data-link>Login</a>
            <a href="/register" data-link>Register</a>
            <a href="/profile" data-link>Profile</a>
        </div>
        
        </nav>
    `;
}