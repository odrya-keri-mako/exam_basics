<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';
  import AppHeader from '$lib/components/AppHeader.svelte';
  import AppFooter from '$lib/components/AppFooter.svelte';
  import { pageID } from '$lib/stores/app-state.js';

  let { children } = $props();

  function syncPageID() {
    const path = page.url.pathname;

    if (path === '/home') pageID.set('home');
    else if (path === '/page1') pageID.set('page1');
    else if (path === '/page2') pageID.set('page2');
    else pageID.set('home');
  }

  onMount(async () => {
    await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    syncPageID();
  });

  afterNavigate(() => {
    syncPageID();
  });
</script>

<div class="app-container position-relative 
						d-flex flex-column vh-100 
						overflow-x-hidden overflow-y-auto">
  <AppHeader />
  <main class="position-relative flex-fill">
    {@render children()}
  </main>
  <AppFooter />
</div>