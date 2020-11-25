Vue.component('delegation-table', {
    template:
        /*html*/
        `
        <b-container>    
            <b-row>
                <b-icon icon="book" variant="dark"></b-icon>
                <p>التفاويض</p>
            </b-row>
            <b-row>
                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" 
                            aria-controls="delegation-table"></b-pagination>
                <b-table striped hover :items="delegation" id="delegation-table" :fields="fields"
                            :per-page="perPage" :current-page="currentPage">
                    <template v-slot:cell()="{ value, item, field: { key }}">
                        <template>{{ value }}</template>
                    </template>

                    <template v-slot:cell(action)="{ item: { row } }">
                        <b-button @click="onRowDelete(row)">Delete</b-button>
                    </template>
                </b-table>
            </b-row>
            <hr />
            <b-modal id="cancel-modal" title="إلغاء مفوض" @ok="onCancelConfirm" ok-title="تحديث" cancel-title="إغلاق">
                <template>
                    <b-row>
                        <b-col>
                            سبب الإلغاء
                        </b-col>
                        <b-col>
                            <b-form-select id="delegation-cancel-reason-input" v-model="selectedDelegationCencelReason" :options="delegationCencelReason">                    
                                <b-form-select-option value="null" disabled>الرجاء اختيار سبب الإلغاء</b-form-select-option>
                                <b-form-select-option value="Sold">بيع كامل الأرض</b-form-select-option>
                                <b-form-select-option value="test">تجربة</b-form-select-option>
                            </b-form-select>
                        </b-col>
                    </b-row>
                </template>
            </b-modal>
            <b-modal id="error-modal" title="خطاء" ok-only @ok="onErrorConfirm" ok-title="العودة">
                <p>الرجاء اختيار سبب الإلغاء</p>
            </b-modal>
        </b-container>
        
      `,
    props: {
    },
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            delegation: [],
            selectedDelegationCencelReason: null,
            selectedRow: null,
            fields: [
                {
                    key: 'id',
                    label: '#',
                    sortable: true
                },
                {
                    key: 'delegateName',
                    label: 'أسم المفوض',
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
                },
                {
                    key: 'action',
                    label: 'إلغاء',
                    sortable: false,
                }
            ]
        }
    },
    created() {
        //populate from API
        this.delegation = [
            { id: 0, delegateName: 'Nasser', idNumber: 123456789, delegationNumber: 987654321, delegationStatus: 'ساري', delegationDescription: 'وكيل', delegationDocument: null, issueDate: '10/10/1010', expirationDate: '12/12/1212', additionDate: '11/11/1111' },
            { id: 1, delegateName: 'Ahmed', idNumber: 123456789, delegationNumber: 987654321, delegationStatus: 'ساري', delegationDescription: 'وكيل', delegationDocument: null, issueDate: '10/10/1010', expirationDate: '12/12/1212', additionDate: '11/11/1111' },
            { id: 2, delegateName: 'Ali', idNumber: 123456789, delegationNumber: 987654321, delegationStatus: 'ساري', delegationDescription: 'وكيل', delegationDocument: null, issueDate: '10/10/1010', expirationDate: '12/12/1212', additionDate: '11/11/1111' }
        ]
    },
    methods: {
        onRowDelete(index) {
            this.$bvModal.show("cancel-modal");
            this.selectedRow = index;
        },
        onCancelConfirm() {
            if (this.selectedDelegationCencelReason == null) {
                this.$bvModal.show("error-modal");
            } else {
                this.delegation.splice(this.selectedRow, 1);
            }
            console.log(this.selectedDelegationCencelReason)
        },
        onErrorConfirm() {
            this.$bvModal.show("cancel-modal");
        }
    },
    computed: {
        rows() {
            return this.delegation.length
        }
    }
});