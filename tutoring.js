const gleich1 = 1;
const gleich2 = "1";

if (gleich1 === gleich2){
    console.log(true);
} else {
    console.log(false)
}


// function booleanToString(b){
//     const string = "" + b.toString
   
//     return string;
//   }
  
//   console.log(booleanToString(true));

function booleanToString(b){
    return b.toString();
  }

  console.log(booleanToString(true))