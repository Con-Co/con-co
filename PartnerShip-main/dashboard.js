var url="/PartnerShip/dashboard.html",xmlhttp;//Remember, same domain
if("XMLHttpRequest" in window)xmlhttp=new XMLHttpRequest();
if("ActiveXObject" in window)xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
xmlhttp.open('GET',url,true);
xmlhttp.onreadystatechange=function()
{
    if(xmlhttp.readyState==4)document.write(xmlhttp.responseText);
};
xmlhttp.send(null);
