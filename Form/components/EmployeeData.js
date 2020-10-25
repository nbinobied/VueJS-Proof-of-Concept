app.component('employee-data', {
    props: {
        employees: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
        <div class="container">
        <h3>Employee Forms</h3>
          <ul class="list-group">
            <li class="list-group-item" v-for="(employee, index) in employees" :key="index">
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            {{employee.name}}
                        </div>
                        <div class="col-sm">
                            {{employee.date}}
                        </div>
                        <div class="col-sm">
                            {{employee.selectedDepartment}}
                        </div>
                        <div class="col-sm">
                            {{employee.jobDescription}}
                        </div>
                    </div>
                </div>
            </li>
          </ul>
        </div>
    `
})