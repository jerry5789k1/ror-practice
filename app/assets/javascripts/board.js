let stockModule = angular.module('stockApp', ['templates']);

// service: set API path
stockModule.service('dataService', function ($http) {
  const urlBase = '/api/v1/stocks';
  this.getToday = function () {
    return $http.get(urlBase);
  };
  this.getByDate = function (date) {
    return $http.get(urlBase + '/sort?date=' + date);
  };
  this.getByCode = function (code) {
    return $http.get(urlBase + '/sort?code=' + code);
  };
  this.getByDateCode = function (date, code) {
    return $http.get(urlBase + '/sort?date=' + date + '&code=' + code);
  };
});

// index, path:/board
stockModule.controller('stockTable', function ($scope, dataService) {
  $scope.thNames = [
    '排', '代號', '名稱', '開盤價', '最高價', '最低價', '昨收盤', '今收盤', '成交量', '漲跌', '漲跌幅'
  ]
  dataService.getToday().then(function (response) {
    // get today's turnovers
    $scope.turnoversByDate = response.data.today;

    // date dropdown select data
    // only compare ten words from beginning
    // init date dropdown select
    const allDate = response.data.date
    $scope.turnoversDate = [...new Set(allDate.map(date => date.created_at.substring(0, 10)))];
    $scope.date = $scope.turnoversDate.slice(-1)[0];

    // reset dropdown select
    resetDropdown();

    // stock code dropdown select data
    $scope.allStockCode = $scope.turnoversByDate.map(stock => stock.stock_code);
  }).catch(function () {
    $scope.errorMsg = 'API service error'
  });

  // date dropdown select onchange event
  // sort by date
  $scope.dateSelected = function (date) {
    dataService.getByDate(date).then(function (response) {
      $scope.turnoversByDate = response.data.data
    });
    // reset dropdown select
    resetDropdown();
  };

  // stock code dropdown select onchange event
  // sort by date and stock code
  $scope.codeSelected = function (data, code) {
    if (!code) {
      $scope.dateSelected();
    } else {
      dataService.getByDateCode($scope.date, $scope.code).then(function (response) {
        $scope.turnoversByDate = response.data.data
      });
    }
  };

  // reset stock code and volumn rank dropdown select
  let resetDropdown = function () {
    $scope.code = null;
    $scope.volumnRank = null;
  }

});

// show, path:/board/XXXX
// get url last segment as stock code params
stockModule.controller('stockTableByCode', function ($scope, $location, dataService) {
  $scope.thNames = [
    '排', '日期', '名稱', '開盤價', '最高價', '最低價', '昨收盤', '今收盤', '成交量', '漲跌', '漲跌幅'
  ];
  $scope.codePath = $location.absUrl().match(/([^\/]*)\/*$/)[1];
  dataService.getByCode($scope.codePath).then(function (response) {
    $scope.todaysTurnovers = response.data.data;
  });
});

// template: common head
stockModule.directive('headTitle', function () {
  return {
    restrict: 'E',
    templateUrl: 'header.html'
  };
});
// template: common table
stockModule.directive('customTable', function () {
  return {
    restrict: 'E',
    scope: {
      thNames: '=',
      turnoversName: '=',
      order: '=',
      codePath: '='
    },
    templateUrl: 'table.html'
  };
});