<?php
$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);
switch ($r=array_shift($request)) {
    case 'send' :handle_msg($method,$input); 
        break;
    default:  header("HTTP/1.1 404 Not Found");
        exit;
}

function handle_msg($method,$input){
    $msg = "First line of text\nSecond line of text";

    // use wordwrap() if lines are longer than 70 characters
    $msg = wordwrap($msg,70);
    
    // send email
    // ini_set("SMTP","ssl://smtp.gmail.com");
    // ini_set("smtp_port","465");
    // if (mail("pantsosxen23@gmail.com","My subject","naiii")){
    //     echo "Email successfully sent to ..";
    // }else {
    //     echo "Email sending failed...";

    // }
    $to_email = "pantsosxen23@gmail.com";
    $subject = "Simple Email Test via PHP";
    $body = "Hi,nn This is test email send by PHP Script";
    $headers = "From: sender\'s email";
    
    if (mail($to_email, $subject, $body, $headers)) {
     echo "Email successfully sent to $to_email...";
    } else {
     echo "Email sending failed...";
    }

}







        ?>