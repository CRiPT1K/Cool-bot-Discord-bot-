var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
var memeList = ['When life gives you lemons make orange juice', 'lol memes', 'r/dank memes',
		'the memes are currently offline, please insert a quarter to continue', 'https://youtu.be/eXBqf4Gfuo0'];
var pastaList = ['(Weird Roblox Desc.) Hello. My life on roblox is all about fun. Im here for my bestfriend.Tiana Shes a diamond. Her name suits her cause shes a princess Shes my life No one can seperate us. Yes we do fight. But it only means we are true bestfriends. I dont care how much you try to seperate us and steal her from me. Beacause ill always protect her. Shes not in the top t e n. Shes in the top o ne :). Shes such a good roleplayer. She understands me. She protects me. She cares about me like I do. Were twins even doe were not the same Thats what we would say. You can do what you want whit your little seperating plans. But it will never work whit me and Tia. I ♥ you Tia :)']
logger.info (memeList)
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '*') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {  
			case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'Commands: *gay , *dab, *meme, *normieMeme'
               });
            break
			
			case 'dab':
                bot.sendMessage({
                    to: channelID,
                    message: '*50 African children just died*'
                });
            break
			
            case 'gay':
                bot.sendMessage({
                    to: channelID,
                    message: 'Rainbows'
                });
            break
			
            case 'meme':
                var memeNum = Math.floor(Math.random()*memeList.length)
			bot.sendMessage({
                	to: channelID,
                	message: memeList[memeNum]
                });
            break
			
            case 'normieMeme':
                bot.sendMessage({
                    to: channelID,
                    message: 'When life gives you lemons, make lemonade'
                });
            break
            
	    case 'copyPasta':
            	var pastaNum = Math.floor(Math.random()*pastaList.length)
	    		bot.sendMessage({
            		to: channelID,
                    	message: pastaList[pastaNum]
                });
            break
         }
     }
});
