<script>
import TreeItem from "./TreeItem.vue";
export default {
  components: {
    TreeItem
  },
  props: {
    items: {
      type: Set,
      default: new Set()
    }
  },
  setup(props) {

    const removeItem = (item) => {
      props.items.delete(item);
    }

    return {
      removeItem
    }
  }
}
</script>

<template>
    <div
        class="tree-renderer"
    >
      <div
          v-for="item in items"
          :style="{'margin-left': (item.parent * 30) + 'px'}"
      >
        <tree-item @remove="removeItem" :item="item" :key="item.name + item.id"/>
      </div>
    </div>
</template>

