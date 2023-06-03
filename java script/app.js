
// name take prosses 
let name = prompt("Please Enter Your Name : ", "Your Name");

// gender take prosses 
let gender = prompt("Please Enter Your Gender :", "your gender");

// age taking prosses
let age = prompt("Please Enter Your Age :", "your age ");

if (age<= 0){
    prompt("Please enter an age that is more than zero.");
}

if(confirm("Do You Want To Skip The Welcoming Message ?!")){
    alert("Welcoming Message Was Skiped")
}else{
    if(gender="male"){
    alert("Welcome the page Mr."+ name);
    }else if(gender="female"){
    alert("Welcom The Page Ms."+ name);
    }else{
    alert("Welcom The Page "+ name)
    }
}

