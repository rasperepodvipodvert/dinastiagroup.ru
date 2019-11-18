<?php
require 'PHPMailerAutoload.php';
$mail = new PHPMailer;

//$subject = substr(htmlspecialchars(trim($_POST['subject'])), 0, 50);
$name = substr(htmlspecialchars(trim($_POST['name'])), 0, 30);
//$email = substr(htmlspecialchars(trim($_POST['email'])), 0, 30);
$phone = substr(htmlspecialchars(trim($_POST['phone'])), 0, 20);

//$mail->SMTPDebug = 3;
$mail->isSMTP();
$mail->CharSet="UTF-8";
$mail->Host = 'ssl://smtp.yandex.ru';
$mail->SMTPAuth = true;
$mail->Username = 'spambot@dinastiagroup.ru';
$mail->Password = 'gns5vvBzbG7y3Cwkwvv3';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

//$mail->setFrom($email, $name);
$mail->From = 'spambot@dinastiagroup.ru';
$mail->addAddress('info@dinastiagroup.ru');

$mail->isHTML(false);

$mail->Subject = $name.' ('.$phone.')';
$mail->Body = $name.' ('.$phone.')';


echo $mail->send();

?>