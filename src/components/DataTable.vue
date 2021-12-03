<template>
  <div class="data-table">
    <div class="data-table__filter">
      <ui-money v-model="moneyFilter" />
    </div>

    <div v-if="isDesktop" class="table__head">
      <div v-for="column in columns" :key="column.prop" :style="{ width: column.width }" class="table__cell">
        {{column.label}}
      </div>
    </div>

    <div v-for="row in rows" :key="row.id" class="data-table-block">
        <div class="table__row">
          <div class="table__cell">
            {{label("id")}}
            {{row.id}}
          </div>
          <div class="table__cell">
            {{label("date")}}
            {{row.date | date}}
          </div>
          <div class="table__cell">
            {{label("name")}}
            {{row.name}}
          </div>
          <div class="table__cell">
            {{label("money")}}
            {{row.money | money}}
          </div>
        </div>
    </div>

    <div class="data-table__paginator">
      <ui-pagination
        v-model="page"
        :pages="pageCount"
      />
    </div>
  </div>
</template>

<script>
export default {

  name: 'DataTable',

  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    page: 1,
    pageSize: 4,
    moneyFilter: 0,
  }),

  computed: {
    pageCount() {
      return Math.ceil(this.rows.length / this.pageSize);
    },
    isDesktop() {
      return window.innerWidth > 768;
    },
  },

  methods: {
    column(prop) {
      return this.columns.find((x) => x.prop === prop);
    },
    label(prop) {
      if (this.isDesktop) return null;
      return this.column(prop).label;
    },
    cellWidth(prop) {
      return this.column(prop).width;
    },
  },
};
</script>
