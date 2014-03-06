/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */

/**

Need to actually the service, that calls whenGet!.. so import the service and then continue


http://stackoverflow.com/questions/18147606/why-do-i-receive-error-unexpected-request-get-internalapi-quotes

*/


describe( 'home section', function() {
  beforeEach( module( 'ngBoilerplate.home' ) );

  it( 'should have a dummy test', inject( function() {
    expect( true ).toBeTruthy();
  }));
  
   var $scope, $rootScope, $httpBackend, createController;
   
    beforeEach(module("noteServiceModule"));
   
    beforeEach(inject(function($injector) {
        
        noteService = $injector.get('noteService');
        $httpBackend = $injector.get('$httpBackend');
        
        $httpBackend.when('GET', 'http://heidibone.com/syncompanion/ajax.php')
        .respond({
                   "result": 'success',
                  
                   "notes": [{"id" : 1, "note" : "First note"}, {"id" : 2, "note" : "Second note"}]
                });
        
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        
        var $controller = $injector.get('$controller');
        
        createController = function() {
            return $controller('HomeCtrl', {
                '$scope': $scope,
                'noteService' : noteService
            });
         };
         
         

         
         
         
     }));
     
     afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
        // $httpBackend.verifyNoOutstandingRequest();
     });
     
      it('should run the Test to get the ntoes from the backend', function() {
         $httpBackend.expect('GET', 'http://heidibone.com/syncompanion/ajax.php');
           var controller = createController();
           
          /* controller(function(data) {
           $rootScope.notes = data;
              //alert(JSON.stringify($scope.notes));
              //console.log($scope.notes);
            });*/
        
          
           
           $httpBackend.flush();
          // console.log($scope.notes);
           expect($scope.notes[0].note).toEqual("First note");
             //expect($scope.parseOriginalUrlStatus).toEqual('waiting');
                
       });
  
  
});


