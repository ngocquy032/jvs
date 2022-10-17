var elForm, elSlectPackage, elPackageHint, elTerms, elTermsHint;

elForm = document.getElementById('formSignup');
elSlectPackage = document.getElementById('package');
elPackageHint =  document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function  packageHint(){
    var park = this.options[this.selectedIndex].value;
    if(park === "monthly"){
        elPackageHint.innerHTML = 'save $10 if you pay for 1 year!';
    }else{
        elPackageHint.innerHTML = 'Wise choice!';
    }
}

function checkTerms(){
    if(!elTermsHint.checked){
        elTermsHint.innerHTML = 'You must agree to the terms.';
    }
}

elForm.addEventListener('submit', checkTerms, false);
elSlectPackage.addEventListener('change', packageHint, false);