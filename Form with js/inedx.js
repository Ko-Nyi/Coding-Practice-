function checkpasswords(){
    var p1=document.getElementById("passwordA");
    var p2=document.getElementById("passwordB");
    if (p1.value !==p2.value){
      p2.setCustomvalidity("Passwords do not match");
    }else{
      p2.setCustomvalidity(" ");
    }
    var strength=document.getElementById("passwordStrength");
    var multiplier=0;
    if (/[a-z]/.test(p1.value)){multiplier++;}
    if (/[A-Z]/.test(p1.value)){multiplier++;}
    if (/[0-9]/.test(p1.value)){multiplier++;}
    strength.value=p1.value.length*multiplier;
  }
  function vlaidateCallingOptions(){
    var input=document.getElementById("call");
    var validity=input.validity;
    if (validity.patternMismatch){
      input.setCustomvalidity("Not a phone number");
    }else{
      input.setCustomvalidity(" ");
    }
  }