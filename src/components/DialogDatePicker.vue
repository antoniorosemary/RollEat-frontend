<template>
  <div>
    <v-dialog 
      v-model="toggle" 
      width="300"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          label="Date"
          outlined
          v-model="selectedDateFormated"
          :class="dialogClass + ' mx-3 py-3'"
          :readonly="true"
          prepend-inner-icon="mdi-calendar-month"
          hide-details="true"
          @click="dialogToggle"
        />
      </template>

      <template v-slot:default>
          <v-date-picker
            v-model="selectedDate"
            :allowed-dates="allowedDates"
            range
          />
      </template>
    </v-dialog>

    <v-date-picker
      :class="fullClass"
      v-model="selectedDate"
      :allowed-dates="allowedDates"
      range
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  data() {
    return {
      toggle: false,
      selectedDate: this.defaultDates,
    }
  },
  props: {
    fullClass:{
      type: String as PropType<string>,
      default: "d-none d-lg-flex"
    },
    dialogClass:{
      type: String as PropType<string>,
      default: "d-flex d-lg-none"
    },
    allowedDates:{
      type: Function as PropType<(val: string) => boolean>,
      default: (val) => true
    },
    defaultDates:{
      type: Array as PropType<Array<string>>,
      default: [
        (new Date(
          Date.now() - (new Date()).getTimezoneOffset() * 60000
        )).toISOString().substr(0, 10)
      ]
    }
  },
  computed: {
    selectedDateFormated() : string {
      if (!this.selectedDate) return "";
      

      var result = this.formatDate(this.selectedDate[0])
      
      if (this.selectedDate.length > 1)
        result += " ~ " + this.formatDate(this.selectedDate[1])

      return result
    }
  },
  methods: {
    formatDate(date : string) : string {
      const [year, mounth, day] = date.split('-');
      return `${day}/${mounth}/${year}`
    },
    dialogToggle() {
      this.toggle = !this.toggle;
    }
  }
})
</script>