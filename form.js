var form = {
    init: function(name, firstname, button, messError1, messError2, signature){
        form.name = name;
        form.firstname = firstname;
        form.button = button;
        form.messError1 = messError1;
        form.messError2 = messError2;

        form.testRegExp(signature);
    },

    testRegExp: function(){
        console.log("regExp ok!");
        form.regName = false;
        form.regexName = /(a-z) (\-)/;
        form.regFirstname= false;
        form.regexFirstname = /(a-z) (\-)/;
        form.name.addEventListener("input", function(e) {
            if((!form.regexName.test(e.target.value)) && (form.name.length > 3)){
                form.regName = true;
            }else{
                form.regName = false;
            };
        });

        form.firstname.addEventListener("input", function(e) {
            if((!form.regexFirstname.test(e.target.value)) && (form.firstname.length > 3)){
                form.regFirstname = true;
            }else{
                form.regFirstname = false;
            };
        });

        
        form.button.addEventListener("click", function(){
            if(form.regName === true){
                form.messError1.innerHTML = "Vous devez entrer votre nom";
            };

            if(form.regFirstname === true){
                form.messError2.innerHTML = "Vous devez entrer votre prénom";
            };

            console.log(form.regName + "et" + form.regFirstname);

            if(form.regName === true && form.regFirstname === true){
                signature.className = "signatureVisible";
            }else{
                signature.className = "signature";
            };
        });
        
    }
};