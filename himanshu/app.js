 var $selectnews  = $('#news');
 $.getJSON('http://192.168.1.5:5000/news/',function(data){
 
  $selectnews.html('');

for (var n = 0; n< data['data'].length; n++) {

 $selectnews.append('<li id ="'+data['data'][n]['id'] +'" >' + data['data'][n]['title'] + '<li><img src="" id=\"image\"/></li> '+'</li>' );

  }

 });



 var $select  = $('#language');

 $.getJSON('http://192.168.1.5:5000/languages',function(data){

  $select.html('');

for (var i = 0; i< data['data'].length; i++) {

 $select.append('<option id ="'+data['data'][i]['id'] +'" >' + data['data'][i]['language'] + '</option>' );

  }

 });




 var $selectcity  = $('#city');
 $.getJSON('http://192.168.1.5:5000/cities',function(data){

  $selectcity.html('');

 
for (var j = 0; j< data['data'].length; j++) {

 $selectcity.append('<option value ="'+data['data'][j]['id'] +'" >' + data['data'][j]['city'] + '</option>' );


}
});

$selectcity.change(function(){

var cityid  = $( "#city :selected" ).index();


$.ajax({

 	 type:"GET",
    url: "http://192.168.1.5:5000/news/cities/"+cityid+"/" +"languages/"+1 ,
    data: {},
    success: function(data){
   console.log(data)

var $selectnews  = $('#news');
 

  $selectnews.html('');

for (var n = 0; n< data['data'].length; n++) {

 $selectnews.append('<li id ="'+data['data'][n]['id'] +'" >' + data['data'][n]['title'] + '</li>' );
 //console.log(data['data'][n]['image_url']);

 $selectnews.append('<p><img src ="'+data['data'][n]['image_url'] +'"id=\"newsf\" >  <hr> </p>'  );

  }

 



      }

})


}); 



$(document).ready(function() {
 $('#news>li').removeClass("padding-left" ,"58%")
});


