	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#0080FF";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Hide";bookConfig.ShareButtonVisible="Hide";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Hide";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Hide";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Hide";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Hide";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Hide";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="0";bookConfig.LeftShadowAlpha="0";bookConfig.RightShadowWidth="0";bookConfig.RightShadowAlpha="0";bookConfig.ShowTopLeftShadow="No";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#620120";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=1;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=1273;;bookConfig.securityType="1";bookConfig.CreatedTime ="250307135947";bookConfig.bookTitle="Sixieme fr";bookConfig.bookmarkCR="0b3b4c0fc03c98d288c2cb5dd79f1dae8bc05e68";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352559144","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.043947168377042954","y":"0.1561712846347607","width":"0.10873954770049411","height":"0.17371956339210748","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/knife.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352557339","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.245866590649943","y":"0.15449202350965574","width":"0.10873954770049411","height":"0.17371956339210748","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/tbsp.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352558143","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.45016153553781835","y":"0.16120906801007556","width":"0.10873954770049411","height":"0.17371956339210748","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/ElevenLabs_2025-03-07T12_55_33_Gigi_pre_s50_sb75_se0_b_m2.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352558916","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.6390155834283543","y":"0.16456759026028547","width":"0.10873954770049411","height":"0.17371956339210748","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/fork.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352558170","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.8468738122386925","y":"0.15952980688497062","width":"0.10873954770049411","height":"0.17371956339210748","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/skimmer.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352556642","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.05226149752945648","y":"0.399664147774979","width":"0.10873954770049411","height":"0.1544080604534005","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/bowl.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352557421","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.24230330672748004","y":"0.399664147774979","width":"0.10873954770049411","height":"0.1544080604534005","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/rolling pin.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352555763","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.4465982516153554","y":"0.3963056255247691","width":"0.10873954770049411","height":"0.1544080604534005","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/baking tray.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352552696","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.6378278221208666","y":"0.3979848866498741","width":"0.10873954770049411","height":"0.1544080604534005","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/pot.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352557672","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.8349961991638161","y":"0.399664147774979","width":"0.10873954770049411","height":"0.1544080604534005","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/cookie cutter.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352559454","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.03563283922462942","y":"0.6343408900083963","width":"0.10873954770049411","height":"0.1749790092359362","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/gratter.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352555088","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.23161345496009123","y":"0.6414777497900923","width":"0.10873954770049411","height":"0.1749790092359362","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/pan.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352556478","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.4323451159255036","y":"0.6448362720403022","width":"0.10873954770049411","height":"0.1749790092359362","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/electirc mixer.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352553665","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.6425788673508173","y":"0.6397984886649875","width":"0.10873954770049411","height":"0.1749790092359362","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/oven g.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoEllipse","annoId":"202571352558850","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"0","borderColor":"6710886","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.8326206765488408","y":"0.6330814441645676","width":"0.10873954770049411","height":"0.1749790092359362","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"841.92","pageHeight":"595.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/potato.mp3","H5Replay":"false","H5PlaybackNumber":"0"}}]]}; bookConfig.isFlipPdf=true; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}