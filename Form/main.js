const app = Vue.createApp({
    template:
    /*html*/
    `
    <employee-form @form-submitted="addForm"></employee-form>
    <br/>
    <employee-data :employees="employees"></employee-data>
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
