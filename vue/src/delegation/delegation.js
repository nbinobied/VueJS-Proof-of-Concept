const delegation = new Vue({
    el: '#delegation',
    template:
    /*html*/
    `
    <b-container>    
        <b-row>
            <b-icon icon="archive" variant="dark"></b-icon>
            <p>ادارة التفاويض</p>
            <hr />
        </b-row>
        <b-row>
        <div>
            <b-tabs>
                <b-tab title="التفاويض" active><delegation-tab></delegation-tab></b-tab>
                <b-tab title="المفوضين"><delegate-tab></delegate-tab></b-tab>
            </b-tabs>
        </div>
        </b-row>
    </b-container>
    `,
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    },
    computed: {
    }
})