let string = '"Rol AdÄ±","Sicil NumarasÄ±","AdÄ±","SoyadÄ±","Ä°zin","Kategori AdÄ±"';


let converted = decodeURIComponent(escape(string));
console.log(converted)