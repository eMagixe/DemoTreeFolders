<script>
import TreeRenderer from "./TreeRenderer.vue";
import IconFolderPlus from "./icons/IconFolderPlus.vue";
import IconFilePlus from "./icons/IconFilePlus.vue";
import { useTreeStore } from "../stores/treeStore";

export default {
  components: {
    TreeRenderer, IconFilePlus, IconFolderPlus
  },
  setup() {
    const { items, addRoot, init } = useTreeStore();

    init();

    return {
      items, addRoot
    }
  }
}
</script>

<template>
  <icon-folder-plus class="icon-button" @click="addRoot('folder')"/>
  <icon-file-plus class="icon-button" @click="addRoot('file')"/>
  <div class="tree-wrapper">
    <tree-renderer :items="items"/>
  </div>
</template>
