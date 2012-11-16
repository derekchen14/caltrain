/*********************
	Set up the page
**********************/
$(function() {
  $(window).resize(swap);
  swap();
  window.scrollTo(0,1)
	retrieveState();
});

/*********************
  Go to Section
**********************/
$('.shift').click(function() {
  var id = $(this).attr('href');
  $('html,body').animate({scrollTop: $(id).offset().top},'slow');
});

function swap() {
  var size = grabSize();
  console.log(size);
  if (size=="desktop") {
      $('img').each(function(index) {
      var large = $(this).data('large');
      $(this).attr('src',large);
    })
  };
}

function grabSize() {
  var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
  return size;
}

/*********************
	Local Storage
**********************/
function storeState() {
  localStorage.train = $('body').html();
}
function retrieveState() {
	if (localStorage.train) {
		$('body').append(localStorage.train);
	}
}

/*********************
  Back to Top
**********************/
$('#top').click(function() {
 $("html, body").animate({ scrollTop: 0 }, "slow");
 return false;
});