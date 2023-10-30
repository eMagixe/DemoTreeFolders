<script>
import { mdiFolder } from '@mdi/js';
export default {
  setup() {
    return {
      mdiFolder,
    }
  }
}
</script>

<template>
    <svg-icon type="mdi" :path="mdiFolder" :size="28"></svg-icon>
</template>