$('a.project')
    .mouseenter( function(event){
        $(event.target.parentElement).children('.project-title').fadeIn(200);
    })
    .mouseleave(function(event){
        $(event.target.parentElement).children('.project-title').fadeOut(200);
    })