require([
  '$api/models',
  '$api/search#Search',
  '$views/list#List',
  '$views/buttons#CustomButton'
], function(models, Search, List, CustomButton) {
  'use strict';
	
	var search = CustomButton.withClass('search', 'Search');
	$('#info').append(search.node);
	
	function getArtists() {
			$('a').remove();
			$('h2').remove();
			
			var city = $('#city').val();
			
			if(city == "") {
				$('#result').slideDown("slow", function() {
					$('#result').html("<h2>Enter a city	</h2>");
				});
			}
			else {
				var clickedOnce = false;
				var artist;
				$('#result').append('<h3 class=loading>Loading</h3>');
				$('#result').slideDown("slow", function() {
					$.getJSON("http://developer.echonest.com/api/v4/artist/search?"+
					"api_key=BQMYVZPSG9FDJTT7N&artist_location=" + city + "&sort=hotttnesss-desc&"+
					"bucket=biographies", function(result) {
						if(result.response.artists.length > 0) {
							for(var i=0;i<result.response.artists.length;i++) {
								$('#result').append("<a style=background-color:#636363; href=#"+ 
								" id=artist" + i + ">" + result.response.artists[i].name + "</a>");
									
							}
							$('a').slideDown("slow");
							$('#result h3').remove();
							
							$('#artist0').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist0').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist0').text();
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
										
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist0').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});	
							$('#artist1').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist1').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist1').text();
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist1').html("<p>Not in Spotify</p>");
											}	
										}
								});	
							});	
							$('#artist2').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist2').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist2').text();
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist2').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});
							$('#artist3').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist3').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist3').text();
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist3').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});
							$('#artist4').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist4 div').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist4').text();
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist4').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});
							$('#artist5').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist5').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist5').text();
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist5').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});
							$('#artist6').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist6').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist6').text();
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist6').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});
							$('#artist7').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist7').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist7').text();
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist7').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});
							$('#artist8').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist8').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist8').text();	
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist8').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});
							$('#artist9').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist9').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist9').text();
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist9').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});
							$('#artist10').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist10').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist10').text();	
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist10').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});
							$('#artist11').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist11').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist11').text();
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist11').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});
							$('#artist12').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist12').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist12').text();
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist12').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});
							$('#artist13').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist13').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist13').text();
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist13').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});
							$('#artist14').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist14').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist14').text();
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist14').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});
							$('#artist15').click(function() {
								$.getJSON("http://ws.spotify.com/search/1/album.json?q="+
									$('#artist15').text(), function(result2) {
										$('#artist div').remove();
										artist = $('#artist15').text();
										if(result2.albums.length > 0) {
											clickedOnce = true;
											
											models.Album.fromURI(result2.albums[0].href).load('image').done(function(pic) {
												$('body').css('background-image', 'url(' + pic.image + ')');
											});	
											
											var album = models.Album.fromURI(result2.albums[0].href);
											var showAlbum = List.forAlbum(album);
											$('#artist').append(showAlbum.node);
											showAlbum.init();
										}
										else {
											if(clickedOnce == false) {
												$('#artist15').html("<p>Not in Spotify</p>");
											}
										}
								});	
							});							
							}
						else {
							$('#result').slideDown("slow", function() {
								$('#result').html("<h2>No artists found</h2>");
							});
						}
					});
				});
			}
		}
		$('.search').click(getArtists);
		$('#city').keyup(function(event) {
			if(event.which == 13) {
				getArtists();
			}
		});	
});
