var EmployeeForm = Vue.component('employee-form', {
  template:
    /*html*/
    `
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-container>
        <h3>Employee Forms</h3>
        <b-form @submit.stop.prevent="handleSubmit(onSubmit)">

          <validation-provider name="Name" rules="required|alpha_spaces" v-slot="validationContext">
              <b-form-group id="input-name-div" label="Name:" label-for="input-name" 
                            description="Provide Employee name" class="mb-3" type="text">
                <b-form-input id="input-name" type="text" v-model="name" placeholder="Enter Employee Name" 
                              :state="getValidationState(validationContext)" 
                              aria-describedby="input-name-live-feedback"></b-form-input>
                <b-form-invalid-feedback id="input-name-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
          </validation-provider>

          <validation-provider name="Join Date" rules="required" v-slot="validationContext">
            <b-form-group id="input-date-div" label="Join Date:" label-for="input-date" 
                          description="Select Employee Join date" class="mb-3">
              <b-form-datepicker v-model="date" :state="getValidationState(validationContext)"
                                  aria-describedby="input-date-live-feedback"></b-form-datepicker>
              <b-form-invalid-feedback id="input-date-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider name="Department" rules="required" v-slot="validationContext">
            <b-form-group id="input-department-div" label="Departments:" label-for="input-department"
                          description="Select Employee Department" class="mb-3">
              <b-form-select id="input-department" v-model="selectedDepartment" :options="departments"
                              aria-describedby="input-department-live-feedback" :state="getValidationState(validationContext)">
                      <option disabled value="">Please Select a Department</option>
              </b-form-select>
              <b-form-invalid-feedback id="input-department-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider name="Job Description" rules="required" v-slot="validationContext">
            <b-form-group id="input-job-description-div" label="Job Description:" label-for="input-job-description"
                          description="Provide Employee Job Description" class="mb-3">
              <b-form-textarea id="input-job-description" size="md" placeholder="Employee Job Desciption" 
                              v-model="jobDescription" aria-describedby="input-job-description-live-feedback" 
                              :state="getValidationState(validationContext)"></b-form-textarea>
              <b-form-invalid-feedback id="input-job-description-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <b-button block type="submit">Submit</b-button>
        </b-form>
      </b-container>
      </validation-observer>
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
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    onSubmit() {

      let employeeData = {
        name: this.name,
        date: this.date,
        selectedDepartment: this.selectedDepartment,
        jobDescription: this.jobDescription

      }

      this.$emit('form-submitted', employeeData);

      this.name = ''
      this.date = ''
      this.selectedDepartment = ''
      this.jobDescription = ''
    }
  }
});

Vue.component("validation-observer", VeeValidate.ValidationObserver);
Vue.component('validation-provider', VeeValidate.ValidationProvider);