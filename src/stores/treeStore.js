import { shallowRef, ref } from 'vue';
import { defineStore } from 'pinia';
import TreeRenderer from "../components/TreeRenderer.vue";

class Item {
    constructor(id) {
        this.id = id;
        this.childs = new Set();
        this.parent = 0;
        this.render = shallowRef(TreeRenderer);
    }
    setType(type) {
        this.type = type;
        this.name = this.type === 'folder' ? "Dir " + this.id : "File " + this.id;
    }

    setName(name) {
        this.name = name;
    }

    addChildItem(type) {
        const child = new Item(this.id + 1);
        child.parent++;
        child.parent_link = this;
        this.childs.add(child);
        child.setType(type);
        if(child.type === 'folder') {
            child.setName("Dir " + this.id + "-" + this.childs.size);
        }
        if(child.type === 'file') {
            child.setName("File " + this.id + "-" + this.childs.size);
        }

    }
}

export const useTreeStore = defineStore("treeStore", () => {
    const items = ref(new Set());

    const addRoot = (type) => {
        const item = new Item(items.value.size + 1);
        item.setType(type);
        items.value.add(item);
    }

    const init = () => {
        addRoot('folder');
        addRoot('folder');
        addRoot('file');

        items.value.forEach(item => {
            if(item.type === 'folder') {
                item.addChildItem('folder');
                if(item.id === 1) item.childs.forEach(child => {
                    child.addChildItem('file');
                });
                item.addChildItem('file');
            }

        })
    }

    return {
        items, addRoot, init
    }
});