// Smooth scrolling
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  
  // Form submission
  $(document).ready(function(){
    $("#contactForm").submit(function(event){
      event.preventDefault(); // Prevent default form submission
      // Add your form submission logic here, such as sending the form data to a server via AJAX
      // For demonstration purposes, let's just log the form data to the console
      var formData = $(this).serializeArray();
      console.log(formData);
      // Optionally, display a success message or perform other actions after form submission
    });
  });
