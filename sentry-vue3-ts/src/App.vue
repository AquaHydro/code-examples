<template>
  <div id="app">
    <button @click="throwError">Throw Error</button>
  </div>
</template>

<script>
export default {
  methods: {
    throwError() {
      throw new Error('Test Sentry Error');
    }
  }
}
</script>
