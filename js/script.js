new Vue ({
    el: '#root',
    data: {
        email: "",
        emails: [],
    },
    methods: {
        getOneMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(axiosResponse => {
                this.email = axiosResponse.data.response;
                this.emails.push(this.email);
            })
        },
        getTenMails(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(axiosResponse => {
                    this.email = axiosResponse.data.response;
                    this.emails.push(this.email);
                })
            }
        }
    }
})