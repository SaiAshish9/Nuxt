<template>
  <header class="header">
    <ul class="nav-items">
      <li>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users">
          Users
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}

.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}

.nav-items a{
  text-decoration:none;
  color: #333;
}

.nav-items a:active{
  text-decoration:none;
  color: red;
}


</style>
