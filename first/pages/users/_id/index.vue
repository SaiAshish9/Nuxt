<template>
  <div>
    <h1>{{ $route.params.id }}</h1>

  </div>
</template>

<script>
export default {

validate(data){
return /^\d+$/.test(data.params.id)
// return data.params.id==1
// return true
},

}
</script>