$(function(){function o(L,P,t,j){var a;(P.match("mega-menu")||P.match("hot-posts")||P.match("feat-big")||P.match("col-left")||P.match("col-right")||P.match("videos-items")||P.match("grid-big")||P.match("feat-list")||P.match("post-list")||P.match("related"))&&(a="",a="recent"==j?"/feeds/posts/default?alt=json-in-script&max-results="+t:"random"==j?"/feeds/posts/default?max-results="+t+"&start-index="+(Math.floor(Math.random()*t)+1)+"&alt=json-in-script":"/feeds/posts/default/-/"+j+"?alt=json-in-script&max-results="+t,$.ajax({url:a,type:"get",dataType:"jsonp",beforeSend:function(){P.match("hot-posts")&&L.html('<div class="hot-loader"/>').parent().addClass("show-hot")},success:function(t){var a;P.match("mega-menu")?a='<ul class="mega-menu-inner">':P.match("hot-posts")?a='<ul class="hot-posts">':P.match("feat-big")?a='<ul class="feat-big">':P.match("col-right")||P.match("col-left")?a='<ul class="feat-col">':P.match("videos-items")?a='<ul class="videos-items">':P.match("grid-big")?a='<ul class="grid-big">':P.match("feat-list")?a='<ul class="feat-list">':P.match("post-list")?a='<ul class="custom-widget">':P.match("related")&&(a='<ul class="related-posts">');var s,e,i,l,o,c,n,r,m,h,d,p,u,f,g,v=t.feed.entry;if(null!=v){for(var b=0,w=v;b<w.length;b++){var x=function(t,a){for(var s=0;s<t[a].link.length;s++)if("alternate"==t[a].link[s].rel){var e=t[a].link[s].href;break}return e}(w,b),k='<a href="'+x+'">'+w[b].title.$t+"</a>",y=(g=u=p=d=h=void 0,f=(r=w)[m=b].title.$t,g=r[m].content.$t,"media$thumbnail"in r[m]?(d=(h=r[m].media$thumbnail.url).replace("/s72-c","/w640"),p=h.replace("/s72-c","/w280"),u=h.replace("/s72-c","/w100"),-1<g.indexOf("youtube.com/embed")&&(d=h.replace("/default.","/hqdefault."),p=h.replace("/default.","/mqdefault."),u=h)):(d=noThumbnail,p=noThumbnail.replace("/s680","/w280"),u=noThumbnail.replace("/s680","/w100")),['<img class="post-thumb" alt="'+f+'" src="'+d+'"/>','<img class="post-thumb" alt="'+f+'" src="'+p+'"/>','<img class="post-thumb" alt="'+f+'" src="'+u+'"/>']),C=null!=(c=w)[n=b].category?'<span class="post-tag">'+c[n].category[0].term+"</span>":"",A='<span class="post-author">'+w[b].author[0].name.$t+" </span>",T=(e=void 0,i=(e=w[b].published.$t).substring(0,4),l=e.substring(5,7),o=e.substring(8,10),'<span class="post-date">'+monthFormat[parseInt(l,10)-1]+" "+o+", "+i+"</span>"),_=(s=w[b].content.$t,'<p class="post-snippet">'+$("<div>").html(s).text().trim().substr(0,86)+"…</p>"),q="";P.match("mega-menu")?q+=' <div class="mega-item item-'+b+'"> <div class="mega-content"> <div class="post-image-wrap"><a class="post-image-link" href="'+x+'">'+y[1]+'</a></div> <h2 class="post-title">'+k+'</h2> <div class="post-meta">'+T+"</div> </div> </div>":P.match("hot-posts")?q+=0==b?' <li class="hot-item item-'+b+'"> <div class="hot-item-inner"><a class="post-image-link" href="'+x+'">'+y[0]+'</a> <div class="post-info">'+C+' <h2 class="post-title">'+k+'</h2> <div class="post-meta">'+A+T+"</div> </div> </div> </li>":' <li class="hot-item item-'+b+'"> <div class="hot-item-inner"><a class="post-image-link" href="'+x+'">'+y[0]+'</a> <div class="post-info">'+C+' <h2 class="post-title">'+k+'</h2> <div class="post-meta">'+T+"</div> </div> </div> </li>":P.match("feat-big")?q+=0==b?' <li class="feat-item item-big item-'+b+'"> <div class="feat-inner"><a class="post-image-link" href="'+x+'">'+y[0]+"</a>"+C+' <div class="post-info"> <h2 class="post-title">'+k+'</h2> <div class="post-meta">'+A+T+"</div>"+_+"</div> </div> </li>":' <li class="feat-item item-small item-'+b+'"><a class="post-image-link" href="'+x+'">'+y[1]+'</a> <div class="post-info"> <h2 class="post-title">'+k+'</h2> <div class="post-meta">'+T+"</div> </div> </li>":P.match("col-left")||P.match("col-right")?q+=0==b?' <li class="feat-item item-big item-'+b+'"> <div class="feat-inner"><a class="post-image-link" href="'+x+'">'+y[0]+"</a>"+C+' <div class="post-info"> <h2 class="post-title">'+k+'</h2> <div class="post-meta">'+A+T+"</div>"+_+"</div> </div> </li>":' <li class="feat-item item-small item-'+b+'"><a class="post-image-link" href="'+x+'">'+y[2]+'</a> <div class="post-info"> <h2 class="post-title">'+k+'</h2> <div class="post-meta">'+T+"</div> </div> </li>":P.match("videos-items")?q+=' <li class="feat-item item-small item-'+b+'"><a class="post-image-link" href="'+x+'">'+y[1]+'</a><span class="video-icon"></span> <div class="post-info"> <h2 class="post-title">'+k+'</h2> <div class="post-meta">'+T+"</div> </div> </li>":P.match("grid-big")?q+=' <li class="feat-item item-big item-'+b+'"> <div class="feat-inner"><a class="post-image-link" href="'+x+'">'+y[0]+"</a>"+C+' <div class="post-info"> <h2 class="post-title">'+k+'</h2> <div class="post-meta">'+A+T+"</div> </div> </li>":P.match("feat-list")?q+=' <li class="feat-item item-'+b+'"> <div class="feat-inner"><a class="post-image-link" href="'+x+'">'+y[0]+"</a>"+C+' <div class="post-info"> <h2 class="post-title">'+k+'</h2> <div class="post-meta">'+A+T+"</div>"+_+"</div> </div> </li>":P.match("post-list")?q+=' <li class="item-'+b+'"><a class="post-image-link" href="'+x+'">'+y[0]+"</a>"+C+' <h2 class="post-title">'+k+'</h2> <div class="post-meta">'+T+"</div> </div> </li>":P.match("related")&&(q+=' <li class="related-item item-'+b+'"><a class="post-image-link" href="'+x+'">'+y[1]+'</a> <h2 class="post-title">'+k+'</h2> <div class="post-meta">'+T+"</div> </li>"),a+=q}a+="</ul>"}else a='<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown-o"/></ul>';P.match("mega-menu")?(L.addClass("has-sub mega-menu").append(a),L.find("a:first").attr("href",function(t,a){return"recent"==j||"random"==j?a.replace(a,"/search/?&max-results="+postPerPage):a.replace(a,"/search/label/"+j+"?&max-results="+postPerPage)})):P.match("hot-posts")?L.html(a).parent().addClass("show-hot"):P.match("feat-big")||P.match("feat-list")||P.match("col-left")||P.match("col-right")||P.match("videos-items")||P.match("grid-big")?(L.parent().find(".widget-title").append('<a class="view-all" href="/search/label/'+j+"?&max-results="+postPerPage+'">'+messages.viewAll+"</a>"),(P.match("col-left")||P.match("col-right"))&&(P.match("col-right")&&L.parent().addClass("col-right"),L.parent().addClass("col-width")),L.html(a).parent().addClass("show-widget")):L.html(a)}}))}$("#main-menu").each(function(){for(var t=$(this).find(".LinkList ul > li").children("a"),a=t.length,s=0;s<a;s++){var e,i=t.eq(s),l=i.text();"_"!==l.charAt(0)&&"_"===t.eq(s+1).text().charAt(0)&&(e=i.parent()).append('<ul class="sub-menu m-sub"/>'),"_"===l.charAt(0)&&(i.text(l.replace("_","")),i.parent().appendTo(e.children(".sub-menu")))}for(s=0;s<a;s++){var o,c=t.eq(s),n=c.text();"_"!==n.charAt(0)&&"_"===t.eq(s+1).text().charAt(0)&&(o=c.parent()).append('<ul class="sub-menu2 m-sub"/>'),"_"===n.charAt(0)&&(c.text(n.replace("_","")),c.parent().appendTo(o.children(".sub-menu2")))}$("#main-menu ul li ul").parent("li").addClass("has-sub"),$("#main-menu .widget").addClass("show-menu")}),$("#main-menu-nav").clone().appendTo(".mobile-menu"),$(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".mobile-menu ul > li a").each(function(){var t=$(this),a=t.attr("href").trim(),s=a.toLowerCase(),e=a.split("/")[0];s.match("mega-menu")&&t.attr("href","/search/label/"+e+"?&max-results="+postPerPage)}),$(".slide-menu-toggle").on("click",function(){$("body").toggleClass("nav-active"),$(".overlay").fadeToggle(170)}),$(".mobile-menu ul li .submenu-toggle").on("click",function(t){$(this).parent().hasClass("has-sub")&&(t.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))}),$(".show-search, .show-mobile-search").on("click",function(){$("#nav-search, .mobile-search-form").fadeIn(250).find("input").focus()}),$(".hide-search, .hide-mobile-search").on("click",function(){$("#nav-search, .mobile-search-form").fadeOut(250).find("input").blur()}),$(".Label a, a.b-label").attr("href",function(t,a){return a.replace(a,a+"?&max-results="+postPerPage)}),$(".avatar-image-container img").attr("src",function(t,a){return(a=a.replace("/s35-c/","/s45-c/")).replace("//img1.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png")}),$(".index-post .post-image-link img").attr("src",function(t,a){return a.replace("https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png",noThumbnail)}),$(".author-description a").each(function(){$(this).attr("target","_blank")}),$(".post-nav").each(function(){var t=$("a.prev-post-link").attr("href"),a=$("a.next-post-link").attr("href");$.ajax({url:t,type:"get",success:function(t){var a=$(t).find(".blog-post h1.post-title").text();$(".post-prev a .post-nav-inner p").text(a)}}),$.ajax({url:a,type:"get",success:function(t){var a=$(t).find(".blog-post h1.post-title").text();$(".post-next a .post-nav-inner p").text(a)}})}),$(".post-body strike").each(function(){var t=$(this),a=t.text();a.match("left-sidebar")&&t.replaceWith("<style>.item #main-wrapper{float:right;padding:0 0 0 25px}.item #sidebar-wrapper{float:left}</style>"),a.match("right-sidebar")&&t.replaceWith("<style>.item #main-wrapper{float:left;padding:0 25px 0 0}.item #sidebar-wrapper{float:right}</style>"),a.match("full-width")&&t.replaceWith("<style>.item #main-wrapper{width:100%;padding:0}.item #sidebar-wrapper{display:none}</style>")}),$("#main-wrapper, #sidebar-wrapper").each(function(){1==fixedSidebar&&$(this).theiaStickySidebar({additionalMarginTop:25,additionalMarginBottom:25})}),$(".back-top").each(function(){var t=$(this);$(window).on("scroll",function(){100<=$(this).scrollTop()?t.fadeIn(250):t.fadeOut(250)}),t.click(function(){$("html, body").animate({scrollTop:0},500)})}),$("#main-menu #main-menu-nav li").each(function(){var t=$(this),a=t.find("a").attr("href").trim();o(t,a.toLowerCase(),5,a.split("/")[0])}),$("#hot-section .widget-content").each(function(){var t=$(this),a=t.text().trim();o(t,a.toLowerCase(),4,a.split("/")[0])}),$(".featured-posts .widget-content").each(function(){var t,a=$(this),s=a.text().trim(),e=s.toLowerCase(),i=s.split("/"),l=e.match("feat-big")?(t=5,i[0]):(t=i[0],i[1]);o(a,e,t,l)}),$(".common-widget .widget-content").each(function(){var t=$(this),a=t.text().trim(),s=a.toLowerCase(),e=a.split("/");o(t,s,e[0],e[1])}),$(".related-ready").each(function(){var t=$(this);o(t,"related",3,t.find(".related-tag").data("label"))}),$(".blog-post-comments").each(function(){var t,a=commentsSystem,s=(disqus_blogger_current_url,'<div class="fb-comments" data-width="100%" data-href="'+$(location).attr("href")+'" data-numposts="5"></div>'),e="comments-system-"+a;"blogger"==a?$(this).addClass(e).show():"disqus"==a?((t=document.createElement("script")).type="text/javascript",t.async=!0,t.src="//"+disqusShortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t),$("#comments, #gpluscomments").remove(),$(this).append('<div id="disqus_thread"/>').addClass(e).show()):"facebook"==a?($("#comments, #gpluscomments").remove(),$(this).append(s).addClass(e).show()):"hide"==a?$(this).hide():$(this).addClass("comments-system-default").show()})});
