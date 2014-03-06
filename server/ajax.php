<?php 
header('Access-Control-Allow-Origin: *');


include "note_library.php";

$dbconn = mysqli_connect("localhost","your_db_user","your_db_pw","db_name");
mysqli_select_db($dbconn,"db_name" );

$noteslib = new NoteLibrary($dbconn);


//error_log(print_r($_POST,true));


switch ( $_POST['action'] )  {
    case "delete_note":
       $note_id = $_POST['id'];
       $res = $noteslib->deleteNote($note_id);  
       break;    
    case "add_note":
       $note_str = $_POST['note_str'];
        $res = $noteslib->addNote($note_str);
        if (!$res)
            echo json_encode(array("result" => 'fail'))  . "\n";
        else
            echo json_encode(array("result" => 'success', "new_note_id" => $res))  . "\n";
       break;
    default:
        $notes = $noteslib->getAllNotes();
        echo json_encode(array("result" => 'success', 'notes' => $notes))  . "\n";
        
    
}



?>