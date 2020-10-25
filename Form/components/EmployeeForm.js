app.component('employee-form', {
  template:
    /*html*/
    `
      <div class="container">
        <form @submit.prevent="onSubmit">

          <div class="form-group">
            <label>Employee Name</label>
            <input type="text" class="form-control" v-model="name">
          </div>

          <div class="form-group">
            <label>Employement Date</label>
            <div class="input-group date" id="datetimepicker" data-target-input="nearest">
                <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker" v-model="date" v-on:focus/>
                <div class="input-group-append" data-target="#datetimepicker" data-toggle="datetimepicker">
                    <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                </div>
            </div>
          </div>

          <div class="form-group">
            <label>Departments</label>
            <select v-model="selectedDepartment" class="form-control">
              <option v-for="department in departments" :value="department.value">
                {{ department.text }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label>Job Description</label>
            <textarea class="form-control" id="jobDescription" rows="3" v-model="jobDescription"></textarea>
          </div>

          <input class="btn btn-secondary btn-lg btn-block" type="submit" value="Submit"> 
        </form>
      </div>
    `,
  data() {
    return {
      name: '',
      date: '',
      selectedDepartment: '',
      departments: [
        { text: 'Development', value: 'Development' },
        { text: 'Testing', value: 'Testing' },
        { text: 'Analysis', value: 'Analysis' },
        { text: 'Design', value: 'Design' },
        { text: 'Project Management', value: 'Project Management' }
      ],
      jobDescription: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.date === '' || this.selectedDepartment === '' || this.jobDescription === '') {
        alert('Form is incomplete. Please fill out every field.')
        return
      }

      let employeeData = {
        name: this.name,
        date: this.date,
        selectedDepartment: this.selectedDepartment,
        jobDescription: this.jobDescription

      }

      this.$emit('form-submitted', employeeData)

      this.name = ''
      this.date = ''
      this.selectedDepartment = ''
      this.jobDescription = ''
    }
  }
})