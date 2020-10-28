const app = new Vue({
    el: '#app',
    template:
        /*html*/
        `
    <div>
        <employee-form @form-submitted="addForm"></employee-form>
        <br/>
        <employee-data :employees="employees"></employee-data>
    </div>
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