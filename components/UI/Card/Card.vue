<template>
    <b-list-group>
      <b-list-group-item class="table-cell">
        <!-- Naming card -->
        <div class="w-75">
          {{ `${$t('TypeOfEquipment')}: ${typeOfEquipment}` }}

          <hr>

          {{ `${$t('SerialNumber')}: ${serialNumber}` }}
        </div>

        <!-- Icon box -->
        <div class="icons">
          <IconPencil class="icons__edit" @click.native="onEdit()" />

          <IconDelete class="icons__delete" @click.native="onDelete()"/>
        </div>

      </b-list-group-item>
    </b-list-group>
</template>

<script>

import IconPencil from "~/components/icons/IconPencil";
import IconDelete from "~/components/icons/IconDelete";

export default {
  name: "Card",

  components: {IconDelete, IconPencil},

  props: {
    gettersId: {
      type: String,
      required: true
    },
    typeOfEquipment: {
      type: String,
      required: true
    },
    serialNumber: {
      type: String,
      required: true
    },
  },

  methods: {

    onDelete(){
      this.$emit('delete',Number(this.gettersId))
    },

    onEdit(){
      this.$emit('edit',Number(this.gettersId))
    }
  }
}
</script>

<style scoped lang="scss">
.main-card{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.table-cell{
  width: 100%;
  font-size: clamp(10px,4vh, 15px);
  text-align: left;
  display: flex;
  flex-direction: row;
}
.icons{
  width: 25%;
  padding-left: 7%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__edit{
    border-radius: 4px;

    &:hover{
      background-color: gainsboro;
    }
    &:active{
      background-color: grey;
    }
  }
  &__delete{
    border-radius: 4px;

    &:hover{
      background-color: gainsboro;
    }
    &:active{
      background-color: grey;
    }
  }
}

</style>
