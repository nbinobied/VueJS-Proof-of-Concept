Vue.component('delegate-tab', {
    template:
        /*html*/
        `
        <b-container>
            <div v-if="!addDelegate">
                <b-row>
                    <b-button variant="primary" v-on:click="addDelegate = true">إضافة تفويض</b-button>
                </b-row>
                <b-row>
                    <delegate-table></delegate-table>
                </b-row>
            </div>
            <div v-else>
                <b-row>
                    <b-button variant="primary" v-on:click="addDelegate = false">العودة</b-button>
                </b-row>
                <b-row>
                    <delegate-add></delegate-add>
                </b-row>
            </div>
        </b-container>
      `,
    props: {
    },
    data() {
        return {
            addDelegate: false
        }
    },
    created() {
    },
    methods: {
    },
    computed: {
    }
});