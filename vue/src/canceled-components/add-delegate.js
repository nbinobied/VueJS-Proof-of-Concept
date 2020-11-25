const addDelegate = new Vue({
    el: '#add-delegate',
    template:
    /*html*/
    `
    <b-container>
        <b-row>
            <b-icon icon="archive" variant="dark"></b-icon>
            <p>إضافة مفوض</p>
            <hr />
        </b-row>                   
        <b-row>
            <div v-if="!delegateFound">
                <delegate-lookup v-on:delegate-information="delegateInformation"></delegate-lookup>
            </div>
            <div v-else>
                <delegate-information v-bind:delegateInformation="foundDelegateInformation"></delegate-information>
            </div>
        </b-row>
    </b-container>
    `,
    data() {
        return {
            foundDelegateInformation: null,
            delegateFound:false
        }
    },
    created() {
    },
    methods: {
        delegateInformation(delegateInformation) {
            this.foundDelegateInformation = delegateInformation;
            this.delegateFound = true;
        },
    },
    computed: {
    }
})