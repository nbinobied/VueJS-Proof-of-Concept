const account = new Vue({
    el: '#account',
    template:
        /*html*/
        `
    <b-container>  
        <b-form @submit.prevent="onSubmitUpdate()">
            <b-row>
                <b-icon icon="archive" variant="dark"></b-icon>
                <p>إدارة الحساب</p>
                <hr />
            </b-row>                   
            <b-row>
                <account-information :user-information="userInformation"></account-information>
                <email-verification @verified-email="verifiedEmail"></email-verification>
                <phone-verification @verified-phones="verifiedPhones" :phone="userInformation.phone1"></phone-verification>
            </b-row>                   
            <b-row>
                <b-button variant="primary" type="submit" :disabled="!validEmail||!validPhones">تحديث</b-button>
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
            userInformation: {
                name: null,
                nationalId: null,
                birthDateHijri: null,
                birthDate: null,
                nationality: null,
                email: null,
                phone1: null,
                phone2: null,
                address: null
            }
        }
    },
    created() {
        //calls Backend API
        //populate userInformation
        this.userInformation.name = 'Nasser';
        this.userInformation.nationalId = 123456789;
        this.userInformation.birthDateHijri = '11/11/1408';
        this.userInformation.birthDate = '25/06/1988';
        this.userInformation.nationality = 'Saudi';
        this.userInformation.phone1 = 552252132;
        this.userInformation.phone2 = 987654321;
        this.userInformation.email = 'verifiedEmail';
        this.userInformation.address = 'الرياض السويدي السعودية 7747';
    },
    methods: {
        verifiedIAMByUser(verifiedIAM) {
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
        onSubmitUpdate() {
            console.log(this.userInformation);
        }
    }
})