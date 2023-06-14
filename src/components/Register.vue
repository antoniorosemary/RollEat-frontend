<template>
  <div>
    <!-- TODO: Add your register form here -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['register']),
    onSubmit() {
      // TODO: Get the user data from the form
      const user = {}
      this.register(user)
    }
  }
}
</script>
