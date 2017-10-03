var smruti = angular.module('smruti', []);

smruti.controller('smrutiController', function($scope) {
  $scope.templates = {
    certificate: {
      url: "certificate.html"
    },
    bill: {
      url: "bill.html"
    },
    discharge: {
      url: "discharge.html"
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
    {name: "Medicines and disposables", amount: 0},
    {name: "Advance", amount: 0}
  ];

  $scope.billBalance = 0;
  $scope.billRemaining = 0;

  $scope.updateBillBalance = function() {
    function isAdvance(x) { return x.name === "Advance"; }
    $scope.billBalance = 0;
    $scope.billables.filter(x => !isAdvance(x)).forEach(function(b) {
      $scope.billBalance += parseInt(b.amount);
    });
    $scope.billables.filter(isAdvance).forEach(function(b) {
      $scope.billBalance -= parseInt(b.amount);
    });
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

  $scope.printArtifact = function() {
    window.print();
  };
});


// Inputs
var admitDate = $("input-date-admit");
var dischargeDate = $("input-date-disc");

// Outputs
var outputElementSelector = "#section-output > h2";
