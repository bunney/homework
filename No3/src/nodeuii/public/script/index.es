import css from  '../css/index.css'

class PraiseButton {
    constructor() {

    }
    clickAction() {
       axios.get('/index/updata')
                 .then(function (response) {
                console.log(response);
                 })
             .catch(function (error) {
                console.log(error);
                 });
            }
}


 export
 default PraiseButton;
