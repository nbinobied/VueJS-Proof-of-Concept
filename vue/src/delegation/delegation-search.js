Vue.component('delegation-search', {
    template:
        /*html*/
        `
        <b-container>
            <b-form @submit.prevent="onSearchSubmit">
                <b-row>
                    <b-col>
                        <b-icon icon="search" variant="dark"></b-icon>
                        <p>البحث</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group id="delegate-name-input-div" label="أسم المفوض" label-for="delegate-name-input">
                            <b-form-input id="delegate-name-input" type="text" v-model="query.delegateName"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="delegate-id-input-div" label="رقم الهوية" label-for="delegate-id-input">
                            <b-form-input id="delegate-id-input" type="number" v-model="query.delegateId"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="delegate-number-input-div" label="رقم التفويض" label-for="delegate-number-input">
                            <b-form-input id="delegate-number-input" type="number" v-model="query.delegateNumber"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="delegation-status-input-div" label="حالة الوكالة" label-for="delegation-status-input">
                            <b-form-select id="delegation-status-input" v-model="query.selectedDelegationStatus">
                                <b-form-select-option value="null" disabled>الرجاء اختيار حالة الوكالة</b-form-select-option>
                                <b-form-select-option value="Valid">ساري</b-form-select-option>
                                <b-form-select-option value="Invalid" disabled>غير ساري</b-form-select-option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col><b-button variant="primary" type="submit" class="mt-4">بحث</b-button></b-col>
                </b-row>
            </b-form>
        </b-container>
      `,
    props: {
    },
    data() {
        return {
            query: {
                delegateName: null,
                selectedDelegationStatus: null,
                delegateId: 0,
                delegateNumber: 0
            },
            result: []
        }
    },
    created() {
    },
    methods: {
        getValidationState({ dirty, validated, valid = null }) {
          return dirty || validated ? valid : null;
        },
        onSearchSubmit() {
            console.log(this.query);
            this.$emit('delegation-search-result', this.result);
        },
    },
    computed: {
    }
});

Vue.component("validation-observer", VeeValidate.ValidationObserver);
Vue.component('validation-provider', VeeValidate.ValidationProvider);