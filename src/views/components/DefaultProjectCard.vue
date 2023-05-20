<template>
  <div class="mb-4 col-xl-3 col-md-6 mb-xl-0 mt-5">
    <div class="card card-blog card-plain">
      <div class="card-header p-0 mt-n4 mx-3">
        <a class="shadow-xl d-block border-radius-xl">
          <img
            :src="image"
            alt="img-blur-shadow"
            class="shadow img-fluid border-radius-xl"
            id="jb-wrap img"
          />
        </a>
      </div>
      <div class="p-3 card-body">
        <a href="javascript:;">
          <h5>{{ title }}</h5>
        </a>
        <p class="mb-2 text-sm text-gradient text-dark">{{ label }}</p>
        <p class="mb-4 text-sm">
          {{ description }}
        </p>
        <div class="d-flex align-items-center justify-content-between">
          <button type="button" class="mb-0 btn btn-sm btn-outline-success" v-on:click="openModalFn('data')"> 수정</button>
          <div class="mt-2 avatar-group">
            <a
              v-for="({ image: authorImage, name }, index) of authors"
              :key="index"
              href="javascript:;"
              class="avatar avatar-xs rounded-circle"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              :title="name"
            >
              <img :alt="authorImage" :src="authorImage" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalForManager ref="myListModalRef"></ModalForManager>
</template>

<script>
import ModalForManager from "./ModalForManager.vue";
export default {
  name: "DefaultProjectCard",
  components:{
    ModalForManager
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Default Project Card",
    },
    description: {
      type: String,
      default: "",
    },
    action: {
      type: Object,
      route: String,
      color: String,
      label: String,
      default: () => {},
    },
    authors: {
      type: Array,
      image: String,
      name: String,
      default: () => [],
    },
  },
  methods:{
    openModalFn(argv) {
        this.$refs.myListModalRef.openModalFnSet(argv);
    },
  }
};
</script>
<style scoped>

#jb-wrap img {

  filter: brightness(30%);
}

</style>
