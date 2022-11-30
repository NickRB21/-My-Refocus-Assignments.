function convertToKelvin (tempCelsuis) {

    let tempKelvin =(tempCelsuis + 273.15 );
    return tempKelvin;
    
}
console.log(convertToKelvin(3));

function convertToKelvin (tempFahrenheit) {
    let  tempKelvin=(tempFahrenheit -32) *5/9 + 273.15
    return tempKelvin;
 
}
console.log(convertToKelvin(8));


