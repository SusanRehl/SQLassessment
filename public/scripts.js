$( document ).ready(function(){
  showAnimals();

  $('#addButton').on('click', function(){  // get product name from input
    var animalName = $('#animalIn').val();
    var newAnimal = {
      "animal": animalName,
      "animal_num": 5,//set to random number between 1 and 100
    }; // end object
    $.ajax({    //send new animal to database
      type: 'POST',
      url: '/addAnimal',
      data: newAnimal,
      success: function(dataIn){
        // console.log("ajax success: " + dataIn);
          var animalOut = "<p>" + dataIn[i].animal + dataIn[i].animal_num;
          $('#outputDiv').append(animalOut);
      }
    }); //end ajax
    showAnimals();
    clearInput();
  }); //end button on click function


  function clearInput() {  // clears data from input box
      document.getElementById('animalIn').value='';
    }
   // end of clearinput f


function showAnimals(){ // get list of products
    $.ajax({
      type: 'GET',
      url: '/getList',
      success: function(dataIn){
        $('#outputDiv').empty();
        for(i=0; i<dataIn.length; i++) {
          var animalOut = "<p>" + dataIn[i].animal + dataIn[i].animal_num;
          $('#outputDiv').append(animalOut);
        }
      } // end success
    }); //end ajax call to get list
  }// end get products on click function

}); // end document ready
