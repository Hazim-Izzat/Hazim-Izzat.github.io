var body = document.body;

var container_all = document.getElementById('container_all');
var container_main = document.getElementById('container_main');
var container_mobile_scrapbook = document.getElementById('container_mobile_scrapbook');
var container_mobile_scrapbook_jump = document.getElementById('container_mobile_scrapbook_jump');
var container_mobile_scrapbook_jump_img = document.getElementById('container_mobile_scrapbook_jump_img');


var backgroundcolor_purple = document.getElementById('backgroundcolor_purple');
var backgroundcolor_blue = document.getElementById('backgroundcolor_blue');
var backgroundcolor_black = document.getElementById('backgroundcolor_black');
var backgroundcolor_green = document.getElementById('backgroundcolor_green');

var hexbackground_black = document.getElementById('blackhexbackground');


var container_header = document.getElementById('container_header');

var button_sidebar = document.getElementById('button_sidebar');
var home_button = document.getElementById('home_button');
var header_contents = document.getElementById('header_contents');
var header_contents_jump = document.getElementById('header_contents_jump');

var contacts_expand = document.getElementById('button_contacts_expand');
var button_contacts_full_link = document.getElementsByClassName('button_contacts_full_link');

var link_tel = document.getElementById('link_tel');
var link_gmail = document.getElementById('link_gmail');
var link_linkedin = document.getElementById('link_linkedin');

var contents_bar = document.getElementById('contents_bar');

var button_about = document.getElementById('button_contents_about');
var button_edexp = document.getElementById('button_contents_edexp');
var button_projects = document.getElementById('button_contents_projects');
var button_games = document.getElementById('button_contents_games');
var button_about_img = document.getElementById('button_contents_img_about');
var button_edexp_img = document.getElementById('button_contents_img_edexp');
var button_projects_img = document.getElementById('button_contents_img_projects');
var button_games_img = document.getElementById('button_contents_img_games');

var edexp_sub_bar = document.getElementById('edexp_sub_bar');

var button_contents_jump_clicked_about = document.getElementById('button_contents_jump_clicked_about');
var button_contents_jump_clicked_edexp = document.getElementById('button_contents_jump_clicked_edexp');
var button_contents_jump_clicked_projects = document.getElementById('button_contents_jump_clicked_projects');
var button_contents_jump_clicked_games = document.getElementById('button_contents_jump_clicked_games');

var button_contents_img_clicked_about = document.getElementById('button_contents_img_clicked_about');
var button_contents_img_clicked_edexp = document.getElementById('button_contents_img_clicked_edexp');
var button_contents_img_clicked_projects = document.getElementById('button_contents_img_clicked_projects');
var button_contents_img_clicked_games = document.getElementById('button_contents_img_clicked_games');

var maincontents = document.getElementById('maincontents');

var bodysection = document.querySelectorAll('.bodysection');

var about = document.getElementById('about');
var about_banner = document.getElementById('about_banner');
var about_banner_sub = document.getElementById('banner_sub');
var about_text_1 = document.getElementById('about_text_1');
var about_text_2 = document.getElementById('about_text_2');
var about_text_3 = document.getElementById('about_text_3');
var about_text_4 = document.getElementById('about_text_4');
var about_expand = document.getElementById('about_expand');

var about_spacer = document.getElementById('about_spacer');

var edexp_edu = document.getElementById('edexp_education');
var edexp_work = document.getElementById('edexp_work');
var edexp_vol = document.getElementById('edexp_volunteering');

var edexp_education_degree = document.getElementById('edexp_education_degree');
var edexp_education_foundation = document.getElementById('edexp_education_foundation');
var edexp_work_amd = document.getElementById('edexp_work_amd');
var edexp_volunteer_amdcsr = document.getElementById('edexp_volunteer_amdcsr');
var edexp_volunteer_lesapb = document.getElementById('edexp_volunteer_lesapb');
var edexp_volunteer_tiri = document.getElementById('edexp_volunteer_tiri');
var edexp_volunteer_apples = document.getElementById('edexp_volunteer_apples');

var projects = document.getElementById('projects');

var projects_container_website = document.getElementById('projects_container_website');
var projects_container_9004 = document.getElementById('projects_container_9004');
var projects_container_epyc_whitepaper = document.getElementById('projects_container_epyc_whitepaper');
var projects_container_7000 = document.getElementById('projects_container_7000');
var projects_container_csr = document.getElementById('projects_container_csr');
var projects_container_sotafujii = document.getElementById('projects_container_sotafujii');
var projects_container_lesapb = document.getElementById('projects_container_lesapb');
var projects_container_wahnhaft = document.getElementById('projects_container_wahnhaft');

var projects_list_closed = document.getElementsByClassName('projects_list_closed');

var projects_lists = document.getElementsByClassName('projects_content_list');
var projects_list_website = document.getElementById('projects_list_website');
var projects_list_9004 = document.getElementById('projects_list_9004');
var projects_list_epyc_whitepaper = document.getElementById('projects_list_epyc_whitepaper');
var projects_list_7000 = document.getElementById('projects_list_7000');
var projects_list_csr = document.getElementById('projects_list_csr');
var projects_list_sotafujii = document.getElementById('projects_list_sotafujii');
var projects_list_lesapb = document.getElementById('projects_list_lesapb');
var projects_list_wahnhaft = document.getElementById('projects_list_wahnhaft');

var projects_a_text = document.getElementsByClassName('projects_a_text');

var scrapbook_content_notice = document.getElementById('scrapbook_content_notice');

var scrapbook = document.getElementById('scrapbook');
var scrapbooksection = document.getElementsByClassName('scrapbooksection');
var scrapbooksection_inner = document.getElementsByClassName('scrapbooksection_inner');
var scrapbooksection_about = document.getElementById('scrapbooksection_about');

var scrapbooksection_education_degree = document.getElementById('scrapbooksection_education_degree');
var scrapbooksection_education_foundation = document.getElementById('scrapbooksection_education_foundation');

var scrapbooksection_work_amd = document.getElementById('scrapbooksection_work_amd');

var scrapbooksection_volunteer_amdcsr = document.getElementById('scrapbooksection_volunteer_amdcsr');
var scrapbooksection_volunteer_lesapb = document.getElementById('scrapbooksection_volunteer_lesapb');
var scrapbooksection_volunteer_tiri = document.getElementById('scrapbooksection_volunteer_tiri');
var scrapbooksection_volunteer_apples = document.getElementById('scrapbooksection_volunteer_apples');

var scrapbooksection_projects_website = document.getElementById('scrapbooksection_projects_website');
var scrapbooksection_projects_epyc_assets = document.getElementById('scrapbooksection_projects_epyc_assets');
var scrapbooksection_projects_radeon_bundle = document.getElementById('scrapbooksection_projects_radeon_bundle');
var scrapbooksection_projects_tco = document.getElementById('scrapbooksection_projects_tco');
var scrapbooksection_projects_amdcsr = document.getElementById('scrapbooksection_projects_amdcsr');
var scrapbooksection_projects_sota = document.getElementById('scrapbooksection_projects_sota');
var scrapbooksection_projects_lesapb = document.getElementById('scrapbooksection_projects_lesapb');
var scrapbooksection_projects_wahnhaft = document.getElementById('scrapbooksection_projects_wahnhaft');

var scrapbookclose = document.getElementsByClassName('scrapbookclose');
var button_scrapbook_scroll_left = document.getElementById('button_scrapbook_scroll_left');
var button_scrapbook_scroll_right = document.getElementById('button_scrapbook_scroll_right');

var p_scrapbook_1 = document.getElementsByClassName('p_scrapbook_1');
var p_scrapbook_2 = document.getElementsByClassName('p_scrapbook_2');

var scrapbook_about_banner = document.getElementById('scrapbook_about_banner');
var scrapbook_about_text_1 = document.getElementById('scrapbook_about_text_1');
var scrapbook_about_text_2 = document.getElementById('scrapbook_about_text_2');
var scrapbook_about_text_3 = document.getElementById('scrapbook_about_text_3');
var scrapbook_about_text_4 = document.getElementById('scrapbook_about_text_4');

var scrapbook_education_degree_1 = document.getElementById('scrapbook_education_degree_1');
var scrapbook_education_foundation_1 = document.getElementById('scrapbook_education_foundation_1');

var scrapbook_work_amd = document.getElementById('edexp_work_amd');

var count = 0;

//about text media functions

function aboutpopuptext_1(media_700px) {
    if (media_700px.matches) {
        about_text_1.style.opacity = '100%';
        about_text_1.style.padding = '10px';
        about_text_1.style.marginRight = 'auto';
        about_text_1.style.fontSize = '12px';
        about_text_1.style.lineHeight = '130%';

    }else{
        about_text_1.style.opacity = '100%';
        about_text_1.style.padding = '10px';
        about_text_1.style.marginRight = 'auto';
        about_text_1.style.fontSize = '16px';
        about_text_1.style.lineHeight = '130%';
    }
}
function aboutpopuptext_2(media_700px) {
    if (media_700px.matches) {
        about_text_2.style.opacity = '100%';
        about_text_2.style.padding = '10px';
        about_text_2.style.marginRight = 'auto';
        about_text_2.style.fontSize = '12px';
        about_text_2.style.lineHeight = '130%';

    }else{
        about_text_2.style.opacity = '100%';
        about_text_2.style.padding = '10px';
        about_text_2.style.marginRight = 'auto';
        about_text_2.style.fontSize = '16px';
        about_text_2.style.lineHeight = '130%';
    }
}
function aboutpopuptext_3(media_700px) {
    if (media_700px.matches) {
        about_text_3.style.opacity = '100%';
        about_text_3.style.padding = '10px';
        about_text_3.style.marginRight = 'auto';
        about_text_3.style.fontSize = '12px';
        about_text_3.style.lineHeight = '130%';

    }else{
        about_text_3.style.opacity = '100%';
        about_text_3.style.padding = '10px';
        about_text_3.style.marginRight = 'auto';
        about_text_3.style.fontSize = '16px';
        about_text_3.style.lineHeight = '130%';
    }
}
function aboutpopuptext_4(media_700px) {
    if (media_700px.matches) {
        about_text_4.style.opacity = '100%';
        about_text_4.style.padding = '10px';
        about_text_4.style.marginRight = 'auto';
        about_text_4.style.fontSize = '12px';
        about_text_4.style.lineHeight = '130%';

    }else{
        about_text_4.style.opacity = '100%';
        about_text_4.style.padding = '10px';
        about_text_4.style.marginRight = 'auto';
        about_text_4.style.fontSize = '16px';
        about_text_4.style.lineHeight = '130%';
    }
}

var media_700px = window.matchMedia("(max-width: 700px)");

//contents_bar media functions
//contents_bar media max-height: 550px
function contents_bar_mediaH() {
    contents_bar.style.display = 'flex';
    setTimeout (() => {
        if (mediah_550px.matches) {
            contents_bar.style.opacity = '100%';
            contents_bar.style.width = '80px';
            contents_bar.style.height = '360px';
        }else{
            contents_bar.style.opacity = '100%';
            contents_bar.style.width = '80px';
            contents_bar.style.height = '450px';
        }
    }, 10)
}

var mediah_550px = window.matchMedia("(max-height: 550px)");

//contents_bar media max-width: 1000px
function barSidePopUp() {
    contents_bar.style.display = 'flex';
    setTimeout (() => {
        if (mediaw_1000px.matches) {
            contents_bar.style.marginRight = '-80px';
            contents_bar.style.left = '-70%';
        }else{
            contents_bar.style.marginRight = '50px';
            contents_bar.style.left = '';
        }
    }, 10)
}

var mediaw_1000px = window.matchMedia("(max-width: 1000px)");

//scrapbook popup
var countScrapbookMedia = 0;

function countScrapbookMediaIncrement() {
    if (countScrapbookMedia < 1) {
        countScrapbookMedia++;
    }
}
function countScrapbookMediaDecrement() {
    if (countScrapbookMedia > 0) {
        countScrapbookMedia--;
    }
}

function scrapbookPopup() {
    setTimeout (() => {
        scrapbook.style.scrollSnapType = 'y mandatory';
        for (let i = 0; i < scrapbooksection.length; i += 1) {
            scrapbooksection[i].style.scrollSnapType = 'x mandatory';
        }
    }, 60)
    
    if (scrapbookMediaW_1000.matches) {
        scrapbook.style.width = '100%';
        scrapbook.style.height = '90lvh';
        scrapbook.style.top = '0px';
        scrapbook.style.opacity = '100%';

        for (let i = 0; i < p_scrapbook_1.length; i += 1) {
            p_scrapbook_1[i].style.fontSize = '14px';
        }
        for (let i = 0; i < p_scrapbook_2.length; i += 1) {
            p_scrapbook_2[i].style.fontSize = '12px';
        }
        
    } else {
        scrapbook.style.width = '500px';
        scrapbook.style.height = '80lvh';
        scrapbook.style.top = '';
        scrapbook.style.opacity = '100%';

        for (let i = 0; i < p_scrapbook_1.length; i += 1) {
            p_scrapbook_1[i].style.fontSize = '18px';
        }
        for (let i = 0; i < p_scrapbook_2.length; i += 1) {
            p_scrapbook_2[i].style.fontSize = '14px';
        }

    }
    if (count === 4) {
        scrapbook.addEventListener("scroll", scrapbook_scroll_listeners);
        for (let i = 0; i < scrapbooksection.length; i += 1) {
            scrapbooksection[i].addEventListener("scroll", scrapbook_scroll_listeners);
        }
    }
}

//scrapbookclose
function scrapbookcloseFunction() {
    scrapbook.style.scrollSnapType = '';
    for (let i = 0; i < scrapbooksection.length; i += 1) {
        scrapbooksection[i].style.scrollSnapType = '';
    }
    if (scrapbookMediaW_1000.matches) {
        countScrapbookMediaDecrement();
    } else {
        scrapbook.style.width = '';
        scrapbook.style.height = '';
        scrapbook.style.opacity = '';

        for (let i = 0; i < p_scrapbook_1.length; i += 1) {
            p_scrapbook_1[i].style.fontSize = '';
        }
        for (let i = 0; i < p_scrapbook_2.length; i += 1) {
            p_scrapbook_2[i].style.fontSize = '';
        }

        countScrapbookMediaDecrement();

        removeScrapbookPopupTextSizingListener();

        button_scrapbook_scroll_left.style.opacity = '0';
        button_scrapbook_scroll_right.style.opacity = '0';

        document.removeEventListener("keydown", keyScrapbookHandler);
    }
}
document.addEventListener("keydown", (escapeScrapbook) => {
    if (escapeScrapbook.key === "Escape") {
        if (blur_img_scrapbook_popup.style.display == 'flex') {
            blur_img_scrapbook_popup.style.display = 'none';
        } else {
            scrapbookcloseFunction();
        }
    }
})

//move scrapbook into mobile
var scrapbookMediaW_1000 = window.matchMedia("(max-width: 1000px)");

function scrapbookIntoMobile() {
    if (scrapbookMediaW_1000.matches) {
        container_mobile_scrapbook.appendChild(scrapbook);
        container_mobile_scrapbook.style.display = 'flex';

        for (let i = 0; i < scrapbookclose.length; i += 1) {
            scrapbookclose[i].removeEventListener("click", scrapbookcloseFunction);
        }
        scrapbook.style.marginLeft = '0px';

        scrapbookPopup();
    } else {
        container_main.appendChild(scrapbook);
        container_mobile_scrapbook.style.display = 'none';
        
        for (let i = 0; i < scrapbookclose.length; i += 1) {
            scrapbookclose[i].addEventListener("click", scrapbookcloseFunction);
        }
        
        scrapbook.style.marginLeft = '10px';
        //scrapbookclose media query
        if (countScrapbookMedia === 0) {
            scrapbookcloseFunction();
        }
    }
}

function scrapbookMobileScroll() {
    if (scrapbookMediaW_1000.matches) {
        container_all.style.overflowX = 'auto';
    } else {
        container_all.style.overflowX = '';
    }
}

//scrapbook mobile bump
var scrapbookBumpMediaW_1000 = window.matchMedia("(max-width: 1000px");

function scrapbookBump() {
    if (scrapbookBumpMediaW_1000.matches) {
        container_mobile_scrapbook.style.background = 'rgba(78, 50, 59, 0.2)';
        container_main.style.width = '90%';
        setTimeout(() => {
            container_mobile_scrapbook.style.background = '';
            container_main.style.width = '100%';
        }, 400);
    }
}

//scrapbook mobile jump button
function scrapbookJumpButtonPopup() {
    if (container_mobile_scrapbook_jump.style.left === '') {
        container_mobile_scrapbook_jump.style.left = '-10%';
        setTimeout (() => {
            container_mobile_scrapbook_jump.style.left = '';
        }, 2000)
    }
}

//scrapbook content notice popup
function scrapbookContentNoticePopup() {
    scrapbookcloseFunction();
    setTimeout(() => {
        scrapbook_content_notice.style.display = 'block';
        setTimeout(() => {
            scrapbook_content_notice.style.opacity = '1';
            setTimeout(() => {
                scrapbook_content_notice.style.opacity = '';
                setTimeout(() => {
                    scrapbook_content_notice.style.display = '';
                }, 510);
            }, 5000);
        }, 10);
    }, 500);
    removeScrapbookContentNoticePopupListener();
}

//remove scrapbook content notice popup
function removeScrapbookContentNoticePopupListener() {
    maincontents.removeEventListener('scroll', scrapbookContentNoticePopup);
}

//remove scrapbookPopup text sizing listener
function removeScrapbookPopupTextSizingListener() {
    scrapbookBumpMediaW_1000.removeEventListener("change", scrapbookPopup);
}

//remove event listeners
function removeEventListeners() {
    media_700px.removeEventListener("change", aboutpopuptext_1);
    media_700px.removeEventListener("change", aboutpopuptext_2);
    media_700px.removeEventListener("change", aboutpopuptext_3);
    media_700px.removeEventListener("change", aboutpopuptext_4);

    mediah_550px.removeEventListener("change", contents_bar_mediaH);
    mediaw_1000px.removeEventListener("change", barSidePopUp);

    scrapbookMediaW_1000.removeEventListener("change", scrapbookMobileScroll);
    container_all.style.overflowX = '';
    
    setTimeout(() => {
        maincontents.removeEventListener("scroll", maincontentsScrollListener);
    }, 2500);
    
    document.removeEventListener("keydown", keyScrapbookHandler);
    
    scrapbook.removeEventListener("scroll", scrapbook_scroll_listeners);
    for (let i = 0; i < scrapbooksection.length; i += 1) {
        scrapbooksection[i].removeEventListener("scroll", scrapbook_scroll_listeners);
    }
}


home_button.onclick = function goHome() {

    scrapbook.scrollTop = scrapbooksection_about.offsetTop;
    scrapbooksection_about.scrollLeft = scrapbook_about_banner.offsetLeft;

    //horizontal mobile background reset
    if (window.matchMedia('(max-height: 600px)').matches) {
        setTimeout(() => {
            backgroundcolor_purple.style.opacity = '';
            backgroundcolor_blue.style.opacity = '';
            backgroundcolor_black.style.opacity = '';
        }, 1550);
    }
    
    //contentsbarclose
    contents_bar.style.opacity = '';
    contents_bar.style.marginRight = '';
    contents_bar.style.width = '';
    contents_bar.style.height = '';
    setTimeout (() => {
        contents_bar.style.display = '';
    }, 1610)

    //headerclose
    container_header.style.opacity = '';
    container_header.style.top = '';
    setTimeout (() => {
        container_header.style.display = '';
    }, 1610)

    //hidescroll & maincontents height reset
    maincontents.style.height = '';
    maincontents.style.overflowY = '';

    //bannerreset
    about_banner.style.width = '';

    about_banner_sub.style.opacity = '';
    about_banner_sub.style.fontSize = '';
    about_banner_sub.style.marginTop = '';
    about_banner_sub.style.lineHeight = '';

    about_spacer.style.height = '';

    //hidetext
    about_text_1.style.opacity = '';
    about_text_1.style.padding = '';
    about_text_1.style.marginRight = '';
    about_text_1.style.fontSize = '';
    about_text_1.style.lineHeight = '';

    about_text_2.style.opacity = '';
    about_text_2.style.padding = '';
    about_text_2.style.marginRight = '';
    about_text_2.style.fontSize = '';
    about_text_2.style.lineHeight = '';

    about_text_3.style.opacity = '';
    about_text_3.style.padding = '';
    about_text_3.style.marginRight = '';
    about_text_3.style.fontSize = '';
    about_text_3.style.lineHeight = '';

    about_text_4.style.opacity = '';
    about_text_4.style.padding = '';
    about_text_4.style.marginRight = '';
    about_text_4.style.fontSize = '';
    about_text_4.style.lineHeight = '';

    for (var i = 1; i < bodysection.length; i += 1){
        bodysection[i].style.opacity = '';
    }
    setTimeout(() => {
        for (var i = 1; i < bodysection.length; i += 1){
            bodysection[i].style.display = '';
        }
    }, 1500);

    //aboutexpandreset
    about_expand.style.marginTop = '';
    about_expand.style.marginBottom = '';
    count = 0;

    //scrapbookclose
    scrapbookcloseFunction();
    scrapbook.style.overflowY = '';
    for (var i = 0; i < scrapbooksection.length; i += 1) {
        scrapbooksection[i].style.overflowX = '';
    }
    button_scrapbook_scroll_left.style.opacity = '0';
    button_scrapbook_scroll_right.style.opacity = '0';
    setTimeout(() => {
        button_scrapbook_scroll_left.style.display = 'none';
        button_scrapbook_scroll_right.style.display = 'none';
    }, 1000);

    //container_mobile_scrapbook_jump reset
    container_mobile_scrapbook_jump.style.left = '';     

    //remove event listeners
    removeEventListeners();
}

contacts_expand.onclick = function contactsExpandFunction() {
    if (contacts_expand.style.rotate == '') {
        contacts_expand.style.rotate = '180deg';

        for (var i=0;i<button_contacts_full_link.length;i+=1){
            button_contacts_full_link[i].style.marginLeft = '10px';
            button_contacts_full_link[i].style.fontSize = '14px';
            button_contacts_full_link[i].style.opacity = '1';
        }

    }else{
        contacts_expand.style.rotate = '';

        for (var i=0;i<button_contacts_full_link.length;i+=1){
            button_contacts_full_link[i].style.marginLeft = '0px';
            button_contacts_full_link[i].style.fontSize = '0px';
            button_contacts_full_link[i].style.opacity = '0';
        }

    }
}

link_tel.onclick = function telCopy() {
    navigator.clipboard.writeText(link_tel.textContent);
}
link_gmail.onclick = function gmailCopy() {
    navigator.clipboard.writeText(link_gmail.textContent);
}
link_linkedin.onclick = function linkedInCopy() {
    navigator.clipboard.writeText(link_linkedin.textContent);
}

edexp_sub_bar.onmouseover = function buttonEdEexpHover() {
    button_edexp_img.src = 'img/Buttons/Contents/Black_EdExp.png'
}
edexp_sub_bar.onmouseleave = function buttonEdEexpNoHover() {
    button_edexp_img.src = 'img/Buttons/Contents/White_EdExp.png'
}

//button_sidebar max-width: 1000px
button_sidebar.onclick = function sidebarPopUp() {
    contents_bar.style.display = 'flex';
    setTimeout (() => {
        if (contents_bar.style.left == '-70%') {
            contents_bar.style.marginRight = '20px';
            contents_bar.style.left = '20px';
            contents_bar.style.opacity = '100%';
        }else{
            barSidePopUp(mediaw_1000px);
            mediaw_1000px.addEventListener("change", barSidePopUp);
        }
    }, 10)
}

setTimeout(() => {
    maincontents.scrollTop = about.offsetTop;
}, 2000);

//maincontents scroll
function maincontentsScrollListener() {
    scrolled = maincontents.scrollTop;

    if (scrolled < about.scrollHeight - 300) {
        header_contents.textContent = 'About';
        header_contents_jump.href = '#about';
        button_contents_jump_clicked_about.style.display = 'flex';
        button_about.style.background = 'white';
        backgroundcolor_purple.style.opacity = '100%';
    }else{
        button_contents_jump_clicked_about.style.display = 'none';
        button_about.style.background = '';
        backgroundcolor_purple.style.opacity = '0%';        
    }
    if ((scrolled >= about.scrollHeight - 300) && (scrolled < projects.offsetTop - 300)) {
        header_contents.textContent = 'Education & Experience';
        header_contents_jump.href = '#edexp_education';
        button_contents_jump_clicked_edexp.style.display = 'flex';
        button_edexp.style.background = 'white';
        backgroundcolor_blue.style.opacity = '100%';
    }else{
        button_contents_jump_clicked_edexp.style.display = 'none';
        button_edexp.style.background = '';
        backgroundcolor_blue.style.opacity = '0%';
    }
    if (scrolled >= projects.offsetTop - 300) {
        header_contents.textContent = 'Projects';
        header_contents_jump.href = '#projects';
        button_contents_jump_clicked_projects.style.display = 'flex';
        button_projects.style.background = 'white';
        backgroundcolor_black.style.opacity = '100%';
    }else{
        button_contents_jump_clicked_projects.style.display = 'none';
        button_projects.style.background = '';
        backgroundcolor_black.style.opacity = '0%'

        //Close projects list

        for (let i = 0; i < projects_list_closed.length; i += 1) {
            projects_list_closed[i].style.margin = '';
            projects_list_closed[i].style.padding = '';
            projects_list_closed[i].style.fontSize = '';
            projects_list_closed[i].style.opacity = '';   
        }
        for (let i = 0; i < projects_a_text.length; i += 1) {
            projects_a_text[i].style.padding = '';
        }
        for (var i = 0; i < projects_lists.length; i += 1){
            projects_lists[i].style.opacity = '';
            projects_lists[i].style.marginTop = '';
            projects_lists[i].style.fontSize = '';
            projects_lists[i].style.lineHeight = '';
        }
        setTimeout(() => {
            for (var i = 0; i < projects_lists.length; i += 1){
            projects_lists[i].style.display = '';
            }
        }, 550);

    }
}
maincontents.addEventListener('scroll', scrapbookContentNoticePopup);

scrapbookIntoMobile();
setTimeout(() => {
    scrapbookIntoMobile();
}, 500);
scrapbookMediaW_1000.addEventListener("change", scrapbookIntoMobile);


about_banner.onclick = function aboutbanner_popups() {
    var about_expand_marginTop = window.getComputedStyle(about_expand).getPropertyValue('margin-top');

    if (about_expand_marginTop == '30px') {
        about_expand.style.opacity = '100%';
        about_expand.style.width = '35px';
        about_expand.style.height = '35px';
        about_expand.style.fontSize = '30px';
    }

    scrapbookPopup();
    scrapbookBumpMediaW_1000.addEventListener("change", scrapbookPopup);
    
    scrapbookMobileScroll(scrapbookMediaW_1000);
    scrapbookMediaW_1000.addEventListener("change", scrapbookMobileScroll);

    scrapbook.scrollTop = scrapbooksection_about.offsetTop;
    scrapbooksection_about.scrollLeft = scrapbook_about_banner.offsetLeft;

    scrapbookBump();
    scrapbookJumpButtonPopup();
    countScrapbookMediaIncrement();

    if (count === 4) {
        setTimeout(() => {
            scrapbook_scroll_listeners();
            scrapbook.addEventListener("scroll", scrapbook_scroll_listeners);
            for (let i = 0; i < scrapbooksection.length; i += 1) {
                scrapbooksection[i].addEventListener("scroll", scrapbook_scroll_listeners);
            }
        }, 300);
    }
}

about_expand.onclick = function about_banner_popup() {
    count++;
    if (count === 1) {

        about_banner_sub.style.opacity = '0%';
        about_banner_sub.style.fontSize = '0px';
        about_banner_sub.style.marginTop = '0px';
        about_banner_sub.style.lineHeight = '0px';
    
        about_banner.style.width = '100%';
    
        aboutpopuptext_1(media_700px);
        media_700px.addEventListener("change", aboutpopuptext_1);

        scrapbookBump();
        scrapbookJumpButtonPopup();
        countScrapbookMediaIncrement();
        
        scrapbook.scrollTop = scrapbooksection_about.offsetTop;
        scrapbooksection_about.scrollLeft = scrapbook_about_text_1.offsetLeft;
        
    } else if (count === 2) {

        aboutpopuptext_2(media_700px);
        media_700px.addEventListener("change", aboutpopuptext_2);

        scrapbookBump();
        scrapbookJumpButtonPopup();
        countScrapbookMediaIncrement();
    
        scrapbook.scrollTop = scrapbooksection_about.offsetTop;
        scrapbooksection_about.scrollLeft = scrapbook_about_text_2.offsetLeft;
    
    } else if (count === 3) {
        
        about_expand.style.marginBottom = '0px';

        aboutpopuptext_3(media_700px);
        media_700px.addEventListener("change", aboutpopuptext_3);

        scrapbookBump();
        scrapbookJumpButtonPopup();
        countScrapbookMediaIncrement();
    
        scrapbook.scrollTop = scrapbooksection_about.offsetTop;
        scrapbooksection_about.scrollLeft = scrapbook_about_text_3.offsetLeft;

        about_spacer.style.height = '50px';

    } else if (count === 4) {
        
        for (var i = 1; i < bodysection.length; i += 1){
            bodysection[i].style.display = 'flex';
        }

        setTimeout(() => {
            about_expand.style.marginTop = '0px';
            about_expand.style.marginBottom = '0px';
            about_expand.style.opacity = '';
            about_expand.style.width = '';
            about_expand.style.height = '';
            about_expand.style.fontSize = '';
            
            aboutpopuptext_4(media_700px);
            media_700px.addEventListener("change", aboutpopuptext_4);
    
            scrapbookBump();
            scrapbookJumpButtonPopup();
            countScrapbookMediaIncrement();
            
            maincontents.addEventListener('scroll', maincontentsScrollListener);
        
            scrapbook.scrollTop = scrapbooksection_about.offsetTop;
            scrapbooksection_about.scrollLeft = scrapbook_about_text_4.offsetLeft;
            
            contents_bar_mediaH(mediah_550px);
            mediah_550px.addEventListener("change", contents_bar_mediaH);
    
            barSidePopUp(mediaw_1000px);
            mediaw_1000px.addEventListener("change", barSidePopUp);
    
            button_contents_jump_clicked_about.style.display = 'flex';
            button_about.style.background = 'white';
    
            container_header.style.display = 'flex';
            setTimeout (() => {
                container_header.style.opacity = '100%';
                container_header.style.top = '10px';
            }, 10)
    
            maincontents.style.overflowY = 'auto';
            
            maincontents.style.height = '88lvh';
    
            for (var i=1; i < bodysection.length; i += 1){
                bodysection[i].style.opacity = '1';
            }
    
            scrapbook.style.overflowY = 'auto';
            for (var i = 0; i < scrapbooksection.length; i += 1) {
                scrapbooksection[i].style.overflowX = 'auto';
            }
            button_scrapbook_scroll_left.style.display = '';
            button_scrapbook_scroll_right.style.display = '';
            setTimeout(() => {
                button_scrapbook_scroll_left.style.opacity = '';
                button_scrapbook_scroll_right.style.opacity = '';
            }, 50);
            setTimeout(() => {
                scrapbook.addEventListener("scroll", scrapbook_scroll_listeners);
                for (let i = 0; i < scrapbooksection.length; i += 1) {
                    scrapbooksection[i].addEventListener("scroll", scrapbook_scroll_listeners);
                }
            }, 300);
        }, 50);
    }
}


button_scrapbook_scroll_left.style.display = 'none';
button_scrapbook_scroll_right.style.display = 'none';
button_scrapbook_scroll_left.style.opacity = '0';
button_scrapbook_scroll_right.style.opacity = '0';


//SCRAPBOOK FUNCTIONS

//scrapbook mobile jump button
container_all.addEventListener("scroll", () => {
    scrolledAllX = container_all.scrollLeft;

    if (scrolledAllX >= container_main.scrollWidth - 200) {
        container_mobile_scrapbook_jump.href = '#container_main';
        container_mobile_scrapbook_jump_img.style.rotate = '0deg';
    } else {
        container_mobile_scrapbook_jump.href = '#container_mobile_scrapbook';
        container_mobile_scrapbook_jump_img.style.rotate = '';
    }
})

//content clicks
//functions
var y;
var x;
function scrapbookPopupWithMedia() {
    scrapbookPopup();
    scrapbookBumpMediaW_1000.addEventListener("change", scrapbookPopup);
    
    scrapbookMobileScroll(scrapbookMediaW_1000);
    scrapbookMediaW_1000.addEventListener("change", scrapbookMobileScroll);

    scrapbookBump();
    scrapbookJumpButtonPopup();
    countScrapbookMediaIncrement();
}
function scrapbookScroll_Vertical() {
    if (scrapbook.style.opacity == '') {
        setTimeout (() => {
            scrapbook.scrollTop = y.offsetTop;
        }, 1050)
    } else {
        scrapbook.scrollTop = y.offsetTop;
    }
}
function scrapbookScroll_Horizontal() {
    if (scrapbook.style.opacity == '') {
        setTimeout(() => {
            y.scrollLeft = x.offsetLeft;
        }, 1050);
    } else {
        y.scrollLeft = x.offsetLeft;
    }
}
function scrapbookScroll_onClick() {
    scrapbookScroll_Vertical();
    scrapbookScroll_Horizontal();
    scrapbookPopupWithMedia();
}


//about
about_text_1.onclick = function click_about_text_1() {
    y = scrapbooksection_about;
    x = scrapbook_about_text_1;
    scrapbookScroll_onClick();
}
about_text_2.onclick = function click_about_text_2() {
    y = scrapbooksection_about;
    x = scrapbook_about_text_2;
    scrapbookScroll_onClick();
}
about_text_3.onclick = function click_about_text_3() {
    y = scrapbooksection_about;
    x = scrapbook_about_text_3;
    scrapbookScroll_onClick();
}
about_text_4.onclick = function click_about_text_4() {
    y = scrapbooksection_about;
    x = scrapbook_about_text_4;
    scrapbookScroll_onClick();
}
//education
edexp_education_degree.onclick = function click_education_degree() {
    y = scrapbooksection_education_degree;
    x = scrapbook_education_degree_1;
    scrapbookScroll_onClick();
}
edexp_education_foundation.onclick = function click_education_foundation() {
    y = scrapbooksection_education_foundation;
    x = scrapbook_education_foundation_1;
    scrapbookScroll_onClick();
}
//work
edexp_work_amd.onclick = function click_work_amd() {
    y = scrapbooksection_work_amd;
    x = scrapbook_work_amd;
    scrapbookScroll_onClick();
}
//volunteer
edexp_volunteer_amdcsr.onclick = function click_work_amd() {
    y = scrapbooksection_volunteer_amdcsr;
    x = scrapbooksection_volunteer_amdcsr;
    scrapbookScroll_onClick();
}
edexp_volunteer_lesapb.onclick = function click_work_lesapb() {
    y = scrapbooksection_volunteer_lesapb;
    x = scrapbooksection_volunteer_lesapb;
    scrapbookScroll_onClick();
}
edexp_volunteer_tiri.onclick = function click_work_tiri() {
    y = scrapbooksection_volunteer_tiri;
    x = scrapbooksection_volunteer_tiri;
    scrapbookScroll_onClick();
}
edexp_volunteer_apples.onclick = function click_work_apples() {
    y = scrapbooksection_volunteer_apples;
    x = scrapbooksection_volunteer_apples;
    scrapbookScroll_onClick();
}
//projects
var projects_list_forClick;
function projectsDetailsPopup() {

    if (projects_list_forClick.style.display == '') {
        projects_list_forClick.style.display = 'block';
        if (window.matchMedia('(max-width: 700px)').matches || window.matchMedia('(max-height: 600px)').matches) {
            setTimeout(() => {
                projects_list_forClick.style.opacity = '1';
                projects_list_forClick.style.marginTop = '15px';
                projects_list_forClick.style.fontSize = '12px';
                projects_list_forClick.style.lineHeight = '22px';
                for (let i = 0; i < projects_a_text.length; i += 1) {
                        projects_a_text[i].style.padding = '5px';
                }
            }, 50);
        } else {
            setTimeout(() => {
                projects_list_forClick.style.opacity = '1';
                projects_list_forClick.style.marginTop = '15px';
                projects_list_forClick.style.fontSize = '14px';
                projects_list_forClick.style.lineHeight = '22px';
                for (let i = 0; i < projects_a_text.length; i += 1) {
                        projects_a_text[i].style.padding = '5px';
                }
            }, 50);
        }
    }else{
        projects_list_forClick.style.opacity = '';
        projects_list_forClick.style.marginTop = '';
        projects_list_forClick.style.fontSize = '';
        projects_list_forClick.style.lineHeight = '';
        for (let i = 0; i < projects_a_text.length; i += 1) {
                projects_a_text[i].style.padding = '';
        }
        setTimeout(() => {
            projects_list_forClick.style.display = '';
        }, 550);
    }
}
document.querySelectorAll('.projects .projectscontainer').forEach(function(projects_container) {
    projects_container.addEventListener('click', function() {
        if (projects_container.querySelector('.projects_content_list').style.display == '') {
            projects_container.querySelector('.projects_list_closed').style.margin = '0px';
            projects_container.querySelector('.projects_list_closed').style.padding = '0px';
            projects_container.querySelector('.projects_list_closed').style.fontSize = '0px';
            projects_container.querySelector('.projects_list_closed').style.opacity = '0';
        } else {
            projects_container.querySelector('.projects_list_closed').style.margin = '';
            projects_container.querySelector('.projects_list_closed').style.padding = '';
            projects_container.querySelector('.projects_list_closed').style.fontSize = '';
            projects_container.querySelector('.projects_list_closed').style.opacity = '';
        }
    })
})

projects_container_website.onclick = function click_work_website() {
    y = scrapbooksection_projects_website;
    x = scrapbooksection_projects_website;
    projects_list_forClick = projects_list_website;
    if (projects_list_forClick.style.display == '') {
        scrapbookScroll_onClick();
    }
    projectsDetailsPopup();
}
document.getElementById("projects_website_link").innerHTML = window.location.href + "ver";
document.getElementById("projects_website_hyperlink").setAttribute('href', (window.location.href));
projects_container_9004.onclick = function click_work_epyc_assets() {
    y = scrapbooksection_projects_epyc_assets;
    x = scrapbooksection_projects_epyc_assets;
    projects_list_forClick = projects_list_9004;
    if (projects_list_forClick.style.display == '') {
        scrapbookScroll_onClick();
    }
    projectsDetailsPopup();
}
projects_container_7000.onclick = function click_work_radeon_bundle() {
    y = scrapbooksection_projects_radeon_bundle;
    x = scrapbooksection_projects_radeon_bundle;
    projects_list_forClick = projects_list_7000;
    if (projects_list_forClick.style.display == '') {
        scrapbookScroll_onClick();
    }
    projectsDetailsPopup();
}
projects_container_epyc_whitepaper.onclick = function click_work_tco() {
    y = scrapbooksection_projects_tco;
    x = scrapbooksection_projects_tco;
    projects_list_forClick = projects_list_epyc_whitepaper;
    if (projects_list_forClick.style.display == '') {
        scrapbookScroll_onClick();
    }
    projectsDetailsPopup();
}
projects_container_csr.onclick = function click_work_amdcsr() {
    y = scrapbooksection_projects_amdcsr;
    x = scrapbooksection_projects_amdcsr;
    projects_list_forClick = projects_list_csr;
    if (projects_list_forClick.style.display == '') {
        scrapbookScroll_onClick();
    }
    projectsDetailsPopup();
}
projects_container_sotafujii.onclick = function click_work_sota() {
    y = scrapbooksection_projects_sota;
    x = scrapbooksection_projects_sota;
    projects_list_forClick = projects_list_sotafujii;
    if (projects_list_forClick.style.display == '') {
        scrapbookScroll_onClick();
    }
    projectsDetailsPopup();
}
projects_container_lesapb.onclick = function click_work_lesapb() {
    y = scrapbooksection_projects_lesapb;
    x = scrapbooksection_projects_lesapb;
    projects_list_forClick = projects_list_lesapb;
    if (projects_list_forClick.style.display == '') {
        scrapbookScroll_onClick();
    }
    projectsDetailsPopup();
}
projects_container_wahnhaft.onclick = function click_work_wahnhaft() {
    y = scrapbooksection_projects_wahnhaft;
    x = scrapbooksection_projects_wahnhaft;
    projects_list_forClick = projects_list_wahnhaft;
    if (projects_list_forClick.style.display == '') {
        scrapbookScroll_onClick();
    }
    projectsDetailsPopup();
}


//Scrapbook section scroll
var scrolledScrapbook_forButtons;

var keyScrapbookHandler = (keyScrapbook) => {
    if (keyScrapbook.key === "ArrowUp") {
        scrapbook.scrollTop -= scrolledScrapbook_forButtons.scrollHeight;
    } else if (keyScrapbook.key === "ArrowDown") {
        scrapbook.scrollTop += scrolledScrapbook_forButtons.scrollHeight;
    } else if (keyScrapbook.key === "ArrowLeft") {
        scrolledScrapbook_forButtons.scrollLeft -= scrapbook.scrollWidth;
    } else if (keyScrapbook.key === "ArrowRight") {
        scrolledScrapbook_forButtons.scrollLeft += scrapbook.scrollWidth;
    }
}
function keyScrapbookAEL() {
    document.addEventListener("keydown", keyScrapbookHandler);
}
function scrapbook_buttons_scroll_functionality() {
    button_scrapbook_scroll_left.onclick = function() {
        scrolledScrapbook_forButtons.scrollLeft -= scrapbook.scrollWidth;
    }
    button_scrapbook_scroll_right.onclick = function() {
        scrolledScrapbook_forButtons.scrollLeft += scrapbook.scrollWidth;
    }
}
function scrapbook_buttons_scroll_y() {
    if (scrapbook.scrollTop < scrapbooksection_about.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_about;
        console.log("about");
    } else if (scrapbook.scrollTop >= scrapbooksection_education_degree.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_education_degree.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_education_degree;
        console.log("degree");
    } else if (scrapbook.scrollTop >= scrapbooksection_education_foundation.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_education_foundation.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_education_foundation;
        console.log("foundation");
    } else if (scrapbook.scrollTop >= scrapbooksection_work_amd.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_work_amd.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_work_amd;
        console.log("amd");
    } else if (scrapbook.scrollTop >= scrapbooksection_volunteer_amdcsr.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_volunteer_amdcsr.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_volunteer_amdcsr;
        console.log("amdcsr");
    } else if (scrapbook.scrollTop >= scrapbooksection_volunteer_lesapb.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_volunteer_lesapb.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_volunteer_lesapb;
        console.log("lesapb");
    } else if (scrapbook.scrollTop >= scrapbooksection_volunteer_tiri.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_volunteer_tiri.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_volunteer_tiri;
        console.log("tiri");
    } else if (scrapbook.scrollTop >= scrapbooksection_volunteer_apples.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_volunteer_apples.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_volunteer_apples;
        console.log("apples");
    } else if (scrapbook.scrollTop >= scrapbooksection_projects_website.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_projects_website.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_projects_website;
        console.log("website");
    } else if (scrapbook.scrollTop >= scrapbooksection_projects_epyc_assets.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_projects_epyc_assets.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_projects_epyc_assets;
        console.log("epyc");
    } else if (scrapbook.scrollTop >= scrapbooksection_projects_radeon_bundle.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_projects_radeon_bundle.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_projects_radeon_bundle;
        console.log("radeon");
    } else if (scrapbook.scrollTop >= scrapbooksection_projects_tco.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_projects_tco.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_projects_tco;
        console.log("tco");
    } else if (scrapbook.scrollTop >= scrapbooksection_projects_amdcsr.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_projects_amdcsr.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_projects_amdcsr;
        console.log("csr");
    } else if (scrapbook.scrollTop >= scrapbooksection_projects_sota.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_projects_sota.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_projects_sota;
        console.log("sotafujii");
    } else if (scrapbook.scrollTop >= scrapbooksection_projects_lesapb.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_projects_lesapb.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_projects_lesapb;
        console.log("lesapb");
    } else if (scrapbook.scrollTop >= scrapbooksection_projects_wahnhaft.offsetTop - 50 && scrapbook.scrollTop < scrapbooksection_projects_wahnhaft.offsetTop + 50) {
        scrolledScrapbook_forButtons = scrapbooksection_projects_wahnhaft;
        console.log("wahnhaft");
    }
    scrapbook_buttons_scroll_functionality();
    keyScrapbookAEL();
}
function scrapbook_buttons_scroll_x() {
    if (scrolledScrapbook_forButtons.scrollLeft < scrapbook.scrollWidth - 50) {
        button_scrapbook_scroll_left.style.opacity = '0';
        button_scrapbook_scroll_left.style.cursor = 'default';
    } else if (scrolledScrapbook_forButtons.scrollLeft >= scrapbook.scrollWidth - 50) {
        button_scrapbook_scroll_left.style.opacity = '';
        button_scrapbook_scroll_left.style.cursor = '';
    }
    if (scrolledScrapbook_forButtons.scrollLeft >= scrolledScrapbook_forButtons.scrollWidth - scrapbook.scrollWidth - 50) {
        button_scrapbook_scroll_right.style.opacity = '0';
        button_scrapbook_scroll_right.style.cursor = 'default';
    } else if (scrolledScrapbook_forButtons.scrollLeft < scrolledScrapbook_forButtons.scrollWidth - scrapbook.scrollWidth - 50) {
        button_scrapbook_scroll_right.style.opacity = '';
        button_scrapbook_scroll_right.style.cursor = '';
    }
}
function scrapbook_scroll_listeners() {
    scrapbook_buttons_scroll_y();
    scrapbook_buttons_scroll_x();
}

header_contents.onclick = function() {
    console.log(scrolledScrapbook_forButtons);
    
    console.log(scrapbook.scrollTop);
}

//img_scrapbook popup
var img_scrapbook_1 = document.getElementsByClassName("img_scrapbook_1");
var blur_img_scrapbook_popup = document.getElementById("blur_img_scrapbook_popup");
var img_scrapbook_popup_close = document.getElementById("img_scrapbook_popup_close");
var img_scrapbook_popup = document.getElementById("img_scrapbook_popup");

document.querySelectorAll('.scrapbooksection_inner img').forEach(image => {
    image.onclick = () => {
        blur_img_scrapbook_popup.style.display = 'flex';
        img_scrapbook_popup.src = image.getAttribute('src');
    }
})

img_scrapbook_popup_close.onclick = imgPopupClose;
function imgPopupClose() {
    blur_img_scrapbook_popup.style.display = 'none';
}

var ver = "10:02";