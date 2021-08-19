<?php
require_once './vendor/autoload.php';
extract($_POST);
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
try {
  //Server settings
  $mail->CharSet = 'UTF-8';                               // Show mail in Turkish character set UTF-8
  $mail->isSMTP();                                            //Send using SMTP
  $mail->Host       = 'smtp.adasedefyapi.com';                //Set the SMTP server to send through
  $mail->SMTPAuth   = true;                           //Enable SMTP authentication
  $mail->Username   = 'info@adasedefyapi.com';               //SMTP username
  $mail->Password   = 'Kk89w8p1';                               //SMTP password
  $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

  //Recipients
  $mail->setFrom('info@adasedefyapi.com', $nameSurname . ' Tarafından Gönderildi'); // Gönderecek adres ve Mailin Başlığı olacak ikincisi
  $mail->addAddress('info@adasedefyapi.com', 'Ada Sedef Yöneticisine');     //Add a recipient

  //Content
  $mail->isHTML(true); //Set email format to HTML
  $mail->Subject = $subject; // Subject Of The Mail
  $mail->Body    = 'Sitenizin iletişim kısmından &#34;' . $nameSurname . '&#34; isimli ziyaretçiniz tarafından gönderilmistir.</br></br>
                    Kullanıcının E-posta adresi: '. $eMail .'</br></br>
                    Mesajı : ' . $message . '   </b>'; // Mail's Content 

if (!( empty($nameSurname) and empty($eMail) and empty($message) and empty($subject) )){
  $mail->send();
}
$_POST = array();
  echo 'Message has been sent to Administrator';
} catch (Exception $e) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
header("Location: ./contact.html");
?>