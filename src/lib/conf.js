/**
 * 
 */
__CreateJSPath = function (js) {
    var scripts = document.getElementsByTagName("script");
    var path = "";
    for (var i = 0, l = scripts.length; i < l; i++) {
        var src = scripts[i].src;
        if (src.indexOf(js) != -1) {
            var ss = src.split(js);
            path = ss[0];
            break;
        }
    }
    var href = location.href;
    href = href.split("#")[0];
    href = href.split("?")[0];
    var ss = href.split("/");
    ss.length = ss.length - 1;
    href = ss.join("/");
    if (path.indexOf("https:") == -1 && path.indexOf("http:") == -1 && path.indexOf("file:") == -1 && path.indexOf("\/") != 0) {
        path = href + "/" + path;
    }
    return path;
}
var bootPATH = __CreateJSPath("conf.js"); 



//document.write('<link rel="stylesheet" type="text/css" href="'+bootPATH+'/bootstrap/css/bootstrap.css">';
//document.write('<link rel="stylesheet" type="text/css" href="'+bootPATH+'../stylesheets/theme.css">';
//document.write('<link rel="stylesheet" href="'+bootPATH+'/font-awesome/css/font-awesome.css">';

document.write('<link href="' + bootPATH + 'bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + bootPATH + '../stylesheets/theme.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + bootPATH + 'font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css" />');

document.write('<script src="'+bootPATH+'jquery-1.11.2.min.js" type="text/javascript" ></sc'+'ript>');
document.write('<script src="'+bootPATH+'jquery.session.js" type="text/javascript" ></sc'+'ript>');
document.write('<script src="'+bootPATH+'bootstrap/js/bootstrap.min.js" type="text/javascript" ></sc'+'ript>');
document.write('<script src="'+bootPATH+'bootbox.js" type="text/javascript" ></sc'+'ript>');
document.write('<script src="'+bootPATH+'bootstrap-paginator.js" type="text/javascript" ></sc'+'ript>');
 

function ajaxService(obj_param) {
	var sucFn = function(){
		console.info("success");
	}
	var errFn = function(e){
		console.info("error"+e);
	}
	var settings = {type:"get",async:true,dataType:"json",success:sucFn,error:errFn};
	var options = jQuery.extend(settings,obj_param);
	$.ajax({
		type: options.type,
		async: options.async,
		data: options.data,
		url: options.url,
		dataType: options.dataType,
		success: function(d) {
			options.success(d);
		},
		error: function(e) {
			options.error(e);
		}
	});
};