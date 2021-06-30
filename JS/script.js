$(function () {
    $("#icon").click(function(){
        $("#links").toggleClass("links-hide");
    })
})
window.addEventListener("load" , function (){
    var land = document.getElementById("land");
    land.classList.add("land-active");
})

var ar = $("#ar").click(function(){
  $("#home").text("الرئيسية");
  $("#soon").text("قريبا");
  $("#contact").text("التواصل");
  $("#log").text("التسجيل");
  $("#soft").text("مشاريع");
  $("#we").text("نحن ننفذ");
  $("#we").addClass("end");
  $("#war").text("مشاريعك");
  $("#who").text("من نحن ؟");
  $("#tact").text("للتواصل");
  $("#lock").text("موقعنا");
  $("#up").text("لأعلي");
  $("#word").text("تيرا بايت هي شركة تطوير برمجيات تقدم مجموعة كاملة من خدمات التطوير لمجموعة متنوعة من مجالات الأعمال. تقدم الشركة خدمات تطوير البرمجيات وتكامل البرامج وتحديثها ودعمها وصيانتها للتطبيقات المطورة. ينشئ مطورونا برامج مخصصة للأفراد والشركات الناشئة والشركات الصغيرة والمتوسطة.");
  $("#headsoft").text("مشاريعنا");
});
var en = $("#en").click(function(){
    $("#home").text("Home");
    $("#soon").text("Soon");
    $("#contact").text("Contact Us");
    $("#log").text("Log In");
    $("#soft").text("Softwares");
    $("#we").text("We Bulid");
    $("#we").removeClass("end");
    $("#war").text("Softwares");
    $("#who").text("Who We Are?");
    $("#tact").text("Contact Us");
    $("#lock").text("Our Location");
    $("#up").text("Up");
    $("#headsoft").text("Our Softwares");
    $("#word").text("TeraByte is a software development company that provides a full range of development services for a variety of business areas. The company offers software development services, software integration and updating, support, and maintenance of developed applications. Our developers build custom software for individuals, startups, and small to medium businesses.");
})
