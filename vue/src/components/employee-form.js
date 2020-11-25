Vue.component('employee-form', {
  template:
    /*html*/
    `
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-container>
        <b-form @submit.prevent="handleSubmit(onSubmit)">

          <validation-provider name="Employee Name" rules="required|alpha_spaces" v-slot="validationContext">
              <b-form-group id="input-employeeName-div" label="Employee Name:" label-for="input-employeeName" 
                            description="Provide Employee name" class="mb-3" type="text">
                <b-form-input id="input-employeeName" type="text" v-model="employeeName" placeholder="Enter Employee Name" 
                              :state="getValidationState(validationContext)" 
                              aria-describedby="input-employeeName-live-feedback"></b-form-input>
                <b-form-invalid-feedback id="input-employeeName-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
          </validation-provider>

          <validation-provider name="Join Date" rules="required" v-slot="validationContext">
            <b-form-group id="input-joinDate-div" label="Join Date:" label-for="input-joinDate" 
                          description="Select Employee Join date" class="mb-3">
              <b-form-datepicker v-model="joinDate" :state="getValidationState(validationContext)"
                                  aria-describedby="input-date-live-feedback" id="joinDate"></b-form-datepicker>
              <b-form-invalid-feedback id="input-joinDate-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider name="Department" rules="required" v-slot="validationContext">
            <b-form-group id="input-selectedDepartment-div" label="Departments:" label-for="input-selectedDepartment"
                          description="Select Employee Department" class="mb-3">
              <b-form-select id="input-selectedDepartment" v-model="selectedDepartment" :options="departments"
                              aria-describedby="input-selectedDepartment-live-feedback" :state="getValidationState(validationContext)">
                      <option disabled value="">Please Select a Department</option>
              </b-form-select>
              <b-form-invalid-feedback id="input-selectedDepartment-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider name="Job Description" rules="required" v-slot="validationContext">
            <b-form-group id="input-jobDescription-div" label="Job Description:" label-for="input-jobDescription"
                          description="Provide Employee Job Description" class="mb-3">
              <b-form-textarea id="input-jobDescription" size="md" placeholder="Employee Job Desciption" 
                              v-model="jobDescription" aria-describedby="input-jobDescription-live-feedback" 
                              :state="getValidationState(validationContext)"></b-form-textarea>
              <b-form-invalid-feedback id="input-jobDescription-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <b-button variant="primary" block type="submit">Submit</b-button>
          <hr />
        </b-form>
      </b-container>
      </validation-observer>
    `,
  data() {
    return {
      employeeName: '',
      joinDate: '',
      selectedDepartment: '',
      departments: [
        { id: 0, text: 'Development', value: 'Development' },
        { id: 1, text: 'Testing', value: 'Testing' },
        { id: 2, text: 'Analysis', value: 'Analysis' },
        { id: 3, text: 'Design', value: 'Design' },
        { id: 0, text: 'Project Management', value: 'Project Management' }
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
        employeeName: this.employeeName,
        joinDate: this.joinDate,
        selectedDepartment: this.selectedDepartment,
        jobDescription: this.jobDescription
      }

      this.$emit('form-submitted', employeeData);

      this.employeeName = ''
      this.joinDate = ''
      this.selectedDepartment = ''
      this.jobDescription = ''
    }
  }
});

Vue.component("validation-observer", VeeValidate.ValidationObserver);
Vue.component('validation-provider', VeeValidate.ValidationProvider);