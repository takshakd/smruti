var smruti = angular.module('smruti', []);

smruti.controller('smrutiController', function($scope) {
  $scope.templates = {
    certificate: {
      url: "certificate.html",
      genFcn: genCertificate,
      artifactTemplate: "cert.html"
    },
    bill: {
      url: "bill.html",
      genFcn: genBill
    },
    discharge: {
      url: "discharge.html",
      genFcn: genDischarge
    }
  };

  $scope.template = $scope.templates.certificate;

  $scope.setTemplate = function(name) {
    $scope.template = $scope.templates[name];
  };

  $scope.selectedBillable = "";

  $scope.billables = [
    {name: "Consultation", amount: 0},
    {name: "Reconsultation", amount: 0},
    {name: "Dressings, Inj-IM/IV", amount: 0},
    {name: "Catheter/Blood infusion", amount: 0},
    {name: "Plaster application", amount: 0},
    {name: "Operation theater", amount: 0},
    {name: "IITV usage", amount: 0},
    {name: "Specialist equipment", amount: 0},
    {name: "Room stay", amount: 0},
    {name: "Nursing charges", amount: 0},
    {name: "Surguical fees", amount: 0},
    {name: "Ward visits", amount: 0},
    {name: "Miscellaneous", amount: 0},
    {name: "Radiology", amount: 0},
    {name: "Pathology", amount: 0},
    {name: "Implants", amount: 0},
    {name: "Anesthesia", amount: 0},
    {name: "Medicines and disposables", amount: 0}
  ];

  $scope.billTotal = 0;
  $scope.billRemaining = 0;
  $scope.billAdvance = 0;
  $scope.updateBillTotal = function() {
    $scope.billTotal = 0;
    $scope.billables.forEach(function(b) {
      $scope.billTotal += parseInt(b.amount);
    });
    console.log($scope.billAdvance);
    $scope.billRemaining = $scope.billTotal - parseInt($scope.billAdvance);
  };

  $scope.date = Date();
  $scope.namePrefix = "Mr.";
  $scope.firstName = "";
  $scope.lastName = "";
  $scope.genderPronoun = "he";
  $scope.heSheUpper = "He";
  $scope.heSheLower = "he";
  $scope.hisHerUpper = "His";
  $scope.hisHerLower = "his";
  $scope.presentPast = "is";
  $scope.genderPronounPossessive = "his";
  $scope.adviceOrExpectation = "advice";
  $scope.leaveFrom = "ADL";
  $scope.resumeExpectation = "advised to";

  $scope.genderChange = function() {
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

  $scope.generate = function() {
    $scope.template.genFcn();
  };

  $scope.printArtifact = function() {
    window.print();
  };

  function genCertificate() {
    var printingWindow = window.open("", "_blank");
    printingWindow.document.open();
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
    printingWindow.document.close();
  }

  function genBill() {
    var printingWindow = window.open("", "_blank");
    printingWindow.document.open();
    printingWindow.document.write("<html><head><title>Bill</title></head>");
    printingWindow.document.write("<h2>BILL</h2>");
    printingWindow.document.write("<p></p>");
    printingWindow.document.write("</html>");
    printingWindow.document.close();
  }

  function genDischarge() {
    var printingWindow = window.open("", "_blank");
    printingWindow.document.open();
    printingWindow.document.write("<html><head><title>Discharge</title></head>");
    printingWindow.document.write("<h2>DISCHARGE</h2>");
    printingWindow.document.write("</html>");
    printingWindow.document.close();
  }
});


// Inputs
var admitDate = $("input-date-admit");
var dischargeDate = $("input-date-disc");

// Outputs
var outputElementSelector = "#section-output > h2";

$(document).ready(function() {
  //$("#certificate").load("certificate.html");
  //$("#discharge").load("./discharge.html");
  //$("#bill").load("./bill.html");
});
