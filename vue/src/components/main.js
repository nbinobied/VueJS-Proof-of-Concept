const app = new Vue({
    el: '#app',
    template:
    /*html*/
    `
    <b-container>
        <hr />
        <b-card no-body small card>
            <b-tabs content-class="mt-3" lazy>
                <b-tab title="Employee Form"><employee-form @form-submitted="addForm"></employee-form></b-tab>
                <b-tab title="Employee Data"><employee-data :employees="employees"></employee-data></b-tab>
                <b-tab title="API"><employee-api></employee-api></b-tab>
            </b-tabs>
        </b-card>
    </b-container>
    `,
    data() {
        return {
            employees: []
        }
    },
    methods: {
        addForm(employeeData) {
            this.employees.push(employeeData)
        }
    }
})