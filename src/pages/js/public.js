(function() {
	if($.session.get('login')!="success") {
		location.href = "sign-in.html";
	};
	//	getHomeTem();
})();
//home菜单
function getHomeTem() {
	var obj = {};
	obj.type = "get";
	obj.url = "../template/header.html";
	obj.async = false;
	obj.dataType = "html";
	obj.success = function(data) {
		$('#cmsHead').html(data);
	}
	obj.error = function(e) {
		console.info(e);
	}
	//ajaxService(obj);
    var homeH = '<div class="navbar"><div class="navbar-inner"><ul class="nav pull-right"><li>'+
        '<a href="#" class="hidden-phone visible-tablet visible-desktop" role="button">Settings</a>'+
        '</li><li id="fat-menu" class="dropdown">'+
        '<a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">'+
        '<i class="icon-user"></i> Jack Smith <i class="icon-caret-down"></i> </a>'+
        '<ul class="dropdown-menu"> <li> <a tabindex="-1" href="#">My Account</a> </li>'+
        '<li class="divider"></li> <li> <a tabindex="-1" class="visible-phone" href="#">Settings</a>'+
        '</li> <li class="divider visible-phone"></li> <li> <a tabindex="-1" href="sign-in.html">Logout</a>'+
        '</li> </ul> </li> </ul> <a class="brand" href="#"><span class="first">Your</span>'+
        '<span class="second">Company</span></a> <ul class="nav pull-left" id="h_menu">'+
        '<li role="presentation" class="active"> <a href="home.html">Home</a>'+
        '</li> <li role="presentation"> <a href="profile.html">Profile</a> </li> <li role="presentation">'+
        '<a href="message.html">Messages</a> </li> </ul> </div> </div>';
	$('#cmsHead').html(homeH);
    var objGetLeft = {
        //		type:"get",
        dataType: "html",
        //		async : false,
        url: "../template/lefter_home.html",
        success: function(data) {
            $('#lefter').html(data);
        },
        error: function(e) {
            console.info(e);
        }
    };
	ajaxService(objGetLeft);
	var leftH = '<div class="sidebar-nav">'+
		'<a href="home.html" class="nav-header"><i class="icon-question-sign"></i>Help</a>'+
		'<a href="users.html" class="nav-header"><i class="icon-repeat"></i>USERS</a>'+
		'<a href="user.html" class="nav-header"><i class="icon-user"></i>USER</a>'+
		'<a href="help.html" class="nav-header"><i class="icon-comment"></i>Help</a>'+
		'<a href="users-table.html" class="nav-header"><i class="icon-comment"></i>Help</a>'+
		'<a href="faq.html" class="nav-header"><i class="icon-legal"></i>FAQ</a>'+
		'</div>';
	//$('#lefter').html(leftH);
}
//message菜单
function getMessTem() {
	var objGetHead = {
		dataType: "html",
		url: "../template/header.html",
		success: function(data) {
			$('#cmsHead').html(data);
			$('#h_menu li:eq(2)').addClass('active')
				.siblings().removeClass('active');
		}
	};
	ajaxService(objGetHead);
	var objGetLeft = {
		dataType: "html",
		url: "../template/lefter_message.html",
		success: function(data) {
			$('#lefter').html(data);
		}
	};
	ajaxService(objGetLeft);
}
//profile菜单
function getProfileTem() {
	var objGetHead = {
		dataType: "html",
		url: "../template/header.html",
		success: function(data) {
			$('#cmsHead').html(data);
			$('#h_menu li:eq(1)').addClass('active')
				.siblings().removeClass('active');
		}
	};
	ajaxService(objGetHead);
	var objGetLeft = {
		dataType: "html",
		url: "../template/lefter_profile.html",
		success: function(data) {
			$('#lefter').html(data);
		}
	};
	ajaxService(objGetLeft);

}
//日期格式
Date.prototype.format = function(format) {
	var args = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3), //quarter
		"S": this.getMilliseconds()
	};
	if(/(y+)/.test(format))
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for(var i in args) {
		var n = args[i];
		if(new RegExp("(" + i + ")").test(format))
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
	}
	return format;
};

Array.prototype.indexOf = function(val) {
	for(var i = 0; i < this.length; i++) {
		if(this[i] == val)
			return i;
	}
	return -1;
};
//移除数组中的值
Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if(index > -1) {
		this.splice(index, 1);
	}
};