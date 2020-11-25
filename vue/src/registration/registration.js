const registration = new Vue({
    el: '#registration',
    template:
    /*html*/
    `
        <b-container>
            <b-form v-on:submit.prevent="onSubmitRegistration()">
                <b-row>
                    <b-icon icon="person" variant="dark"></b-icon>
                    <p>نسجيل حساب مسخدم جديد</p>
                    <hr />
                </b-row>
                <b-row v-if="!verifiedIAM">
                    <iam-form v-bind:iam="iam" v-on:verified-iam="verifiedIAMByUser"></iam-form>
                </b-row>
                <b-form v-on:submit.prevent="verifiedContactsByUser()" v-if="verifiedIAM&&!verifiedContacts">
                    <b-row>
                        <email-verification v-on:verified-email="verifiedEmail"></email-verification>
                        <phone-verification v-on:verified-phones="verifiedPhones" v-bind:phone="iam.phoneIAM"></phone-verification>
                        <address-selection v-on:selected-address="selectedAddress"></address-selection>
                    </b-row>
                    <b-row>
                        <b-button variant="primary" type="submit" :disabled="!validData">التالي</b-button>
                    </b-row>
                </b-form>
                <b-row v-if="verifiedContacts"> 
                    <b-button variant="primary" type="submit">التالي</b-button>
                </b-row>
            </b-form>
        </b-container>
    `,
    data() {
        return {
            validEmail: false,
            validPhones: false,
            validAddress: false,
            verifiedContacts: false,
            verifiedIAM: false,
            iam: {
                name: null,
                nationalId: null,
                birthDateHijri: null,
                birthDate: null,
                nationality: null,
                phoneIAM: null
            },
            userInformation: {
                name: null,
                nationalId: null,
                birthDateHijri: null,
                birthDate: null,
                nationality: null,
                phoneIAM: null,
                email: null,
                phone1: null,
                phone2: null,
                address: null
            }
        }
    },
    created() {
        //placeholder information
        //populate from iam api to be passed to iam components
        this.iam.name = 'Nasser BinObied';
        this.iam.nationalId = 123456789;
        this.iam.birthDateHijri = '11/11/1408';
        this.iam.birthDate = '25/06/1988';
        this.iam.nationality = 'Saudi';
        this.iam.phoneIAM = 552252132;
    },
    methods: {
        verifiedIAMByUser(verifiedIAM) {
            //populate userInformation object from verified iam by the user
            this.userInformation.name = this.iam.name;
            this.userInformation.nationalId = this.iam.nationalId;
            this.userInformation.birthDateHijri = this.iam.birthDateHijri;
            this.userInformation.birthDate = this.iam.birthDate;
            this.userInformation.nationality = this.iam.nationality;
            this.userInformation.phoneIAM = this.iam.phoneIAM;

            //verified iam information variable to navigate to the next step
            this.verifiedIAM = verifiedIAM;
        },
        verifiedContactsByUser() {
            this.verifiedContacts = true;
        },
        verifiedEmail(verifiedEmail) {
            this.userInformation.email = verifiedEmail;
            this.validEmail = true;
        },
        verifiedPhones(verifiedPhones) {
            this.userInformation.phone1 = verifiedPhones[0];
            this.userInformation.phone2 = verifiedPhones[1];
            this.validPhones = true;
        },
        selectedAddress(selectedAddress) {
            this.userInformation.address = selectedAddress;
            this.validAddress = true;
        },
        onSubmitRegistration() {
            //end of registration
            console.log(this.userInformation);
        }
    },
    computed: {
        validData: function () {
            return (this.validEmail && this.validPhones && this.validAddress);
        }
    }
})