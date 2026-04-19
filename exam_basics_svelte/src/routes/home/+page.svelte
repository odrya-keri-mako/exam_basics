<script>
  import { pageID } from '$lib/stores/app-state.js';
  console.log(`${pageID} controller...`);
</script>

<div class="container h-100 scale-in">
  <div class="row h-100 align-items-center">
    <h1 class="text-center text-small-caps display-1 page-title">
      <i class="fa-solid fa-house me-1"></i>
      <span>Kezdőoldal</span>
    </h1>
  </div>
</div>

<style>
  .page-title {
    color: red;
  }
</style>