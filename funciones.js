const usuarios = [{"id":1,"first_name":"Helena","last_name":"Starr","bank":"GLACIER BANK","city":"La Serena","country":"Chile","salary":6297,"expenses":9089},
{"id":2,"first_name":"Leonanie","last_name":"Skydall","bank":"Swedbank AB","city":"Gandara","country":"Philippines","salary":7648,"expenses":9677},
{"id":3,"first_name":"Fara","last_name":"Esom","bank":"PEOPLES BANK","city":"Moutfort","country":"Luxembourg","salary":3785,"expenses":953},
{"id":4,"first_name":"Raquel","last_name":"Hubble","bank":"FIRST NATIONAL BANK","city":"Ngilengan","country":"Indonesia","salary":8754,"expenses":1017},
{"id":5,"first_name":"Wallis","last_name":"De Paoli","bank":"Santander Bank Polska S.A.","city":"Maxu","country":"China","salary":326,"expenses":8037},
{"id":6,"first_name":"Eulalie","last_name":"Dewar","bank":"FIRSTBANK","city":"Ongandjera","country":"Namibia","salary":4595,"expenses":9393},
{"id":7,"first_name":"Janos","last_name":"Demead","bank":"JPMORGAN CHASE","city":"Hafrsfjord","country":"Norway","salary":1943,"expenses":5280},
{"id":8,"first_name":"Angelico","last_name":"Wardhough","bank":"Wüstenrot Bank AG","city":"Ōzu","country":"Japan","salary":2703,"expenses":3592},
{"id":9,"first_name":"Hazlett","last_name":"Turk","bank":"FIRST STATE BANK","city":"Suqiaoxiang","country":"China","salary":5732,"expenses":636},
{"id":10,"first_name":"Sunny","last_name":"Betteson","bank":"Hauck Aufhäuser Lampe Privatbank AG","city":"Kongjiang","country":"China","salary":3775,"expenses":2317},
{"id":11,"first_name":"Stevana","last_name":"Cotillard","bank":"Raiffeisenbank Oberaudorf eG","city":"Placetas","country":"Cuba","salary":3808,"expenses":4559},
{"id":12,"first_name":"Jim","last_name":"Torbett","bank":"FIRST NATIONAL BANK OF OMAHA","city":"Zavrč","country":"Slovenia","salary":1957,"expenses":5950},
{"id":13,"first_name":"Clayborn","last_name":"Frane","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Zhaodong","country":"China","salary":4368,"expenses":7012},
{"id":14,"first_name":"Dede","last_name":"Wykey","bank":"Banco Mediolanum, S.A.","city":"Bayt Liqyā","country":"Palestinian Territory","salary":7382,"expenses":820},
{"id":15,"first_name":"Haily","last_name":"Greatrex","bank":"UNITED BANK","city":"Xinjian","country":"China","salary":2147,"expenses":9908},
{"id":16,"first_name":"Fionnula","last_name":"Townley","bank":"WELLS FARGO BANK","city":"Jandaia do Sul","country":"Brazil","salary":2687,"expenses":2116},
{"id":17,"first_name":"Anica","last_name":"Maleham","bank":"CENTENNIAL BANK","city":"Caetité","country":"Brazil","salary":6082,"expenses":229},
{"id":18,"first_name":"Amata","last_name":"Armer","bank":"Raiffeisenbank Region Amstetten eGen","city":"Lisków","country":"Poland","salary":1969,"expenses":5905},
{"id":19,"first_name":"Delores","last_name":"Moult","bank":"Bank of Africa Europe, S.A.","city":"Carrigtwohill","country":"Ireland","salary":5854,"expenses":376},
{"id":20,"first_name":"Finley","last_name":"Noyes","bank":"Le Chéile Credit Union Limited","city":"Fuhai","country":"China","salary":8082,"expenses":6788},
{"id":21,"first_name":"Mufi","last_name":"Buncher","bank":"Volksbank im Bergischen Land eG","city":"Sanguanzhai","country":"China","salary":4914,"expenses":8385},
{"id":22,"first_name":"Sadella","last_name":"Honatsch","bank":"FIRST NATIONAL BANK","city":"Memphis","country":"United States","salary":1902,"expenses":7450},
{"id":23,"first_name":"Osbourn","last_name":"Laurand","bank":"CITIZENS BANK","city":"Barão de Cocais","country":"Brazil","salary":3940,"expenses":8581},
{"id":24,"first_name":"Sissie","last_name":"Woodburn","bank":"PROSPERITY BANK","city":"Charlton","country":"United Kingdom","salary":7079,"expenses":4575},
{"id":25,"first_name":"Jinny","last_name":"Kundt","bank":"CITIZENS BANK","city":"Pimian","country":"China","salary":8975,"expenses":3395},
{"id":26,"first_name":"Nevil","last_name":"Casali","bank":"FARMERS BANK","city":"Whakatane","country":"New Zealand","salary":6701,"expenses":4136},
{"id":27,"first_name":"Winny","last_name":"Churm","bank":"FIRST BANK","city":"Dahay","country":"Philippines","salary":3182,"expenses":3074},
{"id":28,"first_name":"Seumas","last_name":"Cox","bank":"Credit suisse bank (Europe), S.A.","city":"Emiliano Zapata","country":"Mexico","salary":4241,"expenses":1016},
{"id":29,"first_name":"Bibi","last_name":"Brougham","bank":"Kasseler Sparkasse","city":"Krajan Timur Mlokorejo","country":"Indonesia","salary":9746,"expenses":6938},
{"id":30,"first_name":"Nil","last_name":"Corrao","bank":"HUNTINGTON NATIONAL BANK","city":"Sambava","country":"Madagascar","salary":4034,"expenses":7868},
{"id":31,"first_name":"Dniren","last_name":"Greenstead","bank":"Black Raven Credit Union Limited","city":"Szczawno-Zdrój","country":"Poland","salary":5679,"expenses":1101},
{"id":32,"first_name":"Gasper","last_name":"Noke","bank":"RAIFFEISENBANK HOHENEMS eGen","city":"Kirove","country":"Ukraine","salary":1704,"expenses":8624},
{"id":33,"first_name":"Angelico","last_name":"Cawsby","bank":"Louvre Banque Privée","city":"Xichang","country":"China","salary":7646,"expenses":3883},
{"id":34,"first_name":"Silas","last_name":"Marsie","bank":"FARMERS STATE BANK","city":"Biao","country":"Philippines","salary":452,"expenses":6201},
{"id":35,"first_name":"Frazer","last_name":"Jeram","bank":"Akademinė kredito unija","city":"Ylitornio","country":"Finland","salary":1724,"expenses":2360},
{"id":36,"first_name":"Felizio","last_name":"Staveley","bank":"Kreissparkasse Gotha","city":"Constance","country":"Portugal","salary":6844,"expenses":3765},
{"id":37,"first_name":"Elroy","last_name":"Carrell","bank":"CITIBANK","city":"Maronge","country":"Indonesia","salary":2430,"expenses":3617},
{"id":38,"first_name":"Marilee","last_name":"Filchagin","bank":"Ennistymon and District Credit Union Limited","city":"Hŭngju-dong","country":"North Korea","salary":7202,"expenses":8613},
{"id":39,"first_name":"Natty","last_name":"Greatrakes","bank":"CITIZENS BANK","city":"Morelos","country":"Mexico","salary":4075,"expenses":7928},
{"id":40,"first_name":"Susy","last_name":"Alvy","bank":"Cara Credit Union Limited","city":"Jinping","country":"China","salary":2824,"expenses":5492},
{"id":41,"first_name":"Dimitry","last_name":"Fontelles","bank":"PSD Bank Nord eG","city":"Benito Juarez","country":"Mexico","salary":4400,"expenses":8608},
{"id":42,"first_name":"Donia","last_name":"Matyas","bank":"Raiffeisen2bank Ems-Vechte eG","city":"Chenda","country":"China","salary":8358,"expenses":9209},
{"id":43,"first_name":"Maye","last_name":"Cockcroft","bank":"BFF BANK SPA","city":"Rosebank","country":"New Zealand","salary":9598,"expenses":5220},
{"id":44,"first_name":"Bidget","last_name":"Hancorn","bank":"CENTRAL BANK","city":"Baruny","country":"Belarus","salary":9973,"expenses":4841},
{"id":45,"first_name":"Lita","last_name":"Bendtsen","bank":"COMMERZBANK Aktiengesellschaft","city":"Nedašov","country":"Czech Republic","salary":6214,"expenses":7528},
{"id":46,"first_name":"Baxy","last_name":"Corneliussen","bank":"Raiffeisenbank Aresing-Gerolsbach eG","city":"Araucária","country":"Brazil","salary":9327,"expenses":2559},
{"id":47,"first_name":"Zia","last_name":"Alleburton","bank":"CFM Indosuez Wealth","city":"Jiazhi","country":"China","salary":7955,"expenses":5983},
{"id":48,"first_name":"Vasili","last_name":"Graine","bank":"Raiffeisen Bank International AG","city":"Patani","country":"Nigeria","salary":8576,"expenses":7741},
{"id":49,"first_name":"Sheilah","last_name":"McKeady","bank":"TD BANK","city":"Sukamulia","country":"Indonesia","salary":5645,"expenses":7055},
{"id":50,"first_name":"Kellia","last_name":"Ludman","bank":"IBERIABANK","city":"Safara","country":"Portugal","salary":322,"expenses":8227}]

function balanceMensual() {
    let id = Number(prompt("Ingrese el id del usuario (1-50):"));
    let usuarioEncontrado = usuarios.find(usuario => usuario.id === id);

    if (usuarioEncontrado) {
        let ahorroMensual = usuarioEncontrado.salary - usuarioEncontrado.expenses;
        return {
            nombre: `${usuarioEncontrado.first_name} ${usuarioEncontrado.last_name}`,
            banco: usuarioEncontrado.bank,
            ahorro: ahorroMensual
        };
    } else {
        return "Usuario no encontrado.";
    }
}
console.log(balanceMensual());

function clasificacionFinanciera() {
    let id = Number(prompt("Ingrese el id del usuario (1-50):"));
    let usuarioEncontrado = usuarios.find(usuario => usuario.id === id);

    if (usuarioEncontrado) {
        let ahorroMensual = usuarioEncontrado.salary - usuarioEncontrado.expenses;
        let clasificacion = (ahorroMensual < 500) ? "Ahorro bajo" :
                            (ahorroMensual <= 1500) ? "Ahorro medio" : "Ahorro alto";
        return {
            nombre: `${usuarioEncontrado.first_name} ${usuarioEncontrado.last_name}`,
            ahorro: ahorroMensual,
            clasificacion: clasificacion
        };
    } else {
        return "Usuario no encontrado.";
    }
}

console.log(clasificacionFinanciera());


function calcularAhorro(usuario) {
    return usuario.salary - usuario.expenses;
}

function agruparPor(array, clave) {
    let resultado = {};

    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        let valorClave = item[clave];

        if (!resultado[valorClave]) {
            resultado[valorClave] = {
                [clave]: valorClave,
                cantidadUsuarios: 0,
                ahorroTotal: 0
            };
        }

        resultado[valorClave].cantidadUsuarios = resultado[valorClave].cantidadUsuarios + 1;
        resultado[valorClave].ahorroTotal = resultado[valorClave].ahorroTotal + calcularAhorro(item);
    }

    return resultado;
}

//ACTIVIDAD 3
console.log("Ahorro por banco:", agruparPor(usuarios, "bank"));
//ACTIVIDAD 4
console.log("Ahorro por país:", agruparPor(usuarios, "country"));