Vue.component('email-verification', {
    template:
        /*html*/
        `
        <b-container>
            <template v-if="!verified">
                <validation-observer tag="form" ref="observer" v-slot="{invalid}">
                    <b-row>
                        <b-col>
                            <validation-provider name="البريد الالكترونى" rules="required|email" v-slot="validationContext">
                                <b-form-group id="email-input-div" label="البريد الإلكتروني" label-for="email-input" type="text">
                                    <b-form-input id="email-input" type="text" v-model="email" placeholder="الرجاء كتابة البريد الألكتروني" :disabled="!codeSended"
                                                    :state="getValidationState(validationContext)" aria-describedby="email-input-live-feedback"></b-form-input>
                                    <b-form-invalid-feedback id="email-input-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                </b-form-group>
                            </validation-provider>
                        </b-col>
                        <b-col align-self="center" class="mt-3" v-if="codeSended&&!verified">
                            <b-button variant="primary" @click="sendCode" type="submit" :disabled="invalid && codeSended">{{ buttonLabel }}</b-button>
                        </b-col>
                        <b-col align-self="center" class="mt-3 valid-block" v-else>
                            <span>يمكن إعادة إرسال رمز التحقق بعد مرور </span>
                            <span class="time-valid">{{ duration }}</span>
                        </b-col>
                    </b-row>
                </validation-observer>
                <template v-if="verifying">
                <validation-observer tag="form" ref="observer" v-slot="{  invalid }">
                        <b-row>
                            <b-col>
                                <validation-provider name="Code" rules="required|min:4|max:4" v-slot="validationContext">
                                    <b-form-group id="input-code-div" label="رمز التحقق:" label-for="input-code" type="text">
                                        <b-form-input id="input-code" type="number" v-model="code" placeholder="الرجاء إدخال رمز التحقق" 
                                                        :state="getValidationState(validationContext)" aria-describedby="input-code-live-feedback"></b-form-input>
                                        <b-form-invalid-feedback id="input-code-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                    </b-form-group>
                                </validation-provider>
                            </b-col>
                            <b-col align-self="center" class="">
                                <b-row>
                                    <b-col><b-button variant="primary" @click="verifyCode" type="submit" :disabled="invalid">التحقق من الرمز</b-button></b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </validation-observer>
                </template>
            </template>
            <template v-else>
                <b-row>
                    <b-col>
                        <b-form-group id="input-display-email-div" label="البريد الإلكتروني" label-for="input-display-email" type="text">
                            <b-form-input id="input-display-email" :value="email" :disabled="true"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
            </template>
            <hr />
        </b-container>
        `,
    data() {
        return {
            codeSended: true,
            verifying: false,
            email: null,
            timer: null,
            duration: null,
            code: null,
            verified: false,
            buttonLabel: "إرسال رمز التحقق"
        }
    },
    methods: {
        getValidationState({ failed, validated, valid = null }) {
            return failed || validated ? valid : null;
        },
        sendCode() {
            //lock email field
            //remove button
            //diplay timer
            //display verification form
            this.verifying = true;
            this.codeSended = false;
            this.timer = 180;
            this.duration = this.secondsToMinutes(this.timer);

            //send email to api
        },
        secondsToMinutes(timer) {
            timer = Number(timer);
            var minutes = Math.floor(timer % 3600 / 60);
            var seconds = Math.floor(timer % 3600 % 60);

            return ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2);
        },
        verifyCode() {
            //axios call to verify email

            //return valid email to parent if code is verified
            this.timer = null;
            this.verified = true;
            this.$emit('verified-email', this.email);
        },
    },
    watch: {
        timer: {
            handler(value) {
                if (value > 0) {
                    setTimeout(() => {
                        this.timer--;
                        this.duration = this.secondsToMinutes(this.timer);
                    }, 1000);
                }
                else if (value == 0) {
                    this.codeSended = true;
                    this.verifying = false;
                    this.buttonLabel = "إعادة الإرسال";
                }
            },
            immediate: true
        }
    }
});

Vue.component("validation-observer", VeeValidate.ValidationObserver);
Vue.component('validation-provider', VeeValidate.ValidationProvider);