if ("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(function(position) {

  let latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
  let myOptions = {
    zoom: 8,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    disableDefaultUI: true
  }

  let map = new google.maps.Map(document.getElementById('map_canvas'), myOptions)
  let iconBase = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1u6z8SKzHxpjuUgGz-DUsORD3tbWBi2TlW9FTdi5SyREXTdAomg'

  let marker = new google.maps.Marker({
    position: latlng,
    icon: iconBase, 
    map: map
  })
})
} else  {
  let para = document.createElement('p');
  para.textContent = 'Argh, no geolocation!';
  document.body.appendChild(para);
}