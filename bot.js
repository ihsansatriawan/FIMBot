var config = require('./config')
var yahoo = require('./helpers/yahoo.js');
var starwars = require('starwars');        
var Bot = require('node-telegram-bot-api'),
        bot = new Bot(config.telegramToken, { polling: true });




console.log('bot server started...');

var welcomeWord = "FIMBot adalah suatu mesin yang diciptakan \
  untuk mainan teman-teman FIM di Telegram \n\
  Menerima masukan juga :D \n\n\
  Feel free to add Bot ini ke grup FIM yang kalian punya ya :) \n\n\
  NB : kalau mencari jodoh, jangan tanya ke Bot ya, usaha dong! :p \n\
  Jangan tanya saya siapa, saya adalah sebuah program yang bekerja secara otomatis untuk merespon teman-teman"

bot.onText(/^\/SiapaFIMBot/, function (msg, match) {
  bot.sendMessage(msg.chat.id, welcomeWord).then(function () {
    // reply sent!
  });   

});



var kabar = "FIMBot baik-baik saja, bagaimana kabar teman-teman hari ini ? \n\
  Jangan lupa berdoa dan berusaha yaa :D"

bot.onText(/\/halo (.+)/, function (msg, match) {
  
  var resp = match[1];
  bot.sendMessage(msg.chat.id, resp).then(function () {

  });
});

bot.onText(/^\/apakabarbot/, function (msg, match) {
  bot.sendMessage(msg.chat.id, kabar).then(function () {
    // reply sent!
  });   
});

var listCommands = "List command ny rahasia ya, biar seru surprised gt :D \n\
  Jika ada yg mw request command, silahkan japri aja :D "

bot.onText(/^\/listcommands/, function (msg, match) {
  bot.sendMessage(msg.chat.id, listCommands).then(function () {
    // reply sent!
  });   
});

bot.onText(/^\/FIM18/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Coming soon! Tentukan prospekmu! ').then(function () {
    // reply sent!
  });   
});

var re = new RegExp("sore");

bot.onText(re, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Semoga aktivitas kita hari ini bernilai ibadah :)').then(function () {
    // reply sent!
  });   
});




bot.onText(/^\/salam (.+)$/, function (msg, match) {
 
  if (match[1] == "semua") {
  	bot.sendMessage(msg.chat.id, 'Hai teman-teman FIM Kece,,perkenalkan saya BotKece :D, ada request kah bot ini mau bisa ngapain aja ? :D').then(function () {
    // reply sent!
	  });  	
  } else {
  	var name = match[1];
	  bot.sendMessage(msg.chat.id, 'Hai ' + name + '! Salam Kenal').then(function () {
	    // reply sent!
	  });
  }
});

bot.onText(/^\/jumlah((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].trim().split(/\s+/).forEach(function (i) {
    result += (+i || 0);
  })
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
  });
});

bot.onText(/^\/pagi/, function (msg, match) {
	bot.sendMessage(msg.chat.id, 'Pagi semua nya...semoga hari ini kita semua diberikan kelancaran ya :) ').then(function () {
    // reply sent!
  });  	
});

bot.onText(/^\/kerja/, function (msg, match) {
	bot.sendMessage(msg.chat.id, 'Selamat beraktivitas teman-teman FIM..moga diberi kelancaran :)').then(function () {
    // reply sent!
  });  	
});

bot.onText(/^\/semangat (.+)$/, function (msg, match) {
	var name = match[1];
	bot.sendMessage(msg.chat.id, 'Semangat ' + name + '! Semoga lancar ya :)').then(function () {
	  // reply sent!
	});
});

bot.onText(/^\/kapan/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Disaat yang tepat').then(function () {
    // reply sent!
  });   
});

bot.onText(/^\/nikah/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Nikah ? Saat ijab kabul!').then(function () {
    // reply sent!
  });   
});

bot.onText(/^\/jomblo/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Jomblo itu pilihan!').then(function () {
    // reply sent!
  });   
});

bot.onText(/^\/Skripsi/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Jangan ditunda! Prioritas utama! Orangtua menunggu! Dia juga menunggu :3').then(function () {
    // reply sent!
  });   
});

bot.onText(/^\/Taaruf/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Jodoh pasti bertamu!').then(function () {
    // reply sent!
  });   
});

bot.onText(/^\/Starwars/, function (msg, match) {
  bot.sendMessage(msg.chat.id, starwars()).then(function () {
    // reply sent!
  });   
});


bot.onText(/^\/cuaca (.+)$/, function (msg, match) {
  var location = match[1];

  yahoo.getWeather(location, function weatherCallback(weatherMessage) {
    bot.sendMessage(msg.chat.id, weatherMessage);
  });
});