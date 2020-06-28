var spantime=document.querySelectorAll("span.time")
console.log(spantime);
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
var i;
for(i=0;i<spantime.length;i++){
    spantime[i].innerHTML=`[${time}]`;
}
var content=document.querySelector('chatContent');
function addchat(username,message){
    var div=document.createElement('div');
    div.classList="chatEntry"
    var span=document.createElement('span');
    span.classList="chatUsername";
    span.appendChild(document.createTextNode(username));
    var span1=document.createElement('span');
    span1.classList="time";
    span1.appendChild(document.createTextNode(time));
    var span2=document.createElement('span');
    span2.classList="chatMessage";
    span2.appendChild(document.createTextNode(message));

    div.appendChild(span);
    div.appendChild(span1);
    div.appendChild(span2);
}

 
