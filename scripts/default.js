function tellUs(){
    console.log('%cthrottle ','color:blue',(new Date).getTime()/1000);
}
function tellThem(){
    console.log('%cdebounce ','color:green',(new Date).getTime()/1000);
}
$(() => {
    $(window)
        .on('scroll', _.throttle(tellUs,500))
        .on('scroll', _.debounce(tellThem,500));
})