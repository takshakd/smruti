/**
* Created with smruti.
* User: takshakd
* Date: 2015-02-22
* Time: 05:52 AM
* To change this template use Tools | Templates.
*/

var smruti = angular.module('smruti', []);

smruti.controller('smrutiController', function ($scope) {
  $scope.date = Date();
  $scope.namePrefix = "Mr.";
  $scope.genderPronoun = "he";
  $scope.heSheUpper = "He";
  $scope.heSheLower = "he";
  $scope.hisHerUpper = "His";
  $scope.hisHerLower = "his";
  $scope.presentPast = "is";
  $scope.genderPronounPossessive = "his";
  $scope.adviceOrExpectation = "advice";
  $scope.leaveFrom = "ADL";

  $scope.genderChange = function () {
    if ($scope.namePrefix === "Mr.") {
      $scope.genderPronoun = "He";
      $scope.heSheUpper = "He";
      $scope.heSheLower = "he";
      $scope.hisHerUpper = "His";
      $scope.hisHerLower = "his";
    } else {
      $scope.genderPronoun = "Her";
      $scope.heSheUpper = "She";
      $scope.heSheLower = "she";
      $scope.hisHerUpper = "Her";
      $scope.hisHerLower = "her";
    }
  };

  $scope.generateCertificate = function () {
    var printingWindow = window.open("", "_blank");
    //printingWindow.document.write("<p>" + $scope.date + "</p>");
    printingWindow.document.write("<html><head><title>Certificate</title></head>");
    printingWindow.document.write("<h3>CERTIFICATE</h3>");
    printingWindow.document.write("<p>This is to certify that " + $scope.namePrefix + " " + $scope.firstName + " " + $scope.lastName + " " + $scope.presentPast + " under treatment at this hospital for " + $scope.treatmentReason + ".</p>");
    printingWindow.document.write("<p>" + $scope.heSheUpper + " " + $scope.presentPast + " admitted to this hospital from " + $scope.admitDate + " and discahrged on " + $scope.dischargeDate + ".</p>");
    printingWindow.document.write("<p>" + $scope.heSheUpper + " " + $scope.presentPast + " advised to take rest from " + $scope.restStartDate + " to " + $scope.restEndDate + ".</p>");
    printingWindow.document.write("<p>" + $scope.heSheUpper + " " + $scope.presentPast + " advised to resume " + $scope.hisHerLower + " " + $scope.leaveFrom + " from " + $scope.resumeWorkDate + ".</p>");
    printingWindow.document.write("<br/><br/>");
    printingWindow.document.write("<p>Dr. K. Desai</p>");
    printingWindow.document.write("<p>(Regn. No. G-2683)</p>");
    printingWindow.document.write("</html>");
  }
});


// Inputs
var admitDate = $("input-date-admit");
var dischargeDate = $("input-date-disc");

// Outputs
var outputElementSelector = "#section-output > h2";

$(document).ready(function () {
  $("#certificate").load("./certificate.html");
  $("#discharge").load("./discharge.html");
  $("#bill").load("./bill.html");
});
