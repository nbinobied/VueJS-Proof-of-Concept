Vue.component('delegation-tab', {
    template:
        /*html*/
        `
        <b-container>
            <div v-if="!addDelegation">
                <b-row>
                    <b-button variant="primary" v-on:click="addDelegation = true">إضافة تفويض</b-button>
                </b-row>
                <b-row>
                    <delegation-table></delegation-table>
                </b-row>
            </div>
            <div v-else>
                <b-row>
                    <b-button variant="primary" v-on:click="addDelegation = false">العودة</b-button>
                </b-row>
                <b-row>
                    <delegation-add></delegation-add>
                </b-row>
            </div>
        </b-container>
      `,
    props: {
    },
    data() {
        return {
            addDelegation: false
        }
    },
    created() {
    },
    methods: {
    },
    computed: {
    }
});