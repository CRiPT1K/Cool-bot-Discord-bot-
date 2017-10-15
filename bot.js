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

var pastaList = ["(Weird Roblox Desc.) Hello. My life on roblox is all about fun. Im here for my bestfriend.Tiana Shes a diamond. Her name suits her cause shes a princess Shes my life No one can seperate us. Yes we do fight. But it only means we are true bestfriends. I dont care how much you try to seperate us and steal her from me. Beacause ill always protect her. Shes not in the top t e n. Shes in the top o ne :). Shes such a good roleplayer. She understands me. She protects me. She cares about me like I do. Were twins even doe were not the same Thats what we would say. You can do what you want whit your little seperating plans. But it will never work whit me and Tia. I ♥ you Tia :)", "(from r/fellowkids) lol I was on the internet the other day (my 15 year old son goes on it all the time, and you can connect to other people from anywhere in the world! Aint that hip???) and I came across this one 'meme' that cracked me up! XD Like it was really, really funny. And creative. It had this cat, and the cat had the funniest face I've ever seen lmao! It was smiling and the text said 'I can has cheeseburger?' BUT GUESS WHAT THEY SPELLED CHEESEBURGER WRONG XDXDXD like did they even notice? LOL I've decided to make my own DANK 'MEMES' (btw I did some research, that's what the cool kids call it on the internet!) My favorite kind of 'meme' is the TROLL FACE, which is what people use when they TROLL PEOPLE on the internet! I have no idea what TROLL means but it sounds grumpy! XD I also regularly go on 4cans and I am classified as a 'moot' (I googled it, it means hip and cool person!) so I am basically a 'MEME' MOM, a MOM that makes 'MEMES'. I am the MOM of 'MEMES'. Lmao we should meme together sometime! I may be 40 but I sure know how to 'MEME'! XD"]

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
