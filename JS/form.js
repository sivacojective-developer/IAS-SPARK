// form validation

const form = document.getElementById("leadForm");

form.addEventListener("submit", function(e){
e.preventDefault();

form.submit();

swal({
title: "Success!",
text: "Form submitted successfully",
type: "success",
confirmButtonColor: "#3085d6"
});

form.reset();
});