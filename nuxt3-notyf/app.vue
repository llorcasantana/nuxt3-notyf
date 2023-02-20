<template>
  <div>
    <button @click="success">Success</button>
    <button @click="warning">Warning</button>
    <button @click="info">Info</button>
    <button @click="error">Error</button>
  </div>
</template>
<script lang="ts" setup>
import useNotyf from "~/composables/useNotyf";

const notyf = useNotyf()
const success = () => {
  notyf.success('This is a success notification')
}
const warning = () => {
  notyf.warning('This is a warning notification')
}
const info = () => {
  notyf.info('This is an info notification')
}
const error = () => {
  notyf.info('This is an error notification')
}
</script>
