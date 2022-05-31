<template>
  <aside class="aside bg-aside-color d-flex flex-column">
    <div class>
      <div class="logo">
        <h3 class="text-primary fw-bold fs-3 text-center mb-3">YourVictory</h3>
      </div>
      <div>
        <ul class="p-0 list-unstyled mb-0">
          <li class="w-100">
            <router-link
              to="/home"
              class="aside-link p-3 shadow-sm d-flex align-items-center border border-primary rounded-3 mb-3 text-decoration-none justify-content-center justify-content-lg-start"
              exact-active-class="aside-link--active"
            >
              <div class="me-lg-2">
                <BaseSystemIcons name="mainpage" />
              </div>
              <span class="d-lg-inline d-none">Главная</span>
            </router-link>
          </li>
          <li class="w-100">
            <router-link
              to="/user-page"
              class="aside-link p-3 shadow-sm d-flex align-items-center border border-primary rounded-3 mb-3 text-decoration-none justify-content-center justify-content-lg-start"
              exact-active-class="aside-link--active"
            >
              <div class="me-2"><BaseSystemIcons name="check"/></div>
              <span class="text-primary fs-7">awdawd add</span>
            </a>
              <div class="me-lg-2">
                <BaseSystemIcons name="check" />
              </div>
              <span class="d-lg-inline d-none">awdawd add awdawd</span>
            </router-link>
          </li>
          <li class="w-100">
            <router-link
              to="#"
              class="aside-link p-3 shadow-sm d-flex align-items-center border border-primary rounded-3 mb-3 text-decoration-none justify-content-center justify-content-lg-start"
              exact-active-class="aside-link--active"
            >
              <div class="me-lg-2">
                <BaseSystemIcons name="analytics" />
              </div>
              <span class="d-lg-inline d-none">awdawd add</span>
            </router-link>
          </li>
          <li class="w-100">
            <router-link
              to="#"
              class="aside-link p-3 shadow-sm d-flex align-items-center border border-primary rounded-3 mb-3 text-decoration-none justify-content-center justify-content-lg-start"
              exact-active-class="aside-link--active"
            >
              <div class="me-lg-2">
                <BaseSystemIcons name="page" />
              </div>
              <span class="d-lg-inline d-none">awdawd add</span>
            </router-link>
          </li>
          <li class="w-100">
            <router-link
              to="#"
              class="aside-link p-3 shadow-sm d-flex align-items-center border border-primary rounded-3 text-decoration-none justify-content-center justify-content-lg-start"
              exact-active-class="aside-link--active"
            >
              <div class="me-lg-2">
                <BaseSystemIcons name="app" />
              </div>
              <span class="d-lg-inline d-none">awdawd add</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data: () => {
    return {
      wtr1: 'awdawdawd'
    }
  }

}
</script>
