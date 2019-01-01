var form = {
    init: function(name, firstname, button, messError1, messError2, setName, setFirstame, signature){
        form.name = name;
        form.firstname = firstname;
        form.button = button;
        form.messError1 = messError1;
        form.messError2 = messError2;
        form.setName = setName;
        form.setFirstame = setFirstame;

        form.checkForm();
        form.btnActive();
        form.validForm(signature);
    },

    checkForm: function(){
        if(form.name.value.length < 3 || form.firstname.value.length < 3){
            form.button.disabled = true;
        }else if(form.name.value.length > 3 && form.firstname.value.length > 3){
            form.button.disabled = false;
        };
    },

    btnActive: function(){
        form.name.addEventListener("input", form.checkForm.bind(form));
        form.firstname.addEventListener("input", form.checkForm.bind(form));
    },

    validForm: function(signature){
        form.button.addEventListener("click", function(){
            console.log("click btn ok");
            if(form.regName === false || form.regFirstname === false){
                console.log("form no valid");
                signature.className = "signature";
            }else{
                console.log("form valid");
                if(typeof sessionStorage!='undefined') {
                    alert("Message récupéré");
                    localStorage.setItem("form.setName", form.name.value);
                    localStorage.setItem("form.setFirstname", form.firstname.value);
                  }else {
                    alert("sessionStorage n'est pas supporté");
                  };
                console.log(form.name.value);
                console.log(form.firstname.value);
                signature.className = "signatureVisible";
            };
        });
    }
};