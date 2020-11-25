Vue.component('phone-verification', {
    template:
        /*html*/
        `
        <b-container>
            <template v-if="!verified">
                <validation-observer ref="observer" tag="form" v-slot="{ invalid }">
                    <b-row>
                        <b-col>
                            <validation-provider name="phone 1" rules="required|min:9|max:9" v-slot="validationContext">
                                <b-form-group id="phone1-input-div" label="1 رقم الجوال" label-for="phone1-input" type="text">
                                    <b-form-input id="phone1-input" type="number" v-model="phone1" :value="phone1" placeholder="رقم الجوال الرئيسي" :disabled="!codeSended"
                                                    :state="getValidationState(validationContext)" aria-describedby="phone1-input-live-feedback"></b-form-input>
                                    <b-form-invalid-feedback id="phone1-input-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                </b-form-group>
                            </validation-provider>
                        </b-col>
                        <b-col  align-self="center"  v-if="codeSended">
                            <b-button variant="primary" @click="sendCode" type="submit" :disabled="invalid && codeSended">{{ buttonLabel }}</b-button>
                        </b-col>
                        <b-col  align-self="center" class="mt-3 valid-block" v-else>
                            <span>يمكن إعادة إرسال رمز التحقق بعد مرور </span>
                            <span  class="time-valid">{{ duration }}</span>
                        </b-col>
                    </b-row>
                    <template v-if="verifying">
                        <validation-observer tag="form" ref="observer" v-slot="{invalid }">     
                            <b-row>
                                <b-col >
                                    <validation-provider name="Code" rules="required|min:4|max:4" v-slot="validationContext">
                                        <b-form-group id="input-code-div" label="رمز التحقق" label-for="input-code" type="text">
                                            <b-form-input id="input-code" type="number" v-model="code" placeholder="رمز التحقق" 
                                                            :state="getValidationState(validationContext)" aria-describedby="input-code-live-feedback"></b-form-input>
                                            <b-form-invalid-feedback id="input-code-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </validation-provider>
                                </b-col >
                                <b-col  align-self="center" >
                                    <b-button variant="primary" type="submit" @click="verifyCode" :disabled="invalid">التحقق من الرمز</b-button>
                                </b-col>
                            </b-row>
                        </validation-observer>
                    </template>
                    <b-row>
                        <b-col >
                            <validation-provider name="optional phone" rules="min:9|max:9" v-slot="validationContext">
                                <b-form-group id="phone2-input-div" label="2 رقم الجوال" label-for="phone2-input" type="text">
                                    <b-form-input id="phone2-input" type="number" v-model="phone2"  placeholder="رقم الجوال الإختياري"
                                                    :state="getValidationState(validationContext)" aria-describedby="phone2-input-live-feedback"></b-form-input>
                                    <b-form-invalid-feedback id="phone2-input-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                </b-form-group>
                            </validation-provider>
                        </b-col>
                        <b-col > </b-col>
                    </b-row>
                </validation-observer>
            </template>
            <template v-else>
                <b-row>
                    <b-col>
                        <b-form-group id="input-display-phone1-div" label="رقم الجوال الرئيسي" label-for="input-display-phone1" type="text">
                            <b-form-input id="input-display-phone1" :value="phone1" :disabled="true"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="input-display-phone2-div" label="رقم الجوال الإختياري" label-for="input-display-phone2" type="text">
                            <b-form-input id="input-display-phone2" :value="phone2" :disabled="true"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
            </template>
            <hr />
        </b-container>
      `,
    props: {
        phone: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            codeSended: true,
            verifying: false,
            phone1: this.phone,
            phone2: null,
            timer: null,
            duration: null,
            code: null,
            verified: false,
            buttonLabel: "إرسال رمز التحقق"
        }
    },
    mounted() {
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

            //send phone to api
        },
        secondsToMinutes(timer) {
            timer = Number(timer);
            var minutes = Math.floor(timer % 3600 / 60);
            var seconds = Math.floor(timer % 3600 % 60);

            return ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2);
        },
        verifyCode() {
            //axios call to verify phone code

            //return valid phone to parent
            this.timer = null;
            this.verified = true;
            let phoneNumbers = [this.phone1, this.phone2];
            this.$emit('verified-phones', phoneNumbers);
        }
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