<?php 


class NoteLibrary {
   
   public $dbconn = null;
   
    function __construct($dbconn) {
        $this->dbconn = $dbconn;   
    }
    
   function addNote($note_text)  {
        $querystr = "insert into note (note) values ('" . $note_text . "')";
        $res = mysqli_query($this->dbconn, $querystr);
        //error_log(print_r($querystr,true));
        if  ($res)
            return mysqli_insert_id($this->dbconn);
        else
            return false;
        
    }
  
    function deleteNote($note_id)  {
        $querystr = "delete from note where id = " . $note_id;

        $res = mysqli_query($this->dbconn, $querystr);
        
    }
    
    function getAllNotes() {
        $querystr = "select * from note";
        
        $result = @mysqli_query($this->dbconn, $querystr);
        
        $notes = array();
        
        while ($data = mysqli_fetch_array($result) ) {
        
            $notes[] = array('note' => $data['note'],
                              'visited' =>  $data['visited'],
                              'id' =>  $data['id']);
            
        
        }   
      return $notes;
             
    }
    
    
}








?>