// Um Newsletter zu versenden, benötigen wir einige Daten unserer User. Am wichtigsten ist natürlich die Email-Adresse, aber auch Vor- und Nachnamen für die Anrede sollen gespeichert werden. Noch dazu kann jeder User eine Liste mit Interessensgebieten angeben (Musik, IT, Sport...), um spezielle Newsletter zu erhalten.
// 1. Erstelle eine Übersicht mit unseren Usern. Wende hier dein Wissen über Objekte an, um eine möglichst effiziente Datenstruktur zu erreichen.
// 2. Beim Aufruf des Skripts soll eine Ausgabe erzeugt werden, die in etwa so aussieht:
// "Peter Müller ist mit der Adresse petermueller@web.de registriert und erhält Newsletter zu den Themen Sport und Kochen.
// Sarah Schmidt ist mit der Adresse sarah@schmidt.de registriert und erhält Newsletter zu den Themen Musik, IT und Reisen.
// Zusatzaufgaben:
// 3. Berücksichtige den Fall, dass ein User kein Interessensgebiet angegeben hat und formuliere die Ausgabe hierfür passend um.
// 4. Nimm noch ein Registrierungsdatum mit auf und lass es ebenfalls ausgeben ("... ist mit der Adresse x seit y registriert...")

// Raja Underwood,pellentesque.tincidunt.tempus@outlook.org, Musik | IT | Sport,
// Owen Bennett,aliquet@protonmail.net, Programmieren | Nachrichten | Aktien,
// Amery Conway,erat.neque.non@google.ca, Reisen | Festivals,
// Lillian Clay,adipiscing.elit@aol.couk, Autos | IT,
// Nicholas Berg,nullam.feugiat@yahoo.net, Essen

// Loesung

const KundeA = {
    name : "Raja Underwood",
    eMail : "pellentesque.tincidunt.tempus@outlook.org",
    registrierungsdatum : 2002,
    interessensGebieten : "Musik, IT und Sport",
};

const KundeB = {
    name : "Owen Bennett",
    eMail : "aliquet@protonmail.net",
    registrierungsdatum : 2003,
    interessensGebieten : "Programmieren, Nachrichten und Aktien",
};

const KundeC = {
    name : "Amery Conway",
    eMail : "erat.neque.non@google.ca",
    registrierungsdatum : 2010,
    interessensGebieten : "Reisen und Festivals",
}

const KundeD = {
    name : "Lillian Clay",
    eMail : "adipiscing.elit@aol.couk",
    registrierungsdatum : 2012,
    interessensGebieten : "Autos und IT",
}

const KundeE = {
    name : "Nicholas Berg",
    eMail : "nullam.feugiat@yahoo.net",
    registrierungsdatum : 2015,
    interessensGebieten : "Essen",
}

const KundeF = {
    name : "Rahman Ertürk",
    eMail : "abcdefghj@gmail.com",
    registrierungsdatum : 2022,
    interessensGebieten : null,
}

console.log(KundeF.name)

const arr = [KundeA, KundeB, KundeC, KundeD, KundeE, KundeF]
for (let i = 0; i < arr.length; i++) {

    if (arr[i].interessensGebieten === null) {
        console.log(`${arr[i].name} ist mit der Adresse ${arr[i].eMail} seit ${arr[i].registrierungsdatum} registriert und hat keine Interessensgebiete.`);
    } else {
        console.log(`${arr[i].name} ist mit der Adresse ${arr[i].eMail} seit ${arr[i].registrierungsdatum} registriert und erhält Newsletter zu den Themen ${arr[i].interessensGebieten}`);
    }

    console.log("--------------------------------");
}


