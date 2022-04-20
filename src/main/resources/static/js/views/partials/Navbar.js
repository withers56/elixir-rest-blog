export default function Navbar(props) {
    return `
<!--        <nav class="d-flex justify-content-between">-->
<!--        -->
<!--        <div id="logo">-->
<!--            <a href="#">BlogPostWebsite.com</a>-->
<!--        </div>-->
<!--        -->
<!--        <div id="links" class="">-->
<!--            <a href="/" data-link>Home</a>-->
<!--            <a href="/posts" data-link>Posts</a>-->
<!--            <a href="/about" data-link>About</a>-->
<!--            <a href="/login" data-link>Login</a>-->
<!--            <a href="/register" data-link>Register</a>-->
<!--            <a href="/profile" data-link>Profile</a>-->
<!--        </div>-->
<!--        -->
<!--        </nav>-->
<!--        -->
<!--        <div class="collapse" id="navbarToggleExternalContent">-->
<!--          <div class="bg-dark p-4">-->
<!--            <h5 class="text-white h4">Collapsed content</h5>-->
<!--            <span class="text-muted">Toggleable via the navbar brand.</span>-->
<!--          </div>-->
<!--        </div>-->




            <nav class="navbar navbar-expand-lg navbar-light ">
                  <div class="container-fluid">
                    <a class="navbar-brand" href="#">BlogPostWebsite.com</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a href="/" class="nav-link active" data-link>Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="/posts" class="nav-link active" data-link>Posts</a>
                        </li>
                        <li class="nav-item">
                            <a href="/about" class="nav-link active" data-link>About</a>
                        </li>
                        <li class="nav-item">
                            <a href="/login" class="nav-link active" data-link>Login</a>
                        </li>
                        <li class="nav-item">
                            <a href="/register" class="nav-link active" data-link>Register</a>
                        </li>
                        <li class="nav-item">
                            <a href="/profile"  class="nav-link active" data-link>Profile</a>
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </nav>
















    `;
}