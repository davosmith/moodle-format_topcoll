var toggleBinaryGlobal="10000000000000000000000000000000000000000000000000000";var thesparezeros="00000000000000000000000000";var thewwwroot;var thecookiesubid;var yuicookie=YAHOO.util.Cookie;var numToggles=0;var currentSection;var cookieConsent=3;var cookieExpires;var ie7OrLess=false;var ie=false;var aSecond=1000;var aMinute=60000;var anHour=3600000;var aDay=86400000;var aWeek=604800000;var aMonth=2419200000;var aYear=31536000000;function topcoll_init(f,c,e,b){thewwwroot=f;thecookiesubid=c+e;cookieExpires=b;if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var a=new Number(RegExp.$1);ie=true;if(a<=7){ie7OrLess=true}}var d=document.createElement("link");d.setAttribute("rel","stylesheet");d.setAttribute("type","text/css");d.setAttribute("href",""+thewwwroot+"/course/format/topcoll/js-override-topcoll.css");document.getElementsByTagName("head")[0].appendChild(d)}function set_number_of_toggles(a){numToggles=a}function set_current_section(a){currentSection=a}function set_cookie_consent(a){cookieConsent=a}function togglebinary(c,b){if((c>=1)&&(c<=52)){var e=toggleBinaryGlobal.substring(0,c);var a=toggleBinaryGlobal.substring(c+1);var d=e+b+a;toggleBinaryGlobal=d;save_toggles()}}function toggleexacttopic(e,d,c,b){if((document.getElementById)&&((e!=null)&&(d!=null))){if(ie==true){var a="block"}else{var a="table-row"}if(e.style.display==a){e.style.display="none";if(ie7OrLess==true){e.className+=" collapsed_topic"}d.style.backgroundImage="url("+thewwwroot+"/course/format/topcoll/images/arrow_down.png)";if(b==false){togglebinary(c,"0")}}else{e.style.display=a;if(ie7OrLess==true){e.className=e.className.replace(/\b collapsed_topic\b/,"")}d.style.backgroundImage="url("+thewwwroot+"/course/format/topcoll/images/arrow_up.png)";if(b==false){togglebinary(c,"1")}}}}function toggle_topic(b,a){if(document.getElementById){imageSwitch=b;targetElement=b.parentNode.parentNode.nextSibling;if(targetElement.className==undefined){targetElement=b.parentNode.parentNode.nextSibling.nextSibling}toggleexacttopic(targetElement,imageSwitch,a,false)}}function to2baseString(c){var e=parseInt(c.substring(0,6),36);var b=parseInt(c.substring(6,12),36);var d=e.toString(2);var a=b.toString(2);if(d.length<26){d=thesparezeros.substring(0,(26-d.length))+d}if(a.length<27){a=thesparezeros.substring(0,(27-a.length))+a}return d+a}function to36baseString(b){var e=parseInt(b.substring(0,26),2);var c=parseInt(b.substring(26,53),2);var d=e.toString(36);var a=c.toString(36);if(d.length<6){d=thesparezeros.substring(0,(6-d.length))+d}if(a.length<6){a=thesparezeros.substring(0,(6-a.length))+a}return d+a}function savetopcollcookie(b){if(cookieConsent==2){if(cookieExpires==null){yuicookie.setSub("mdl_cf_topcoll",thecookiesubid,b)}else{var a=new Date();a.setTime(a.getTime()+cookieExpires);yuicookie.setSub("mdl_cf_topcoll",thecookiesubid,b,{expires:a})}}}function restoretopcollcookie(){if(cookieConsent==2){return yuicookie.getSub("mdl_cf_topcoll",thecookiesubid)}else{return null}}function reload_toggles(){var b=restoretopcollcookie();if(b!=null){toggleBinaryGlobal=to2baseString(b)}else{toggleBinaryGlobal="10000000000000000000000000000000000000000000000000000"}for(var a=1;a<=numToggles;a++){if((a<=numToggles)&&((toggleBinaryGlobal.charAt(a)=="1")||(a==currentSection))){toggleexacttopic(document.getElementById("section-"+a),document.getElementById("sectionatag-"+a),a,true)}}}function show_topic(b){var c=document.getElementById("section-"+b);var a=document.getElementById("sectionatag-"+b);if((c!=null)&&(a!=null)){toggleexacttopic(c,a,b,true)}}function save_toggles(){savetopcollcookie(to36baseString(toggleBinaryGlobal))}function allToggle(c){var d;var b;if(c==false){if(ie==true){b="block"}else{b="table-row"}}else{b="none"}for(var a=1;a<=numToggles;a++){d=document.getElementById("section-"+a);d.style.display=b;toggleexacttopic(d,document.getElementById("sectionatag-"+a),a,false)}}function all_opened(){allToggle(true)}function all_closed(){allToggle(false)};