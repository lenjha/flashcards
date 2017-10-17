$(document).ready(function() {
  $("#jsTitle").click(function() {
    // $(".initialhidden").children().hide();
    $("#opDef").addClass("hidden");
    $("#varNamingCon").addClass("hidden");
    $("#varNamingCon").toggleClass("hidden");
  });
  $("#opTitle").click(function() {
    // $(".initialhidden").find('*').hide();
    $("#varNamingCon").addClass("hidden");
    $("#jsDef").addClass("hidden");
    $("#opDef").toggleClass("hidden");
  });
  $("#varNamCon").click(function() {
    // $(".initialhidden").find('*').hide();
    $("#opDef").addClass("hidden");
    $("#jsDef").addClass("hidden");
    $("#varNamingCon").toggleClass("hidden");
  });
});
