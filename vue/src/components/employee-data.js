Vue.component('employee-data', {
    template:
        /*html*/
        `
        <b-container>

            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" 
                            aria-controls="employee-table"></b-pagination>
            <b-table striped hover :items="employees" id="employee-table"
                    :per-page="perPage" :current-page="currentPage">
                <template v-slot:cell(employeeName)="row" v-if="edit">
                    <b-form-input v-model="row.item.employeeName"/>
                </template>

                <template v-slot:cell(joinDate)="row" v-if="edit">
                    <b-form-input v-model="row.item.joinDate"/>
                </template>

                <template v-slot:cell(selectedDepartment)="row" v-if="edit">
                    <b-form-input v-model="row.item.selectedDepartment"/>
                </template>
                
                <template v-slot:cell(jobDescription)="row" v-if="edit">
                    <b-form-input v-model="row.item.jobDescription"/>
                </template>

                <template v-slot:cell(actions)="row">
                    <b-dropdown variant="primary" text="Actions">
                        <b-dropdown-item @click="onEdit(row.index)">{{ edit ? 'Save' : 'Edit' }}</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item @click="onDelete(row.index)">Delete</b-dropdown-item>
                    </b-dropdown>
                </template>
            </b-table>
            
        </b-container>
    `,
    props: {
        employees: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            edit: false,
            perPage: 3,
            currentPage: 1,
            selected: 0,
            fields: [
                {
                    key: 'employeeName',
                    label: 'Employee Name',
                    sortable: true
                },
                {
                    key: 'joinDate',
                    label: 'Join Date',
                    sortable: true
                },
                {
                    key: 'selectedDepartment',
                    label: 'Selected Department',
                    sortable: true,
                },
                {
                    key: 'jobDescription',
                    label: 'Job Description',
                    sortable: true,
                },
                {
                    key: 'actions',
                    label: 'Actions',
                    sortable: false,
                }
            ]
        }
    },
    computed: {
        rows() {
            return this.employees.length
        }
    },
    methods: {
        onEdit(index) {
            this.edit = !this.edit
        },
        onDelete(index) {
            this.employees.splice(index, 1);
        }
    }
})