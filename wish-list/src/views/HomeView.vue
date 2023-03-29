<template>
  <p>{{ textFromBackend }}</p>
</template>

<script>
import { getHealthCheck } from "../services/healthcheck";

export default {
  name: "HomeView",
  data() {
    return {
      textFromBackend: "",
    };
  },
  async created() {
    try {
      this.textFromBackend = await getHealthCheck().then(
        (result) => result.message
      );
    } catch (error) {
      console.log(error);
      this.textFromBackend = "could not get the text";
    }
  },
};
</script>
<style></style>
