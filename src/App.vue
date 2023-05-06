<template>
    <NavBar />
    <main>
      <RouterView />
    </main>
</template>

<script setup>
  import NavBar from "@/components/Layout/NavBar.vue";
</script>

<style lang="scss">
  @import url('bootstrap/dist/css/bootstrap.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');
  body {
    font-family: 'Open Sans', sans-serif !important;
    background: #f6fff6;
  }

  main {
    margin: 30px 0;
  }

  .form-control {
    font-size: 14px !important;
    &:focus,
    &:active {
      outline: none !important;
      box-shadow: none !important;
    }
    &::placeholder {
      font-style: 13px;
    }
  }

  .form-box {
      label {
          font-size: 14px;
          color: #FFF;
          margin-bottom: 10px;
      }
      .cancel-btn {
          font-size: 14px;
          border-radius: 5px;
          margin: 0 10px;
          background: #dbdcdd;
          border-color: #dbdcdd;
          color: #000000;
          &:hover {
            background: #818181;
            border-color: #818181;
            color: #FFF;
          }
      }
      .btn-add {
          color: #FFF;
          font-size: 14px;
          border-radius: 5px;
      }

      &.bg-green {
        .btn-add {
          background: #1bb970;
          border-color: #1bb970;
          &:hover {
              background: #19613f;
              border-color: #19613f;
          }
        }
      }

      &.bg-lite {
        .btn-add {
          background: #296878;
          border-color: #296878;
          &:hover {
              background: #33616b;
              border-color: #33616b;
          }
        }
      }

    }

</style>
