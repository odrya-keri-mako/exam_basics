<script>
  import { page } from '$app/state';
</script>

<nav class="navbar navbar-expand-sm bg-body-tertiary sticky-top">
  <div class="container-fluid">
    <button class="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav mx-auto mt-3 mt-sm-0 text-center">

        <!-- Home -->
        <li class="nav-item text-small-caps btn-click-effect rounded">
          <a class:active-link={page.url.pathname === '/home'} 
             class="nav-link" 
             href="/home">
            <i class="fa-solid fa-house me-1"></i>
            <span>Kezdőoldal</span>
          </a>
        </li>

        <!-- Page1 -->
        <li class="nav-item text-small-caps btn-click-effect rounded">
          <a class:active-link={page.url.pathname === '/page1'} 
             class="nav-link" 
             href="/page1">
            <i class="fa-solid fa-face-smile-beam me-1"></i>
            <span>Oldal 1</span>
          </a>
        </li>

        <!-- Page2 -->
        <li class="nav-item text-small-caps btn-click-effect rounded">
          <a class:active-link={page.url.pathname === '/page2'} 
             class="nav-link" 
             href="/page2">
            <i class="fa-solid fa-face-grin-tears me-1"></i>
            <span>Oldal 2</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .nav-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .active-link {
    text-decoration: underline !important;
    pointer-events: none;
  }
  .btn-click-effect:not(.disabled):active {
    animation: btnClickEffect 0.4s;
  }
  @keyframes btnClickEffect {
    0%   { transform: none; }
    50%  { transform: scale(0.9); }
    100% { transform: none; }
  }
</style>