let oxygen = 94; 
function getOxygen (oxygen){

    if (oxygen > 95) {
        console.log (' Normal Reading.');
    }
    else if (oxygen == 95) {
        console.log (' Acceptable to continue home  monitoring.');

    }
    else if (oxygen >=92 && oxygen <95 ){
    console.log ('Seek advise from health professionals.');
    }
    else {
        console.log ('Seek urgent medical advice.');
    }

}
getOxygen(oxygen);