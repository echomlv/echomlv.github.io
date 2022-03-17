var toc = document.getElementById('sidebar-stoc')

if (toc != null) {
    window.addEventListener("scroll", scrollcatelogHandler);
    var tocPosition = toc.offsetTop;
    var height_header = $("#header").height();
    function scrollcatelogHandler(e) {
         var event = e || window.event,
             target = event.target || event.srcElement;
         var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
         if (scrollTop >  tocPosition -60) {
             toc.classList.add("stoc-fixed");
         } else {
             toc.classList.remove("stoc-fixed");
         }
    }
}
