   
   
   $(document).ready(function(){
    $("#registration").validate({
      // Specifying validation rules
      rules: {
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6
        }
      },
    
    });
  });
  
  