function readURL(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('#imgOne').attr('src', e.target.result)
        .width(200)
        .height(200);
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#imgInp").change(function() {
    readURL(this);
  });

  function readURLTwo(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('#imgTwo').attr('src', e.target.result)
        .width(200)
        .height(200);
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#imgURL").change(function() {
    readURLTwo(this);
  });