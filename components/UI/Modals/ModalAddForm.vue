<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" >

      <b-form-group
        id="input-group-3"
        :label="$t('TypeOfEquipment')"
        label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.TypeOfEquipment"
          :options="base"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        :label="$t('SerialNumber')"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.SerialNumber"
          :placeholder="$t('CompleteTheField')"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        :label="$t('Note')"
        label-for="input-2"
      >
        <b-form-textarea
          id="input-2"
          v-model="form.Note"
          :placeholder="$t('CompleteTheField')"
          required
        ></b-form-textarea>
      </b-form-group>

        <div class="form-buttons">
          <b-button type="submit" variant="primary">{{ $t('Submit') }}</b-button>
          <b-button type="reset" variant="danger"> {{ $t('Reset') }} </b-button>
        </div>
    </b-form>

    <b-spinner v-else class="spinner" />
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "ModalAddForm",

  data() {
    return {
      form: {
        TypeOfEquipment: null,
        SerialNumber: '',
        Note: '',
      },
      base: [{ text: this.$t('SelectField'), value: null }],
      show: true
    }
  },

  computed: {
    ...mapGetters('dropdownData',['getDropdownData'])
  },

  methods: {
    ...mapActions('dropdownData',['getDropdownDataAction']),
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.SerialNumber = ''
      this.form.Note = ''
      this.form.TypeOfEquipment = null
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },

  created() {
    this.getDropdownDataAction()
    this.base.push(...this.getDropdownData)
  }
}
</script>

<style scoped>
.spinner{
  flex: 1;
  margin-left: 45%;
}
.form-buttons{
  display: flex;
  justify-content: right;
  gap: 7px;
}
</style>
