<template>
  <div id="top" class="wrapper">
    <div class="mobile-block" v-if="$store.state.ismobile == 'smartphone'">
          <MobileMenu />
      </div>
    <main>
      <div id="menu">
        <div class="container no-padding" v-if="$store.state.ismobile == 'pc'">
          
        </div>
      </div>
      <div class="container">
          <div class="row" id="content-wrapper">
            
            <div class="col-xs-12 col-sm-12 col-md-12 main-container">
            <nuxt />
            </div>
          </div>
        </div>
    </main>
    <div v-if="$store.state.ismobile == 'pc'">
     
    </div>
    <div class="container mobile-block" v-if="$store.state.ismobile == 'smartphone'">
      <MobileFooter />
    </div>
  </div>
</template>

<style>
#menu {
    background: none;
}
.no-padding {padding:0;}
@media (min-width: 768px){
#menu {
    background: url(../assets/img/aside-back-top.jpg) repeat-x;
    width: 100%;
}
}
.footer-mobile-block{
  width: 100%!important;  
}
.headerMobile{
  max-width: 100%!important;
}
</style>
<script>

  import Header from '@/components/Header'
  import Callback from '@/components/Callback'
  import Aside from '@/components/Aside'
  import Footer from '@/components/Footer'
  import MobileMenu from '@/components/MobileMenu'
  import MobileFooter from '@/components/MobileFooter'
  export default {
  components: {
    Header,
    Callback,
    Aside,
    Footer,
    MobileMenu,
    MobileFooter
  }
}
</script>

