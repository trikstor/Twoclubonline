function notifyMe() {
  if (!("Notification" in window)) {
    alert("Ваш браузер не поддерживает HTML5 Notifications");
  }
  else if (Notification.permission === "granted") {
    var notification = new Notification('Клуб Двоечников', {
         lang: 'ru-RU', 
         body: 'Вам пришел новый ответ, комментарий или сообщение !', 
         icon: '128.png'
    });
  }
  else if (Notification.permission === 'default') {
    Notification.requestPermission(function (permission) {
      if(!('permission' in Notification)) {
        Notification.permission = permission;
      }
      if (permission === "granted") {
        var notification = new Notification('Клуб Двоечников', {
         lang: 'ru-RU', 
         body: 'Вам пришел новый ответ, комментарий или сообщение !', 
         icon: '128.png'
      });
      }
    });
  }
    notification.onclick = function() {
    location.href = 'https://twoclub.ru/profile.php';
    };
}
function loadHTML(sURL)
{
  var request=null;

  // пытаемся создать объект для MSXML 2 и старше
  if(!request) try {
    request=new ActiveXObject('Msxml2.XMLHTTP');
  } catch (e){}

  // не вышло... попробуем для MSXML 1
  if(!request) try {
    request=new ActiveXObject('Microsoft.XMLHTTP');
  } catch (e){}

  // не вышло... попробуем для Mozilla
  if(!request) try {
    request=new XMLHttpRequest();
  } catch (e){}

  if(!request)
    // ничего не получилось...
    return "";
 
  // делаем запрос
  request.open('GET', sURL, false);
  request.send(null);

  // возвращаем текст
  return request.responseText;
}
function alarmer(){
var x = loadHTML('https://twoclub.ru/tandex.php');
var answers = x.length;
if(answers>a){
notifyMe();	
a=answers;
}
}
var a=0;
setInterval(alarmer, 3000);