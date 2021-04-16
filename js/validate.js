function validate(event) {

  let latitude = document.querySelector('#latitude');
  let longtitude = document.querySelector('#longtitude');
  let latitudeValue = latitude.value.trim();
  let longtitudeValue = longtitude.value.trim();

  if(isNaN(latitudeValue)  || latitudeValue < -90 || latitudeValue > 90){
    document.querySelector('#lblLatitude>span').innerHTML ="";
    document.querySelector('#lblLatitude>span').append("* must be a valid Latitude (-90 to 90)");
    event.preventDefault();
  } else{
    document.querySelector('#lblLatitude>span').innerHTML ="";
    document.querySelector('#lblLatitude>span');
    return true;
  }
 
  if(isNaN(longtitudeValue) || longtitudeValue< -180 || longtitudeValue > 180){
    document.querySelector('#lblLongtitude>span').innerHTML ="";
    document.querySelector('#lblLongtitude>span').append("* must be a valid Longtitude(-180 to 180)");
    event.preventDefault();
  } else{
    document.querySelector('#lblLongtitude>span').innerHTML ="";
    document.querySelector('#lblLatitude>span').append("* must be a valid Latitude (-90 to 90)");
    return true;
  }

 }
 
// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};