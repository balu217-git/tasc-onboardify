
( function() {

  var youtube = document.querySelectorAll( ".youtube" );

  for (var i = 0; i < youtube.length; i++) {

  var source = "https://i.ytimg.com/vi/j1eGhpiqDAc/maxresdefault.jpg";
  var image = new Image();
  image.src = source;
  image.addEventListener( "load", function() {
  youtube[ i ].appendChild( image );
  }( i ) );

  youtube[i].addEventListener( "click", function() {

  var iframe = document.createElement( "iframe" );

  iframe.setAttribute( "frameborder", "0" );
  iframe.setAttribute( "allowfullscreen", "" );
  iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

  this.innerHTML = "";
  this.appendChild( iframe );
  } );
  };

  } )();


  $(document).ready(function(){
    const messages = [
        "REAL-TIME",
        "HASSLE- FREE"
    ];

    let currentIndex = 0;
    setInterval(function(){
        $('#slide-text').slideUp(1000, function(){
            currentIndex = (currentIndex + 1) % messages.length;
            $('#slide-text').text(messages[currentIndex]).slideDown(1000);
        });
    }, 2000); // Change text every 4 seconds
});