let oxygen = 135; 
function getOxygen (oxygen){

    if (oxygen >= 40 && oxygen <=100) {
        console.log (' Normal Reading.');
    }
    else if (oxygen >= 101 && oxygen <=109) {
        console.log (' Acceptable to continue home  monitoring.');

    }
    else if (oxygen >= 110 && oxygen <=130 ){
    console.log ('Seek advise from health professionals.');
    }
    else  {
        console.log ('Seek urgent medical advice.');
    }
    
}
getOxygen(oxygen);