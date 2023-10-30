<script>
import { mdiRename } from '@mdi/js';
export default {
  setup() {
    return {
      mdiRename,
    }
  }
}
</script>

<template>
    <svg-icon type="mdi" :path="mdiRename" :size="28"></svg-icon>
</template>