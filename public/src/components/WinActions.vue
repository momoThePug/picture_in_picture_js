<template>
  <nav id="win-action">
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="right">
        <li><a href="sass.html">
            <i class="large material-icons">close</i>
            </a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
   nav {
       display: none;
       height: 15px;
       background-color: #454545;
   }

   nav i {
       line-height:18px;
       font-size: 11px;
   }
</style>

<script>
     $(document).on({
         mouseenter:function(){
             $("#win-action").show();
         },
         mouseleave:function(){
            $("#win-action").hide();
         }
     });
</script>