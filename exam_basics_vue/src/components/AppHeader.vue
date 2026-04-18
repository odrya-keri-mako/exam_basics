<template>
  <nav class="navbar navbar-expand-sm 
              bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler ms-auto"
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
          <li class="nav-item text-small-caps btn-click-effect rounded">
            <RouterLink class="nav-link" to="/home">
              <i class="fa-solid fa-house me-1"></i>
              <span>Kezdőoldal</span>
            </RouterLink>
          </li>

          <li class="nav-item text-small-caps btn-click-effect rounded">
            <RouterLink class="nav-link" to="/page1">
              <i class="fa-solid fa-face-smile-beam me-1"></i>
              <span>Oldal 1</span>
            </RouterLink>
          </li>

          <li class="nav-item text-small-caps btn-click-effect rounded">
            <RouterLink class="nav-link" to="/page2">
              <i class="fa-solid fa-face-grin-tears me-1"></i>
              <span>Oldal 2</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.nav-link.router-link-active {
  text-decoration: underline;
  pointer-events: none;
}
.btn-click-effect:not(.disabled):active {
  animation: btnClickEffect 0.4s;
}
@keyframes btnClickEffect {
  0% { transform: none; }
  50% { transform: scale(0.9); }
  100% { transform: none; }
}
</style>