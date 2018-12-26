var form = {
    init: function(name, firstname, button, messError1, messError2, messError){
        form.name = name;
        form.firstname = firstname;
        form.button = button;
        form.messError1 = messError1;
        form.messError2 = messError2;
        form.messError = messError;

        form.testInputs();
        form.btnActive();
        form.validForm();
    },

    testInputs: function(){
        console.log("regExp ok! " + form.name.value.length);
        form.regName = false;
        form.regFirstname= false;

        form.name.addEventListener("input", function() {
            if( form.name.value.length < 3){
                form.messError1.className = "messError1v";
                form.regName = false;
            }else{
                form.regName = true;
                form.messError1.className = "messError1";
            };
        });

        form.firstname.addEventListener("input", function() {
            if(form.firstname.value.length < 3){
                form.regFirstname = false;
                form.messError2.className = "messError2v";
            }else{
                form.regFirstname = true;
                form.messError2.className = "messError2";
            };
        });
    },

    btnActive: function(){
        $(messError).onkeyup(function(){
            if(form.regName === false || form.regFirstname === false){
                form.button.disabled = true;
            }else if(form.regName === true && form.regFirstname === true){
                form.button.disabled = false;
            };
        });
    },

    validForm: function(){
        form.button.addEventListener("click", function(){
            console.log("click btn ok");
            if(form.regName === false || form.regFirstname === false){
                console.log("form no valid");
                //signature.className = "signatureVisible";
            }else{
                console.log("form valid");
                //signature.className = "signature";
            };
        });
    }
};