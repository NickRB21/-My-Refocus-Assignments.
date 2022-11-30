function bmiCalculations ( height, weight) {
     
    let bmiTotal = (weight/ (height  * height) * 738.).toFixed(2);
    console.log(`Your BMI is : ${bmiTotal}`);
}
bmiCalculations (60, 153);
