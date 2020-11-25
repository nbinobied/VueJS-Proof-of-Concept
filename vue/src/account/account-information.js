Vue.component('account-information', {
    template:
        /*html*/
        `
        <b-container>
            <b-row>
                <b-col>
                        <b-form-group id="name-input-div" label="الأسم الكامل" label-for="name-input" type="text">
                            <b-form-input id="name-input" type="text" :value="userInformation.name" :disabled="true"></b-form-input>
                        </b-form-group>
                </b-col>
                <b-col>
                        <b-form-group id="nationalId-input-div" label="رقم الهوية الوطنية" label-for="nationalId-input" type="text">
                            <b-form-input id="nationalId-input" type="text" :value="userInformation.nationalId" :disabled="true"></b-form-input>
                        </b-form-group>
                </b-col>
            
            </b-row>


            <b-row>
                <b-col>
                    <b-form-group id="nationality-input-div" label="الجنسية" label-for="nationality-input" type="text">
                        <b-form-input id="nationality-input" type="text" :value="userInformation.nationality" :disabled="true"></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col>
                        <b-form-group id="nationality-input-div" label="العنوان الوطني" label-for="nationality-input" type="text">
                            <b-form-input id="nationality-input" type="text" :value="userInformation.address" :disabled="true"></b-form-input>
                        </b-form-group>
                </b-col>

            </b-row>

            <b-row>
                <b-col>
                        <b-form-group id="birthday-hijri-input-div" label="تاريخ الميلاد هجري" label-for="birthday-hijri-input" type="text">
                            <b-form-input id="birthday-hijri-input" type="text" :value="userInformation.birthDateHijri" :disabled="true"></b-form-input>
                        </b-form-group>
                </b-col>
                <b-col>
                        <b-form-group id="birthday-input-div" label="تاريخ الميلاد ميلادي" label-for="birthday-input" type="text">
                            <b-form-input id="birthday-input" type="text" :value="userInformation.birthDate" :disabled="true"></b-form-input>
                        </b-form-group>
                </b-col>

            </b-row>
        </b-container>
      `,
    props: {
        userInformation: {
            type: Object,
            required: true,
            default: function () {
              return {}
            }
        }
    }
});