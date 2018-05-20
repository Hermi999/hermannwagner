<template>
  <v-container fluid grid-list-md>
      <v-layout row id="my-cv-text">
        <v-flex sm1></v-flex>
          <v-flex sm10>
            <h2>Contact</h2>
            <br>
            Don't hesitate - Contact me if you have any questions.
            <br><br>
            
            <v-layout row wrap id="cards">
              <v-flex d-flex md4>
                <v-card>
                  <v-card-media src="@/assets/linkedin.png" height="160px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Let's do business</h3>
                      <div>The best way to talk about business, send me a job offering or to simply grow your network is by connecting with me 
                        on LinkedIn. From time to time I will write articles and share valuable content.<br><br><br></div>
                    </div>
                  </v-card-title>
                  <v-card-actions class="contact-action">
                    <v-btn href="https://www.linkedin.com/in/hermann-wagner/" target="_blank" flat color="yellow">Contact me on LinkedIn</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex d-flex md4>
                <v-card>
                  <v-card-media src="@/assets/facebook.png" height="160px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Let's get friends</h3>
                      <div>If you want to want to get in touch for sports, traveling, going out and other free time activities then connect 
                        with me on Facebook.<br><br><br></div>
                    </div>
                  </v-card-title>
                  <v-card-actions class="contact-action">
                    <v-btn href="https://www.facebook.com/hermann.wagner.35" target="_blank" flat color="yellow">Contact me on Facebook</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex d-flex md4>
                <v-card>
                  <v-card-media src="@/assets/email.jpg" height="160px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Questions</h3>
                      <div>If you have any questions regarding this website, then please drop me a message via the email dialog.<br><br><br></div>
                    </div>
                  </v-card-title>
                  <v-card-actions class="contact-action">
                    <v-btn flat color="yellow" @click.stop="dialog2 = true">Drop me a message</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>

            <br><br>
            Alternatively you can also call me on: <b><a href="tel:+353 833 14 8888">+353 833 14 8888</a></b>.
          </v-flex>

          <!-- Pop up dialog -->
          <v-dialog v-model="dialog2" max-width="500px">
            <v-card>
              <v-card-title>
                Write me a message
              </v-card-title>
              <v-card-text>
                <form>
                  <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    :counter="30"
                    label="Name"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                  <v-text-field
                    v-model="question"
                    :error-messages="questionErrors"
                    :counter="250"
                    label="Your question..."
                    required
                    @input="$v.question.$touch()"
                    @blur="$v.question.$touch()"
                    multi-line
                  ></v-text-field>

                  <v-btn @click="submit">submit</v-btn>
                  <v-btn @click="clear">clear</v-btn>
                </form>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" flat @click.stop="dialog2=false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

      </v-layout>
      <br><br>
  </v-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  
  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(30) },
      email: { required, email },
      question: { required, maxLength: maxLength(250) }
    },

    data: () => ({
      name: '',
      email: '',
      question: '',
      dialog2: false
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      questionErrors () {
        const errors = []
        if (!this.$v.question.$dirty) return errors
        !this.$v.question.maxLength && errors.push('Name must be at most 250 characters long')
        !this.$v.question.required && errors.push('Question input is required')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
        if (this.nameErrors.length === 0 && this.emailErrors.length === 0 && this.questionErrors.length === 0) {
          fetch('https://prod-16.westeurope.logic.azure.com:443/workflows/dc9ecea8372d425db6ad7570f7808822/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vGEvyaP45ApfzZXw5F84JDmbYH9Omdn35KpZCdGPWyk', {
            method: 'POST',
            body: JSON.stringify({email: this.email, name: this.name, question: this.question})
          }).then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err))
        }
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.question = ''
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container{
  background-color: #f9e0e0;
  color: #5d0729;
  height: 100%;
}
#my-cv-text {
  margin-top: 20px;
  text-align: center;
  font-size: 1.10em;
}
#cards {
  text-align: justify;
}
.contact-action {
  bottom: 0px;
  position: absolute;
}
</style>
