<script>
import { mdiDelete } from '@mdi/js';
export default {
  setup() {
    return {
      mdiDelete,
    }
  }
}
</script>

<template>
    <svg-icon type="mdi" :path="mdiDelete" :size="28"></svg-icon>
</template>