Vue.component('delegate-table', {
    template:
        /*html*/
        `
        <b-container>
            <b-row>
                <b-icon icon="person" variant="dark"></b-icon>
                <p>المفوضين</p>
            </b-row>
            <b-row>
                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" 
                            aria-controls="delegate-table"></b-pagination>
                <b-table striped hover :items="delegate" id="delegate-table" :fields="fields"
                            :per-page="perPage" :current-page="currentPage">
                    <template v-slot:cell()="{ value, item, field: { key }}">
                        <template>{{ value }}</template>
                    </template>
                </b-table>
            </b-row>
            <hr />
        </b-container>
      `,
    props: {
    },
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            delegate: [],
            fields: [
                {
                    key: 'id',
                    label: '#',
                    sortable: true
                },
                {
                    key: 'delegateType',
                    label: 'نوع التفويض',
                    sortable: true
                },
                {
                    key: 'delegateName',
                    label: 'أسم الموكل',
                    sortable: true
                },
                {
                    key: 'idNumber',
                    label: 'رقم الهوية',
                    sortable: true,
                },
                {
                    key: 'delegationNumber',
                    label: 'رقم الوكالة',
                    sortable: true,
                },
                {
                    key: 'delegationStatus',
                    label: 'حالة الوكالة',
                    sortable: true,
                },
                {
                    key: 'delegationDescription',
                    label: 'الصفة بالوكالة',
                    sortable: true,
                },
                {
                    key: 'delegationDocument',
                    label: 'صك الوكالة',
                    sortable: true,
                },
                {
                    key: 'issueDate',
                    label: 'تاريخ الإصدار',
                    sortable: true,
                },
                {
                    key: 'expirationDate',
                    label: 'تاريخ الإنتهاء',
                    sortable: true,
                },
                {
                    key: 'additionDate',
                    label: 'تاريخ الإضافة',
                    sortable: true,
                }
            ]
        }
    },
    created() {
        //populate current delegate list from api 

        this.delegate = [
            { id: 0, delegateType: 'وكيل', delegateName: 'Nasser', idNumber: 123456789, delegationNumber: 987654321, delegationStatus: 'ساري', delegationDescription: 'وكيل', delegationDocument: null, issueDate: '10/10/1010', expirationDate: '12/12/1212', additionDate: '11/11/1111' },
            { id: 1, delegateType: 'وكيل', delegateName: 'Ahmed', idNumber: 123456789, delegationNumber: 987654321, delegationStatus: 'ساري', delegationDescription: 'وكيل', delegationDocument: null, issueDate: '10/10/1010', expirationDate: '12/12/1212', additionDate: '11/11/1111' },
            { id: 2, delegateType: 'وكيل', delegateName: 'Ali', idNumber: 123456789, delegationNumber: 987654321, delegationStatus: 'ساري', delegationDescription: 'وكيل', delegationDocument: null, issueDate: '10/10/1010', expirationDate: '12/12/1212', additionDate: '11/11/1111' }
        ]
    },
    methods: {
    },
    computed: {
        rows() {
            return this.delegate.length
        }
    }
});