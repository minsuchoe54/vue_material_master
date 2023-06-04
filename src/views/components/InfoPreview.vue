<template>
  <span v-html="infoData.data.attributes.content_1"></span>
</template>

<script>
export default {
    props:{
        infoData:Object
    },
}
</script>

<style>

</style>