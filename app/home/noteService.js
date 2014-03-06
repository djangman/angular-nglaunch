var noteServiceModule = angular.module('noteServiceModule', []);
 

  
noteServiceModule.factory('noteService', function($http) {
   return {
     getAllNotes: function(callback) {
      
       $http.get('http://youurdomain/yourappname/ajax.php').success(callback);
     },

    deleteNote: function(note_id, callback) {
        
         $http({ method: 'POST', url: 'http://youurdomain/yourappname/ajax.php', data: {id: note_id, action: 'delete_note'}}).then( callback );
        
    },
    addNote: function(note, callback) {
        
         $http({ method: 'POST', url: 'http://youurdomain/yourappname/ajax.php', data: {note_str: note, action: 'add_note'}}).then(callback);
        
    }
    
    
 };




});





