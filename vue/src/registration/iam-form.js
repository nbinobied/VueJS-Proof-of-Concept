Vue.component('iam-form', {
    template:
        /*html*/
        `
        <b-container>
            <b-form @submit.prevent="onSubmit()">
                <b-row>
                    <b-col>
                            <b-form-group id="name-input-div" label="الأسم الكامل" label-for="name-input" type="text">
                                <b-form-input id="name-input" type="text" :value="iam.name" :disabled="true"></b-form-input>
                            </b-form-group>
                    </b-col>
                    <b-col>
                            <b-form-group id="nationalId-input-div" label="رقم الهوية الوطنية" label-for="nationalId-input" type="text">
                                <b-form-input id="nationalId-input" type="text" :value="iam.nationalId" :disabled="true"></b-form-input>
                            </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                            <b-form-group id="birthday-hijri-input-div" label="تاريخ الميلاد هجري" label-for="birthday-hijri-input" type="text">
                                <b-form-input id="birthday-hijri-input" type="text" :value="iam.birthDateHijri" :disabled="true"></b-form-input>
                            </b-form-group>
                    </b-col>
                    <b-col>
                            <b-form-group id="birthday-input-div" label="تاريخ الميلاد ميلادي" label-for="birthday-input" type="text">
                                <b-form-input id="birthday-input" type="text" :value="iam.birthDate" :disabled="true"></b-form-input>
                            </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                            <b-form-group id="phone-iam-input-div" label="رقم الجوال" label-for="phone-iam-input" type="text">
                                <b-form-input id="phone-iam-input" type="text" :value="iam.phoneIAM" :disabled="true"></b-form-input>
                            </b-form-group>
                    </b-col>
                    <b-col>
                            <b-form-group id="nationality-input-div" label="الجنسية" label-for="nationality-input" type="text">
                                <b-form-input id="nationality-input" type="text" :value="iam.nationality" :disabled="true"></b-form-input>
                            </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col align-self="center">
                        <b-button variant="primary" type="submit">التالي</b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-container>
      `,
    props: {
        iam: {
            type: Object,
            required: true,
            default: function () {
              return {}
            }
        }
    },
    methods: {
        onSubmit(){
            this.$emit('verified-iam', true);
        }
    }
});