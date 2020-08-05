function genPassword(){
    let numLimit = prompt("How many characters would you like in your password?");
    // Set limits for amount of charaters
    if(numLimit < 8){

        alert("Not enough characters!")

        return
        
    } else if (numLimit > 128) {

        alert("You have too many characters!")

        return
    };

    // Set variables for confirm response!
    let specialCase = confirm("Would you like special characters?")
    let numCase = confirm("Would you like numbers?")
    let lowerCase = confirm("Would you like lowercase characters?")
    let upperCase = confirm("Would you like uppercase characters?")

    // Define variables for characters!
    let specialChar = "!#$ % & '()*+,-./:;<=>?@[]^_`{|}~"
    let lowerChar = "abcdefghijklmnopqrstuvwxyz"
    let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numChar = "1234567890"
    
    let password = ""

    // Conditional for which characters to bring in to password!

    if(lowerCase === true) {
        password += lowerChar
    } 
    if(upperCase === true){
        password += upperChar
    } 
    if(specialCase === true) {
        password += specialChar
    } 
    if(numCase === true) {
        password += numChar
    } ;

    let newPassword = ""

    // For loop to randomly select characters
    for(let i = 0; i < numLimit; i++){
    
    let randomiNDEX = Math.floor(Math.random() * password.length)

    newPassword += password.charAt(randomiNDEX);
    };

    console.log(newPassword)

    document.getElementById("password").innerHTML = newPassword
}
document.getElementById("generate").addEventListener("click", genPassword);

