<template>
    <header class="header-global">
        <base-nav class="navbar-main navbar-white" type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/datavizsport-solo.png" alt="logo" style="width: 50px; height: 28px;">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/datavizsport-solo.png" alt="logo" style="width: 50px; height: 28px;">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <ul class="navbar-nav ml-lg-auto">
                    <li class="nav-item">
                        <a class="nav-link nav-link-icon" href="#/">
                            <i class="ni ni-cyan ni-world-2"></i>
                            <b>&nbsp;&nbsp;Carte</b>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-icon" href="#/articles">
                            <i class="ni ni-cyan ni-trophy"></i>
                            <b>&nbsp;&nbsp;Top Articles</b>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-icon" href="#/trends">
                            <i class="ni ni-cyan ni-key-25"></i>
                            <b>&nbsp;&nbsp;Top Tendances</b>
                        </a>
                    </li>
                </ul>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton
  }
};
</script>
<style>
</style>
