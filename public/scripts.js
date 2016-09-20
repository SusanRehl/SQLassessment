$( document ).ready(function(){
  showAnimals();  // calls showAnimals function to get animals from database and send to DOM

  $('#addButton').on('click', function(){  // get animal name from input
    var animalName = $('#animalIn').val();
    console.log(animalName);
    var newAnimal = {
      "animal": animalName,
    }; // end object
    console.log(newAnimal);
    $.ajax({    //send new animal to database
      type: 'POST',
      url: '/addAnimal',
      data: newAnimal,
      // success: function(dataIn){
      //       showAnimals();  // calling showAnimals function to refresh DOM
      // }
      // success: function(dataIn){
          // }
    });// end ajax call
    showAnimals();  // calling showAnimals function to refresh DOM
    clearInput(); // calls clearInput function to clear value of text input box
  }); //end button on click function


  function clearInput() {  // clears data from input box
      document.getElementById('animalIn').value='';
    }   // end of clearinput box

var animalOut;

function showAnimals(){ // get animal list from database and appends to outputDiv
    $.ajax({
      type: 'GET',
      url: '/getList',
      success: function(dataIn){
        $('#outputDiv').empty();  // resets div to empty
        for(i=0; i<dataIn.length; i++) {
          animalOut = "<p>" + dataIn[i].animal + ":  " + dataIn[i].animal_num;
          $('#outputDiv').append(animalOut);
          console.log("showAnimals: ", animalOut);
        }
      } // end success
    }); //end ajax call to get list
  }// end show animals function

}); // end document ready
