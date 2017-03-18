var post = $('#post')

$('.ajax').on('click', function(e) {
  var name = e.target.data("post-name")
  $.ajax({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/dum3ng/test/master/python/'+name+'.md',

  }).done(function(md) {
    post.html(marked(md))
  })
})
