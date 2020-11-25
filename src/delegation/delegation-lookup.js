Vue.component('delegation-lookup', {
    template:
        /*html*/
        `
            <b-container>
                <validation-observer ref="observer" tag="form" v-slot="{ invalid }">
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
                    <hr />
                    <b-row>
                        <validation-provider name="Delegation channel" rules="required" v-slot="validationContext">
                            <b-form-group id="delegation-channel-radio-div" label="تفويض عن طريق" label-for="delegation-channel-radio">
                                <b-form-radio-group v-model="selected" id="delegation-channel-radio"
                                :state="getValidationState(validationContext)" aria-describedby="delegation-channel-radio-live-feedback">
                                    <b-form-radio value="moc">وزارة التجارة</b-form-radio>
                                    <b-form-radio value="electronic">التصديق الإلكتروني - مجلس الغرف التجارية</b-form-radio>
                                    <b-form-radio value="delegation">رقم وكالة</b-form-radio>
                                    <b-form-radio value="manual">يدوي</b-form-radio>
                                </b-form-radio-group>
                                <b-form-invalid-feedback id="delegation-channel-radio-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
                    </b-row>
                    <b-row>
                        <div v-if="selected=='moc'">
                        moc
                        </div>
                        <div v-else-if="selected=='electronic'">
                            <b-row>
                                <b-col>
                                    <validation-provider name="Membership Number" rules="required|numeric" v-slot="validationContext">
                                        <b-form-group id="membership-number-input-div" label="رقم العضوية" label-for="membership-number-input">
                                            <b-form-input id="membership-number-input" type="text" v-model="membershipNumber":state="getValidationState(validationContext)" 
                                                            aria-describedby="membership-number-input-live-feedback"></b-form-input>
                                            <b-form-invalid-feedback id="membership-number-input-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </validation-provider>
                                </b-col>
                                <b-col>
                                    <validation-provider name="Document Number" rules="required|numeric" v-slot="validationContext">
                                        <b-form-group id="document-number-input-div" label="رقم الوثيقة" label-for="document-number-input">
                                            <b-form-input id="document-number-input" type="text" v-model="documentNumber" :state="getValidationState(validationContext)" 
                                                            aria-describedby="document-number-input-live-feedback"></b-form-input>
                                            <b-form-invalid-feedback id="document-number-input-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </validation-provider>
                                </b-col>
                            </b-row>
                        </div>
                        <div v-else-if="selected=='delegation'">
                            <b-row>
                                <b-col>
                                    <validation-provider name="National Id" rules="required|numeric" v-slot="validationContext">
                                        <b-form-group id="national-id-input-div" label="رقم العضوية" label-for="national-id-input">
                                            <b-form-input id="national-id-input" type="text" v-model="nationalId":state="getValidationState(validationContext)" 
                                                            aria-describedby="national-id-input-live-feedback"></b-form-input>
                                            <b-form-invalid-feedback id="national-id-input-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </validation-provider>
                                </b-col>
                                <b-col>
                                    <validation-provider name="Delegation Number" rules="required|numeric" v-slot="validationContext">
                                        <b-form-group id="delegation-number-input-div" label="رقم الوثيقة" label-for="delegation-number-input">
                                            <b-form-input id="delegation-number-input" type="text" v-model="delegationNumber" :state="getValidationState(validationContext)" 
                                                            aria-describedby="delegation-number-input-live-feedback"></b-form-input>
                                            <b-form-invalid-feedback id="delegation-number-input-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </validation-provider>
                                </b-col>
                            </b-row>
                        </div>
                        <div v-else-if="selected=='manual'">
                            <b-row>
                                <b-col>
                                    <validation-provider name="Manual Attachment" rules="required" v-slot="validationContext">
                                        <b-form-group id="manual-attachment-input-div" label="إرفاق الخطاب" label-for="manual-attachment-input">
                                            <b-form-input id="manual-attachment-input" type="text" v-model="manualAttachment":state="getValidationState(validationContext)" 
                                                            aria-describedby="manual-attachment-input-live-feedback"></b-form-input>
                                            <b-form-invalid-feedback id="manual-attachment-input-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </validation-provider>
                                </b-col>
                            </b-row>
                        </div>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-button variant="primary" @click="onSubmit" :disabled="invalid">تحقق</b-button>
                        </b-col>
                    </b-row>
                </validation-observer>
            </b-container>
        `,
    data() {
        return {
            nationalId: null,
            delegationNumber: null,
            membershipNumber: null,
            documentNumber: null,
            manualAttachment: null,
            selected: '',
            delegateId: null,
            delegationNumber: null,
            delegationInformation: {}
        }
    },
    created() {
    },
    methods: {
        getValidationState({ failed, validated, valid = null }) {
            return failed || validated ? valid : null;
        },
        onSubmit() {
            this.delegationInformation = { id: 0, delegationType: 'عام', delegateName: 'Nasser', idNumber: 123456789, delegationNumber: 987654321, delegationStatus: 'ساري', delegationDescription: 'وكيل', delegationDocument: null, issueDate: '10/10/1010', expirationDate: '12/12/1212' }
            this.$emit('delegation-information', this.delegationInformation);
        }
    },
    computed: {
    }
});

Vue.component("validation-observer", VeeValidate.ValidationObserver);
Vue.component('validation-provider', VeeValidate.ValidationProvider);