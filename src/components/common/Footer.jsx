import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer>
        <div class="inside">

            <div class="inside_top">

                <section class="newsletter">
                    <script>
                        function loadjQuery(e,t){var n=document.createElement("script");n.setAttribute("src",e);n.onload=t;n.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded")t()};document.getElementsByTagName("head")[0].appendChild(n)}function main(){
                        var $cr=jQuery.noConflict();var old_src;$cr(document).ready(function(){$cr(".cr_form").submit(function(){$cr(this).find('.clever_form_error').removeClass('clever_form_error');$cr(this).find('.clever_form_note').remove();$cr(this).find(".musthave").find('input, textarea').each(function(){if(jQuery.trim($cr(this).val())==""||($cr(this).is(':checkbox'))||($cr(this).is(':radio'))){if($cr(this).is(':checkbox')||($cr(this).is(':radio'))){if(!$cr(this).parents(".cr_ipe_item").find(":checked").is(":checked")){$cr(this).parents(".cr_ipe_item").addClass('clever_form_error')}}else{$cr(this).addClass('clever_form_error')}}});if($cr(this).attr("action").search(document.domain)>0&&$cr(".cr_form").attr("action").search("wcs")>0){var cr_email=$cr(this).find('input[name=email]');var unsub=false;if($cr("input['name=cr_subunsubscribe'][value='false']").length){if($cr("input['name=cr_subunsubscribe'][value='false']").is(":checked")){unsub=true}}if(cr_email.val()&&!unsub){$cr.ajax({type:"GET",url:$cr(".cr_form").attr("action").replace("wcs","check_email")+window.btoa($cr(this).find('input[name=email]').val()),success:function(data){if(data){cr_email.addClass('clever_form_error').before("<div class='clever_form_note cr_font'>"+data+"</div>");return false}},async:false})}var cr_captcha=$cr(this).find('input[name=captcha]');if(cr_captcha.val()){$cr.ajax({type:"GET",url:$cr(".cr_form").attr("action").replace("wcs","check_captcha")+$cr(this).find('input[name=captcha]').val(),success:function(data){if(data){cr_captcha.addClass('clever_form_error').after("<div style='display:block' class='clever_form_note cr_font'>"+data+"</div>");return false}},async:false})}}if($cr(this).find('.clever_form_error').length){return false}return true});$cr('input[class*="cr_number"]').change(function(){if(isNaN($cr(this).val())){$cr(this).val(1)}if($cr(this).attr("min")){if(($cr(this).val()*1)<($cr(this).attr("min")*1)){$cr(this).val($cr(this).attr("min"))}}if($cr(this).attr("max")){if(($cr(this).val()*1)>($cr(this).attr("max")*1)){$cr(this).val($cr(this).attr("max"))}}});old_src=$cr("div[rel='captcha'] img:not(.captcha2_reload)").attr("src");if($cr("div[rel='captcha'] img:not(.captcha2_reload)").length!=0){captcha_reload()}});function captcha_reload(){var timestamp=new Date().getTime();$cr("div[rel='captcha'] img:not(.captcha2_reload)").attr("src","");$cr("div[rel='captcha'] img:not(.captcha2_reload)").attr("src",old_src+"?t="+timestamp);return false}}
                        if(typeof jQuery==="undefined"){loadjQuery("//ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js",main)}else{main()}
                        </script>
                        <style>
                        * {box-sizing: border-box;}
                        .cr-mail-responsive, .cr-mail-responsive * {box-sizing: unset;}
                        .cr_site{margin:0;padding:75px 0 0 0;text-align:center;background-color:#eeeeee;}
                        .cr_font{font-size: 14px;font-family: Arial;}
                        .cr_page{width: 100% !important;max-width:640px}
                        .cr_body{border-radius:8px;line-height:150%;font-family:Helvetica;font-size:12px;color:#333333;}
                        .cr_body h2, .cr_header h2{font-size:22px;line-height:28px;margin:0 0 10px 0;}
                        .cr_body h1, .cr_header h2{font-size:28px;margin-bottom:15px;padding:0;margin-top:0;}
                        .wrapper, .cr_page{margin:0 auto 10px auto;text-align:left;}
                        .cr_header{text-align:center;background: transparent !Important;}
                        .cr_header img {max-width: 100%;}
                        .cr_body label, .cr_body .label{float:none;clear:both;display:inline-block;width:auto;margin-top:8px;text-align:left;font-weight:bold;position:relative;}
                        .cr_body .no-label{font-weight: normal;}
                        .cr_body #editable_content{padding:20px;}
                        .editable-content {padding:20px}
                        .cr_button{display:inline-block;font-family:'Helvetica', Arial, sans-serif;width:auto;white-space:nowrap;height:32px;margin:5px 0;padding:0 22px;text-decoration:none;text-align:center;font-weight:bold;font-style:normal;font-size:15px;line-height:32px;cursor:pointer;border:0;-moz-border-radius:4px;border-radius:4px;-webkit-border-radius:4px;vertical-align:top;}
                        .cr_button{background-color:#333;color:#ffffff;}
                        .cr_button:hover,.cr_button-small:hover{opacity:0.7;filter:alpha(opacity=70);}
                        .powered{padding:20px 0;width:560px;margin:0 auto;}
                        .cr_ipe_item label{line-height:150%;font-size:12px;}
                        .cr_ipe_item textarea{background: none repeat scroll 0 0 #ffffff;border-radius:3px;border: 1px solid #ccc;font-family: Helvetica;font-size: 16px;}
                        .cr_ipe_item input{background: none repeat scroll 0 0 #ffffff;border-radius:3px;border: 1px solid #ccc;padding: 5px;font-family: Helvetica;font-size: 16px;}
                        .cr_ipe_item select{background: none repeat scroll 0 0 #ffffff;border-radius:3px;border: 1px solid #ccc;padding: 12px !Important;display: block;margin: 0;padding: 5px;width: 100%;font-family: Helvetica;font-size: 16px;}
                        .cr_ipe_item input.cr_ipe_radio, input.cr_ipe_checkbox{-moz-binding: none;-moz-box-sizing: border-box;background-color: -moz-field !important;border: 2px inset ThreeDFace !important;color: -moz-fieldtext !important;cursor: default;height: 13px;padding: 0 !important;width: 13px;}
                        .cr_ipe_item input.cr_ipe_radio{-moz-appearance: radio;border-radius: 100% 100% 100% 100% !important;margin: 3px 3px 0 5px;}
                        .cr_ipe_item{margin: 0px; padding: 0px;}
                        .submit_container{text-align:left; padding-top:10px;}
                        .cr_ipe_item.inactive{display:none;}
                        .imprint{font-size:0.8em;}
                        .cr_captcha{padding-left:130px;}
                        .cr_error{font-size:1.1em;padding:10px;}
                        .clever_form_error{background-color:#f99; color:#000; border:1px solid #f22 !important}
                        .clever_form_note {margin:26px 0 0 3px;position:absolute;display:inline; padding: 2px 4px; font-weight:bold;background-color:#f2ecb5; color:#000; font-size:12px !important;  }
                        .cr_form-flex{display: flex;}
                        .cr_form-inputgroup{display:flex;flex-direction:column;}
                        .cr_form-flex>.cr_form-inputgroup{flex-grow:1;margin-right: 5px;}
                        .cr_form-flex>.cr_form-inputgroup:last-child{margin-right: 0px;}
                        .cr_form-flex input{width:100%;}
                        .cr_site {background-color:#eee;}
                        .cr_header {color:#000000;}
                        .cr_body {background-color:#ffffff;font-size:12px;color:#000000;}
                        .cr_hr {background-color:#ccc;}
                        .cr_site a {color:#0084ff;}
                        .imprint{color:#000;}
                        </style>
                        <style id="style">
                        .cr_site {background-color:#ffffff;}
                        .cr_body {color:#000000;background-color: #C5E6BC;}
                        .cr_header {color:#000000;}
                        .cr_hr {background-color:#ccc;}
                        .cr_site a {color:#0084ff;}
                        .imprint {color:#000000;}
                        .cr_page {width:auto;}
                        .cr_button {background-color:#136632;}
                        </style>
                        <form class="layout_form cr_form cr_font" action="https://seu2.cleverreach.com/f/329665-372561/wcs/" method="post" target="_blank">
                            <div class="cr_body cr_page cr_font formbox">
                                <div class="non_sortable" style="text-align:left;">
                                </div>
                                <div class="editable_content" style="text-align:left;">
                                    <h5 class="cr_ipe_item" style="font-size:18px; color:#136632;">Newsletter-Anmeldung</h5>
                                    <div id="8434796" rel="email" class="cr_form-component cr_form-component--email cr_ipe_item ui-sortable musthave" style="margin-bottom:px;">
                                        <div class="cr_form-inputgroup cr_form-inputgroup--typeemail">
                                            <label for="text8434796">E-Mail*</label>
                                            <input class="cr_form-input" type="email" id="text8434796" name="email" value="" placeholder="E-Mail-Adresse" style="width:100%;max-width:304px"/>
                                        </div>
                                    </div>
                                    <div id="8434800" rel="recaptcha" class="cr_ipe_item ui-sortable musthave">
                                        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                                        <br/>
                                        <div id="recaptcha_v2_widget" class="g-recaptcha" data-theme="light" data-size="small" data-sitekey="6Lfhcd0SAAAAAOBEHmAVEHJeRnrH8T7wPvvNzEPD"  ></div>
                                        <br/>
                                    </div>
                                    <div id="8434798" rel="button" class="cr_form-component cr_form-component--submit cr_ipe_item ui-sortable  submit_container">
                                        <button type="submit" class="cr_form-block cr_button">Anmelden</button>
                                    </div>
                                </div>
                            <noscript><a href="http://www.cleverreach.de">www.CleverReach.de</a></noscript>
                            </div>
                        </form>
                </section>
        
                <section class="footer_links">
                    <ul class="law">
                        <li><a href="https://www.instagram.com/achdugruene9/" target="_blank"><img src="img/instagram-logo.png" alt="Instagram" width="50px"/></a></li>
                        <br/>
                        <li><a href="impressum.html" target="_blank">Impressum</a></li>
                        <li><a href="datenschutz.html" target="_blank">Datenschutzerklärung</a></li>
                        <li><a href="agb.html" target="_blank">AGB</a></li>
                        <br/><br/>
                        <a style="font-weight:bold; text-decoration:none" href="bandbewerbung.html" target="_blank">&#10154; Bandbewerbung 2025</a>
                        <br/><br/>
                        <a href="mailto:festival@achdugruene9.com" target="_blank">festival@achdugruene9.com</a>
                    </ul>
                </section>
            </div>

            <section class="copyright">
                <p>&copy; Grüne Neune Festival e.V.</p>
            </section>

        </div>
        </footer>
    </>
  )
}
