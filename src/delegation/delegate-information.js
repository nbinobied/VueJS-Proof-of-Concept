Vue.component('delegate-information', {
    template:
        /*html*/
        `
        <b-container>
            <b-form @submit.prevent="onSubmit()">
                <b-row>
                    <b-col>
                        <b-form-group id="delegation-type-div" label="نوع التفويض" label-for="delegation-type" type="text">
                            <b-form-input id="delegation-type" type="text" :value="delegateInformation.delegationType" :disabled="true"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="delegate-name-div" label="أسم الوكيل" label-for="delegate-name" type="text">
                            <b-form-input id="delegate-name" type="text" :value="delegateInformation.delegateName" :disabled="true"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="delegate-id-div" label="رقم الوكالة" label-for="delegate-id" type="text">
                            <b-form-input id="delegate-id" type="number" :value="delegateInformation.idNumber" :disabled="true"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group id="delegation-number-div" label="رقم الوكالة" label-for="delegation-number" type="text">
                            <b-form-input id="delegation-number" type="text" :value="delegateInformation.delegationNumber" :disabled="true"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="issue-date-div" label="تاريخ الإصدار" label-for="issue-date" type="text">
                            <b-form-input id="issue-date" type="text" :value="delegateInformation.issueDate" :disabled="true"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="expiration-date-div" label="تاريخ الإنتهاء" label-for="expiration-date" type="text">
                            <b-form-input id="expiration-date" type="text" :value="delegateInformation.expirationDate" :disabled="true"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                <b-col>
                    <b-form-group id="delegation-status-div" label="حالة الوكالة" label-for="delegation-status" type="text">
                        <b-form-input id="delegation-status" type="text" :value="delegateInformation.delegationStatus" :disabled="true"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group id="delegation-description-div" label="الصفة بالوكالة" label-for="delegation-description" type="text">
                        <b-form-input id="delegation-description" type="text" :value="delegateInformation.delegationDescription" :disabled="true"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group id="delegation-document-div" label="صك الوكالة" label-for="delegation-document" type="text">
                        <b-form-input id="delegation-document" type="text" :value="delegateInformation.delegationDocument" :disabled="true"></b-form-input>
                    </b-form-group>
                </b-col>
                </b-row>
                <b-row>
                    <b-col align-self="center">
                        <b-button variant="primary" type="submit">إضافة</b-button>
                    </b-col>
                </b-row>
            </b-form>
            <b-modal id="confirmation-modal" title="إضافة مفوض" @ok="onConfirm" ok-title="إضافة" cancel-title="إغلاق">
                <template>
                    <b-row>
                        <b-col>
                            هل انت متأكد من إضافة مفوض
                        </b-col>
                    </b-row>
                </template>
            </b-modal>
        </b-container>
      `,
    props: {
        delegateInformation: {
            type: Object,
            required: true,
            default: function () {
              return {}
            }
        }
    },
    methods: {
        onSubmit(){
            this.$bvModal.show("confirmation-modal");
        },
        onConfirm() {
            // this.$emit('verified-delegate', true);
            console.log("done");
        },
    }
});