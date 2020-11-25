Vue.component('delegate-lookup', {
    template:
        /*html*/
        `
            <b-container>
                <validation-observer ref="observer" v-slot="{ handleSubmit, invalid }">
                    <b-form @submit.prevent="handleSubmit(onSubmit())" id="submit-form">
                        <b-row>
                            <b-col>
                                <validation-provider name="Delegate Id" rules="required|numeric" v-slot="validationContext">
                                    <b-form-group id="delegate-id-input-div" label="رقم الهوية الوطنية للوكيل" label-for="delegate-id-input">
                                        <b-form-input id="delegate-id-input" type="text" v-model="delegateId":state="getValidationState(validationContext)" 
                                                        aria-describedby="delegate-id-input-live-feedback"></b-form-input>
                                        <b-form-invalid-feedback id="delegate-id-input-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                    </b-form-group>
                                </validation-provider>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <validation-provider name="Delegation Number" rules="required|numeric" v-slot="validationContext">
                                    <b-form-group id="delegation-number-input-div" label="رقم الوكالة" label-for="delegation-number-input">
                                        <b-form-input id="delegation-number-input" type="text" v-model="delegationNumber" :state="getValidationState(validationContext)" 
                                                        aria-describedby="delegation-number-input-live-feedback"></b-form-input>
                                        <b-form-invalid-feedback id="delegation-number-input-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                    </b-form-group>
                                </validation-provider>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-button variant="primary" type="submit" :disabled="invalid">تحقق</b-button>
                            </b-col>
                        </b-row>
                    </b-form>
                </validation-observer>
            </b-container>
        `,
    data() {
        return {
            delegateId: null,
            delegationNumber: null,
            delegateInformation: {}
        }
    },
    created() {
    },
    methods: {
        getValidationState({ failed, validated, valid = null }) {
            return failed || validated ? valid : null;
        },
        onSubmit(){
            this.delegateInformation = { id: 0, delegationType: 'عام', delegateName: 'Nasser', idNumber: 123456789, delegationNumber: 987654321, delegationStatus: 'ساري', delegationDescription: 'وكيل', delegationDocument: null, issueDate: '10/10/1010', expirationDate: '12/12/1212' }
            this.$emit('delegate-information', this.delegateInformation);
        }
    },
    computed: {
    }
});

Vue.component("validation-observer", VeeValidate.ValidationObserver);
Vue.component('validation-provider', VeeValidate.ValidationProvider);