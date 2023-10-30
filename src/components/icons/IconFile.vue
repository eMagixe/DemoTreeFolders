<script>
import { mdiFile } from '@mdi/js';
export default {
  setup() {
    return {
      mdiFile,
    }
  }
}
</script>

<template>
    <svg-icon type="mdi" :path="mdiFile" :size="28"></svg-icon>
</template>
