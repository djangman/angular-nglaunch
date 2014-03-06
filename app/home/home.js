/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.state',
  'plusOne',
  'noteServiceModule'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

//to do: return an actual note object from addnote from ajax.php !

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', ['$scope','noteService', function($scope, noteService) {
       
        noteService.getAllNotes(function(data) {
           $scope.notes = data.notes;
           $scope.result = data.result;
           //alert(JSON.stringify($scope.notes));
           //console.log($scope.notes);
        });
         $scope.deleteNote = function(idx) {
            //alert(idx);
            //console.log($scope.notes);
            var note_to_delete = $scope.notes[idx];
            noteService.deleteNote(note_to_delete.id, function(data) {
                 $scope.notes.splice(idx, 1);
            });
        },
        
        $scope.addNote = function() {
            
             //note_object = ($scope.new_note
             noteService.addNote($scope.new_note, function(result) {
                data = result.data;
                
                if (data.result != "success") {
                      alert ("problem adding note");
                 } else {
                     new_note = {id:data.new_note_id, note:$scope.new_note};
                     $scope.notes.push(new_note);
                }
              });
         };
        
 }]);
 



/*

studentApp.factory('studentSession', function($http){
    return {
        getSessions: function() {
            return $http.post('/services', { 
                type : 'getSource',
                ID    : 'TP001'
            });
        }
    };
});

studentApp.controller('studentMenu',function($scope, studentSession){
    $scope.variableName = [];

    var handleSuccess = function(data, status) {
        $scope.variableName = data;
        console.log($scope.variableName);
    };

    studentSession.getSessions().success(handleSuccess);
});


*/