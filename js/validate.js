function validate(event) {
  let latitude = document.querySelector('#latitude');
  let longtitude = document.querySelector('#longtitude');
  let latitudeNum = latitude.value.trim();
  let longtitudeNum = longtitude.value.trim();
  let latChecker = false;
  let longChecker = true;

  if(!latitudeNum <= -90 || lat >= 90){
    document.querySelector('#latLabel>span').innerHTML ="";
    document.querySelector('#latLabel>span').append("* must be a valid Latitude (-90 to 90)");
    latChecker = false;

  } else{
    document.querySelector('#latLabel>span').innerHTML ="";
    latChecker = true;
  }
 
  if(!longtitudeNum <= -180 || longtitudeNum >= 180){
    document.querySelector('#longLabel>span').innerHTML ="";
    document.querySelector('#longLabel>span').append("* must be a valid Longtitude(-180 to 180)");
    longChecker = false;
  } else{
    document.querySelector('#longLabel>span').innerHTML ="";
    longChecker = true;
  }

  if (latChecker === false || longChecker === false){
    event.preventDefault();
  }

 }
 
// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};