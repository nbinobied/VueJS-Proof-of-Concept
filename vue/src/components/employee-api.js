Vue.component('employee-api', {
    template:
        /*html*/
        `
        <b-container>

            <b-form @submit.stop.prevent="onSubmit">
                <b-form-group id="input-email-div" label="Email:" label-for="input-email" 
                                description="Provide Email" class="mb-3" type="text">
                    <b-form-input id="input-email" type="text" v-model="email" placeholder="Enter Provide Email"></b-form-input>
                </b-form-group>
                <b-form-group id="input-firstName-div" label="First Name:" label-for="input-firstName" 
                                description="Provide First Name" class="mb-3" type="text">
                    <b-form-input id="input-firstName" type="text" v-model="firstName" placeholder="Enter First Name"></b-form-input>
                </b-form-group>
                <b-form-group id="input-lastName-div" label="Last Name:" label-for="input-lastName" 
                                description="Provide Last Name" class="mb-3" type="text">
                    <b-form-input id="input-lastName" type="text" v-model="lastName" placeholder="Enter Last Name"></b-form-input>
                </b-form-group>

                <b-form-group label="Avatar:" label-for="file-large">
                    <b-form-file id="file-large" v-model="file1" :state="Boolean(file1)" 
                                placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here...">
                    </b-form-file>
                </b-form-group>

                <b-button variant="primary" block type="submit">Submit</b-button>
            </b-form>
            
            <hr />

            <b-list-group v-if="users && users.length">
                <b-list-group-item>
                    <b-row>
                        <b-col align-self="center"><strong>Email</strong></b-col>
                        <b-col align-self="center">First name</b-col>
                        <b-col align-self="center">Last Name</b-col>
                        <b-col align-self="center">Avatar</b-col>
                        <b-col align-self="center">Actions</b-col>
                    </b-row>
                </b-list-group-item>
                <b-list-group-item v-for="(user, index) of users" :key="user.id">
                    <b-row>
                        <b-col align-self="center"><strong>{{user.email}}</strong></b-col>
                        <b-col align-self="center">{{user.first_name}}</b-col>
                        <b-col align-self="center">{{user.last_name}}</b-col>
                        <b-col align-self="center"><b-avatar :src="user.avatar" size="6rem"></b-avatar></b-col>
                        <b-col align-self="center"><b-button variant="primary" @click="onDelete(index, user.id)">Delete</b-button></b-col>
                    </b-row>
                </b-list-group-item>
            </b-list-group>

            <ul v-if="errors && errors.length">
                <li v-for="error of errors">
                {{error.message}}
                </li>
            </ul>
        </b-container>
    `,
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            users: [],
            errors: []
        }
    },
    async created() {
        await axios.get('https://reqres.in/api/users')
            .then(response => {
                this.users = response.data.data;
                console.log(`GET list users`, this.users);
            }).catch(error => console.error(error));
    },
    methods: {
        async onSubmit() {
            let user = {
                email: this.email,
                first_name: this.firstName,
                last_name: this.lastName
            }

            await axios.post('https://reqres.in/api/users', user)
                .then(response => {
                    const addedUser = response.data;
                    console.log(`POST: user is added`, addedUser);
                    this.users.push(addedUser);
                }).catch(error => console.error(error));

            this.email = ''
            this.firstName = ''
            this.lastName = ''
        },
        async onDelete(index, id) {
            await axios.delete(`https://reqres.in/api/users/${id}`)
                .then(response => {
                    this.users.splice(index, 1);
                }).catch(error => console.error(error));
        }
    }
})