new Vue ({
    el: '#root',
    data: {
        // email: "",
        emails: [],
    },
    methods: {
        // getOneMail(){
        //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        //     .then(axiosResponse => {
        //         this.email.push(axiosResponse.data.response);
        //     })
        // },
        getTenMails(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((axiosResponse) => {
                    // this.emails.push(this.email);
                    this.emails.push(axiosResponse.data.response);
                })
            }
        }
    }
})

/* UN PO DI PROVE

SAREBBE COSI IL CODICE  axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(axiosResponse => {}


function then(functionDaChiamareQuandoArrivaRisposta) {
    //...
    const oggettoDaPassare = {
        data: {
            response: ''
        },

    };
    functionDaChiamareQuandoArrivaRisposta(oggettoDaPassare);
}
then(() => {

});

function get() {
    return {
        then() {

        }
    }
}
*/

/*


function a() {

}
a();

const a = function() {

};
a();

const a = () => {

};
a();
*/