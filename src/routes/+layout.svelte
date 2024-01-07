<script>
  import Footer from "./components/footer.svelte";
  import Navbar from "./components/navbar.svelte";
</script>

<Navbar />
<slot />
<Footer></Footer>

<style>
  @import "../css/styles.css";
</style>
