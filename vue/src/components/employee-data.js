var EmployeeData = Vue.component('employee-data', {
    template:
        /*html*/
        `
        <b-container>
            <h3>Employee Data</h3>
            
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" 
                            aria-controls="employee-table"></b-pagination>
            <b-table striped hover :items="employees" id="employee-table"
                    :per-page="perPage" :current-page="currentPage">
                
                <template v-slot:cell(name)="row">
                    <b-form-input v-model="row.item.name"/>
                </template>
                <template v-slot:cell(date)="row">
                    <b-form-input v-model="row.item.date"/>
                </template>
                <template v-slot:cell(selectedDepartment)="row">
                    <b-form-input v-model="row.item.selectedDepartment"/>
                </template>
                <template v-slot:cell(jobDescription)="row">
                    <b-form-input v-model="row.item.jobDescription"/>
                </template>
                <template #cell()="row">
                <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                  Info modal
                </b-button>
              </template>
            </b-table>


                    
                <!--
                <b-list-group-item>
                    <b-row>
                        <b-col>Name</b-col>
                        <b-col>Join Date</b-col>
                        <b-col>Department</b-col>
                        <b-col>Job Description</b-col>
                    </b-row>
                </b-list-group-item>
          <b-list-group id="employee-list"  :total-rows="rows" :per-page="perPage" >
            
            <b-list-group-item v-for="(employee, index) in employees" :key="index">
                <b-row>
                    <b-col>
                        {{employee.name}}
                    </b-col>
                    <b-col>
                        {{employee.date}}
                    </b-col>
                    <b-col>
                        {{employee.selectedDepartment}}
                    </b-col>
                    <b-col>
                        {{employee.jobDescription}}
                    </b-col>
                </b-row>
            </b-list-group-item>
          </b-list-group>-->
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
            perPage: 3,
            currentPage: 1
        }
    },
    computed: {
        rows() {
            return this.employees.length
        }
    }
})