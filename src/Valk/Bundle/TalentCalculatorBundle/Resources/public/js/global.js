var imagepath = "http://www.wowprovider.com/img/";
var browserVersion = {};

browserVersion.ie = (navigator.appName=="Microsoft Internet Explorer");
browserVersion.opera = (navigator.userAgent.search(/Opera/)!=-1);
browserVersion.safari = (navigator.userAgent.search(/Safari/)!=-1);
browserVersion.gecko = (!browserVersion.safari && navigator.appName=="Netscape");

//-------------------------------------------
// Helpers
//-------------------------------------------
function L(A){return A};
function $(A){if(document.getElementById){$=function(B){return document.getElementById(B)};return $(A)}if(document.all){$=function(B){return document.all[B]};return $(A)}}
function IsNumeric(A){if(typeof A=="undefined"){return false}if(A==""){return false}var D="0123456789.-";var C=true;var B;for(i=0;i<A.length&&C==true;i++){B=A.charAt(i);if(D.indexOf(B)==-1){C=false}}return C}
function IsPosInt(A){if(typeof A=="undefined"){return false}if(A==""){return false}var D="0123456789";var C=true;var B;for(i=0;i<A.length&&C==true;i++){B=A.charAt(i);if(D.indexOf(B)==-1){C=false}}return C}
function nl2pnl(B){if(B){var A;B=escape(B);if(B.indexOf("%0D%0A")>-1){A=/%0D%0A/g}else{if(B.indexOf("%0A")>-1){A=/%0A/g}else{if(B.indexOf("%0D")>-1){A=/%0D/g}}}return unescape(B.replace(A,"\n"))}return B}
function nl2br(C){if(C){var B;C=escape(C);if(C.indexOf("%0D%0A")>-1){B=/%0D%0A/g}else{if(C.indexOf("%0A")>-1){B=/%0A/g}else{if(C.indexOf("%0D")>-1){B=/%0D/g}}}var A=unescape(C.replace(B,"<br />"));var A=A.replace(/&lt;br\ \/&gt;/g,"<br />");return A}return C}
function stripnl(B){if(B){var A;B=escape(B);if(B.indexOf("%0D%0A")>-1){A=/%0D%0A/g}else{if(B.indexOf("%0A")>-1){A=/%0A/g}else{if(B.indexOf("%0D")>-1){A=/%0D/g}}}return unescape(B.replace(A,""))}return B}
function htmlspecialchars(A){if(A){A=A.replace(/\"/g,"&quot;");A=A.replace(/</g,"&lt;");A=A.replace(/>/g,"&gt;")}return A}
function uni_unescape(A){return A.replace(/(%u([0-9A-F]{4}))/gi,"&#x$2;")}
function stringFill(C,D){var A="";for(var B=0;B<D;B++){A+=C}return A}
function cleanData(A){var A=A.replace(/^\"/g,"");A=A.replace(/\\$/g,"");A=A.replace(/([^\\])\"/g,"$1");A=A.replace(/\\\"/g,'"');A=unescape(A);return A}
function BindArgument(B,A){return function(){return B(A)}}
function getPageSize(){var C,A;if(window.innerHeight&&window.scrollMaxY){C=document.body.scrollWidth;A=window.innerHeight+window.scrollMaxY}else{if(document.body.scrollHeight>document.body.offsetHeight){C=document.body.scrollWidth;A=document.body.scrollHeight}else{C=document.body.offsetWidth;A=document.body.offsetHeight}}var B,D;if(self.innerHeight){B=self.innerWidth;D=self.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){B=document.documentElement.clientWidth;D=document.documentElement.clientHeight}else{if(document.body){B=document.body.clientWidth;D=document.body.clientHeight}}}if(A<D){pageHeight=D}else{pageHeight=A}if(C<B){pageWidth=B}else{pageWidth=C}arrayPageSize=new Array(pageWidth,pageHeight,B,D);return arrayPageSize}
function addListener(B,C,D,A){if(window.addEventListener){addListener=function(F,G,H,E){E=E||false;F.addEventListener(G,H,E);return true};return addListener(B,C,D,A)}else{if(window.attachEvent){addListener=function(F,G,H,E){F.attachEvent("on"+G,H);return true};return addListener(B,C,D,A)}else{addListener=function(F,G,H,E){return false};return addListener(B,C,D,A)}}}
function ucFirst(A){var B=A.charAt(0);if(parseInt(A.length)==1){return B.toUpperCase()}else{return B.toUpperCase()+A.slice(1).toLowerCase()}}
function trim(A){return A.replace(/(^\s+)([^\s]*)(\s+$)/,"$2")};

function wpaddEventListener(obj, eventType, func)
{
	if(obj.addEventListener)
	{
		obj.addEventListener(eventType, func, false);
		return true;
	}
	else if(obj.attachEvent)
	{
		var retVal=obj.attachEvent("on"+eventType, func);
		return retVal;
	}
	else
	{
		return false;
	}
}

function getMousePosX(event)
{
	if(browserVersion.ie) {
		return window.event.clientX;
	} else {
		return event.pageX;
	}
}

function getMousePosY(event)
{
	if(browserVersion.ie) {
		return window.event.clientY;
	} else {
		return event.pageY;
	}
}

function getScrollX()
{
	if(browserVersion.gecko || browserVersion.opera) {
		return window.pageXOffset;
	} else if(document.documentElement && document.documentElement.scrollLeft) {
		return document.documentElement.scrollLeft;
	} else if(document.body && document.body.scrollLeft) {
		return document.body.scrollLeft;
	} else {
		return 0;
	}
}

function getScrollY()
{
	if(browserVersion.gecko || browserVersion.opera) {
		return window.pageYOffset;
	} else if(document.documentElement && document.documentElement.scrollTop) {
		return document.documentElement.scrollTop;
	} else if(document.body && document.body.scrollTop) {
		return document.body.scrollTop;
	} else {
		return 0;
	}
}

function getWindowWidth()
{
  	if(window.innerWidth) {
	    return window.innerWidth;
  	} else if(document.documentElement && document.documentElement.clientWidth) {
    	return document.documentElement.clientWidth;
	} else if(document.body && document.body.clientWidth) {
		return document.body.clientWidth;
	} else {
    	return 0;
	}
}

function getWindowHeight()
{
  	if(window.innerHeight) {
   		return window.innerHeight;
  	} else if(document.documentElement && document.documentElement.clientHeight) {
    	return document.documentElement.clientHeight;
	} else if(document.body && document.body.clientHeight) {
		return document.body.clientHeight;
  	} else {
    	return 0;
  	}
}