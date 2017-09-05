<template>
    <div id="header">
        <i class="icon"></i>
        <h1>{{name}}</h1>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'Chicken Music'
    }
  }
}
</script>
<style lang="stylus">
    @import "../../common/stylus/variable"
    @import "../../common/stylus/mixin"
    #header
        height :44px
        line-height :44px
        color :$color-theme
        text-align :center
        h1
            display :inline-block
        .icon
            display: inline-block
            vertical-align: middle           
            width: 30px
            height: 32px
            bg-image('logo')
            background-size: 30px 32px
        
</style>
