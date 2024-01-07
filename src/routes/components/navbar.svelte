<script>
  import { base } from "$app/paths";
</script>

<header class="header" id="header">
  <nav class="nav container">
    <a href="" class="nav__logo"> Manasseh.zw </a>

    <div class="nav__menu" id="nav-menu">
      <ul class="nav__list grid">
        <li class="nav__item">
          <a href="{base}/" class="nav__link">
            <i class="bx bx-home"></i> Home
          </a>
        </li>

        <li class="nav__item">
          <a href="{base}/skills" class="nav__link">
            <i class="bx bx-trophy"></i> Skills
          </a>
        </li>

        <li class="nav__item">
          <a href="{base}/education" class="nav__link"
            ><i class="bx bx-book"></i> Education</a
          >
        </li>

        <li class="nav__item">
          <a href="{base}/services" class="nav__link"
            ><i class="bx bx-briefcase"></i> Services</a
          >
        </li>

        <li class="nav__item">
          <a href="{base}/projects" class="nav__link"
            ><i class="bx bx-image"></i> Projects</a
          >
        </li>

        <li class="nav__item">
          <a href="{base}/contact" class="nav__link"
            ><i class="bx bx-phone"></i> Contact</a
          >
        </li>
      </ul>

      <!-- close button -->
      <div class="nav__close" id="nav-close">
        <i class="bx bx-x-circle"></i>
      </div>
    </div>

    <div class="nav__buttons">
      <i class="bx bx-moon change-theme" id="theme-button"></i>

      <div class="nav__toggle" id="nav-toggle">
        <i class="bx bx-menu-alt-left"></i>
      </div>
    </div>
  </nav>
</header>

<style>
</style>
