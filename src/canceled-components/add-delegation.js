const addDelegation = new Vue({
    el: '#add-delegation',
    template:
        /*html*/
        `
    <b-container>    
        <b-row>
            <b-icon icon="archive" variant="dark"></b-icon>
            <p>إضافة تفويض</p>
            <hr />
        </b-row>
        <b-row>
            <b-form-radio-group v-model="selected">
                <b-form-radio value="individual">فرد</b-form-radio>
                <b-form-radio value="facility">منشأة</b-form-radio>
            </b-form-radio-group>
        </b-row>
        <b-row v-if="selected=='individual'">
            <div v-if="!delegateFound">
                <delegate-lookup v-on:delegate-information="delegateInformation"></delegate-lookup>
            </div>
            <div v-else>
                <delegate-information v-bind:delegateInformation="foundDelegateInformation"></delegate-information>
            </div>
        </b-row>
        <b-row v-if="selected=='facility'">
            <div v-if="!delegationFound">
                <delegation-lookup v-on:delegation-information="delegationInformation"></delegation-lookup>
            </div>
            <div v-else>
                <delegation-information v-bind:delegationInformation="foundDelegationInformation"></delegation-information>
            </div>
        </b-row>
    </b-container>
    `,
    data() {
        return {
            foundDelegateInformation: null,
            delegateFound: false,
            delegationFound: false,
            foundDelegationInformation: null,
            selected: "individual"
        }
    },
    created() {
    },
    methods: {
        delegateInformation(delegateInformation) {
            this.foundDelegateInformation = delegateInformation;
            this.delegateFound = true;
        },
        delegationInformation(delegationInformation) {
            this.foundDelegationInformation = delegationInformation;
            this.delegationFound = true;
        },
    },
    computed: {
    }
})