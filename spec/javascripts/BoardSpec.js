describe('Board', function () {

  beforeEach(module('stockApp'));

  var dataService, $controller, $httpBackend;

  beforeEach(inject(function (_$controller_, _dataService_, _$httpBackend_) {
    dataService = _dataService_;
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
  }));
  
  it('ensure dataService exist', function () {
    expect(dataService).toBeDefined();
  });

  describe('stockTable', function () {
    beforeEach(function () {
      $scope = {};
      controllerStockTable = $controller('stockTable', {
        $scope: $scope
      });
    });
    it('ensure controller stockTable exist', function () {
      expect(controllerStockTable).toBeDefined();
    });
    it('ensure the content of $scope.thNames', function () {
      expect($scope.thNames).toEqual([
        '排', '代號', '名稱', '開盤價', '最高價', '最低價', '昨收盤', '今收盤', '成交量', '漲跌', '漲跌幅'
      ]);
    });
    describe('call getToday API', function () {
      it('should return today\'s turnovers', function () {
        $httpBackend.when('GET', '/api/v1/stocks').respond(400);
        $httpBackend.expectGET('/api/v1/stocks');
        $httpBackend.flush();
        expect($scope.errorMsg).toBe('API service error');
      });
    });

    describe('$scope.dateSelected', function () {
      it('should call getByDate API', function () {
        spyOn(dataService, 'getByDate');
        dataService.getByDate('20180621');
        expect(dataService.getByDate).toHaveBeenCalled();
      });
      it('should reset code and volumnRank dropdown select', function () {
        $scope.dateSelected();
        expect($scope.volumnRank).toEqual(null);
        expect($scope.code).toEqual(null);
      });
    });

    describe('$scope.codeSelected', function () {
      it('should return dateSelected() if $scope.code equal to null', function () {
        $scope.dateSelected();
        expect($scope.code).toEqual(null);
      });
      it('should call getByDateCode API', function () {
        spyOn(dataService, 'getByDateCode');
        dataService.getByDateCode('20180621', '2303');
        expect(dataService.getByDateCode).toHaveBeenCalled();
      });
    });
  });

  describe('stockTableByCode', function () {
    var location;
    beforeEach(function () {
      $scope = {};
      controllerStockTableByCode = $controller('stockTableByCode', {
        $scope: $scope
      });
    });
    it('ensure controller StockTableByCode exist', function () {
      expect(controllerStockTableByCode).toBeDefined();
    });
    it('ensure the content of $scope.thNames', function () {
      expect($scope.thNames).toEqual([
        '排', '日期', '名稱', '開盤價', '最高價', '最低價', '昨收盤', '今收盤', '成交量', '漲跌', '漲跌幅'
      ]);
    });
    it('ensure $scope.codePath match parameters', function () {
      let url = 'http://localhost:3000/board/2323';
      $scope.codePath = url.match(/([^\/]*)\/*$/)[1];
      expect($scope.codePath).toEqual('2323');
    });
  });
});