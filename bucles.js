const usuarios = [{"id":1,"first_name":"Rayna","last_name":"Francois","email":"rfrancois0@microsoft.com","gender":"Female","ip_address":"188.143.47.199"},
{"id":2,"first_name":"Bord","last_name":"Enterle","email":"benterle1@pagesperso-orange.fr","gender":"Male","ip_address":"101.184.192.186"},
{"id":3,"first_name":"Cynde","last_name":"Addicott","email":"caddicott2@ca.gov","gender":"Female","ip_address":"103.4.9.117"},
{"id":4,"first_name":"Barney","last_name":"Pococke","email":"bpococke3@cnn.com","gender":"Male","ip_address":"162.16.155.65"},
{"id":5,"first_name":"Kessiah","last_name":"Baigent","email":"kbaigent4@diigo.com","gender":"Female","ip_address":"212.57.48.22"},
{"id":6,"first_name":"Chaddie","last_name":"Matyugin","email":"cmatyugin5@nps.gov","gender":"Male","ip_address":"200.96.211.71"},
{"id":7,"first_name":"Beulah","last_name":"Dainton","email":"bdainton6@lulu.com","gender":"Female","ip_address":"218.98.202.74"},
{"id":8,"first_name":"Conant","last_name":"Wipper","email":"cwipper7@alexa.com","gender":"Male","ip_address":"1.193.109.208"},
{"id":9,"first_name":"Omar","last_name":"Drayn","email":"odrayn8@sciencedaily.com","gender":"Male","ip_address":"190.94.39.81"},
{"id":10,"first_name":"Shawnee","last_name":"Couttes","email":"scouttes9@scribd.com","gender":"Female","ip_address":"77.126.210.26"},
{"id":11,"first_name":"Claybourne","last_name":"Danskine","email":"cdanskinea@vk.com","gender":"Male","ip_address":"121.187.27.107"},
{"id":12,"first_name":"Josh","last_name":"Grishukhin","email":"jgrishukhinb@msu.edu","gender":"Non-binary","ip_address":"71.221.244.67"},
{"id":13,"first_name":"Laetitia","last_name":"Foulks","email":"lfoulksc@pagesperso-orange.fr","gender":"Female","ip_address":"135.100.92.100"},
{"id":14,"first_name":"Aubrey","last_name":"Mogford","email":"amogfordd@sourceforge.net","gender":"Male","ip_address":"114.175.205.57"},
{"id":15,"first_name":"Meggie","last_name":"Rowlands","email":"mrowlandse@foxnews.com","gender":"Female","ip_address":"139.70.4.174"},
{"id":16,"first_name":"Maurice","last_name":"Oswal","email":"moswalf@mapy.cz","gender":"Male","ip_address":"139.152.91.255"},
{"id":17,"first_name":"Tansy","last_name":"Lockney","email":"tlockneyg@com.com","gender":"Female","ip_address":"231.110.248.87"},
{"id":18,"first_name":"Faye","last_name":"Thacke","email":"fthackeh@privacy.gov.au","gender":"Polygender","ip_address":"72.43.202.5"},
{"id":19,"first_name":"Analiese","last_name":"Proske","email":"aproskei@europa.eu","gender":"Female","ip_address":"115.0.195.56"},
{"id":20,"first_name":"Dew","last_name":"Osbaldstone","email":"dosbaldstonej@scribd.com","gender":"Male","ip_address":"192.175.81.94"},
{"id":21,"first_name":"Kimmi","last_name":"Rohlf","email":"krohlfk@hexun.com","gender":"Female","ip_address":"239.153.124.122"},
{"id":22,"first_name":"Rochester","last_name":"Winnett","email":"rwinnettl@linkedin.com","gender":"Male","ip_address":"240.206.22.28"},
{"id":23,"first_name":"Justine","last_name":"Skirvane","email":"jskirvanem@who.int","gender":"Female","ip_address":"140.231.72.175"},
{"id":24,"first_name":"Ermin","last_name":"Roj","email":"erojn@parallels.com","gender":"Male","ip_address":"241.40.57.236"},
{"id":25,"first_name":"Irina","last_name":"Timbrell","email":"itimbrello@dagondesign.com","gender":"Female","ip_address":"125.184.215.144"},
{"id":26,"first_name":"Jarrad","last_name":"Fessler","email":"jfesslerp@weibo.com","gender":"Male","ip_address":"222.100.166.233"},
{"id":27,"first_name":"Valeria","last_name":"Denington","email":"vdeningtonq@state.gov","gender":"Female","ip_address":"158.103.75.250"},
{"id":28,"first_name":"Thatch","last_name":"Eldershaw","email":"teldershawr@irs.gov","gender":"Male","ip_address":"239.30.111.209"},
{"id":29,"first_name":"Alla","last_name":"Quimby","email":"aquimbys@techcrunch.com","gender":"Non-binary","ip_address":"222.227.156.189"},
{"id":30,"first_name":"Randee","last_name":"Conniam","email":"rconniamt@economist.com","gender":"Agender","ip_address":"9.127.29.189"},
{"id":31,"first_name":"Dorisa","last_name":"Dalla","email":"ddallau@baidu.com","gender":"Female","ip_address":"236.174.189.71"},
{"id":32,"first_name":"Minda","last_name":"Gurys","email":"mgurysv@pinterest.com","gender":"Female","ip_address":"195.230.167.158"},
{"id":33,"first_name":"Gabe","last_name":"Chasle","email":"gchaslew@etsy.com","gender":"Male","ip_address":"69.141.103.74"},
{"id":34,"first_name":"Keven","last_name":"Banbrick","email":"kbanbrickx@irs.gov","gender":"Male","ip_address":"131.82.172.247"},
{"id":35,"first_name":"Freeman","last_name":"Hing","email":"fhingy@i2i.jp","gender":"Male","ip_address":"101.144.56.191"},
{"id":36,"first_name":"Hermy","last_name":"Cassey","email":"hcasseyz@vinaora.com","gender":"Genderfluid","ip_address":"227.164.131.8"},
{"id":37,"first_name":"Kriste","last_name":"Twitching","email":"ktwitching10@oakley.com","gender":"Female","ip_address":"177.155.141.188"},
{"id":38,"first_name":"Clarinda","last_name":"Portwaine","email":"cportwaine11@unicef.org","gender":"Female","ip_address":"139.108.61.185"},
{"id":39,"first_name":"Benedetto","last_name":"Bezants","email":"bbezants12@cpanel.net","gender":"Male","ip_address":"156.93.26.220"},
{"id":40,"first_name":"Collin","last_name":"Ahern","email":"cahern13@mapy.cz","gender":"Male","ip_address":"187.125.54.117"},
{"id":41,"first_name":"Lonnard","last_name":"Yate","email":"lyate14@cpanel.net","gender":"Male","ip_address":"214.215.100.167"},
{"id":42,"first_name":"Goddart","last_name":"Congram","email":"gcongram15@un.org","gender":"Male","ip_address":"163.50.90.247"},
{"id":43,"first_name":"Gardener","last_name":"Heintzsch","email":"gheintzsch16@dot.gov","gender":"Male","ip_address":"21.250.239.26"},
{"id":44,"first_name":"Zelma","last_name":"Wreakes","email":"zwreakes17@engadget.com","gender":"Female","ip_address":"190.21.128.134"},
{"id":45,"first_name":"Cyndia","last_name":"Snap","email":"csnap18@army.mil","gender":"Female","ip_address":"115.222.130.159"},
{"id":46,"first_name":"Mischa","last_name":"Saffin","email":"msaffin19@noaa.gov","gender":"Male","ip_address":"153.193.40.138"},
{"id":47,"first_name":"Cyndie","last_name":"Chatres","email":"cchatres1a@senate.gov","gender":"Female","ip_address":"185.40.184.68"},
{"id":48,"first_name":"Teodora","last_name":"Fosten","email":"tfosten1b@yelp.com","gender":"Female","ip_address":"240.59.40.144"},
{"id":49,"first_name":"Nathalia","last_name":"Colombier","email":"ncolombier1c@slate.com","gender":"Female","ip_address":"197.95.106.154"},
{"id":50,"first_name":"Tonie","last_name":"Zute","email":"tzute1d@tripadvisor.com","gender":"Female","ip_address":"73.119.128.184"}]


//ACTIVIDAD 1
const idIngresado = parseInt(prompt("Ingrese el ID del usuario:"));

let encontrado = false;

for (let i = 0; i < usuarios.length; i++) {
  const user = usuarios[i];

  if (user.id === idIngresado) {
    const msg = `Usuario encontrado: ${user.first_name} ${user.last_name} , Email: ${user.email} , Género: ${user.gender} , IP: ${user.ip_address}`;
    console.log(msg);
    encontrado = true;
  }
}

if (encontrado === false) {
  alert("Usuario no encontrado");
}

//ACTIVIDAD 2
const contarGeneros = {};

for (let i = 0; i < usuarios.length; i++) {
  const user = usuarios[i];
  const genero = user.gender;

  if (contarGeneros[genero]) {
    contarGeneros[genero] = contarGeneros[genero] + 1;
  } else {
    contarGeneros[genero] = 1;
  }
}452

for (const genero in contarGeneros) {
  const msg = `Hay ${contarGeneros[genero]} usuario4 del género ${genero}`;
  console.log(msg);
}