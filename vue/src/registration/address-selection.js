Vue.component('address-selection', {
  template:
    /*html*/
    `
        <b-container>
          
            <b-table responsive striped hover :items="addresses" id="address-table"
                    :per-page="perPage" :current-page="currentPage" :fields="fields">
                <template v-slot:cell()="{ value, item, field: { key }}">
                    <template>{{ value }}</template>
                </template>

                <template v-slot:cell(actions)="row">
                    <b-form-radio v-model="selectedAddress" :value="row.item" @input="onSubmit()"></b-form-radio>
                </template>
            </b-table>

            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" 
                            aria-controls="address-table"></b-pagination>

            <div><strong>{{ selectedAddress }}</strong></div>
        </b-container>
      `,
  data() {
    return {
      selectedAddress: null,
      perPage: 3,
      currentPage: 1,
      addresses: [{
        id: 0,
        buildingNumber: 1234,
        streetName: "الحارث بن عمرو",
        district: "السويدي",
        city: "الرياض",
        postalCode: 12345,
        additionalNumber: 1234
      },
      {
        id: 1,
        buildingNumber: 4321,
        streetName: "شارع السويدي",
        district: "السويدي",
        city: "الرياض",
        postalCode: 54321,
        additionalNumber: 4321
      }
      ],
      fields: [{
        key: 'buildingNumber',
        label: 'رقم المبنى',
        sortable: true
      },
      {
        key: 'streetName',
        label: 'أسم الشارع',
        sortable: true
      },
      {
        key: 'district',
        label: 'الحي',
        sortable: true
      },
      {
        key: 'city',
        label: 'المدينة',
        sortable: true
      },
      {
        key: 'postalCode',
        label: 'الرمز البريدي',
        sortable: true
      },
      {
        key: 'additionalNumber',
        label: 'الرقم الإضافي',
        sortable: true
      },
      {
        key: 'actions',
        label: ''
      }
      ]
    }
  },
  async created() {
    //fetch national addresses
  },
  computed: {
    rows() {
      return this.addresses.length
    }
  },
  methods: {
    onSubmit() {
      this.$emit('selected-address', this.selectedAddress);
    }
  }
});