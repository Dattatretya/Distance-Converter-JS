(function(){
    "use strict";
    var convertType = "miles";
    var heading = document.querySelector('h1');
    var intro = document.querySelector('p');
    var answerDiv = document.getElementById('answer');
    var form = document.getElementById('convert');

    document.addEventListener('keydown', function(event){

        var key= event.code;

        if (key === 'KeyK'){
            convertType= 'kilometers';
            heading.innerHTML="Kilometers to miles converter";
            intro.innerHTML="Type in a number of km and press the key to convert the kilometer into miles";


        }
        else if (key === 'KeyM'){
            convertType= 'miles';
            heading.innerHTML="miles to kilometers converter";
            intro.innerHTML="Type in a number of miles and press the key to convert the miles into km";
            
        }

    });

    form.addEventListener('submit', function(event){
        event.preventDefault();

        var distance = parseFloat(document.getElementById('distance').value);

        if (distance ){
            if (convertType=="miles"){
                var converted = (distance * 1.689344).toFixed(2);
                answerDiv.innerHTML=`${distance} miles is equal to ${converted} km`;
            }
            else{
                var converted = (distance * 0.62137).toFixed(2);
                answerDiv.innerHTML=`${distance} kms is equal to ${converted} miles`;

            }
        }
        else{
            answer.innerHTML='<h2>Please provide a number</h2>';
        }

    });


})();