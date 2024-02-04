<template>
  <div>
    Masjid Info
  </div>
</template>
<script>
import Get from "@/api/http-get"

export default {
  data() {
    return {
      masjidInfo: {
        Id: "",
        MasjidName: "",
        MasjidAddress: "",
        City: "",
        Province: "",
        BkmPic: "",
        BkmPhone: ""
      },
    };
  },
  async mounted(){
    this.getMasjidInfo()
  },
  methods:{
    async getMasjidInfo(){
        this.masjidInfo = (await Get.masjidInfo()).data
        console.log('masjidInfo', this.masjidInfo)
    }
  }
};
</script>
<style></style>
