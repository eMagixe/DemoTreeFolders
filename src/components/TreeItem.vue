<script>
import IconFile from "./icons/IconFile.vue";
import IconFolder from "./icons/IconFolder.vue";
import IconFilePlus from "./icons/IconFilePlus.vue";
import IconFolderPlus from "./icons/IconFolderPlus.vue";
import IconDelete from "./icons/IconDelete.vue";
import IconRename from "./icons/IconRename.vue";
import {ref} from "vue";

export default {
  name: "TreeItem",
  components: {IconFolderPlus, IconFilePlus, IconFile, IconFolder, IconDelete, IconRename},
  props: {
    item: {
      type: Object,
    }
  },
  setup(props) {
    const name = ref("");
    const renameStatus = ref(false);

    const save = () => {
      props.item.setName(name.value);
      renameStatus.value = false;
    }

    return {
      renameStatus, name, save
    }
  }
}
</script>

<template>
    <div class="item-container">
      <div class="item-title">
        <icon-folder v-if="item.type ==='folder'"></icon-folder>
        <icon-file v-if="item.type ==='file'"></icon-file>
        <div v-if="renameStatus === false" class="item-name">
          {{item.name}}
        </div>
        <input v-else type="text" @change="save" v-model="name" />
      </div>
      <icon-rename class="icon-button" @click="renameStatus = true"/>
      <icon-folder-plus class="icon-button" @click="item.addChildItem('folder')"/>
      <icon-file-plus class="icon-button" @click="item.addChildItem('file')"/>
      <icon-delete class="icon-button" @click="$emit('remove', item)"/>
    </div>
    <component :is="item.render" :items="item.childs"/>
</template>

<style scoped>
.item-container {
  display: flex;
  flex-direction: row;
}
.item-title {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 400px;
  text-align: left;
  height: 28px;
  justify-content: flex-start;
  align-items: center;
}
.item-name {
  margin-top: 10px;
  height: 28px;
}
</style>