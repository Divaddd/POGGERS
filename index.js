const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Pog');
});

client.on('message', message => {
	var message_content = message.content.toLowerCase();
	if (message_content.includes("pick me?")) {
		var face2 = Math.floor(Math.random() * 12);
		if (face2 == 0) {
    			message.channel.send("I, POGGERS, do not concern myself with such trifles");
        	}
    		if (face2 == 1) {
    			message.channel.send("Absolutely");
        	}
		if (face2 == 2) {
    			message.channel.send("Maybe");
        	}
		if (face2 == 3) {
    			message.channel.send("The opposite is true");
        	}
		if (face2 == 4) {
    			message.channel.send("Phrase your quesry with eloquence please!");
        	}
		if (face2 == 5) {
    			message.channel.send("Ask the opposite question");
        	}
		if (face2 == 6) {
    			message.channel.send("Not likely");
        	}
		if (face2 == 7) {
			message.channel.send("Reply hazy, try again");
        	}
		if (face2 == 8) {
    			message.channel.send("Ask again later");
        	}
		if (face2 == 9) {
    			message.channel.send("What was the question?");
        	}
		if (face2 == 10) {
    			message.channel.send("Don't count on it");
        	}
		if (face2 == 11) {
    			message.channel.send("<:BetaBuzz:807778656683425833>");
        	}
	}
	if (message_content.includes("fuck me?")) {
		message.channel.send("<:BetaBuzz:807778656683425833>");
        }
	if (message_content == ("/game mario party")) {
		var face2 = Math.floor(Math.random() * 11);
		if (face2 == 0) {
    			message.channel.send("1");
        	}
    		if (face2 == 1) {
    			message.channel.send("2");
        	}
		if (face2 == 2) {
    			message.channel.send("3");
        	}
		if (face2 == 3) {
    			message.channel.send("4");
        	}
		if (face2 == 4) {
    			message.channel.send("5");
        	}
		if (face2 == 5) {
    			message.channel.send("6");
        	}
		if (face2 == 6) {
    			message.channel.send("7");
        	}
		if (face2 == 7) {
			message.channel.send("8");
        	}
		if (face2 == 8) {
    			message.channel.send("9");
        	}
		if (face2 == 9) {
    			message.channel.send("Island Tour");
        	}
		if (face2 == 10) {
    			message.channel.send("Top 100");
        	}
	}
	if (message_content == ("/seemein mario party")) {
		var face2 = Math.floor(Math.random() * 11);
		if (face2 == 0) {
    			message.channel.send("1");
        	}
    		if (face2 == 1) {
    			message.channel.send("2");
        	}
		if (face2 == 2) {
    			message.channel.send("3");
        	}
		if (face2 == 3) {
    			message.channel.send("4");
        	}
		if (face2 == 4) {
    			message.channel.send("5");
        	}
		if (face2 == 5) {
    			message.channel.send("6");
        	}
		if (face2 == 6) {
    			message.channel.send("7");
        	}
		if (face2 == 7) {
			message.channel.send("8");
        	}
		if (face2 == 8) {
    			message.channel.send("9");
        	}
		if (face2 == 9) {
    			message.channel.send("Island Tour");
        	}
		if (face2 == 10) {
    			message.channel.send("Top 100");
        	}
	}
	if (message_content == ("/seemein mp")) {
		var face2 = Math.floor(Math.random() * 11);
		if (face2 == 0) {
    			message.channel.send("1");
        	}
    		if (face2 == 1) {
    			message.channel.send("2");
        	}
		if (face2 == 2) {
    			message.channel.send("3");
        	}
		if (face2 == 3) {
    			message.channel.send("4");
        	}
		if (face2 == 4) {
    			message.channel.send("5");
        	}
		if (face2 == 5) {
    			message.channel.send("6");
        	}
		if (face2 == 6) {
    			message.channel.send("7");
        	}
		if (face2 == 7) {
			message.channel.send("8");
        	}
		if (face2 == 8) {
    			message.channel.send("9");
        	}
		if (face2 == 9) {
    			message.channel.send("Island Tour");
        	}
		if (face2 == 10) {
    			message.channel.send("Top 100");
        	}
	}
	if (message_content.includes("which mp game should")) {
		var face2 = Math.floor(Math.random() * 11);
		if (face2 == 0) {
    			message.channel.send("1");
        	}
    		if (face2 == 1) {
    			message.channel.send("2");
        	}
		if (face2 == 2) {
    			message.channel.send("3");
        	}
		if (face2 == 3) {
    			message.channel.send("4");
        	}
		if (face2 == 4) {
    			message.channel.send("5");
        	}
		if (face2 == 5) {
    			message.channel.send("6");
        	}
		if (face2 == 6) {
    			message.channel.send("7");
        	}
		if (face2 == 7) {
			message.channel.send("8");
        	}
		if (face2 == 8) {
    			message.channel.send("9");
        	}
		if (face2 == 9) {
    			message.channel.send("Island Tour");
        	}
		if (face2 == 10) {
    			message.channel.send("Top 100");
        	}
	}
	if (message_content.includes("which mario party should")) {
		var face2 = Math.floor(Math.random() * 11);
		if (face2 == 0) {
    			message.channel.send("1");
        	}
    		if (face2 == 1) {
    			message.channel.send("2");
        	}
		if (face2 == 2) {
    			message.channel.send("3");
        	}
		if (face2 == 3) {
    			message.channel.send("4");
        	}
		if (face2 == 4) {
    			message.channel.send("5");
        	}
		if (face2 == 5) {
    			message.channel.send("6");
        	}
		if (face2 == 6) {
    			message.channel.send("7");
        	}
		if (face2 == 7) {
			message.channel.send("8");
        	}
		if (face2 == 8) {
    			message.channel.send("9");
        	}
		if (face2 == 9) {
    			message.channel.send("Island Tour");
        	}
		if (face2 == 10) {
    			message.channel.send("Top 100");
        	}
	}
	if (message_content.includes("what mp game should")) {
		var face2 = Math.floor(Math.random() * 11);
		if (face2 == 0) {
    			message.channel.send("1");
        	}
    		if (face2 == 1) {
    			message.channel.send("2");
        	}
		if (face2 == 2) {
    			message.channel.send("3");
        	}
		if (face2 == 3) {
    			message.channel.send("4");
        	}
		if (face2 == 4) {
    			message.channel.send("5");
        	}
		if (face2 == 5) {
    			message.channel.send("6");
        	}
		if (face2 == 6) {
    			message.channel.send("7");
        	}
		if (face2 == 7) {
			message.channel.send("8");
        	}
		if (face2 == 8) {
    			message.channel.send("9");
        	}
		if (face2 == 9) {
    			message.channel.send("Island Tour");
        	}
		if (face2 == 10) {
    			message.channel.send("Top 100");
        	}
	}
	if (message_content.includes("what mario party should")) {
		var face2 = Math.floor(Math.random() * 11);
		if (face2 == 0) {
    			message.channel.send("1");
        	}
    		if (face2 == 1) {
    			message.channel.send("2");
        	}
		if (face2 == 2) {
    			message.channel.send("3");
        	}
		if (face2 == 3) {
    			message.channel.send("4");
        	}
		if (face2 == 4) {
    			message.channel.send("5");
        	}
		if (face2 == 5) {
    			message.channel.send("6");
        	}
		if (face2 == 6) {
    			message.channel.send("7");
        	}
		if (face2 == 7) {
			message.channel.send("8");
        	}
		if (face2 == 8) {
    			message.channel.send("9");
        	}
		if (face2 == 9) {
    			message.channel.send("Island Tour");
        	}
		if (face2 == 10) {
    			message.channel.send("Top 100");
        	}
	}
	if (message_content == ("/game mp")) {
		var face2 = Math.floor(Math.random() * 11);
		if (face2 == 0) {
    			message.channel.send("1");
        	}
    		if (face2 == 1) {
    			message.channel.send("2");
        	}
		if (face2 == 2) {
    			message.channel.send("3");
        	}
		if (face2 == 3) {
    			message.channel.send("4");
        	}
		if (face2 == 4) {
    			message.channel.send("5");
        	}
		if (face2 == 5) {
    			message.channel.send("6");
        	}
		if (face2 == 6) {
    			message.channel.send("7");
        	}
		if (face2 == 7) {
			message.channel.send("8");
        	}
		if (face2 == 8) {
    			message.channel.send("9");
        	}
		if (face2 == 9) {
    			message.channel.send("Island Tour");
        	}
		if (face2 == 10) {
    			message.channel.send("Top 100");
        	}
	}
	if (message_content == ("/roll")) {
		var face2 = Math.floor(Math.random() * 10);
		if (face2 == 0) {
    			message.channel.send("1");
        	}
    		if (face2 == 1) {
    			message.channel.send("2");
        	}
		if (face2 == 2) {
    			message.channel.send("3");
        	}
		if (face2 == 3) {
    			message.channel.send("4");
        	}
		if (face2 == 4) {
    			message.channel.send("5");
        	}
		if (face2 == 5) {
    			message.channel.send("6");
        	}
		if (face2 == 6) {
    			message.channel.send("7");
        	}
		if (face2 == 7) {
			message.channel.send("8");
        	}
		if (face2 == 8) {
    			message.channel.send("9");
        	}
		if (face2 == 9) {
    			message.channel.send("10");
        	}
	}
	if (message_content == ("/board 1")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.channel.send("DK's Jungle Adventure");
        	}
    		if (face2 == 1) {
    			message.channel.send("Peach's Birthday Cake");
        	}
		if (face2 == 2) {
    			message.channel.send("Yoshi's Tropical Island");
        	}
		if (face2 == 3) {
    			message.channel.send("Wario's Battle Canyon");
        	}
		if (face2 == 4) {
    			message.channel.send("Luigi's Engine Room");
        	}
		if (face2 == 5) {
    			message.channel.send("Mario's Rainbow Castle");
        	}
		if (face2 == 6) {
    			message.channel.send("Bowser's Magma Mountain");
        	}
		if (face2 == 7) {
			message.channel.send("Eternal Star");
        	}
	}
	if (message_content == ("/board 2")) {
		var face2 = Math.floor(Math.random() * 6);
		if (face2 == 0) {
    			message.channel.send("Pirate Land");
        	}
    		if (face2 == 1) {
    			message.channel.send("Western Land");
        	}
		if (face2 == 2) {
    			message.channel.send("Space Land");
        	}
		if (face2 == 3) {
    			message.channel.send("Mystery Land");
        	}
		if (face2 == 4) {
    			message.channel.send("Horror Land");
        	}
		if (face2 == 5) {
    			message.channel.send("Bowser Land");
        	}
	}
	if (message_content == ("/board 3")) {
		var face2 = Math.floor(Math.random() * 6);
		if (face2 == 0) {
    			message.channel.send("Chilly Waters");
        	}
    		if (face2 == 1) {
    			message.channel.send("Deep Bloober Sea");
        	}
		if (face2 == 2) {
    			message.channel.send("Spiny Desert");
        	}
		if (face2 == 3) {
    			message.channel.send("Woody Woods");
        	}
		if (face2 == 4) {
    			message.channel.send("Creepy Cavern");
        	}
		if (face2 == 5) {
    			message.channel.send("Waluigi's Island");
        	}
	}
	if (message_content == ("/board duel")) {
		var face2 = Math.floor(Math.random() * 6);
		if (face2 == 0) {
    			message.channel.send("Gate Guy");
        	}
    		if (face2 == 1) {
    			message.channel.send("Arrowhead");
        	}
		if (face2 == 2) {
    			message.channel.send("Pipesqueak");
        	}
		if (face2 == 3) {
    			message.channel.send("Blowhard");
        	}
		if (face2 == 4) {
    			message.channel.send("Mr. Mover");
        	}
		if (face2 == 5) {
    			message.channel.send("Backtrack");
        	}
	}
	if (message_content == ("/board 3 duel")) {
		var face2 = Math.floor(Math.random() * 6);
		if (face2 == 0) {
    			message.channel.send("Gate Guy");
        	}
    		if (face2 == 1) {
    			message.channel.send("Arrowhead");
        	}
		if (face2 == 2) {
    			message.channel.send("Pipesqueak");
        	}
		if (face2 == 3) {
    			message.channel.send("Blowhard");
        	}
		if (face2 == 4) {
    			message.channel.send("Mr. Mover");
        	}
		if (face2 == 5) {
    			message.channel.send("Backtrack");
        	}
	}
	if (message_content == ("/board 4")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.channel.send("Toad's Midway Madness");
        	}
    		if (face2 == 1) {
    			message.channel.send("Goomba's Greedy Gala");
        	}
		if (face2 == 2) {
    			message.channel.send("Boo's Haunted Bash");
        	}
		if (face2 == 3) {
    			message.channel.send("Koopa's Seaside Soiree");
        	}
		if (face2 == 4) {
    			message.channel.send("Shy Guy's Jungle Jam");
        	}
		if (face2 == 5) {
    			message.channel.send("Bowser's Gnarly Party");
        	}
		if (face2 == 6) {
    			message.channel.send("Mega Board Mayhem (Extra Room)");
        	}
		if (face2 == 7) {
			message.channel.send("Mini Board Mad-Dash (Extra Room)");
        	}
	}
	if (message_content == ("/board 5")) {
		var face2 = Math.floor(Math.random() * 7);
		if (face2 == 0) {
    			message.channel.send("Toy Dream");
        	}
    		if (face2 == 1) {
    			message.channel.send("Rainbow Dream");
        	}
		if (face2 == 2) {
    			message.channel.send("Pirate Dream");
        	}
		if (face2 == 3) {
    			message.channel.send("Undersea Dream");
        	}
		if (face2 == 4) {
    			message.channel.send("Future Dream");
        	}
		if (face2 == 5) {
    			message.channel.send("Sweet Dream");
        	}
		if (face2 == 6) {
    			message.channel.send("Bowser Nightmare");
        	}
	}
	if (message_content == ("/board 6")) {
		var face2 = Math.floor(Math.random() * 6);
		if (face2 == 0) {
    			message.channel.send("Towering Treetop");
        	}
    		if (face2 == 1) {
    			message.channel.send("E. Gadd's Garage");
        	}
		if (face2 == 2) {
    			message.channel.send("Faire Square");
        	}
		if (face2 == 3) {
    			message.channel.send("Snowflake Lake");
        	}
		if (face2 == 4) {
    			message.channel.send("Castaway Bay");
        	}
		if (face2 == 5) {
    			message.channel.send("Clockwork Castle");
        	}
	}
	if (message_content == ("/board 7")) {
		var face2 = Math.floor(Math.random() * 6);
		if (face2 == 0) {
    			message.channel.send("Grand Canal");
        	}
    		if (face2 == 1) {
    			message.channel.send("Pagoda Peak");
        	}
		if (face2 == 2) {
    			message.channel.send("Pyramid Park");
        	}
		if (face2 == 3) {
    			message.channel.send("Neon Heights");
        	}
		if (face2 == 4) {
    			message.channel.send("Windmillville");
        	}
		if (face2 == 5) {
    			message.channel.send("Bowser's Enchanted Inferno!");
        	}
	}
	if (message_content == ("/board 8")) {
		var face2 = Math.floor(Math.random() * 6);
		if (face2 == 0) {
    			message.channel.send("DK's Treetop Temple");
        	}
    		if (face2 == 1) {
    			message.channel.send("Goomba's Booty Boardwalk");
        	}
		if (face2 == 2) {
    			message.channel.send("King Boo's Haunted Hideaway");
        	}
		if (face2 == 3) {
    			message.channel.send("Shy Guy's Perplex Express");
        	}
		if (face2 == 4) {
    			message.channel.send("Koopa's Tycoon Town");
        	}
		if (face2 == 5) {
    			message.channel.send("Bowser's Warped Orbit");
        	}
	}
	if (message_content == ("/board ds")) {
		var face2 = Math.floor(Math.random() * 5);
		if (face2 == 0) {
    			message.channel.send("Wiggler's Garden");
        	}
    		if (face2 == 1) {
    			message.channel.send("Toadette's Music Room");
        	}
		if (face2 == 2) {
    			message.channel.send("DK's Stone Statue");
        	}
		if (face2 == 3) {
    			message.channel.send("Kamek's Library");
        	}
		if (face2 == 4) {
    			message.channel.send("Bowser's Pinball Machine");
        	}
	}
	if (message_content == ("/board 9")) {
		var face2 = Math.floor(Math.random() * 7);
		if (face2 == 0) {
    			message.channel.send("Toad Road");
        	}
    		if (face2 == 1) {
    			message.channel.send("Bob-omb Factory");
        	}
		if (face2 == 2) {
    			message.channel.send("Boo's Horror Castle");
        	}
		if (face2 == 3) {
    			message.channel.send("Blooper Beach");
        	}
		if (face2 == 4) {
    			message.channel.send("Magma Mine");
        	}
		if (face2 == 5) {
    			message.channel.send("Bowser Station");
        	}
		if (face2 == 6) {
    			message.channel.send("DK's Jungle Ruins");
        	}
	}
	if (message_content == ("/board it")) {
		var face2 = Math.floor(Math.random() * 7);
		if (face2 == 0) {
    			message.channel.send("Perilous Palace Path");
        	}
    		if (face2 == 1) {
    			message.channel.send("Rocket Road");
        	}
		if (face2 == 2) {
    			message.channel.send("Shy Guy's Shuffle City");
        	}
		if (face2 == 3) {
    			message.channel.send("Banzai Bill's Mad Mountain");
        	}
		if (face2 == 4) {
    			message.channel.send("Star-Crossed Skyway");
        	}
		if (face2 == 5) {
    			message.channel.send("Kamek's Carpet Ride");
        	}
		if (face2 == 6) {
    			message.channel.send("Bowser's Peculiar Peak");
        	}
	}
	if (message_content == ("/board island tour")) {
		var face2 = Math.floor(Math.random() * 7);
		if (face2 == 0) {
    			message.channel.send("Perilous Palace Path");
        	}
    		if (face2 == 1) {
    			message.channel.send("Rocket Road");
        	}
		if (face2 == 2) {
    			message.channel.send("Shy Guy's Shuffle City");
        	}
		if (face2 == 3) {
    			message.channel.send("Banzai Bill's Mad Mountain");
        	}
		if (face2 == 4) {
    			message.channel.send("Star-Crossed Skyway");
        	}
		if (face2 == 5) {
    			message.channel.send("Kamek's Carpet Ride");
        	}
		if (face2 == 6) {
    			message.channel.send("Bowser's Peculiar Peak");
        	}
	}
	if (message_content == ("/board 3ds")) {
		var face2 = Math.floor(Math.random() * 11);
		if (face2 == 0) {
    			message.channel.send("Perilous Palace Path");
        	}
    		if (face2 == 1) {
    			message.channel.send("Rocket Road");
        	}
		if (face2 == 2) {
    			message.channel.send("Shy Guy's Shuffle City");
        	}
		if (face2 == 3) {
    			message.channel.send("Banzai Bill's Mad Mountain");
        	}
		if (face2 == 4) {
    			message.channel.send("Star-Crossed Skyway");
        	}
		if (face2 == 5) {
    			message.channel.send("Kamek's Carpet Ride");
        	}
		if (face2 == 6) {
    			message.channel.send("Bowser's Peculiar Peak");
        	}
		if (face2 == 7) {
    			message.channel.send("Toad Scramble");
        	}
    		if (face2 == 8) {
    			message.channel.send("Coinathlon");
        	}
		if (face2 == 9) {
    			message.channel.send("Balloon Bash");
        	}
		if (face2 == 10) {
    			message.channel.send("Minigame Match (Top 100)");
        	}
	}
	if (message_content == ("/board star rush")) {
		var face2 = Math.floor(Math.random() * 3);
		if (face2 == 0) {
    			message.channel.send("Toad Scramble");
        	}
    		if (face2 == 1) {
    			message.channel.send("Coinathlon");
        	}
		if (face2 == 2) {
    			message.channel.send("Balloon Bash");
        	}
	}
	if (message_content == ("/board sr")) {
		var face2 = Math.floor(Math.random() * 3);
		if (face2 == 0) {
    			message.channel.send("Toad Scramble");
        	}
    		if (face2 == 1) {
    			message.channel.send("Coinathlon");
        	}
		if (face2 == 2) {
    			message.channel.send("Balloon Bash");
        	}
	}
	if (message_content == ("/board 10")) {
		var face2 = Math.floor(Math.random() * 5);
		if (face2 == 0) {
    			message.channel.send("Mushroom Park");
        	}
    		if (face2 == 1) {
    			message.channel.send("Haunted Trail");
        	}
		if (face2 == 2) {
    			message.channel.send("Whimsical Waters");
        	}
		if (face2 == 3) {
    			message.channel.send("Airship Central");
        	}
		if (face2 == 4) {
    			message.channel.send("Chaos Castle");
        	}
	}
	if (message_content == ("/board wii u")) {
		var face2 = Math.floor(Math.random() * 5);
		if (face2 == 0) {
    			message.channel.send("Mushroom Park");
        	}
    		if (face2 == 1) {
    			message.channel.send("Haunted Trail");
        	}
		if (face2 == 2) {
    			message.channel.send("Whimsical Waters");
        	}
		if (face2 == 3) {
    			message.channel.send("Airship Central");
        	}
		if (face2 == 4) {
    			message.channel.send("Chaos Castle");
        	}
	}
	if (message_content == ("/board smp")) {
		var face2 = Math.floor(Math.random() * 4);
		if (face2 == 0) {
    			message.channel.send("Whomp's Domino Ruins");
        	}
    		if (face2 == 1) {
    			message.channel.send("King Bob-omb's Powderkeg Mine");
        	}
		if (face2 == 2) {
    			message.channel.send("Megafruit Paradise");
        	}
		if (face2 == 3) {
    			message.channel.send("Kamek's Tantalizing Tower");
        	}
	}
	if (message_content == ("/board switch")) {
		var face2 = Math.floor(Math.random() * 4);
		if (face2 == 0) {
    			message.channel.send("Whomp's Domino Ruins");
        	}
    		if (face2 == 1) {
    			message.channel.send("King Bob-omb's Powderkeg Mine");
        	}
		if (face2 == 2) {
    			message.channel.send("Megafruit Paradise");
        	}
		if (face2 == 3) {
    			message.channel.send("Kamek's Tantalizing Tower");
        	}
	}
	if (message_content == ("/board 11")) {
		var face2 = Math.floor(Math.random() * 4);
		if (face2 == 0) {
    			message.channel.send("Whomp's Domino Ruins");
        	}
    		if (face2 == 1) {
    			message.channel.send("King Bob-omb's Powderkeg Mine");
        	}
		if (face2 == 2) {
    			message.channel.send("Megafruit Paradise");
        	}
		if (face2 == 3) {
    			message.channel.send("Kamek's Tantalizing Tower");
        	}
	}
	if (message_content == ("/board super")) {
		var face2 = Math.floor(Math.random() * 4);
		if (face2 == 0) {
    			message.channel.send("Whomp's Domino Ruins");
        	}
    		if (face2 == 1) {
    			message.channel.send("King Bob-omb's Powderkeg Mine");
        	}
		if (face2 == 2) {
    			message.channel.send("Megafruit Paradise");
        	}
		if (face2 == 3) {
    			message.channel.send("Kamek's Tantalizing Tower");
        	}
	}
	if (message_content == ("/board 64")) {
		var face2 = Math.floor(Math.random() * 26);
		if (face2 == 0) {
    			message.channel.send("DK's Jungle Adventure");
        	}
    		if (face2 == 1) {
    			message.channel.send("Peach's Birthday Cake");
        	}
		if (face2 == 2) {
    			message.channel.send("Yoshi's Tropical Island");
        	}
		if (face2 == 3) {
    			message.channel.send("Wario's Battle Canyon");
        	}
		if (face2 == 4) {
    			message.channel.send("Luigi's Engine Room");
        	}
		if (face2 == 5) {
    			message.channel.send("Mario's Rainbow Castle");
        	}
		if (face2 == 6) {
    			message.channel.send("Bowser's Magma Mountain");
        	}
		if (face2 == 7) {
			message.channel.send("Eternal Star");
        	}
		if (face2 == 8) {
    			message.channel.send("Pirate Land");
        	}
    		if (face2 == 9) {
    			message.channel.send("Western Land");
        	}
		if (face2 == 10) {
    			message.channel.send("Space Land");
        	}
		if (face2 == 11) {
    			message.channel.send("Mystery Land");
        	}
		if (face2 == 12) {
    			message.channel.send("Horror Land");
        	}
		if (face2 == 13) {
    			message.channel.send("Bowser Land");
        	}
		if (face2 == 14) {
    			message.channel.send("Chilly Waters");
        	}
    		if (face2 == 15) {
    			message.channel.send("Deep Bloober Sea");
        	}
		if (face2 == 16) {
    			message.channel.send("Spiny Desert");
        	}
		if (face2 == 17) {
    			message.channel.send("Woody Woods");
        	}
		if (face2 == 18) {
    			message.channel.send("Creepy Cavern");
        	}
		if (face2 == 19) {
    			message.channel.send("Waluigi's Island");
        	}
		if (face2 == 20) {
    			message.channel.send("Gate Guy");
        	}
    		if (face2 == 21) {
    			message.channel.send("Arrowhead");
        	}
		if (face2 == 22) {
    			message.channel.send("Pipesqueak");
        	}
		if (face2 == 23) {
    			message.channel.send("Blowhard");
        	}
		if (face2 == 24) {
    			message.channel.send("Mr. Mover");
        	}
		if (face2 == 25) {
    			message.channel.send("Backtrack");
        	}
	}
	if (message_content == ("/board n64")) {
		var face2 = Math.floor(Math.random() * 26);
		if (face2 == 0) {
    			message.channel.send("DK's Jungle Adventure");
        	}
    		if (face2 == 1) {
    			message.channel.send("Peach's Birthday Cake");
        	}
		if (face2 == 2) {
    			message.channel.send("Yoshi's Tropical Island");
        	}
		if (face2 == 3) {
    			message.channel.send("Wario's Battle Canyon");
        	}
		if (face2 == 4) {
    			message.channel.send("Luigi's Engine Room");
        	}
		if (face2 == 5) {
    			message.channel.send("Mario's Rainbow Castle");
        	}
		if (face2 == 6) {
    			message.channel.send("Bowser's Magma Mountain");
        	}
		if (face2 == 7) {
			message.channel.send("Eternal Star");
        	}
		if (face2 == 8) {
    			message.channel.send("Pirate Land");
        	}
    		if (face2 == 9) {
    			message.channel.send("Western Land");
        	}
		if (face2 == 10) {
    			message.channel.send("Space Land");
        	}
		if (face2 == 11) {
    			message.channel.send("Mystery Land");
        	}
		if (face2 == 12) {
    			message.channel.send("Horror Land");
        	}
		if (face2 == 13) {
    			message.channel.send("Bowser Land");
        	}
		if (face2 == 14) {
    			message.channel.send("Chilly Waters");
        	}
    		if (face2 == 15) {
    			message.channel.send("Deep Bloober Sea");
        	}
		if (face2 == 16) {
    			message.channel.send("Spiny Desert");
        	}
		if (face2 == 17) {
    			message.channel.send("Woody Woods");
        	}
		if (face2 == 18) {
    			message.channel.send("Creepy Cavern");
        	}
		if (face2 == 19) {
    			message.channel.send("Waluigi's Island");
        	}
		if (face2 == 20) {
    			message.channel.send("Gate Guy");
        	}
    		if (face2 == 21) {
    			message.channel.send("Arrowhead");
        	}
		if (face2 == 22) {
    			message.channel.send("Pipesqueak");
        	}
		if (face2 == 23) {
    			message.channel.send("Blowhard");
        	}
		if (face2 == 24) {
    			message.channel.send("Mr. Mover");
        	}
		if (face2 == 25) {
    			message.channel.send("Backtrack");
        	}
	}
	if (message_content == ("/board gc")) {
		var face2 = Math.floor(Math.random() * 27);
		if (face2 == 0) {
    			message.channel.send("Toad's Midway Madness");
        	}
    		if (face2 == 1) {
    			message.channel.send("Goomba's Greedy Gala");
        	}
		if (face2 == 2) {
    			message.channel.send("Boo's Haunted Bash");
        	}
		if (face2 == 3) {
    			message.channel.send("Koopa's Seaside Soiree");
        	}
		if (face2 == 4) {
    			message.channel.send("Shy Guy's Jungle Jam");
        	}
		if (face2 == 5) {
    			message.channel.send("Bowser's Gnarly Party");
        	}
		if (face2 == 6) {
    			message.channel.send("Mega Board Mayhem (Extra Room)");
        	}
		if (face2 == 7) {
			message.channel.send("Mini Board Mad-Dash (Extra Room)");
        	}
		if (face2 == 8) {
    			message.channel.send("Toy Dream");
        	}
    		if (face2 == 9) {
    			message.channel.send("Rainbow Dream");
        	}
		if (face2 == 10) {
    			message.channel.send("Pirate Dream");
        	}
		if (face2 == 11) {
    			message.channel.send("Undersea Dream");
        	}
		if (face2 == 12) {
    			message.channel.send("Future Dream");
        	}
		if (face2 == 13) {
    			message.channel.send("Sweet Dream");
        	}
		if (face2 == 14) {
    			message.channel.send("Bowser Nightmare");
        	}
		if (face2 == 15) {
    			message.channel.send("Towering Treetop");
        	}
    		if (face2 == 16) {
    			message.channel.send("E. Gadd's Garage");
        	}
		if (face2 == 17) {
    			message.channel.send("Faire Square");
        	}
		if (face2 == 18) {
    			message.channel.send("Snowflake Lake");
        	}
		if (face2 == 19) {
    			message.channel.send("Castaway Bay");
        	}
		if (face2 == 20) {
    			message.channel.send("Clockwork Castle");
        	}
		if (face2 == 21) {
    			message.channel.send("Grand Canal");
        	}
    		if (face2 == 22) {
    			message.channel.send("Pagoda Peak");
        	}
		if (face2 == 23) {
    			message.channel.send("Pyramid Park");
        	}
		if (face2 == 24) {
    			message.channel.send("Neon Heights");
        	}
		if (face2 == 25) {
    			message.channel.send("Windmillville");
        	}
		if (face2 == 26) {
    			message.channel.send("Bowser's Enchanted Inferno!");
        	}
	}
	if (message_content == ("/board gcn")) {
		var face2 = Math.floor(Math.random() * 27);
		if (face2 == 0) {
    			message.channel.send("Toad's Midway Madness");
        	}
    		if (face2 == 1) {
    			message.channel.send("Goomba's Greedy Gala");
        	}
		if (face2 == 2) {
    			message.channel.send("Boo's Haunted Bash");
        	}
		if (face2 == 3) {
    			message.channel.send("Koopa's Seaside Soiree");
        	}
		if (face2 == 4) {
    			message.channel.send("Shy Guy's Jungle Jam");
        	}
		if (face2 == 5) {
    			message.channel.send("Bowser's Gnarly Party");
        	}
		if (face2 == 6) {
    			message.channel.send("Mega Board Mayhem (Extra Room)");
        	}
		if (face2 == 7) {
			message.channel.send("Mini Board Mad-Dash (Extra Room)");
        	}
		if (face2 == 8) {
    			message.channel.send("Toy Dream");
        	}
    		if (face2 == 9) {
    			message.channel.send("Rainbow Dream");
        	}
		if (face2 == 10) {
    			message.channel.send("Pirate Dream");
        	}
		if (face2 == 11) {
    			message.channel.send("Undersea Dream");
        	}
		if (face2 == 12) {
    			message.channel.send("Future Dream");
        	}
		if (face2 == 13) {
    			message.channel.send("Sweet Dream");
        	}
		if (face2 == 14) {
    			message.channel.send("Bowser Nightmare");
        	}
		if (face2 == 15) {
    			message.channel.send("Towering Treetop");
        	}
    		if (face2 == 16) {
    			message.channel.send("E. Gadd's Garage");
        	}
		if (face2 == 17) {
    			message.channel.send("Faire Square");
        	}
		if (face2 == 18) {
    			message.channel.send("Snowflake Lake");
        	}
		if (face2 == 19) {
    			message.channel.send("Castaway Bay");
        	}
		if (face2 == 20) {
    			message.channel.send("Clockwork Castle");
        	}
		if (face2 == 21) {
    			message.channel.send("Grand Canal");
        	}
    		if (face2 == 22) {
    			message.channel.send("Pagoda Peak");
        	}
		if (face2 == 23) {
    			message.channel.send("Pyramid Park");
        	}
		if (face2 == 24) {
    			message.channel.send("Neon Heights");
        	}
		if (face2 == 25) {
    			message.channel.send("Windmillville");
        	}
		if (face2 == 26) {
    			message.channel.send("Bowser's Enchanted Inferno!");
        	}
	}
	if (message_content == ("/board gamecube")) {
		var face2 = Math.floor(Math.random() * 27);
		if (face2 == 0) {
    			message.channel.send("Toad's Midway Madness");
        	}
    		if (face2 == 1) {
    			message.channel.send("Goomba's Greedy Gala");
        	}
		if (face2 == 2) {
    			message.channel.send("Boo's Haunted Bash");
        	}
		if (face2 == 3) {
    			message.channel.send("Koopa's Seaside Soiree");
        	}
		if (face2 == 4) {
    			message.channel.send("Shy Guy's Jungle Jam");
        	}
		if (face2 == 5) {
    			message.channel.send("Bowser's Gnarly Party");
        	}
		if (face2 == 6) {
    			message.channel.send("Mega Board Mayhem (Extra Room)");
        	}
		if (face2 == 7) {
			message.channel.send("Mini Board Mad-Dash (Extra Room)");
        	}
		if (face2 == 8) {
    			message.channel.send("Toy Dream");
        	}
    		if (face2 == 9) {
    			message.channel.send("Rainbow Dream");
        	}
		if (face2 == 10) {
    			message.channel.send("Pirate Dream");
        	}
		if (face2 == 11) {
    			message.channel.send("Undersea Dream");
        	}
		if (face2 == 12) {
    			message.channel.send("Future Dream");
        	}
		if (face2 == 13) {
    			message.channel.send("Sweet Dream");
        	}
		if (face2 == 14) {
    			message.channel.send("Bowser Nightmare");
        	}
		if (face2 == 15) {
    			message.channel.send("Towering Treetop");
        	}
    		if (face2 == 16) {
    			message.channel.send("E. Gadd's Garage");
        	}
		if (face2 == 17) {
    			message.channel.send("Faire Square");
        	}
		if (face2 == 18) {
    			message.channel.send("Snowflake Lake");
        	}
		if (face2 == 19) {
    			message.channel.send("Castaway Bay");
        	}
		if (face2 == 20) {
    			message.channel.send("Clockwork Castle");
        	}
		if (face2 == 21) {
    			message.channel.send("Grand Canal");
        	}
    		if (face2 == 22) {
    			message.channel.send("Pagoda Peak");
        	}
		if (face2 == 23) {
    			message.channel.send("Pyramid Park");
        	}
		if (face2 == 24) {
    			message.channel.send("Neon Heights");
        	}
		if (face2 == 25) {
    			message.channel.send("Windmillville");
        	}
		if (face2 == 26) {
    			message.channel.send("Bowser's Enchanted Inferno!");
        	}
	}
	if (message_content == ("/board wii")) {
		var face2 = Math.floor(Math.random() * 13);
		if (face2 == 0) {
    			message.channel.send("DK's Treetop Temple");
        	}
    		if (face2 == 1) {
    			message.channel.send("Goomba's Booty Boardwalk");
        	}
		if (face2 == 2) {
    			message.channel.send("King Boo's Haunted Hideaway");
        	}
		if (face2 == 3) {
    			message.channel.send("Shy Guy's Perplex Express");
        	}
		if (face2 == 4) {
    			message.channel.send("Koopa's Tycoon Town");
        	}
		if (face2 == 5) {
    			message.channel.send("Bowser's Warped Orbit");
        	}
		if (face2 == 6) {
    			message.channel.send("Toad Road");
        	}
    		if (face2 == 7) {
    			message.channel.send("Bob-omb Factory");
        	}
		if (face2 == 8) {
    			message.channel.send("Boo's Horror Castle");
        	}
		if (face2 == 9) {
    			message.channel.send("Blooper Beach");
        	}
		if (face2 == 10) {
    			message.channel.send("Magma Mine");
        	}
		if (face2 == 11) {
    			message.channel.send("Bowser Station");
        	}
		if (face2 == 12) {
    			message.channel.send("DK's Jungle Ruins");
        	}
	}
	if (message_content == ("/board")) {
		var face2 = Math.floor(Math.random() * 99);
		if (face2 == 0) {
    			message.channel.send("DK's Jungle Adventure");
        	}
    		if (face2 == 1) {
    			message.channel.send("Peach's Birthday Cake");
        	}
		if (face2 == 2) {
    			message.channel.send("Yoshi's Tropical Island");
        	}
		if (face2 == 3) {
    			message.channel.send("Wario's Battle Canyon");
        	}
		if (face2 == 4) {
    			message.channel.send("Luigi's Engine Room");
        	}
		if (face2 == 5) {
    			message.channel.send("Mario's Rainbow Castle");
        	}
		if (face2 == 6) {
    			message.channel.send("Bowser's Magma Mountain");
        	}
		if (face2 == 7) {
			message.channel.send("Eternal Star");
        	}
		if (face2 == 8) {
    			message.channel.send("Pirate Land");
        	}
    		if (face2 == 9) {
    			message.channel.send("Western Land");
        	}
		if (face2 == 10) {
    			message.channel.send("Space Land");
        	}
		if (face2 == 11) {
    			message.channel.send("Mystery Land");
        	}
		if (face2 == 12) {
    			message.channel.send("Horror Land");
        	}
		if (face2 == 13) {
    			message.channel.send("Bowser Land");
        	}
		if (face2 == 14) {
    			message.channel.send("Chilly Waters");
        	}
    		if (face2 == 15) {
    			message.channel.send("Deep Bloober Sea");
        	}
		if (face2 == 16) {
    			message.channel.send("Spiny Desert");
        	}
		if (face2 == 17) {
    			message.channel.send("Woody Woods");
        	}
		if (face2 == 18) {
    			message.channel.send("Creepy Cavern");
        	}
		if (face2 == 19) {
    			message.channel.send("Waluigi's Island");
        	}
		if (face2 == 20) {
    			message.channel.send("Gate Guy");
        	}
    		if (face2 == 21) {
    			message.channel.send("Arrowhead");
        	}
		if (face2 == 22) {
    			message.channel.send("Pipesqueak");
        	}
		if (face2 == 23) {
    			message.channel.send("Blowhard");
        	}
		if (face2 == 24) {
    			message.channel.send("Mr. Mover");
        	}
		if (face2 == 25) {
    			message.channel.send("Backtrack");
        	}
		if (face2 == 26) {
    			message.channel.send("Toad's Midway Madness");
        	}
    		if (face2 == 27) {
    			message.channel.send("Goomba's Greedy Gala");
        	}
		if (face2 == 28) {
    			message.channel.send("Boo's Haunted Bash");
        	}
		if (face2 == 29) {
    			message.channel.send("Koopa's Seaside Soiree");
        	}
		if (face2 == 30) {
    			message.channel.send("Shy Guy's Jungle Jam");
        	}
		if (face2 == 31) {
    			message.channel.send("Bowser's Gnarly Party");
        	}
		if (face2 == 32) {
    			message.channel.send("Mega Board Mayhem (Extra Room)");
        	}
		if (face2 == 33) {
			message.channel.send("Mini Board Mad-Dash (Extra Room)");
        	}
		if (face2 == 34) {
    			message.channel.send("Toy Dream");
        	}
    		if (face2 == 35) {
    			message.channel.send("Rainbow Dream");
        	}
		if (face2 == 36) {
    			message.channel.send("Pirate Dream");
        	}
		if (face2 == 37) {
    			message.channel.send("Undersea Dream");
        	}
		if (face2 == 38) {
    			message.channel.send("Future Dream");
        	}
		if (face2 == 39) {
    			message.channel.send("Sweet Dream");
        	}
		if (face2 == 40) {
    			message.channel.send("Bowser Nightmare");
        	}
		if (face2 == 41) {
    			message.channel.send("Towering Treetop");
        	}
    		if (face2 == 42) {
    			message.channel.send("E. Gadd's Garage");
        	}
		if (face2 == 43) {
    			message.channel.send("Faire Square");
        	}
		if (face2 == 44) {
    			message.channel.send("Snowflake Lake");
        	}
		if (face2 == 45) {
    			message.channel.send("Castaway Bay");
        	}
		if (face2 == 46) {
    			message.channel.send("Clockwork Castle");
        	}
		if (face2 == 47) {
    			message.channel.send("Bonus Board (Advance)");
        	}
		if (face2 == 48) {
    			message.channel.send("Grand Canal");
        	}
    		if (face2 == 49) {
    			message.channel.send("Pagoda Peak");
        	}
		if (face2 == 50) {
    			message.channel.send("Pyramid Park");
        	}
		if (face2 == 51) {
    			message.channel.send("Neon Heights");
        	}
		if (face2 == 52) {
    			message.channel.send("Windmillville");
        	}
		if (face2 == 53) {
    			message.channel.send("Bowser's Enchanted Inferno!");
        	}
		if (face2 == 54) {
    			message.channel.send("DK's Treetop Temple");
        	}
    		if (face2 == 55) {
    			message.channel.send("Goomba's Booty Boardwalk");
        	}
		if (face2 == 56) {
    			message.channel.send("King Boo's Haunted Hideaway");
        	}
		if (face2 == 57) {
    			message.channel.send("Shy Guy's Perplex Express");
        	}
		if (face2 == 58) {
    			message.channel.send("Koopa's Tycoon Town");
        	}
		if (face2 == 59) {
    			message.channel.send("Bowser's Warped Orbit");
        	}
		if (face2 == 60) {
    			message.channel.send("Wiggler's Garden");
        	}
    		if (face2 == 61) {
    			message.channel.send("Toadette's Music Room");
        	}
		if (face2 == 62) {
    			message.channel.send("DK's Stone Statue");
        	}
		if (face2 == 63) {
    			message.channel.send("Kamek's Library");
        	}
		if (face2 == 64) {
    			message.channel.send("Bowser's Pinball Machine");
        	}
		if (face2 == 65) {
    			message.channel.send("Toad Road");
        	}
    		if (face2 == 66) {
    			message.channel.send("Bob-omb Factory");
        	}
		if (face2 == 67) {
    			message.channel.send("Boo's Horror Castle");
        	}
		if (face2 == 68) {
    			message.channel.send("Blooper Beach");
        	}
		if (face2 == 69) {
    			message.channel.send("Magma Mine");
        	}
		if (face2 == 70) {
    			message.channel.send("Bowser Station");
        	}
		if (face2 == 71) {
    			message.channel.send("DK's Jungle Ruins");
        	}
		if (face2 == 72) {
    			message.channel.send("Perilous Palace Path");
        	}
    		if (face2 == 73) {
    			message.channel.send("Rocket Road");
        	}
		if (face2 == 74) {
    			message.channel.send("Shy Guy's Shuffle City");
        	}
		if (face2 == 75) {
    			message.channel.send("Banzai Bill's Mad Mountain");
        	}
		if (face2 == 76) {
    			message.channel.send("Star-Crossed Skyway");
        	}
		if (face2 == 77) {
    			message.channel.send("Kamek's Carpet Ride");
        	}
		if (face2 == 78) {
    			message.channel.send("Bowser's Peculiar Peak");
        	}
		if (face2 == 79) {
    			message.channel.send("Perilous Palace Path");
        	}
    		if (face2 == 80) {
    			message.channel.send("Rocket Road");
        	}
		if (face2 == 81) {
    			message.channel.send("Shy Guy's Shuffle City");
        	}
		if (face2 == 82) {
    			message.channel.send("Banzai Bill's Mad Mountain");
        	}
		if (face2 == 83) {
    			message.channel.send("Star-Crossed Skyway");
        	}
		if (face2 == 84) {
    			message.channel.send("Kamek's Carpet Ride");
        	}
		if (face2 == 85) {
    			message.channel.send("Bowser's Peculiar Peak");
        	}
		if (face2 == 86) {
    			message.channel.send("Mushroom Park");
        	}
    		if (face2 == 87) {
    			message.channel.send("Haunted Trail");
        	}
		if (face2 == 88) {
    			message.channel.send("Whimsical Waters");
        	}
		if (face2 == 89) {
    			message.channel.send("Airship Central");
        	}
		if (face2 == 90) {
    			message.channel.send("Chaos Castle");
        	}
		if (face2 == 91) {
    			message.channel.send("Toad Scramble");
        	}
    		if (face2 == 92) {
    			message.channel.send("Coinathlon");
        	}
		if (face2 == 93) {
    			message.channel.send("Balloon Bash");
        	}
		if (face2 == 94) {
    			message.channel.send("Minigame Match (Top 100)");
        	}
		if (face2 == 95) {
    			message.channel.send("Whomp's Domino Ruins");
        	}
    		if (face2 == 96) {
    			message.channel.send("King Bob-omb's Powderkeg Mine");
        	}
		if (face2 == 97) {
    			message.channel.send("Megafruit Paradise");
        	}
		if (face2 == 98) {
    			message.channel.send("Kamek's Tantalizing Tower");
        	}
	}
	if (message_content == ("/board any")) {
		var face2 = Math.floor(Math.random() * 99);
		if (face2 == 0) {
    			message.channel.send("DK's Jungle Adventure");
        	}
    		if (face2 == 1) {
    			message.channel.send("Peach's Birthday Cake");
        	}
		if (face2 == 2) {
    			message.channel.send("Yoshi's Tropical Island");
        	}
		if (face2 == 3) {
    			message.channel.send("Wario's Battle Canyon");
        	}
		if (face2 == 4) {
    			message.channel.send("Luigi's Engine Room");
        	}
		if (face2 == 5) {
    			message.channel.send("Mario's Rainbow Castle");
        	}
		if (face2 == 6) {
    			message.channel.send("Bowser's Magma Mountain");
        	}
		if (face2 == 7) {
			message.channel.send("Eternal Star");
        	}
		if (face2 == 8) {
    			message.channel.send("Pirate Land");
        	}
    		if (face2 == 9) {
    			message.channel.send("Western Land");
        	}
		if (face2 == 10) {
    			message.channel.send("Space Land");
        	}
		if (face2 == 11) {
    			message.channel.send("Mystery Land");
        	}
		if (face2 == 12) {
    			message.channel.send("Horror Land");
        	}
		if (face2 == 13) {
    			message.channel.send("Bowser Land");
        	}
		if (face2 == 14) {
    			message.channel.send("Chilly Waters");
        	}
    		if (face2 == 15) {
    			message.channel.send("Deep Bloober Sea");
        	}
		if (face2 == 16) {
    			message.channel.send("Spiny Desert");
        	}
		if (face2 == 17) {
    			message.channel.send("Woody Woods");
        	}
		if (face2 == 18) {
    			message.channel.send("Creepy Cavern");
        	}
		if (face2 == 19) {
    			message.channel.send("Waluigi's Island");
        	}
		if (face2 == 20) {
    			message.channel.send("Gate Guy");
        	}
    		if (face2 == 21) {
    			message.channel.send("Arrowhead");
        	}
		if (face2 == 22) {
    			message.channel.send("Pipesqueak");
        	}
		if (face2 == 23) {
    			message.channel.send("Blowhard");
        	}
		if (face2 == 24) {
    			message.channel.send("Mr. Mover");
        	}
		if (face2 == 25) {
    			message.channel.send("Backtrack");
        	}
		if (face2 == 26) {
    			message.channel.send("Toad's Midway Madness");
        	}
    		if (face2 == 27) {
    			message.channel.send("Goomba's Greedy Gala");
        	}
		if (face2 == 28) {
    			message.channel.send("Boo's Haunted Bash");
        	}
		if (face2 == 29) {
    			message.channel.send("Koopa's Seaside Soiree");
        	}
		if (face2 == 30) {
    			message.channel.send("Shy Guy's Jungle Jam");
        	}
		if (face2 == 31) {
    			message.channel.send("Bowser's Gnarly Party");
        	}
		if (face2 == 32) {
    			message.channel.send("Mega Board Mayhem (Extra Room)");
        	}
		if (face2 == 33) {
			message.channel.send("Mini Board Mad-Dash (Extra Room)");
        	}
		if (face2 == 34) {
    			message.channel.send("Toy Dream");
        	}
    		if (face2 == 35) {
    			message.channel.send("Rainbow Dream");
        	}
		if (face2 == 36) {
    			message.channel.send("Pirate Dream");
        	}
		if (face2 == 37) {
    			message.channel.send("Undersea Dream");
        	}
		if (face2 == 38) {
    			message.channel.send("Future Dream");
        	}
		if (face2 == 39) {
    			message.channel.send("Sweet Dream");
        	}
		if (face2 == 40) {
    			message.channel.send("Bowser Nightmare");
        	}
		if (face2 == 41) {
    			message.channel.send("Towering Treetop");
        	}
    		if (face2 == 42) {
    			message.channel.send("E. Gadd's Garage");
        	}
		if (face2 == 43) {
    			message.channel.send("Faire Square");
        	}
		if (face2 == 44) {
    			message.channel.send("Snowflake Lake");
        	}
		if (face2 == 45) {
    			message.channel.send("Castaway Bay");
        	}
		if (face2 == 46) {
    			message.channel.send("Clockwork Castle");
        	}
		if (face2 == 47) {
    			message.channel.send("Bonus Board (Advance)");
        	}
		if (face2 == 48) {
    			message.channel.send("Grand Canal");
        	}
    		if (face2 == 49) {
    			message.channel.send("Pagoda Peak");
        	}
		if (face2 == 50) {
    			message.channel.send("Pyramid Park");
        	}
		if (face2 == 51) {
    			message.channel.send("Neon Heights");
        	}
		if (face2 == 52) {
    			message.channel.send("Windmillville");
        	}
		if (face2 == 53) {
    			message.channel.send("Bowser's Enchanted Inferno!");
        	}
		if (face2 == 54) {
    			message.channel.send("DK's Treetop Temple");
        	}
    		if (face2 == 55) {
    			message.channel.send("Goomba's Booty Boardwalk");
        	}
		if (face2 == 56) {
    			message.channel.send("King Boo's Haunted Hideaway");
        	}
		if (face2 == 57) {
    			message.channel.send("Shy Guy's Perplex Express");
        	}
		if (face2 == 58) {
    			message.channel.send("Koopa's Tycoon Town");
        	}
		if (face2 == 59) {
    			message.channel.send("Bowser's Warped Orbit");
        	}
		if (face2 == 60) {
    			message.channel.send("Wiggler's Garden");
        	}
    		if (face2 == 61) {
    			message.channel.send("Toadette's Music Room");
        	}
		if (face2 == 62) {
    			message.channel.send("DK's Stone Statue");
        	}
		if (face2 == 63) {
    			message.channel.send("Kamek's Library");
        	}
		if (face2 == 64) {
    			message.channel.send("Bowser's Pinball Machine");
        	}
		if (face2 == 65) {
    			message.channel.send("Toad Road");
        	}
    		if (face2 == 66) {
    			message.channel.send("Bob-omb Factory");
        	}
		if (face2 == 67) {
    			message.channel.send("Boo's Horror Castle");
        	}
		if (face2 == 68) {
    			message.channel.send("Blooper Beach");
        	}
		if (face2 == 69) {
    			message.channel.send("Magma Mine");
        	}
		if (face2 == 70) {
    			message.channel.send("Bowser Station");
        	}
		if (face2 == 71) {
    			message.channel.send("DK's Jungle Ruins");
        	}
		if (face2 == 72) {
    			message.channel.send("Perilous Palace Path");
        	}
    		if (face2 == 73) {
    			message.channel.send("Rocket Road");
        	}
		if (face2 == 74) {
    			message.channel.send("Shy Guy's Shuffle City");
        	}
		if (face2 == 75) {
    			message.channel.send("Banzai Bill's Mad Mountain");
        	}
		if (face2 == 76) {
    			message.channel.send("Star-Crossed Skyway");
        	}
		if (face2 == 77) {
    			message.channel.send("Kamek's Carpet Ride");
        	}
		if (face2 == 78) {
    			message.channel.send("Bowser's Peculiar Peak");
        	}
		if (face2 == 79) {
    			message.channel.send("Perilous Palace Path");
        	}
    		if (face2 == 80) {
    			message.channel.send("Rocket Road");
        	}
		if (face2 == 81) {
    			message.channel.send("Shy Guy's Shuffle City");
        	}
		if (face2 == 82) {
    			message.channel.send("Banzai Bill's Mad Mountain");
        	}
		if (face2 == 83) {
    			message.channel.send("Star-Crossed Skyway");
        	}
		if (face2 == 84) {
    			message.channel.send("Kamek's Carpet Ride");
        	}
		if (face2 == 85) {
    			message.channel.send("Bowser's Peculiar Peak");
        	}
		if (face2 == 86) {
    			message.channel.send("Mushroom Park");
        	}
    		if (face2 == 87) {
    			message.channel.send("Haunted Trail");
        	}
		if (face2 == 88) {
    			message.channel.send("Whimsical Waters");
        	}
		if (face2 == 89) {
    			message.channel.send("Airship Central");
        	}
		if (face2 == 90) {
    			message.channel.send("Chaos Castle");
        	}
		if (face2 == 91) {
    			message.channel.send("Toad Scramble");
        	}
    		if (face2 == 92) {
    			message.channel.send("Coinathlon");
        	}
		if (face2 == 93) {
    			message.channel.send("Balloon Bash");
        	}
		if (face2 == 94) {
    			message.channel.send("Minigame Match (Top 100)");
        	}
		if (face2 == 95) {
    			message.channel.send("Whomp's Domino Ruins");
        	}
    		if (face2 == 96) {
    			message.channel.send("King Bob-omb's Powderkeg Mine");
        	}
		if (face2 == 97) {
    			message.channel.send("Megafruit Paradise");
        	}
		if (face2 == 98) {
    			message.channel.send("Kamek's Tantalizing Tower");
        	}
	}
	if (message_content == ("/board all")) {
		var face2 = Math.floor(Math.random() * 99);
		if (face2 == 0) {
    			message.channel.send("DK's Jungle Adventure");
        	}
    		if (face2 == 1) {
    			message.channel.send("Peach's Birthday Cake");
        	}
		if (face2 == 2) {
    			message.channel.send("Yoshi's Tropical Island");
        	}
		if (face2 == 3) {
    			message.channel.send("Wario's Battle Canyon");
        	}
		if (face2 == 4) {
    			message.channel.send("Luigi's Engine Room");
        	}
		if (face2 == 5) {
    			message.channel.send("Mario's Rainbow Castle");
        	}
		if (face2 == 6) {
    			message.channel.send("Bowser's Magma Mountain");
        	}
		if (face2 == 7) {
			message.channel.send("Eternal Star");
        	}
		if (face2 == 8) {
    			message.channel.send("Pirate Land");
        	}
    		if (face2 == 9) {
    			message.channel.send("Western Land");
        	}
		if (face2 == 10) {
    			message.channel.send("Space Land");
        	}
		if (face2 == 11) {
    			message.channel.send("Mystery Land");
        	}
		if (face2 == 12) {
    			message.channel.send("Horror Land");
        	}
		if (face2 == 13) {
    			message.channel.send("Bowser Land");
        	}
		if (face2 == 14) {
    			message.channel.send("Chilly Waters");
        	}
    		if (face2 == 15) {
    			message.channel.send("Deep Bloober Sea");
        	}
		if (face2 == 16) {
    			message.channel.send("Spiny Desert");
        	}
		if (face2 == 17) {
    			message.channel.send("Woody Woods");
        	}
		if (face2 == 18) {
    			message.channel.send("Creepy Cavern");
        	}
		if (face2 == 19) {
    			message.channel.send("Waluigi's Island");
        	}
		if (face2 == 20) {
    			message.channel.send("Gate Guy");
        	}
    		if (face2 == 21) {
    			message.channel.send("Arrowhead");
        	}
		if (face2 == 22) {
    			message.channel.send("Pipesqueak");
        	}
		if (face2 == 23) {
    			message.channel.send("Blowhard");
        	}
		if (face2 == 24) {
    			message.channel.send("Mr. Mover");
        	}
		if (face2 == 25) {
    			message.channel.send("Backtrack");
        	}
		if (face2 == 26) {
    			message.channel.send("Toad's Midway Madness");
        	}
    		if (face2 == 27) {
    			message.channel.send("Goomba's Greedy Gala");
        	}
		if (face2 == 28) {
    			message.channel.send("Boo's Haunted Bash");
        	}
		if (face2 == 29) {
    			message.channel.send("Koopa's Seaside Soiree");
        	}
		if (face2 == 30) {
    			message.channel.send("Shy Guy's Jungle Jam");
        	}
		if (face2 == 31) {
    			message.channel.send("Bowser's Gnarly Party");
        	}
		if (face2 == 32) {
    			message.channel.send("Mega Board Mayhem (Extra Room)");
        	}
		if (face2 == 33) {
			message.channel.send("Mini Board Mad-Dash (Extra Room)");
        	}
		if (face2 == 34) {
    			message.channel.send("Toy Dream");
        	}
    		if (face2 == 35) {
    			message.channel.send("Rainbow Dream");
        	}
		if (face2 == 36) {
    			message.channel.send("Pirate Dream");
        	}
		if (face2 == 37) {
    			message.channel.send("Undersea Dream");
        	}
		if (face2 == 38) {
    			message.channel.send("Future Dream");
        	}
		if (face2 == 39) {
    			message.channel.send("Sweet Dream");
        	}
		if (face2 == 40) {
    			message.channel.send("Bowser Nightmare");
        	}
		if (face2 == 41) {
    			message.channel.send("Towering Treetop");
        	}
    		if (face2 == 42) {
    			message.channel.send("E. Gadd's Garage");
        	}
		if (face2 == 43) {
    			message.channel.send("Faire Square");
        	}
		if (face2 == 44) {
    			message.channel.send("Snowflake Lake");
        	}
		if (face2 == 45) {
    			message.channel.send("Castaway Bay");
        	}
		if (face2 == 46) {
    			message.channel.send("Clockwork Castle");
        	}
		if (face2 == 47) {
    			message.channel.send("Bonus Board (Advance)");
        	}
		if (face2 == 48) {
    			message.channel.send("Grand Canal");
        	}
    		if (face2 == 49) {
    			message.channel.send("Pagoda Peak");
        	}
		if (face2 == 50) {
    			message.channel.send("Pyramid Park");
        	}
		if (face2 == 51) {
    			message.channel.send("Neon Heights");
        	}
		if (face2 == 52) {
    			message.channel.send("Windmillville");
        	}
		if (face2 == 53) {
    			message.channel.send("Bowser's Enchanted Inferno!");
        	}
		if (face2 == 54) {
    			message.channel.send("DK's Treetop Temple");
        	}
    		if (face2 == 55) {
    			message.channel.send("Goomba's Booty Boardwalk");
        	}
		if (face2 == 56) {
    			message.channel.send("King Boo's Haunted Hideaway");
        	}
		if (face2 == 57) {
    			message.channel.send("Shy Guy's Perplex Express");
        	}
		if (face2 == 58) {
    			message.channel.send("Koopa's Tycoon Town");
        	}
		if (face2 == 59) {
    			message.channel.send("Bowser's Warped Orbit");
        	}
		if (face2 == 60) {
    			message.channel.send("Wiggler's Garden");
        	}
    		if (face2 == 61) {
    			message.channel.send("Toadette's Music Room");
        	}
		if (face2 == 62) {
    			message.channel.send("DK's Stone Statue");
        	}
		if (face2 == 63) {
    			message.channel.send("Kamek's Library");
        	}
		if (face2 == 64) {
    			message.channel.send("Bowser's Pinball Machine");
        	}
		if (face2 == 65) {
    			message.channel.send("Toad Road");
        	}
    		if (face2 == 66) {
    			message.channel.send("Bob-omb Factory");
        	}
		if (face2 == 67) {
    			message.channel.send("Boo's Horror Castle");
        	}
		if (face2 == 68) {
    			message.channel.send("Blooper Beach");
        	}
		if (face2 == 69) {
    			message.channel.send("Magma Mine");
        	}
		if (face2 == 70) {
    			message.channel.send("Bowser Station");
        	}
		if (face2 == 71) {
    			message.channel.send("DK's Jungle Ruins");
        	}
		if (face2 == 72) {
    			message.channel.send("Perilous Palace Path");
        	}
    		if (face2 == 73) {
    			message.channel.send("Rocket Road");
        	}
		if (face2 == 74) {
    			message.channel.send("Shy Guy's Shuffle City");
        	}
		if (face2 == 75) {
    			message.channel.send("Banzai Bill's Mad Mountain");
        	}
		if (face2 == 76) {
    			message.channel.send("Star-Crossed Skyway");
        	}
		if (face2 == 77) {
    			message.channel.send("Kamek's Carpet Ride");
        	}
		if (face2 == 78) {
    			message.channel.send("Bowser's Peculiar Peak");
        	}
		if (face2 == 79) {
    			message.channel.send("Perilous Palace Path");
        	}
    		if (face2 == 80) {
    			message.channel.send("Rocket Road");
        	}
		if (face2 == 81) {
    			message.channel.send("Shy Guy's Shuffle City");
        	}
		if (face2 == 82) {
    			message.channel.send("Banzai Bill's Mad Mountain");
        	}
		if (face2 == 83) {
    			message.channel.send("Star-Crossed Skyway");
        	}
		if (face2 == 84) {
    			message.channel.send("Kamek's Carpet Ride");
        	}
		if (face2 == 85) {
    			message.channel.send("Bowser's Peculiar Peak");
        	}
		if (face2 == 86) {
    			message.channel.send("Mushroom Park");
        	}
    		if (face2 == 87) {
    			message.channel.send("Haunted Trail");
        	}
		if (face2 == 88) {
    			message.channel.send("Whimsical Waters");
        	}
		if (face2 == 89) {
    			message.channel.send("Airship Central");
        	}
		if (face2 == 90) {
    			message.channel.send("Chaos Castle");
        	}
		if (face2 == 91) {
    			message.channel.send("Toad Scramble");
        	}
    		if (face2 == 92) {
    			message.channel.send("Coinathlon");
        	}
		if (face2 == 93) {
    			message.channel.send("Balloon Bash");
        	}
		if (face2 == 94) {
    			message.channel.send("Minigame Match (Top 100)");
        	}
		if (face2 == 95) {
    			message.channel.send("Whomp's Domino Ruins");
        	}
    		if (face2 == 96) {
    			message.channel.send("King Bob-omb's Powderkeg Mine");
        	}
		if (face2 == 97) {
    			message.channel.send("Megafruit Paradise");
        	}
		if (face2 == 98) {
    			message.channel.send("Kamek's Tantalizing Tower");
        	}
	}
	if (message_content == ("/board netplay")) {
		var face2 = Math.floor(Math.random() * 70);
		if (face2 == 0) {
    			message.channel.send("DK's Jungle Adventure");
        	}
    		if (face2 == 1) {
    			message.channel.send("Peach's Birthday Cake");
        	}
		if (face2 == 2) {
    			message.channel.send("Yoshi's Tropical Island");
        	}
		if (face2 == 3) {
    			message.channel.send("Wario's Battle Canyon");
        	}
		if (face2 == 4) {
    			message.channel.send("Luigi's Engine Room");
        	}
		if (face2 == 5) {
    			message.channel.send("Mario's Rainbow Castle");
        	}
		if (face2 == 6) {
    			message.channel.send("Bowser's Magma Mountain");
        	}
		if (face2 == 7) {
			message.channel.send("Eternal Star");
        	}
		if (face2 == 8) {
    			message.channel.send("Pirate Land");
        	}
    		if (face2 == 9) {
    			message.channel.send("Western Land");
        	}
		if (face2 == 10) {
    			message.channel.send("Space Land");
        	}
		if (face2 == 11) {
    			message.channel.send("Mystery Land");
        	}
		if (face2 == 12) {
    			message.channel.send("Horror Land");
        	}
		if (face2 == 13) {
    			message.channel.send("Bowser Land");
        	}
		if (face2 == 14) {
    			message.channel.send("Chilly Waters");
        	}
    		if (face2 == 15) {
    			message.channel.send("Deep Bloober Sea");
        	}
		if (face2 == 16) {
    			message.channel.send("Spiny Desert");
        	}
		if (face2 == 17) {
    			message.channel.send("Woody Woods");
        	}
		if (face2 == 18) {
    			message.channel.send("Creepy Cavern");
        	}
		if (face2 == 19) {
    			message.channel.send("Waluigi's Island");
        	}
		if (face2 == 20) {
    			message.channel.send("Gate Guy");
        	}
    		if (face2 == 21) {
    			message.channel.send("Arrowhead");
        	}
		if (face2 == 22) {
    			message.channel.send("Pipesqueak");
        	}
		if (face2 == 23) {
    			message.channel.send("Blowhard");
        	}
		if (face2 == 24) {
    			message.channel.send("Mr. Mover");
        	}
		if (face2 == 25) {
    			message.channel.send("Backtrack");
        	}
		if (face2 == 26) {
    			message.channel.send("Toad's Midway Madness");
        	}
    		if (face2 == 27) {
    			message.channel.send("Goomba's Greedy Gala");
        	}
		if (face2 == 28) {
    			message.channel.send("Boo's Haunted Bash");
        	}
		if (face2 == 29) {
    			message.channel.send("Koopa's Seaside Soiree");
        	}
		if (face2 == 30) {
    			message.channel.send("Shy Guy's Jungle Jam");
        	}
		if (face2 == 31) {
    			message.channel.send("Bowser's Gnarly Party");
        	}
		if (face2 == 32) {
    			message.channel.send("Mega Board Mayhem (Extra Room)");
        	}
		if (face2 == 33) {
			message.channel.send("Mini Board Mad-Dash (Extra Room)");
        	}
		if (face2 == 34) {
    			message.channel.send("Toy Dream");
        	}
    		if (face2 == 35) {
    			message.channel.send("Rainbow Dream");
        	}
		if (face2 == 36) {
    			message.channel.send("Pirate Dream");
        	}
		if (face2 == 37) {
    			message.channel.send("Undersea Dream");
        	}
		if (face2 == 38) {
    			message.channel.send("Future Dream");
        	}
		if (face2 == 39) {
    			message.channel.send("Sweet Dream");
        	}
		if (face2 == 40) {
    			message.channel.send("Bowser Nightmare");
        	}
		if (face2 == 41) {
    			message.channel.send("Towering Treetop");
        	}
    		if (face2 == 42) {
    			message.channel.send("E. Gadd's Garage");
        	}
		if (face2 == 43) {
    			message.channel.send("Faire Square");
        	}
		if (face2 == 44) {
    			message.channel.send("Snowflake Lake");
        	}
		if (face2 == 45) {
    			message.channel.send("Castaway Bay");
        	}
		if (face2 == 46) {
    			message.channel.send("Clockwork Castle");
        	}
		if (face2 == 47) {
    			message.channel.send("Grand Canal");
        	}
    		if (face2 == 48) {
    			message.channel.send("Pagoda Peak");
        	}
		if (face2 == 49) {
    			message.channel.send("Pyramid Park");
        	}
		if (face2 == 50) {
    			message.channel.send("Neon Heights");
        	}
		if (face2 == 51) {
    			message.channel.send("Windmillville");
        	}
		if (face2 == 52) {
    			message.channel.send("Bowser's Enchanted Inferno!");
        	}
		if (face2 == 53) {
    			message.channel.send("DK's Treetop Temple");
        	}
    		if (face2 == 54) {
    			message.channel.send("Goomba's Booty Boardwalk");
        	}
		if (face2 == 55) {
    			message.channel.send("King Boo's Haunted Hideaway");
        	}
		if (face2 == 56) {
    			message.channel.send("Shy Guy's Perplex Express");
        	}
		if (face2 == 57) {
    			message.channel.send("Koopa's Tycoon Town");
        	}
		if (face2 == 58) {
    			message.channel.send("Bowser's Warped Orbit");
        	}
		if (face2 == 59) {
    			message.channel.send("Toad Road");
        	}
    		if (face2 == 60) {
    			message.channel.send("Bob-omb Factory");
        	}
		if (face2 == 61) {
    			message.channel.send("Boo's Horror Castle");
        	}
		if (face2 == 62) {
    			message.channel.send("Blooper Beach");
        	}
		if (face2 == 63) {
    			message.channel.send("Magma Mine");
        	}
		if (face2 == 64) {
    			message.channel.send("Bowser Station");
        	}
		if (face2 == 65) {
    			message.channel.send("DK's Jungle Ruins");
        	}
		if (face2 == 66) {
    			message.channel.send("Toad Scramble");
        	}
    		if (face2 == 67) {
    			message.channel.send("Coinathlon");
        	}
		if (face2 == 68) {
    			message.channel.send("Balloon Bash");
        	}
		if (face2 == 69) {
    			message.channel.send("Minigame Match (Top 100)");
        	}
	}
	if (message_content == ("/board netplayable")) {
		var face2 = Math.floor(Math.random() * 70);
		if (face2 == 0) {
    			message.channel.send("DK's Jungle Adventure");
        	}
    		if (face2 == 1) {
    			message.channel.send("Peach's Birthday Cake");
        	}
		if (face2 == 2) {
    			message.channel.send("Yoshi's Tropical Island");
        	}
		if (face2 == 3) {
    			message.channel.send("Wario's Battle Canyon");
        	}
		if (face2 == 4) {
    			message.channel.send("Luigi's Engine Room");
        	}
		if (face2 == 5) {
    			message.channel.send("Mario's Rainbow Castle");
        	}
		if (face2 == 6) {
    			message.channel.send("Bowser's Magma Mountain");
        	}
		if (face2 == 7) {
			message.channel.send("Eternal Star");
        	}
		if (face2 == 8) {
    			message.channel.send("Pirate Land");
        	}
    		if (face2 == 9) {
    			message.channel.send("Western Land");
        	}
		if (face2 == 10) {
    			message.channel.send("Space Land");
        	}
		if (face2 == 11) {
    			message.channel.send("Mystery Land");
        	}
		if (face2 == 12) {
    			message.channel.send("Horror Land");
        	}
		if (face2 == 13) {
    			message.channel.send("Bowser Land");
        	}
		if (face2 == 14) {
    			message.channel.send("Chilly Waters");
        	}
    		if (face2 == 15) {
    			message.channel.send("Deep Bloober Sea");
        	}
		if (face2 == 16) {
    			message.channel.send("Spiny Desert");
        	}
		if (face2 == 17) {
    			message.channel.send("Woody Woods");
        	}
		if (face2 == 18) {
    			message.channel.send("Creepy Cavern");
        	}
		if (face2 == 19) {
    			message.channel.send("Waluigi's Island");
        	}
		if (face2 == 20) {
    			message.channel.send("Gate Guy");
        	}
    		if (face2 == 21) {
    			message.channel.send("Arrowhead");
        	}
		if (face2 == 22) {
    			message.channel.send("Pipesqueak");
        	}
		if (face2 == 23) {
    			message.channel.send("Blowhard");
        	}
		if (face2 == 24) {
    			message.channel.send("Mr. Mover");
        	}
		if (face2 == 25) {
    			message.channel.send("Backtrack");
        	}
		if (face2 == 26) {
    			message.channel.send("Toad's Midway Madness");
        	}
    		if (face2 == 27) {
    			message.channel.send("Goomba's Greedy Gala");
        	}
		if (face2 == 28) {
    			message.channel.send("Boo's Haunted Bash");
        	}
		if (face2 == 29) {
    			message.channel.send("Koopa's Seaside Soiree");
        	}
		if (face2 == 30) {
    			message.channel.send("Shy Guy's Jungle Jam");
        	}
		if (face2 == 31) {
    			message.channel.send("Bowser's Gnarly Party");
        	}
		if (face2 == 32) {
    			message.channel.send("Mega Board Mayhem (Extra Room)");
        	}
		if (face2 == 33) {
			message.channel.send("Mini Board Mad-Dash (Extra Room)");
        	}
		if (face2 == 34) {
    			message.channel.send("Toy Dream");
        	}
    		if (face2 == 35) {
    			message.channel.send("Rainbow Dream");
        	}
		if (face2 == 36) {
    			message.channel.send("Pirate Dream");
        	}
		if (face2 == 37) {
    			message.channel.send("Undersea Dream");
        	}
		if (face2 == 38) {
    			message.channel.send("Future Dream");
        	}
		if (face2 == 39) {
    			message.channel.send("Sweet Dream");
        	}
		if (face2 == 40) {
    			message.channel.send("Bowser Nightmare");
        	}
		if (face2 == 41) {
    			message.channel.send("Towering Treetop");
        	}
    		if (face2 == 42) {
    			message.channel.send("E. Gadd's Garage");
        	}
		if (face2 == 43) {
    			message.channel.send("Faire Square");
        	}
		if (face2 == 44) {
    			message.channel.send("Snowflake Lake");
        	}
		if (face2 == 45) {
    			message.channel.send("Castaway Bay");
        	}
		if (face2 == 46) {
    			message.channel.send("Clockwork Castle");
        	}
		if (face2 == 47) {
    			message.channel.send("Grand Canal");
        	}
    		if (face2 == 48) {
    			message.channel.send("Pagoda Peak");
        	}
		if (face2 == 49) {
    			message.channel.send("Pyramid Park");
        	}
		if (face2 == 50) {
    			message.channel.send("Neon Heights");
        	}
		if (face2 == 51) {
    			message.channel.send("Windmillville");
        	}
		if (face2 == 52) {
    			message.channel.send("Bowser's Enchanted Inferno!");
        	}
		if (face2 == 53) {
    			message.channel.send("DK's Treetop Temple");
        	}
    		if (face2 == 54) {
    			message.channel.send("Goomba's Booty Boardwalk");
        	}
		if (face2 == 55) {
    			message.channel.send("King Boo's Haunted Hideaway");
        	}
		if (face2 == 56) {
    			message.channel.send("Shy Guy's Perplex Express");
        	}
		if (face2 == 57) {
    			message.channel.send("Koopa's Tycoon Town");
        	}
		if (face2 == 58) {
    			message.channel.send("Bowser's Warped Orbit");
        	}
		if (face2 == 59) {
    			message.channel.send("Toad Road");
        	}
    		if (face2 == 60) {
    			message.channel.send("Bob-omb Factory");
        	}
		if (face2 == 61) {
    			message.channel.send("Boo's Horror Castle");
        	}
		if (face2 == 62) {
    			message.channel.send("Blooper Beach");
        	}
		if (face2 == 63) {
    			message.channel.send("Magma Mine");
        	}
		if (face2 == 64) {
    			message.channel.send("Bowser Station");
        	}
		if (face2 == 65) {
    			message.channel.send("DK's Jungle Ruins");
        	}
		if (face2 == 66) {
    			message.channel.send("Toad Scramble");
        	}
    		if (face2 == 67) {
    			message.channel.send("Coinathlon");
        	}
		if (face2 == 68) {
    			message.channel.send("Balloon Bash");
        	}
		if (face2 == 69) {
    			message.channel.send("Minigame Match (Top 100)");
        	}
	}
	if (message_content == ("/board aii")) {
		message.channel.send("Cranky's Meme Lair");
	}
	if (message_content == ("/board 0")) {
		message.channel.send("nice meme");
	}
	if (message_content == ("/board -1")) {
		message.channel.send("nice meme");
	}
	if (message_content == ("/board 12")) {
		message.channel.send("nice meme");
	}
	if (message_content == ("/board advance")) {
		message.channel.send("Bonus Board");
	}
	if (message_content == ("/board adv")) {
		message.channel.send("Bonus Board");
	}
	if (message_content == ("/board top 100")) {
		message.channel.send("Minigame Match");
	}
	if (message_content == ("/board t100")) {
		message.channel.send("Minigame Match");
	}
	if (message_content == ("/game 64")) {
		var face2 = Math.floor(Math.random() * 53);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("GoldenEye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode I Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 32) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 33) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 34) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 35) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 36) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 37) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 38) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 39) {
    			message.channel.send("The New Tetris");
		}
		if (face2 == 40) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 41) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 42) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 43) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 44) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 45) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 46) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 47) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 48) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 49) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 50) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 51) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 52) {
    			message.channel.send("Mario Tennis");
		}
	}
	if (message_content.includes("which 64 game should")) {
		var face2 = Math.floor(Math.random() * 53);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("GoldenEye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode I Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 32) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 33) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 34) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 35) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 36) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 37) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 38) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 39) {
    			message.channel.send("The New Tetris");
		}
		if (face2 == 40) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 41) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 42) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 43) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 44) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 45) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 46) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 47) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 48) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 49) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 50) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 51) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 52) {
    			message.channel.send("Mario Tennis");
		}
	}
	if (message_content.includes("which n64 game should")) {
		var face2 = Math.floor(Math.random() * 53);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("GoldenEye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode I Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 32) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 33) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 34) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 35) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 36) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 37) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 38) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 39) {
    			message.channel.send("The New Tetris");
		}
		if (face2 == 40) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 41) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 42) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 43) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 44) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 45) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 46) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 47) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 48) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 49) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 50) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 51) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 52) {
    			message.channel.send("Mario Tennis");
		}
	}
	if (message_content == ("/seemein n64")) {
		var face2 = Math.floor(Math.random() * 53);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("GoldenEye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode I Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 32) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 33) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 34) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 35) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 36) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 37) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 38) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 39) {
    			message.channel.send("The New Tetris");
		}
		if (face2 == 40) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 41) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 42) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 43) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 44) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 45) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 46) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 47) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 48) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 49) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 50) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 51) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 52) {
    			message.channel.send("Mario Tennis");
		}
	}
	if (message_content == ("/seemein 64")) {
		var face2 = Math.floor(Math.random() * 53);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("GoldenEye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode I Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 32) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 33) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 34) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 35) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 36) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 37) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 38) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 39) {
    			message.channel.send("The New Tetris");
		}
		if (face2 == 40) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 41) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 42) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 43) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 44) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 45) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 46) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 47) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 48) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 49) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 50) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 51) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 52) {
    			message.channel.send("Mario Tennis");
		}
	}
	if (message_content.includes("what 64 game should")) {
		var face2 = Math.floor(Math.random() * 53);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("GoldenEye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode I Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 32) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 33) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 34) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 35) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 36) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 37) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 38) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 39) {
    			message.channel.send("The New Tetris");
		}
		if (face2 == 40) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 41) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 42) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 43) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 44) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 45) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 46) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 47) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 48) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 49) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 50) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 51) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 52) {
    			message.channel.send("Mario Tennis");
		}
	}
	if (message_content.includes("what n64 game should")) {
		var face2 = Math.floor(Math.random() * 53);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("GoldenEye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode I Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 32) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 33) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 34) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 35) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 36) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 37) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 38) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 39) {
    			message.channel.send("The New Tetris");
		}
		if (face2 == 40) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 41) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 42) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 43) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 44) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 45) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 46) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 47) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 48) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 49) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 50) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 51) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 52) {
    			message.channel.send("Mario Tennis");
		}
	}
	if (message_content == ("/game n64")) {
		var face2 = Math.floor(Math.random() * 53);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("GoldenEye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode I Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 32) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 33) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 34) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 35) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 36) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 37) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 38) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 39) {
    			message.channel.send("The New Tetris");
		}
		if (face2 == 40) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 41) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 42) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 43) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 44) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 45) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 46) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 47) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 48) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 49) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 50) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 51) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 52) {
    			message.channel.send("Mario Tennis");
		}
	}
	if (message_content == ("/game gamecube")) {
		var face2 = Math.floor(Math.random() * 80);
		if (face2 == 0) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 3) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 4) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 5) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 6) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 7) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 8) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 9) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 10) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 11) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 14) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 15) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 16) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 17) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 18) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 19) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 21) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 22) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 24) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 25) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 26) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 27) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 28) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 29) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 30) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 31) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 32) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 33) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 34) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 35) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 36) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 37) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 38) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 39) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 40) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 41) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 42) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 43) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 44) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 45) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 46) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 47) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 48) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 49) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 50) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 51) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 52) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 53) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 56) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 57) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 58) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 59) {
    			message.channel.send("Sonic the Fighters");
        	}
		if (face2 == 60) {
    			message.channel.send("Smashing Drive");
        	}
		if (face2 == 61) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 62) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 63) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 64) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 65) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 66) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 67) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 68) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 69) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 70) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 71) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 72) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 73) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 74) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 75) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 76) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 77) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 78) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 79) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content == ("/game gcn")) {
		var face2 = Math.floor(Math.random() * 80);
		if (face2 == 0) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 3) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 4) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 5) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 6) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 7) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 8) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 9) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 10) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 11) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 14) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 15) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 16) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 17) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 18) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 19) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 21) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 22) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 24) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 25) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 26) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 27) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 28) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 29) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 30) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 31) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 32) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 33) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 34) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 35) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 36) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 37) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 38) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 39) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 40) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 41) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 42) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 43) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 44) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 45) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 46) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 47) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 48) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 49) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 50) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 51) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 52) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 53) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 56) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 57) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 58) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 59) {
    			message.channel.send("Sonic the Fighters");
        	}
		if (face2 == 60) {
    			message.channel.send("Smashing Drive");
        	}
		if (face2 == 61) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 62) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 63) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 64) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 65) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 66) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 67) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 68) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 69) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 70) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 71) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 72) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 73) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 74) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 75) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 76) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 77) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 78) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 79) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content.includes("which gcn game should")) {
		var face2 = Math.floor(Math.random() * 80);
		if (face2 == 0) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 3) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 4) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 5) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 6) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 7) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 8) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 9) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 10) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 11) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 14) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 15) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 16) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 17) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 18) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 19) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 21) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 22) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 24) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 25) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 26) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 27) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 28) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 29) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 30) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 31) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 32) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 33) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 34) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 35) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 36) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 37) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 38) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 39) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 40) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 41) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 42) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 43) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 44) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 45) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 46) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 47) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 48) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 49) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 50) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 51) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 52) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 53) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 56) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 57) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 58) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 59) {
    			message.channel.send("Sonic the Fighters");
        	}
		if (face2 == 60) {
    			message.channel.send("Smashing Drive");
        	}
		if (face2 == 61) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 62) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 63) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 64) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 65) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 66) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 67) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 68) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 69) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 70) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 71) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 72) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 73) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 74) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 75) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 76) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 77) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 78) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 79) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content.includes("which gc game should")) {
		var face2 = Math.floor(Math.random() * 80);
		if (face2 == 0) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 3) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 4) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 5) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 6) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 7) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 8) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 9) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 10) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 11) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 14) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 15) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 16) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 17) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 18) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 19) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 21) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 22) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 24) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 25) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 26) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 27) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 28) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 29) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 30) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 31) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 32) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 33) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 34) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 35) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 36) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 37) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 38) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 39) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 40) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 41) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 42) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 43) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 44) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 45) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 46) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 47) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 48) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 49) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 50) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 51) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 52) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 53) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 56) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 57) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 58) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 59) {
    			message.channel.send("Sonic the Fighters");
        	}
		if (face2 == 60) {
    			message.channel.send("Smashing Drive");
        	}
		if (face2 == 61) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 62) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 63) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 64) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 65) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 66) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 67) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 68) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 69) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 70) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 71) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 72) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 73) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 74) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 75) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 76) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 77) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 78) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 79) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content.includes("/seemein gc")) {
		var face2 = Math.floor(Math.random() * 80);
		if (face2 == 0) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 3) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 4) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 5) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 6) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 7) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 8) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 9) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 10) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 11) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 14) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 15) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 16) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 17) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 18) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 19) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 21) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 22) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 24) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 25) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 26) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 27) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 28) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 29) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 30) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 31) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 32) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 33) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 34) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 35) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 36) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 37) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 38) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 39) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 40) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 41) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 42) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 43) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 44) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 45) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 46) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 47) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 48) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 49) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 50) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 51) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 52) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 53) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 56) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 57) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 58) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 59) {
    			message.channel.send("Sonic the Fighters");
        	}
		if (face2 == 60) {
    			message.channel.send("Smashing Drive");
        	}
		if (face2 == 61) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 62) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 63) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 64) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 65) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 66) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 67) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 68) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 69) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 70) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 71) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 72) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 73) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 74) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 75) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 76) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 77) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 78) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 79) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content == ("/seemein gamecube")) {
		var face2 = Math.floor(Math.random() * 80);
		if (face2 == 0) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 3) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 4) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 5) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 6) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 7) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 8) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 9) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 10) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 11) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 14) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 15) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 16) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 17) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 18) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 19) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 21) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 22) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 24) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 25) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 26) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 27) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 28) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 29) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 30) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 31) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 32) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 33) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 34) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 35) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 36) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 37) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 38) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 39) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 40) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 41) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 42) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 43) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 44) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 45) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 46) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 47) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 48) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 49) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 50) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 51) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 52) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 53) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 56) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 57) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 58) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 59) {
    			message.channel.send("Sonic the Fighters");
        	}
		if (face2 == 60) {
    			message.channel.send("Smashing Drive");
        	}
		if (face2 == 61) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 62) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 63) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 64) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 65) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 66) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 67) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 68) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 69) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 70) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 71) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 72) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 73) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 74) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 75) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 76) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 77) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 78) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 79) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content.includes("which gamecube game should")) {
		var face2 = Math.floor(Math.random() * 80);
		if (face2 == 0) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 3) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 4) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 5) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 6) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 7) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 8) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 9) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 10) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 11) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 14) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 15) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 16) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 17) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 18) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 19) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 21) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 22) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 24) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 25) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 26) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 27) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 28) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 29) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 30) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 31) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 32) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 33) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 34) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 35) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 36) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 37) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 38) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 39) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 40) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 41) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 42) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 43) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 44) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 45) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 46) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 47) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 48) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 49) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 50) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 51) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 52) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 53) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 56) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 57) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 58) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 59) {
    			message.channel.send("Sonic the Fighters");
        	}
		if (face2 == 60) {
    			message.channel.send("Smashing Drive");
        	}
		if (face2 == 61) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 62) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 63) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 64) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 65) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 66) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 67) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 68) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 69) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 70) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 71) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 72) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 73) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 74) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 75) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 76) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 77) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 78) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 79) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content.includes("what gcn game should")) {
		var face2 = Math.floor(Math.random() * 80);
		if (face2 == 0) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 3) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 4) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 5) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 6) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 7) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 8) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 9) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 10) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 11) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 14) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 15) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 16) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 17) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 18) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 19) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 21) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 22) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 24) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 25) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 26) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 27) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 28) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 29) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 30) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 31) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 32) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 33) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 34) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 35) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 36) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 37) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 38) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 39) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 40) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 41) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 42) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 43) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 44) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 45) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 46) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 47) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 48) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 49) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 50) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 51) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 52) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 53) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 56) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 57) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 58) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 59) {
    			message.channel.send("Sonic the Fighters");
        	}
		if (face2 == 60) {
    			message.channel.send("Smashing Drive");
        	}
		if (face2 == 61) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 62) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 63) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 64) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 65) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 66) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 67) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 68) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 69) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 70) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 71) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 72) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 73) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 74) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 75) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 76) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 77) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 78) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 79) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content.includes("what gc game should")) {
		var face2 = Math.floor(Math.random() * 80);
		if (face2 == 0) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 3) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 4) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 5) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 6) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 7) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 8) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 9) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 10) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 11) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 14) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 15) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 16) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 17) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 18) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 19) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 21) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 22) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 24) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 25) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 26) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 27) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 28) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 29) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 30) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 31) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 32) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 33) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 34) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 35) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 36) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 37) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 38) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 39) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 40) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 41) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 42) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 43) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 44) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 45) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 46) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 47) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 48) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 49) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 50) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 51) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 52) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 53) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 56) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 57) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 58) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 59) {
    			message.channel.send("Sonic the Fighters");
        	}
		if (face2 == 60) {
    			message.channel.send("Smashing Drive");
        	}
		if (face2 == 61) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 62) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 63) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 64) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 65) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 66) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 67) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 68) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 69) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 70) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 71) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 72) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 73) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 74) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 75) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 76) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 77) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 78) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 79) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content.includes("what gamecube game should")) {
		var face2 = Math.floor(Math.random() * 80);
		if (face2 == 0) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 3) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 4) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 5) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 6) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 7) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 8) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 9) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 10) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 11) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 14) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 15) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 16) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 17) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 18) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 19) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 21) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 22) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 24) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 25) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 26) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 27) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 28) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 29) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 30) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 31) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 32) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 33) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 34) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 35) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 36) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 37) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 38) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 39) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 40) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 41) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 42) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 43) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 44) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 45) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 46) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 47) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 48) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 49) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 50) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 51) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 52) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 53) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 56) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 57) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 58) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 59) {
    			message.channel.send("Sonic the Fighters");
        	}
		if (face2 == 60) {
    			message.channel.send("Smashing Drive");
        	}
		if (face2 == 61) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 62) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 63) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 64) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 65) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 66) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 67) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 68) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 69) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 70) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 71) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 72) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 73) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 74) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 75) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 76) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 77) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 78) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 79) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content == ("/game gc")) {
		var face2 = Math.floor(Math.random() * 80);
		if (face2 == 0) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 3) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 4) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 5) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 6) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 7) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 8) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 9) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 10) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 11) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 14) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 15) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 16) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 17) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 18) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 19) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 21) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 22) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 24) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 25) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 26) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 27) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 28) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 29) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 30) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 31) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 32) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 33) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 34) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 35) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 36) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 37) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 38) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 39) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 40) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 41) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 42) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 43) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 44) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 45) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 46) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 47) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 48) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 49) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 50) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 51) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 52) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 53) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 56) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 57) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 58) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 59) {
    			message.channel.send("Sonic the Fighters");
        	}
		if (face2 == 60) {
    			message.channel.send("Smashing Drive");
        	}
		if (face2 == 61) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 62) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 63) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 64) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 65) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 66) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 67) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 68) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 69) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 70) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 71) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 72) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 73) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 74) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 75) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 76) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 77) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 78) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 79) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content == ("/game wii")) {
		var face2 = Math.floor(Math.random() * 52);
		if (face2 == 0) {
    			message.channel.send("Mario Party 8");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 9");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Kart Wii");
        	}
		if (face2 == 3) {
    			message.channel.send("Super Smash Bros Brawl");
        	}
		if (face2 == 4) {
    			message.channel.send("Project M");
        	}
		if (face2 == 5) {
    			message.channel.send("Dragon Ball Z Budokai 3");
        	}
		if (face2 == 6) {
    			message.channel.send("Wii Sports");
        	}
		if (face2 == 7) {
			message.channel.send("Wii Play");
        	}
		if (face2 == 8) {
    			message.channel.send("Wii Sports Resort");
        	}
    		if (face2 == 9) {
    			message.channel.send("Wii Music");
        	}
		if (face2 == 10) {
    			message.channel.send("Wii Play Motion");
        	}
		if (face2 == 11) {
    			message.channel.send("Wii Party");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Kart Fun");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Kart Wii Hack Pack");
        	}
		if (face2 == 14) {
    			message.channel.send("Super Monkey Ball Banana Blitz");
        	}
		if (face2 == 15) {
    			message.channel.send("Super Monkey Ball Step & Roll");
        	}
    		if (face2 == 16) {
    			message.channel.send("Mario Super Sluggers");
        	}
		if (face2 == 17) {
    			message.channel.send("Mario Strikers Charged");
        	}
		if (face2 == 18) {
    			message.channel.send("Fortune Street");
        	}
		if (face2 == 19) {
    			message.channel.send("Punch-Out!!");
        	}
		if (face2 == 20) {
    			message.channel.send("Mario Sports Mix");
        	}
		if (face2 == 21) {
    			message.channel.send("Donkey Kong Country Returns");
        	}
    		if (face2 == 22) {
    			message.channel.send("Kirby's Epic Yarn");
        	}
		if (face2 == 23) {
    			message.channel.send("Kirby's Return To Dream Land");
        	}
		if (face2 == 24) {
    			message.channel.send("WarioWare: Smooth Moves");
        	}
		if (face2 == 25) {
    			message.channel.send("Mario & Sonic at the Olympic Games");
        	}
		if (face2 == 26) {
    			message.channel.send("Mario & Sonic at the Olympic Winter Games");
        	}
		if (face2 == 27) {
    			message.channel.send("Mario & Sonic at the London 2012 Olympic Games");
        	}
		if (face2 == 28) {
    			message.channel.send("Rhythm Heaven Fever");
        	}
		if (face2 == 29) {
    			message.channel.send("Donkey Kong Barrel Blast");
        	}
		if (face2 == 30) {
    			message.channel.send("Namco Museum Remix");
        	}
		if (face2 == 31) {
    			message.channel.send("Rayman Raving Rabbids");
        	}
		if (face2 == 32) {
    			message.channel.send("Rayman Raving Rabbids 2");
        	}
		if (face2 == 33) {
    			message.channel.send("Rabbids TV Party");
        	}
		if (face2 == 34) {
    			message.channel.send("Rabbids Go Home");
        	}
		if (face2 == 35) {
    			message.channel.send("Rayman Origins");
        	}
		if (face2 == 36) {
    			message.channel.send("New Super Mario Bros Wii");
        	}
		if (face2 == 37) {
    			message.channel.send("Newer Super Mario Bros Wii");
        	}
		if (face2 == 38) {
    			message.channel.send("Another Super Mario Bros Wii");
        	}
		if (face2 == 39) {
    			message.channel.send("New Summer Sun Bros Wii");
        	}
		if (face2 == 40) {
    			message.channel.send("M&M's Kart Racing");
        	}
		if (face2 == 41) {
    			message.channel.send("Deca Sports");
        	}
		if (face2 == 42) {
    			message.channel.send("GoldenEye Wii");
        	}
		if (face2 == 43) {
    			message.channel.send("some call of duty game idk");
        	}
		if (face2 == 44) {
    			message.channel.send("Brawl Minus");
        	}
		if (face2 == 45) {
    			message.channel.send("Hasbro Family Game Night 3");
        	}
		if (face2 == 46) {
    			message.channel.send("Guilty Gear XX Accent Core +");
        	}
		if (face2 == 47) {
    			message.channel.send("Tatsunoko vs Capcom");
        	}
		if (face2 == 48) {
    			message.channel.send("Chicken Little: Ace in Action");
        	}
		if (face2 == 49) {
    			message.channel.send("Trauma Center: New Blood");
        	}
		if (face2 == 50) {
    			message.channel.send("Boom Blox");
        	}
		if (face2 == 51) {
    			message.channel.send("Pokemon Battle Revolution");
        	}
	}
	if (message_content.includes("which wii game should")) {
		var face2 = Math.floor(Math.random() * 52);
		if (face2 == 0) {
    			message.channel.send("Mario Party 8");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 9");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Kart Wii");
        	}
		if (face2 == 3) {
    			message.channel.send("Super Smash Bros Brawl");
        	}
		if (face2 == 4) {
    			message.channel.send("Project M");
        	}
		if (face2 == 5) {
    			message.channel.send("Dragon Ball Z Budokai 3");
        	}
		if (face2 == 6) {
    			message.channel.send("Wii Sports");
        	}
		if (face2 == 7) {
			message.channel.send("Wii Play");
        	}
		if (face2 == 8) {
    			message.channel.send("Wii Sports Resort");
        	}
    		if (face2 == 9) {
    			message.channel.send("Wii Music");
        	}
		if (face2 == 10) {
    			message.channel.send("Wii Play Motion");
        	}
		if (face2 == 11) {
    			message.channel.send("Wii Party");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Kart Fun");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Kart Wii Hack Pack");
        	}
		if (face2 == 14) {
    			message.channel.send("Super Monkey Ball Banana Blitz");
        	}
		if (face2 == 15) {
    			message.channel.send("Super Monkey Ball Step & Roll");
        	}
    		if (face2 == 16) {
    			message.channel.send("Mario Super Sluggers");
        	}
		if (face2 == 17) {
    			message.channel.send("Mario Strikers Charged");
        	}
		if (face2 == 18) {
    			message.channel.send("Fortune Street");
        	}
		if (face2 == 19) {
    			message.channel.send("Punch-Out!!");
        	}
		if (face2 == 20) {
    			message.channel.send("Mario Sports Mix");
        	}
		if (face2 == 21) {
    			message.channel.send("Donkey Kong Country Returns");
        	}
    		if (face2 == 22) {
    			message.channel.send("Kirby's Epic Yarn");
        	}
		if (face2 == 23) {
    			message.channel.send("Kirby's Return To Dream Land");
        	}
		if (face2 == 24) {
    			message.channel.send("WarioWare: Smooth Moves");
        	}
		if (face2 == 25) {
    			message.channel.send("Mario & Sonic at the Olympic Games");
        	}
		if (face2 == 26) {
    			message.channel.send("Mario & Sonic at the Olympic Winter Games");
        	}
		if (face2 == 27) {
    			message.channel.send("Mario & Sonic at the London 2012 Olympic Games");
        	}
		if (face2 == 28) {
    			message.channel.send("Rhythm Heaven Fever");
        	}
		if (face2 == 29) {
    			message.channel.send("Donkey Kong Barrel Blast");
        	}
		if (face2 == 30) {
    			message.channel.send("Namco Museum Remix");
        	}
		if (face2 == 31) {
    			message.channel.send("Rayman Raving Rabbids");
        	}
		if (face2 == 32) {
    			message.channel.send("Rayman Raving Rabbids 2");
        	}
		if (face2 == 33) {
    			message.channel.send("Rabbids TV Party");
        	}
		if (face2 == 34) {
    			message.channel.send("Rabbids Go Home");
        	}
		if (face2 == 35) {
    			message.channel.send("Rayman Origins");
        	}
		if (face2 == 36) {
    			message.channel.send("New Super Mario Bros Wii");
        	}
		if (face2 == 37) {
    			message.channel.send("Newer Super Mario Bros Wii");
        	}
		if (face2 == 38) {
    			message.channel.send("Another Super Mario Bros Wii");
        	}
		if (face2 == 39) {
    			message.channel.send("New Summer Sun Bros Wii");
        	}
		if (face2 == 40) {
    			message.channel.send("M&M's Kart Racing");
        	}
		if (face2 == 41) {
    			message.channel.send("Deca Sports");
        	}
		if (face2 == 42) {
    			message.channel.send("GoldenEye Wii");
        	}
		if (face2 == 43) {
    			message.channel.send("some call of duty game idk");
        	}
		if (face2 == 44) {
    			message.channel.send("Brawl Minus");
        	}
		if (face2 == 45) {
    			message.channel.send("Hasbro Family Game Night 3");
        	}
		if (face2 == 46) {
    			message.channel.send("Guilty Gear XX Accent Core +");
        	}
		if (face2 == 47) {
    			message.channel.send("Tatsunoko vs Capcom");
        	}
		if (face2 == 48) {
    			message.channel.send("Chicken Little: Ace in Action");
        	}
		if (face2 == 49) {
    			message.channel.send("Trauma Center: New Blood");
        	}
		if (face2 == 50) {
    			message.channel.send("Boom Blox");
        	}
		if (face2 == 51) {
    			message.channel.send("Pokemon Battle Revolution");
        	}
	}
	if (message_content == ("/seemein wii")) {
		var face2 = Math.floor(Math.random() * 52);
		if (face2 == 0) {
    			message.channel.send("Mario Party 8");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 9");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Kart Wii");
        	}
		if (face2 == 3) {
    			message.channel.send("Super Smash Bros Brawl");
        	}
		if (face2 == 4) {
    			message.channel.send("Project M");
        	}
		if (face2 == 5) {
    			message.channel.send("Dragon Ball Z Budokai 3");
        	}
		if (face2 == 6) {
    			message.channel.send("Wii Sports");
        	}
		if (face2 == 7) {
			message.channel.send("Wii Play");
        	}
		if (face2 == 8) {
    			message.channel.send("Wii Sports Resort");
        	}
    		if (face2 == 9) {
    			message.channel.send("Wii Music");
        	}
		if (face2 == 10) {
    			message.channel.send("Wii Play Motion");
        	}
		if (face2 == 11) {
    			message.channel.send("Wii Party");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Kart Fun");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Kart Wii Hack Pack");
        	}
		if (face2 == 14) {
    			message.channel.send("Super Monkey Ball Banana Blitz");
        	}
		if (face2 == 15) {
    			message.channel.send("Super Monkey Ball Step & Roll");
        	}
    		if (face2 == 16) {
    			message.channel.send("Mario Super Sluggers");
        	}
		if (face2 == 17) {
    			message.channel.send("Mario Strikers Charged");
        	}
		if (face2 == 18) {
    			message.channel.send("Fortune Street");
        	}
		if (face2 == 19) {
    			message.channel.send("Punch-Out!!");
        	}
		if (face2 == 20) {
    			message.channel.send("Mario Sports Mix");
        	}
		if (face2 == 21) {
    			message.channel.send("Donkey Kong Country Returns");
        	}
    		if (face2 == 22) {
    			message.channel.send("Kirby's Epic Yarn");
        	}
		if (face2 == 23) {
    			message.channel.send("Kirby's Return To Dream Land");
        	}
		if (face2 == 24) {
    			message.channel.send("WarioWare: Smooth Moves");
        	}
		if (face2 == 25) {
    			message.channel.send("Mario & Sonic at the Olympic Games");
        	}
		if (face2 == 26) {
    			message.channel.send("Mario & Sonic at the Olympic Winter Games");
        	}
		if (face2 == 27) {
    			message.channel.send("Mario & Sonic at the London 2012 Olympic Games");
        	}
		if (face2 == 28) {
    			message.channel.send("Rhythm Heaven Fever");
        	}
		if (face2 == 29) {
    			message.channel.send("Donkey Kong Barrel Blast");
        	}
		if (face2 == 30) {
    			message.channel.send("Namco Museum Remix");
        	}
		if (face2 == 31) {
    			message.channel.send("Rayman Raving Rabbids");
        	}
		if (face2 == 32) {
    			message.channel.send("Rayman Raving Rabbids 2");
        	}
		if (face2 == 33) {
    			message.channel.send("Rabbids TV Party");
        	}
		if (face2 == 34) {
    			message.channel.send("Rabbids Go Home");
        	}
		if (face2 == 35) {
    			message.channel.send("Rayman Origins");
        	}
		if (face2 == 36) {
    			message.channel.send("New Super Mario Bros Wii");
        	}
		if (face2 == 37) {
    			message.channel.send("Newer Super Mario Bros Wii");
        	}
		if (face2 == 38) {
    			message.channel.send("Another Super Mario Bros Wii");
        	}
		if (face2 == 39) {
    			message.channel.send("New Summer Sun Bros Wii");
        	}
		if (face2 == 40) {
    			message.channel.send("M&M's Kart Racing");
        	}
		if (face2 == 41) {
    			message.channel.send("Deca Sports");
        	}
		if (face2 == 42) {
    			message.channel.send("GoldenEye Wii");
        	}
		if (face2 == 43) {
    			message.channel.send("some call of duty game idk");
        	}
		if (face2 == 44) {
    			message.channel.send("Brawl Minus");
        	}
		if (face2 == 45) {
    			message.channel.send("Hasbro Family Game Night 3");
        	}
		if (face2 == 46) {
    			message.channel.send("Guilty Gear XX Accent Core +");
        	}
		if (face2 == 47) {
    			message.channel.send("Tatsunoko vs Capcom");
        	}
		if (face2 == 48) {
    			message.channel.send("Chicken Little: Ace in Action");
        	}
		if (face2 == 49) {
    			message.channel.send("Trauma Center: New Blood");
        	}
		if (face2 == 50) {
    			message.channel.send("Boom Blox");
        	}
		if (face2 == 51) {
    			message.channel.send("Pokemon Battle Revolution");
        	}
	}
	if (message_content.includes("what wii game should")) {
		var face2 = Math.floor(Math.random() * 52);
		if (face2 == 0) {
    			message.channel.send("Mario Party 8");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 9");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Kart Wii");
        	}
		if (face2 == 3) {
    			message.channel.send("Super Smash Bros Brawl");
        	}
		if (face2 == 4) {
    			message.channel.send("Project M");
        	}
		if (face2 == 5) {
    			message.channel.send("Dragon Ball Z Budokai 3");
        	}
		if (face2 == 6) {
    			message.channel.send("Wii Sports");
        	}
		if (face2 == 7) {
			message.channel.send("Wii Play");
        	}
		if (face2 == 8) {
    			message.channel.send("Wii Sports Resort");
        	}
    		if (face2 == 9) {
    			message.channel.send("Wii Music");
        	}
		if (face2 == 10) {
    			message.channel.send("Wii Play Motion");
        	}
		if (face2 == 11) {
    			message.channel.send("Wii Party");
        	}
		if (face2 == 12) {
    			message.channel.send("Mario Kart Fun");
        	}
		if (face2 == 13) {
    			message.channel.send("Mario Kart Wii Hack Pack");
        	}
		if (face2 == 14) {
    			message.channel.send("Super Monkey Ball Banana Blitz");
        	}
		if (face2 == 15) {
    			message.channel.send("Super Monkey Ball Step & Roll");
        	}
    		if (face2 == 16) {
    			message.channel.send("Mario Super Sluggers");
        	}
		if (face2 == 17) {
    			message.channel.send("Mario Strikers Charged");
        	}
		if (face2 == 18) {
    			message.channel.send("Fortune Street");
        	}
		if (face2 == 19) {
    			message.channel.send("Punch-Out!!");
        	}
		if (face2 == 20) {
    			message.channel.send("Mario Sports Mix");
        	}
		if (face2 == 21) {
    			message.channel.send("Donkey Kong Country Returns");
        	}
    		if (face2 == 22) {
    			message.channel.send("Kirby's Epic Yarn");
        	}
		if (face2 == 23) {
    			message.channel.send("Kirby's Return To Dream Land");
        	}
		if (face2 == 24) {
    			message.channel.send("WarioWare: Smooth Moves");
        	}
		if (face2 == 25) {
    			message.channel.send("Mario & Sonic at the Olympic Games");
        	}
		if (face2 == 26) {
    			message.channel.send("Mario & Sonic at the Olympic Winter Games");
        	}
		if (face2 == 27) {
    			message.channel.send("Mario & Sonic at the London 2012 Olympic Games");
        	}
		if (face2 == 28) {
    			message.channel.send("Rhythm Heaven Fever");
        	}
		if (face2 == 29) {
    			message.channel.send("Donkey Kong Barrel Blast");
        	}
		if (face2 == 30) {
    			message.channel.send("Namco Museum Remix");
        	}
		if (face2 == 31) {
    			message.channel.send("Rayman Raving Rabbids");
        	}
		if (face2 == 32) {
    			message.channel.send("Rayman Raving Rabbids 2");
        	}
		if (face2 == 33) {
    			message.channel.send("Rabbids TV Party");
        	}
		if (face2 == 34) {
    			message.channel.send("Rabbids Go Home");
        	}
		if (face2 == 35) {
    			message.channel.send("Rayman Origins");
        	}
		if (face2 == 36) {
    			message.channel.send("New Super Mario Bros Wii");
        	}
		if (face2 == 37) {
    			message.channel.send("Newer Super Mario Bros Wii");
        	}
		if (face2 == 38) {
    			message.channel.send("Another Super Mario Bros Wii");
        	}
		if (face2 == 39) {
    			message.channel.send("New Summer Sun Bros Wii");
        	}
		if (face2 == 40) {
    			message.channel.send("M&M's Kart Racing");
        	}
		if (face2 == 41) {
    			message.channel.send("Deca Sports");
        	}
		if (face2 == 42) {
    			message.channel.send("GoldenEye Wii");
        	}
		if (face2 == 43) {
    			message.channel.send("some call of duty game idk");
        	}
		if (face2 == 44) {
    			message.channel.send("Brawl Minus");
        	}
		if (face2 == 45) {
    			message.channel.send("Hasbro Family Game Night 3");
        	}
		if (face2 == 46) {
    			message.channel.send("Guilty Gear XX Accent Core +");
        	}
		if (face2 == 47) {
    			message.channel.send("Tatsunoko vs Capcom");
        	}
		if (face2 == 48) {
    			message.channel.send("Chicken Little: Ace in Action");
        	}
		if (face2 == 49) {
    			message.channel.send("Trauma Center: New Blood");
        	}
		if (face2 == 50) {
    			message.channel.send("Boom Blox");
        	}
		if (face2 == 51) {
    			message.channel.send("Pokemon Battle Revolution");
        	}
	}
	if (message_content == ("/game all")) {
		var face2 = Math.floor(Math.random() * 190);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("Goldeneye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode 1 Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 32) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 33) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 34) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 35) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 36) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 37) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 38) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 39) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 40) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 41) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 42) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 43) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 44) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 45) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 46) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 47) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 48) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 49) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 50) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 51) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 52) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 53) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 56) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 57) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 58) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 59) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 60) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 61) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 62) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 63) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 64) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 65) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 66) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 67) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 68) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 69) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 70) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 71) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 72) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 73) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 74) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 75) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 76) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 77) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 78) {
    			message.channel.send("Crash Nitro Kart");
        	}
    		if (face2 == 79) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 80) {
    			message.channel.send("Mario Party 8");
        	}
    		if (face2 == 81) {
    			message.channel.send("Mario Party 9");
        	}
		if (face2 == 82) {
    			message.channel.send("Mario Kart Wii");
        	}
		if (face2 == 83) {
    			message.channel.send("Super Smash Bros Brawl");
        	}
		if (face2 == 84) {
    			message.channel.send("Project M");
        	}
		if (face2 == 85) {
    			message.channel.send("Dragon Ball Z Budokai 3");
        	}
		if (face2 == 86) {
    			message.channel.send("Wii Sports");
        	}
		if (face2 == 87) {
			message.channel.send("Wii Play");
        	}
		if (face2 == 88) {
    			message.channel.send("Wii Sports Resort");
        	}
    		if (face2 == 89) {
    			message.channel.send("Wii Music");
        	}
		if (face2 == 90) {
    			message.channel.send("Wii Play Motion");
        	}
		if (face2 == 91) {
    			message.channel.send("Wii Party");
        	}
		if (face2 == 92) {
    			message.channel.send("Mario Kart Fun");
        	}
		if (face2 == 93) {
    			message.channel.send("Mario Kart Wii Hack Pack");
        	}
		if (face2 == 94) {
    			message.channel.send("Super Monkey Ball Banana Blitz");
        	}
		if (face2 == 95) {
    			message.channel.send("Super Monkey Ball Step & Roll");
        	}
    		if (face2 == 96) {
    			message.channel.send("Mario Super Sluggers");
        	}
		if (face2 == 97) {
    			message.channel.send("Mario Strikers Charged");
        	}
		if (face2 == 98) {
    			message.channel.send("Fortune Street");
        	}
		if (face2 == 99) {
    			message.channel.send("Punch-Out!!");
        	}
		if (face2 == 100) {
    			message.channel.send("Mrio Sports Mix");
        	}
		if (face2 == 101) {
    			message.channel.send("Donkey Kong Country Returns");
        	}
    		if (face2 == 102) {
    			message.channel.send("Kirby's Epic Yarn");
        	}
		if (face2 == 103) {
    			message.channel.send("Kirby's Return To Dream Land");
        	}
		if (face2 == 104) {
    			message.channel.send("WarioWare: Smooth Moves");
        	}
		if (face2 == 105) {
    			message.channel.send("Rhythm Heaven Fever");
        	}
		if (face2 == 106) {
    			message.channel.send("Mario & Sonic at the Olympic Games");
        	}
		if (face2 == 107) {
    			message.channel.send("Mario & Sonic at the Olympic Winter Games");
        	}
		if (face2 == 108) {
    			message.channel.send("Mario & Sonic at the London 2012 Olympic Games");
        	}
		if (face2 == 109) {
    			message.channel.send("Donkey Kong Barrel Blast");
        	}
		if (face2 == 110) {
    			message.channel.send("Namco Museum Remix");
        	}
		if (face2 == 111) {
    			message.channel.send("Rayman Raving Rabbids");
        	}
		if (face2 == 112) {
    			message.channel.send("Rayman Raving Rabbids 2");
        	}
		if (face2 == 113) {
    			message.channel.send("Rabbids TV Party");
        	}
		if (face2 == 114) {
    			message.channel.send("Rabbids Go Home");
        	}
		if (face2 == 115) {
    			message.channel.send("Rayman Origins");
        	}
		if (face2 == 116) {
    			message.channel.send("New Super Mario Bros Wii");
        	}
		if (face2 == 117) {
    			message.channel.send("Newer Super Mario Bros Wii");
        	}
		if (face2 == 118) {
    			message.channel.send("Another Super Mario Bros Wii");
        	}
		if (face2 == 119) {
    			message.channel.send("New Summer Sun Bros Wii");
        	}
		if (face2 == 120) {
    			message.channel.send("M&M's Kart Racing");
        	}
		if (face2 == 121) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 122) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 123) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 124) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 125) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 126) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 127) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 128) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 129) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 130) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 131) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 132) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 133) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 134) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 135) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 136) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 137) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 138) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 139) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 140) {
    			message.channel.send("The New Tetris");
        	}
		if (face2 == 141) {
    			message.channel.send("Deca Sports");
        	}
		if (face2 == 142) {
    			message.channel.send("GoldenEye Wii");
        	}
		if (face2 == 143) {
    			message.channel.send("some call of duty game idk");
        	}
		if (face2 == 144) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 145) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 146) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 147) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 148) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 149) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 150) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 151) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 152) {
    			message.channel.send("Madden 2002");
		}
		if (face2 == 153) {
    			message.channel.send("Perfect Dark");
		}
		if (face2 == 154) {
    			message.channel.send("StarFox 64");
		}
		if (face2 == 155) {
    			message.channel.send("Jet Force Gemini");
		}
		if (face2 == 156) {
    			message.channel.send("Sonic the Fighters");
        	}
		if (face2 == 157) {
    			message.channel.send("Smashing Drive");
        	}
		if (face2 == 158) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 159) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 160) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 161) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 162) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 163) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 164) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 165) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 166) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 167) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 168) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 169) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 170) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 171) {
    			message.channel.send("Brawl Minus");
        	}
		if (face2 == 172) {
    			message.channel.send("Hasbro Family Game Night 3");
        	}
		if (face2 == 173) {
    			message.channel.send("Guilty Gear XX Accent Core +");
        	}
		if (face2 == 174) {
    			message.channel.send("Tatsunoko vs Capcom");
        	}
		if (face2 == 175) {
    			message.channel.send("Chicken Little: Ace in Action");
        	}
		if (face2 == 176) {
    			message.channel.send("Trauma Center: New Blood");
        	}
		if (face2 == 177) {
    			message.channel.send("Boom Blox");
        	}
		if (face2 == 178) {
    			message.channel.send("Pokemon Battle Revolution");
        	}
		if (face2 == 179) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 180) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 181) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 182) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 183) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 184) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 185) {
    			message.channel.send("Mario Tennis");
		}
		if (face2 == 186) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 187) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 188) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 189) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content.includes("which game should")) {
		var face2 = Math.floor(Math.random() * 190);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("Goldeneye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode 1 Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 32) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 33) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 34) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 35) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 36) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 37) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 38) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 39) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 40) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 41) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 42) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 43) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 44) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 45) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 46) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 47) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 48) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 49) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 50) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 51) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 52) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 53) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 56) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 57) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 58) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 59) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 60) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 61) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 62) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 63) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 64) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 65) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 66) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 67) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 68) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 69) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 70) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 71) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 72) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 73) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 74) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 75) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 76) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 77) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 78) {
    			message.channel.send("Crash Nitro Kart");
        	}
    		if (face2 == 79) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 80) {
    			message.channel.send("Mario Party 8");
        	}
    		if (face2 == 81) {
    			message.channel.send("Mario Party 9");
        	}
		if (face2 == 82) {
    			message.channel.send("Mario Kart Wii");
        	}
		if (face2 == 83) {
    			message.channel.send("Super Smash Bros Brawl");
        	}
		if (face2 == 84) {
    			message.channel.send("Project M");
        	}
		if (face2 == 85) {
    			message.channel.send("Dragon Ball Z Budokai 3");
        	}
		if (face2 == 86) {
    			message.channel.send("Wii Sports");
        	}
		if (face2 == 87) {
			message.channel.send("Wii Play");
        	}
		if (face2 == 88) {
    			message.channel.send("Wii Sports Resort");
        	}
    		if (face2 == 89) {
    			message.channel.send("Wii Music");
        	}
		if (face2 == 90) {
    			message.channel.send("Wii Play Motion");
        	}
		if (face2 == 91) {
    			message.channel.send("Wii Party");
        	}
		if (face2 == 92) {
    			message.channel.send("Mario Kart Fun");
        	}
		if (face2 == 93) {
    			message.channel.send("Mario Kart Wii Hack Pack");
        	}
		if (face2 == 94) {
    			message.channel.send("Super Monkey Ball Banana Blitz");
        	}
		if (face2 == 95) {
    			message.channel.send("Super Monkey Ball Step & Roll");
        	}
    		if (face2 == 96) {
    			message.channel.send("Mario Super Sluggers");
        	}
		if (face2 == 97) {
    			message.channel.send("Mario Strikers Charged");
        	}
		if (face2 == 98) {
    			message.channel.send("Fortune Street");
        	}
		if (face2 == 99) {
    			message.channel.send("Punch-Out!!");
        	}
		if (face2 == 100) {
    			message.channel.send("Mrio Sports Mix");
        	}
		if (face2 == 101) {
    			message.channel.send("Donkey Kong Country Returns");
        	}
    		if (face2 == 102) {
    			message.channel.send("Kirby's Epic Yarn");
        	}
		if (face2 == 103) {
    			message.channel.send("Kirby's Return To Dream Land");
        	}
		if (face2 == 104) {
    			message.channel.send("WarioWare: Smooth Moves");
        	}
		if (face2 == 105) {
    			message.channel.send("Rhythm Heaven Fever");
        	}
		if (face2 == 106) {
    			message.channel.send("Mario & Sonic at the Olympic Games");
        	}
		if (face2 == 107) {
    			message.channel.send("Mario & Sonic at the Olympic Winter Games");
        	}
		if (face2 == 108) {
    			message.channel.send("Mario & Sonic at the London 2012 Olympic Games");
        	}
		if (face2 == 109) {
    			message.channel.send("Donkey Kong Barrel Blast");
        	}
		if (face2 == 110) {
    			message.channel.send("Namco Museum Remix");
        	}
		if (face2 == 111) {
    			message.channel.send("Rayman Raving Rabbids");
        	}
		if (face2 == 112) {
    			message.channel.send("Rayman Raving Rabbids 2");
        	}
		if (face2 == 113) {
    			message.channel.send("Rabbids TV Party");
        	}
		if (face2 == 114) {
    			message.channel.send("Rabbids Go Home");
        	}
		if (face2 == 115) {
    			message.channel.send("Rayman Origins");
        	}
		if (face2 == 116) {
    			message.channel.send("New Super Mario Bros Wii");
        	}
		if (face2 == 117) {
    			message.channel.send("Newer Super Mario Bros Wii");
        	}
		if (face2 == 118) {
    			message.channel.send("Another Super Mario Bros Wii");
        	}
		if (face2 == 119) {
    			message.channel.send("New Summer Sun Bros Wii");
        	}
		if (face2 == 120) {
    			message.channel.send("M&M's Kart Racing");
        	}
		if (face2 == 121) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 122) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 123) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 124) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 125) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 126) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 127) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 128) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 129) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 130) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 131) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 132) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 133) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 134) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 135) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 136) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 137) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 138) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 139) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 140) {
    			message.channel.send("The New Tetris");
        	}
		if (face2 == 141) {
    			message.channel.send("Deca Sports");
        	}
		if (face2 == 142) {
    			message.channel.send("GoldenEye Wii");
        	}
		if (face2 == 143) {
    			message.channel.send("some call of duty game idk");
        	}
		if (face2 == 144) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 145) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 146) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 147) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 148) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 149) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 150) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 151) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 152) {
    			message.channel.send("Madden 2002");
		}
		if (face2 == 153) {
    			message.channel.send("Perfect Dark");
		}
		if (face2 == 154) {
    			message.channel.send("StarFox 64");
		}
		if (face2 == 155) {
    			message.channel.send("Jet Force Gemini");
		}
		if (face2 == 156) {
    			message.channel.send("Sonic the Fighters");
        	}
		if (face2 == 157) {
    			message.channel.send("Smashing Drive");
        	}
		if (face2 == 158) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 159) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 160) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 161) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 162) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 163) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 164) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 165) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 166) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 167) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 168) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 169) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 170) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 171) {
    			message.channel.send("Brawl Minus");
        	}
		if (face2 == 172) {
    			message.channel.send("Hasbro Family Game Night 3");
        	}
		if (face2 == 173) {
    			message.channel.send("Guilty Gear XX Accent Core +");
        	}
		if (face2 == 174) {
    			message.channel.send("Tatsunoko vs Capcom");
        	}
		if (face2 == 175) {
    			message.channel.send("Chicken Little: Ace in Action");
        	}
		if (face2 == 176) {
    			message.channel.send("Trauma Center: New Blood");
        	}
		if (face2 == 177) {
    			message.channel.send("Boom Blox");
        	}
		if (face2 == 178) {
    			message.channel.send("Pokemon Battle Revolution");
        	}
		if (face2 == 179) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 180) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 181) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 182) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 183) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 184) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 185) {
    			message.channel.send("Mario Tennis");
		}
		if (face2 == 186) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 187) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 188) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 189) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content.includes("what game should")) {
		var face2 = Math.floor(Math.random() * 190);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("Goldeneye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode 1 Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 32) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 33) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 34) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 35) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 36) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 37) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 38) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 39) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 40) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 41) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 42) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 43) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 44) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 45) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 46) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 47) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 48) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 49) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 50) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 51) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 52) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 53) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 56) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 57) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 58) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 59) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 60) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 61) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 62) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 63) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 64) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 65) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 66) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 67) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 68) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 69) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 70) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 71) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 72) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 73) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 74) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 75) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 76) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 77) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 78) {
    			message.channel.send("Crash Nitro Kart");
        	}
    		if (face2 == 79) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 80) {
    			message.channel.send("Mario Party 8");
        	}
    		if (face2 == 81) {
    			message.channel.send("Mario Party 9");
        	}
		if (face2 == 82) {
    			message.channel.send("Mario Kart Wii");
        	}
		if (face2 == 83) {
    			message.channel.send("Super Smash Bros Brawl");
        	}
		if (face2 == 84) {
    			message.channel.send("Project M");
        	}
		if (face2 == 85) {
    			message.channel.send("Dragon Ball Z Budokai 3");
        	}
		if (face2 == 86) {
    			message.channel.send("Wii Sports");
        	}
		if (face2 == 87) {
			message.channel.send("Wii Play");
        	}
		if (face2 == 88) {
    			message.channel.send("Wii Sports Resort");
        	}
    		if (face2 == 89) {
    			message.channel.send("Wii Music");
        	}
		if (face2 == 90) {
    			message.channel.send("Wii Play Motion");
        	}
		if (face2 == 91) {
    			message.channel.send("Wii Party");
        	}
		if (face2 == 92) {
    			message.channel.send("Mario Kart Fun");
        	}
		if (face2 == 93) {
    			message.channel.send("Mario Kart Wii Hack Pack");
        	}
		if (face2 == 94) {
    			message.channel.send("Super Monkey Ball Banana Blitz");
        	}
		if (face2 == 95) {
    			message.channel.send("Super Monkey Ball Step & Roll");
        	}
    		if (face2 == 96) {
    			message.channel.send("Mario Super Sluggers");
        	}
		if (face2 == 97) {
    			message.channel.send("Mario Strikers Charged");
        	}
		if (face2 == 98) {
    			message.channel.send("Fortune Street");
        	}
		if (face2 == 99) {
    			message.channel.send("Punch-Out!!");
        	}
		if (face2 == 100) {
    			message.channel.send("Mrio Sports Mix");
        	}
		if (face2 == 101) {
    			message.channel.send("Donkey Kong Country Returns");
        	}
    		if (face2 == 102) {
    			message.channel.send("Kirby's Epic Yarn");
        	}
		if (face2 == 103) {
    			message.channel.send("Kirby's Return To Dream Land");
        	}
		if (face2 == 104) {
    			message.channel.send("WarioWare: Smooth Moves");
        	}
		if (face2 == 105) {
    			message.channel.send("Rhythm Heaven Fever");
        	}
		if (face2 == 106) {
    			message.channel.send("Mario & Sonic at the Olympic Games");
        	}
		if (face2 == 107) {
    			message.channel.send("Mario & Sonic at the Olympic Winter Games");
        	}
		if (face2 == 108) {
    			message.channel.send("Mario & Sonic at the London 2012 Olympic Games");
        	}
		if (face2 == 109) {
    			message.channel.send("Donkey Kong Barrel Blast");
        	}
		if (face2 == 110) {
    			message.channel.send("Namco Museum Remix");
        	}
		if (face2 == 111) {
    			message.channel.send("Rayman Raving Rabbids");
        	}
		if (face2 == 112) {
    			message.channel.send("Rayman Raving Rabbids 2");
        	}
		if (face2 == 113) {
    			message.channel.send("Rabbids TV Party");
        	}
		if (face2 == 114) {
    			message.channel.send("Rabbids Go Home");
        	}
		if (face2 == 115) {
    			message.channel.send("Rayman Origins");
        	}
		if (face2 == 116) {
    			message.channel.send("New Super Mario Bros Wii");
        	}
		if (face2 == 117) {
    			message.channel.send("Newer Super Mario Bros Wii");
        	}
		if (face2 == 118) {
    			message.channel.send("Another Super Mario Bros Wii");
        	}
		if (face2 == 119) {
    			message.channel.send("New Summer Sun Bros Wii");
        	}
		if (face2 == 120) {
    			message.channel.send("M&M's Kart Racing");
        	}
		if (face2 == 121) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 122) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 123) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 124) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 125) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 126) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 127) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 128) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 129) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 130) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 131) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 132) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 133) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 134) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 135) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 136) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 137) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 138) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 139) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 140) {
    			message.channel.send("The New Tetris");
        	}
		if (face2 == 141) {
    			message.channel.send("Deca Sports");
        	}
		if (face2 == 142) {
    			message.channel.send("GoldenEye Wii");
        	}
		if (face2 == 143) {
    			message.channel.send("some call of duty game idk");
        	}
		if (face2 == 144) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 145) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 146) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 147) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 148) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 149) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 150) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 151) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 152) {
    			message.channel.send("Madden 2002");
		}
		if (face2 == 153) {
    			message.channel.send("Perfect Dark");
		}
		if (face2 == 154) {
    			message.channel.send("StarFox 64");
		}
		if (face2 == 155) {
    			message.channel.send("Jet Force Gemini");
		}
		if (face2 == 158) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 159) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 160) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 161) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 162) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 163) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 164) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 165) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 166) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 167) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 168) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 169) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 170) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 171) {
    			message.channel.send("Brawl Minus");
        	}
		if (face2 == 172) {
    			message.channel.send("Hasbro Family Game Night 3");
        	}
		if (face2 == 173) {
    			message.channel.send("Guilty Gear XX Accent Core +");
        	}
		if (face2 == 174) {
    			message.channel.send("Tatsunoko vs Capcom");
        	}
		if (face2 == 175) {
    			message.channel.send("Chicken Little: Ace in Action");
        	}
		if (face2 == 176) {
    			message.channel.send("Trauma Center: New Blood");
        	}
		if (face2 == 177) {
    			message.channel.send("Boom Blox");
        	}
		if (face2 == 178) {
    			message.channel.send("Pokemon Battle Revolution");
        	}
		if (face2 == 179) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 180) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 181) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 182) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 183) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 184) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 185) {
    			message.channel.send("Mario Tennis");
		}
		if (face2 == 186) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 187) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 188) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 189) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content == ("/game any")) {
		var face2 = Math.floor(Math.random() * 190);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("Goldeneye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode 1 Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 32) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 33) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 34) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 35) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 36) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 37) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 38) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 39) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 40) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 41) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 42) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 43) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 44) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 45) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 46) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 47) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 48) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 49) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 50) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 51) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 52) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 53) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 56) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 57) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 58) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 59) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 60) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 61) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 62) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 63) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 64) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 65) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 66) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 67) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 68) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 69) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 70) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 71) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 72) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 73) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 74) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 75) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 76) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 77) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 78) {
    			message.channel.send("Crash Nitro Kart");
        	}
    		if (face2 == 79) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 80) {
    			message.channel.send("Mario Party 8");
        	}
    		if (face2 == 81) {
    			message.channel.send("Mario Party 9");
        	}
		if (face2 == 82) {
    			message.channel.send("Mario Kart Wii");
        	}
		if (face2 == 83) {
    			message.channel.send("Super Smash Bros Brawl");
        	}
		if (face2 == 84) {
    			message.channel.send("Project M");
        	}
		if (face2 == 85) {
    			message.channel.send("Dragon Ball Z Budokai 3");
        	}
		if (face2 == 86) {
    			message.channel.send("Wii Sports");
        	}
		if (face2 == 87) {
			message.channel.send("Wii Play");
        	}
		if (face2 == 88) {
    			message.channel.send("Wii Sports Resort");
        	}
    		if (face2 == 89) {
    			message.channel.send("Wii Music");
        	}
		if (face2 == 90) {
    			message.channel.send("Wii Play Motion");
        	}
		if (face2 == 91) {
    			message.channel.send("Wii Party");
        	}
		if (face2 == 92) {
    			message.channel.send("Mario Kart Fun");
        	}
		if (face2 == 93) {
    			message.channel.send("Mario Kart Wii Hack Pack");
        	}
		if (face2 == 94) {
    			message.channel.send("Super Monkey Ball Banana Blitz");
        	}
		if (face2 == 95) {
    			message.channel.send("Super Monkey Ball Step & Roll");
        	}
    		if (face2 == 96) {
    			message.channel.send("Mario Super Sluggers");
        	}
		if (face2 == 97) {
    			message.channel.send("Mario Strikers Charged");
        	}
		if (face2 == 98) {
    			message.channel.send("Fortune Street");
        	}
		if (face2 == 99) {
    			message.channel.send("Punch-Out!!");
        	}
		if (face2 == 100) {
    			message.channel.send("Mrio Sports Mix");
        	}
		if (face2 == 101) {
    			message.channel.send("Donkey Kong Country Returns");
        	}
    		if (face2 == 102) {
    			message.channel.send("Kirby's Epic Yarn");
        	}
		if (face2 == 103) {
    			message.channel.send("Kirby's Return To Dream Land");
        	}
		if (face2 == 104) {
    			message.channel.send("WarioWare: Smooth Moves");
        	}
		if (face2 == 105) {
    			message.channel.send("Rhythm Heaven Fever");
        	}
		if (face2 == 106) {
    			message.channel.send("Mario & Sonic at the Olympic Games");
        	}
		if (face2 == 107) {
    			message.channel.send("Mario & Sonic at the Olympic Winter Games");
        	}
		if (face2 == 108) {
    			message.channel.send("Mario & Sonic at the London 2012 Olympic Games");
        	}
		if (face2 == 109) {
    			message.channel.send("Donkey Kong Barrel Blast");
        	}
		if (face2 == 110) {
    			message.channel.send("Namco Museum Remix");
        	}
		if (face2 == 111) {
    			message.channel.send("Rayman Raving Rabbids");
        	}
		if (face2 == 112) {
    			message.channel.send("Rayman Raving Rabbids 2");
        	}
		if (face2 == 113) {
    			message.channel.send("Rabbids TV Party");
        	}
		if (face2 == 114) {
    			message.channel.send("Rabbids Go Home");
        	}
		if (face2 == 115) {
    			message.channel.send("Rayman Origins");
        	}
		if (face2 == 116) {
    			message.channel.send("New Super Mario Bros Wii");
        	}
		if (face2 == 117) {
    			message.channel.send("Newer Super Mario Bros Wii");
        	}
		if (face2 == 118) {
    			message.channel.send("Another Super Mario Bros Wii");
        	}
		if (face2 == 119) {
    			message.channel.send("New Summer Sun Bros Wii");
        	}
		if (face2 == 120) {
    			message.channel.send("M&M's Kart Racing");
        	}
		if (face2 == 121) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 122) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 123) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 124) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 125) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 126) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 127) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 128) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 129) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 130) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 131) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 132) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 133) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 134) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 135) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 136) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 137) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 138) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 139) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 140) {
    			message.channel.send("The New Tetris");
        	}
		if (face2 == 141) {
    			message.channel.send("Deca Sports");
        	}
		if (face2 == 142) {
    			message.channel.send("GoldenEye Wii");
        	}
		if (face2 == 143) {
    			message.channel.send("some call of duty game idk");
        	}
		if (face2 == 144) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 145) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 146) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 147) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 148) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 149) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 150) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 151) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 152) {
    			message.channel.send("Madden 2002");
		}
		if (face2 == 153) {
    			message.channel.send("Perfect Dark");
		}
		if (face2 == 154) {
    			message.channel.send("StarFox 64");
		}
		if (face2 == 155) {
    			message.channel.send("Jet Force Gemini");
		}
		if (face2 == 158) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 159) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 160) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 161) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 162) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 163) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 164) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 165) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 166) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 167) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 168) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 169) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 170) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 171) {
    			message.channel.send("Brawl Minus");
        	}
		if (face2 == 172) {
    			message.channel.send("Hasbro Family Game Night 3");
        	}
		if (face2 == 173) {
    			message.channel.send("Guilty Gear XX Accent Core +");
        	}
		if (face2 == 174) {
    			message.channel.send("Tatsunoko vs Capcom");
        	}
		if (face2 == 175) {
    			message.channel.send("Chicken Little: Ace in Action");
        	}
		if (face2 == 176) {
    			message.channel.send("Trauma Center: New Blood");
        	}
		if (face2 == 177) {
    			message.channel.send("Boom Blox");
        	}
		if (face2 == 178) {
    			message.channel.send("Pokemon Battle Revolution");
        	}
		if (face2 == 179) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 180) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 181) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 182) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 183) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 184) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 185) {
    			message.channel.send("Mario Tennis");
		}
		if (face2 == 186) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 187) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 188) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 189) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content == ("/seemein")) {
		var face2 = Math.floor(Math.random() * 190);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("Goldeneye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode 1 Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 32) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 33) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 34) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 35) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 36) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 37) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 38) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 39) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 40) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 41) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 42) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 43) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 44) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 45) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 46) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 47) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 48) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 49) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 50) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 51) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 52) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 53) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 56) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 57) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 58) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 59) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 60) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 61) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 62) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 63) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 64) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 65) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 66) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 67) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 68) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 69) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 70) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 71) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 72) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 73) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 74) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 75) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 76) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 77) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 78) {
    			message.channel.send("Crash Nitro Kart");
        	}
    		if (face2 == 79) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 80) {
    			message.channel.send("Mario Party 8");
        	}
    		if (face2 == 81) {
    			message.channel.send("Mario Party 9");
        	}
		if (face2 == 82) {
    			message.channel.send("Mario Kart Wii");
        	}
		if (face2 == 83) {
    			message.channel.send("Super Smash Bros Brawl");
        	}
		if (face2 == 84) {
    			message.channel.send("Project M");
        	}
		if (face2 == 85) {
    			message.channel.send("Dragon Ball Z Budokai 3");
        	}
		if (face2 == 86) {
    			message.channel.send("Wii Sports");
        	}
		if (face2 == 87) {
			message.channel.send("Wii Play");
        	}
		if (face2 == 88) {
    			message.channel.send("Wii Sports Resort");
        	}
    		if (face2 == 89) {
    			message.channel.send("Wii Music");
        	}
		if (face2 == 90) {
    			message.channel.send("Wii Play Motion");
        	}
		if (face2 == 91) {
    			message.channel.send("Wii Party");
        	}
		if (face2 == 92) {
    			message.channel.send("Mario Kart Fun");
        	}
		if (face2 == 93) {
    			message.channel.send("Mario Kart Wii Hack Pack");
        	}
		if (face2 == 94) {
    			message.channel.send("Super Monkey Ball Banana Blitz");
        	}
		if (face2 == 95) {
    			message.channel.send("Super Monkey Ball Step & Roll");
        	}
    		if (face2 == 96) {
    			message.channel.send("Mario Super Sluggers");
        	}
		if (face2 == 97) {
    			message.channel.send("Mario Strikers Charged");
        	}
		if (face2 == 98) {
    			message.channel.send("Fortune Street");
        	}
		if (face2 == 99) {
    			message.channel.send("Punch-Out!!");
        	}
		if (face2 == 100) {
    			message.channel.send("Mrio Sports Mix");
        	}
		if (face2 == 101) {
    			message.channel.send("Donkey Kong Country Returns");
        	}
    		if (face2 == 102) {
    			message.channel.send("Kirby's Epic Yarn");
        	}
		if (face2 == 103) {
    			message.channel.send("Kirby's Return To Dream Land");
        	}
		if (face2 == 104) {
    			message.channel.send("WarioWare: Smooth Moves");
        	}
		if (face2 == 105) {
    			message.channel.send("Rhythm Heaven Fever");
        	}
		if (face2 == 106) {
    			message.channel.send("Mario & Sonic at the Olympic Games");
        	}
		if (face2 == 107) {
    			message.channel.send("Mario & Sonic at the Olympic Winter Games");
        	}
		if (face2 == 108) {
    			message.channel.send("Mario & Sonic at the London 2012 Olympic Games");
        	}
		if (face2 == 109) {
    			message.channel.send("Donkey Kong Barrel Blast");
        	}
		if (face2 == 110) {
    			message.channel.send("Namco Museum Remix");
        	}
		if (face2 == 111) {
    			message.channel.send("Rayman Raving Rabbids");
        	}
		if (face2 == 112) {
    			message.channel.send("Rayman Raving Rabbids 2");
        	}
		if (face2 == 113) {
    			message.channel.send("Rabbids TV Party");
        	}
		if (face2 == 114) {
    			message.channel.send("Rabbids Go Home");
        	}
		if (face2 == 115) {
    			message.channel.send("Rayman Origins");
        	}
		if (face2 == 116) {
    			message.channel.send("New Super Mario Bros Wii");
        	}
		if (face2 == 117) {
    			message.channel.send("Newer Super Mario Bros Wii");
        	}
		if (face2 == 118) {
    			message.channel.send("Another Super Mario Bros Wii");
        	}
		if (face2 == 119) {
    			message.channel.send("New Summer Sun Bros Wii");
        	}
		if (face2 == 120) {
    			message.channel.send("M&M's Kart Racing");
        	}
		if (face2 == 121) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 122) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 123) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 124) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 125) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 126) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 127) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 128) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 129) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 130) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 131) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 132) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 133) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 134) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 135) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 136) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 137) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 138) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 139) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 140) {
    			message.channel.send("The New Tetris");
        	}
		if (face2 == 141) {
    			message.channel.send("Deca Sports");
        	}
		if (face2 == 142) {
    			message.channel.send("GoldenEye Wii");
        	}
		if (face2 == 143) {
    			message.channel.send("some call of duty game idk");
        	}
		if (face2 == 144) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 145) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 146) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 147) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 148) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 149) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 150) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 151) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 152) {
    			message.channel.send("Madden 2002");
		}
		if (face2 == 153) {
    			message.channel.send("Perfect Dark");
		}
		if (face2 == 154) {
    			message.channel.send("StarFox 64");
		}
		if (face2 == 155) {
    			message.channel.send("Jet Force Gemini");
		}
		if (face2 == 158) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 159) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 160) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 161) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 162) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 163) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 164) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 165) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 166) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 167) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 168) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 169) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 170) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 171) {
    			message.channel.send("Brawl Minus");
        	}
		if (face2 == 172) {
    			message.channel.send("Hasbro Family Game Night 3");
        	}
		if (face2 == 173) {
    			message.channel.send("Guilty Gear XX Accent Core +");
        	}
		if (face2 == 174) {
    			message.channel.send("Tatsunoko vs Capcom");
        	}
		if (face2 == 175) {
    			message.channel.send("Chicken Little: Ace in Action");
        	}
		if (face2 == 176) {
    			message.channel.send("Trauma Center: New Blood");
        	}
		if (face2 == 177) {
    			message.channel.send("Boom Blox");
        	}
		if (face2 == 178) {
    			message.channel.send("Pokemon Battle Revolution");
        	}
		if (face2 == 179) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 180) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 181) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 182) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 183) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 184) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 185) {
    			message.channel.send("Mario Tennis");
		}
		if (face2 == 186) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 187) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 188) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 189) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content == ("/seemein all")) {
		var face2 = Math.floor(Math.random() * 190);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("Goldeneye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode 1 Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 32) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 33) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 34) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 35) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 36) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 37) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 38) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 39) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 40) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 41) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 42) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 43) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 44) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 45) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 46) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 47) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 48) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 49) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 50) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 51) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 52) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 53) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 56) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 57) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 58) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 59) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 60) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 61) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 62) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 63) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 64) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 65) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 66) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 67) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 68) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 69) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 70) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 71) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 72) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 73) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 74) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 75) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 76) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 77) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 78) {
    			message.channel.send("Crash Nitro Kart");
        	}
    		if (face2 == 79) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 80) {
    			message.channel.send("Mario Party 8");
        	}
    		if (face2 == 81) {
    			message.channel.send("Mario Party 9");
        	}
		if (face2 == 82) {
    			message.channel.send("Mario Kart Wii");
        	}
		if (face2 == 83) {
    			message.channel.send("Super Smash Bros Brawl");
        	}
		if (face2 == 84) {
    			message.channel.send("Project M");
        	}
		if (face2 == 85) {
    			message.channel.send("Dragon Ball Z Budokai 3");
        	}
		if (face2 == 86) {
    			message.channel.send("Wii Sports");
        	}
		if (face2 == 87) {
			message.channel.send("Wii Play");
        	}
		if (face2 == 88) {
    			message.channel.send("Wii Sports Resort");
        	}
    		if (face2 == 89) {
    			message.channel.send("Wii Music");
        	}
		if (face2 == 90) {
    			message.channel.send("Wii Play Motion");
        	}
		if (face2 == 91) {
    			message.channel.send("Wii Party");
        	}
		if (face2 == 92) {
    			message.channel.send("Mario Kart Fun");
        	}
		if (face2 == 93) {
    			message.channel.send("Mario Kart Wii Hack Pack");
        	}
		if (face2 == 94) {
    			message.channel.send("Super Monkey Ball Banana Blitz");
        	}
		if (face2 == 95) {
    			message.channel.send("Super Monkey Ball Step & Roll");
        	}
    		if (face2 == 96) {
    			message.channel.send("Mario Super Sluggers");
        	}
		if (face2 == 97) {
    			message.channel.send("Mario Strikers Charged");
        	}
		if (face2 == 98) {
    			message.channel.send("Fortune Street");
        	}
		if (face2 == 99) {
    			message.channel.send("Punch-Out!!");
        	}
		if (face2 == 100) {
    			message.channel.send("Mrio Sports Mix");
        	}
		if (face2 == 101) {
    			message.channel.send("Donkey Kong Country Returns");
        	}
    		if (face2 == 102) {
    			message.channel.send("Kirby's Epic Yarn");
        	}
		if (face2 == 103) {
    			message.channel.send("Kirby's Return To Dream Land");
        	}
		if (face2 == 104) {
    			message.channel.send("WarioWare: Smooth Moves");
        	}
		if (face2 == 105) {
    			message.channel.send("Rhythm Heaven Fever");
        	}
		if (face2 == 106) {
    			message.channel.send("Mario & Sonic at the Olympic Games");
        	}
		if (face2 == 107) {
    			message.channel.send("Mario & Sonic at the Olympic Winter Games");
        	}
		if (face2 == 108) {
    			message.channel.send("Mario & Sonic at the London 2012 Olympic Games");
        	}
		if (face2 == 109) {
    			message.channel.send("Donkey Kong Barrel Blast");
        	}
		if (face2 == 110) {
    			message.channel.send("Namco Museum Remix");
        	}
		if (face2 == 111) {
    			message.channel.send("Rayman Raving Rabbids");
        	}
		if (face2 == 112) {
    			message.channel.send("Rayman Raving Rabbids 2");
        	}
		if (face2 == 113) {
    			message.channel.send("Rabbids TV Party");
        	}
		if (face2 == 114) {
    			message.channel.send("Rabbids Go Home");
        	}
		if (face2 == 115) {
    			message.channel.send("Rayman Origins");
        	}
		if (face2 == 116) {
    			message.channel.send("New Super Mario Bros Wii");
        	}
		if (face2 == 117) {
    			message.channel.send("Newer Super Mario Bros Wii");
        	}
		if (face2 == 118) {
    			message.channel.send("Another Super Mario Bros Wii");
        	}
		if (face2 == 119) {
    			message.channel.send("New Summer Sun Bros Wii");
        	}
		if (face2 == 120) {
    			message.channel.send("M&M's Kart Racing");
        	}
		if (face2 == 121) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 122) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 123) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 124) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 125) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 126) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 127) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 128) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 129) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 130) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 131) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 132) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 133) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 134) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 135) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 136) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 137) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 138) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 139) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 140) {
    			message.channel.send("The New Tetris");
        	}
		if (face2 == 141) {
    			message.channel.send("Deca Sports");
        	}
		if (face2 == 142) {
    			message.channel.send("GoldenEye Wii");
        	}
		if (face2 == 143) {
    			message.channel.send("some call of duty game idk");
        	}
		if (face2 == 144) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 145) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 146) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 147) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 148) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 149) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 150) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 151) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 152) {
    			message.channel.send("Madden 2002");
		}
		if (face2 == 153) {
    			message.channel.send("Perfect Dark");
		}
		if (face2 == 154) {
    			message.channel.send("StarFox 64");
		}
		if (face2 == 155) {
    			message.channel.send("Jet Force Gemini");
		}
		if (face2 == 158) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 159) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 160) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 161) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 162) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 163) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 164) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 165) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 166) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 167) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 168) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 169) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 170) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 171) {
    			message.channel.send("Brawl Minus");
        	}
		if (face2 == 172) {
    			message.channel.send("Hasbro Family Game Night 3");
        	}
		if (face2 == 173) {
    			message.channel.send("Guilty Gear XX Accent Core +");
        	}
		if (face2 == 174) {
    			message.channel.send("Tatsunoko vs Capcom");
        	}
		if (face2 == 175) {
    			message.channel.send("Chicken Little: Ace in Action");
        	}
		if (face2 == 176) {
    			message.channel.send("Trauma Center: New Blood");
        	}
		if (face2 == 177) {
    			message.channel.send("Boom Blox");
        	}
		if (face2 == 178) {
    			message.channel.send("Pokemon Battle Revolution");
        	}
		if (face2 == 179) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 180) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 181) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 182) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 183) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 184) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 185) {
    			message.channel.send("Mario Tennis");
		}
		if (face2 == 186) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 187) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 188) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 189) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content == ("/seemein any")) {
		var face2 = Math.floor(Math.random() * 190);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("Goldeneye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode 1 Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 32) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 33) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 34) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 35) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 36) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 37) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 38) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 39) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 40) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 41) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 42) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 43) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 44) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 45) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 46) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 47) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 48) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 49) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 50) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 51) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 52) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 53) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 56) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 57) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 58) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 59) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 60) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 61) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 62) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 63) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 64) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 65) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 66) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 67) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 68) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 69) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 70) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 71) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 72) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 73) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 74) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 75) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 76) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 77) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 78) {
    			message.channel.send("Crash Nitro Kart");
        	}
    		if (face2 == 79) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 80) {
    			message.channel.send("Mario Party 8");
        	}
    		if (face2 == 81) {
    			message.channel.send("Mario Party 9");
        	}
		if (face2 == 82) {
    			message.channel.send("Mario Kart Wii");
        	}
		if (face2 == 83) {
    			message.channel.send("Super Smash Bros Brawl");
        	}
		if (face2 == 84) {
    			message.channel.send("Project M");
        	}
		if (face2 == 85) {
    			message.channel.send("Dragon Ball Z Budokai 3");
        	}
		if (face2 == 86) {
    			message.channel.send("Wii Sports");
        	}
		if (face2 == 87) {
			message.channel.send("Wii Play");
        	}
		if (face2 == 88) {
    			message.channel.send("Wii Sports Resort");
        	}
    		if (face2 == 89) {
    			message.channel.send("Wii Music");
        	}
		if (face2 == 90) {
    			message.channel.send("Wii Play Motion");
        	}
		if (face2 == 91) {
    			message.channel.send("Wii Party");
        	}
		if (face2 == 92) {
    			message.channel.send("Mario Kart Fun");
        	}
		if (face2 == 93) {
    			message.channel.send("Mario Kart Wii Hack Pack");
        	}
		if (face2 == 94) {
    			message.channel.send("Super Monkey Ball Banana Blitz");
        	}
		if (face2 == 95) {
    			message.channel.send("Super Monkey Ball Step & Roll");
        	}
    		if (face2 == 96) {
    			message.channel.send("Mario Super Sluggers");
        	}
		if (face2 == 97) {
    			message.channel.send("Mario Strikers Charged");
        	}
		if (face2 == 98) {
    			message.channel.send("Fortune Street");
        	}
		if (face2 == 99) {
    			message.channel.send("Punch-Out!!");
        	}
		if (face2 == 100) {
    			message.channel.send("Mrio Sports Mix");
        	}
		if (face2 == 101) {
    			message.channel.send("Donkey Kong Country Returns");
        	}
    		if (face2 == 102) {
    			message.channel.send("Kirby's Epic Yarn");
        	}
		if (face2 == 103) {
    			message.channel.send("Kirby's Return To Dream Land");
        	}
		if (face2 == 104) {
    			message.channel.send("WarioWare: Smooth Moves");
        	}
		if (face2 == 105) {
    			message.channel.send("Rhythm Heaven Fever");
        	}
		if (face2 == 106) {
    			message.channel.send("Mario & Sonic at the Olympic Games");
        	}
		if (face2 == 107) {
    			message.channel.send("Mario & Sonic at the Olympic Winter Games");
        	}
		if (face2 == 108) {
    			message.channel.send("Mario & Sonic at the London 2012 Olympic Games");
        	}
		if (face2 == 109) {
    			message.channel.send("Donkey Kong Barrel Blast");
        	}
		if (face2 == 110) {
    			message.channel.send("Namco Museum Remix");
        	}
		if (face2 == 111) {
    			message.channel.send("Rayman Raving Rabbids");
        	}
		if (face2 == 112) {
    			message.channel.send("Rayman Raving Rabbids 2");
        	}
		if (face2 == 113) {
    			message.channel.send("Rabbids TV Party");
        	}
		if (face2 == 114) {
    			message.channel.send("Rabbids Go Home");
        	}
		if (face2 == 115) {
    			message.channel.send("Rayman Origins");
        	}
		if (face2 == 116) {
    			message.channel.send("New Super Mario Bros Wii");
        	}
		if (face2 == 117) {
    			message.channel.send("Newer Super Mario Bros Wii");
        	}
		if (face2 == 118) {
    			message.channel.send("Another Super Mario Bros Wii");
        	}
		if (face2 == 119) {
    			message.channel.send("New Summer Sun Bros Wii");
        	}
		if (face2 == 120) {
    			message.channel.send("M&M's Kart Racing");
        	}
		if (face2 == 121) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 122) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 123) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 124) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 125) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 126) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 127) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 128) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 129) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 130) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 131) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 132) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 133) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 134) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 135) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 136) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 137) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 138) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 139) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 140) {
    			message.channel.send("The New Tetris");
        	}
		if (face2 == 141) {
    			message.channel.send("Deca Sports");
        	}
		if (face2 == 142) {
    			message.channel.send("GoldenEye Wii");
        	}
		if (face2 == 143) {
    			message.channel.send("some call of duty game idk");
        	}
		if (face2 == 144) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 145) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 146) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 147) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 148) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 149) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 150) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 151) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 152) {
    			message.channel.send("Madden 2002");
		}
		if (face2 == 153) {
    			message.channel.send("Perfect Dark");
		}
		if (face2 == 154) {
    			message.channel.send("StarFox 64");
		}
		if (face2 == 155) {
    			message.channel.send("Jet Force Gemini");
		}
		if (face2 == 158) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 159) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 160) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 161) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 162) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 163) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 164) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 165) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 166) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 167) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 168) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 169) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 170) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 171) {
    			message.channel.send("Brawl Minus");
        	}
		if (face2 == 172) {
    			message.channel.send("Hasbro Family Game Night 3");
        	}
		if (face2 == 173) {
    			message.channel.send("Guilty Gear XX Accent Core +");
        	}
		if (face2 == 174) {
    			message.channel.send("Tatsunoko vs Capcom");
        	}
		if (face2 == 175) {
    			message.channel.send("Chicken Little: Ace in Action");
        	}
		if (face2 == 176) {
    			message.channel.send("Trauma Center: New Blood");
        	}
		if (face2 == 177) {
    			message.channel.send("Boom Blox");
        	}
		if (face2 == 178) {
    			message.channel.send("Pokemon Battle Revolution");
        	}
		if (face2 == 179) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 180) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 181) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 182) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 183) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 184) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 185) {
    			message.channel.send("Mario Tennis");
		}
		if (face2 == 186) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 187) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 188) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 189) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (message_content == ("/game")) {
		var face2 = Math.floor(Math.random() * 190);
		if (face2 == 0) {
    			message.channel.send("Mario Party 1");
        	}
    		if (face2 == 1) {
    			message.channel.send("Mario Party 2");
        	}
		if (face2 == 2) {
    			message.channel.send("Mario Party 3");
        	}
		if (face2 == 3) {
    			message.channel.send("Rugrats Scavenger Hunt");
        	}
		if (face2 == 4) {
    			message.channel.send("1080 Snowboarding");
        	}
		if (face2 == 5) {
    			message.channel.send("Banjo-Tooie");
        	}
		if (face2 == 6) {
    			message.channel.send("Conker's Bad Fur Day");
        	}
		if (face2 == 7) {
			message.channel.send("Diddy Kong Racing");
        	}
		if (face2 == 8) {
    			message.channel.send("Donkey Kong 64");
        	}
    		if (face2 == 9) {
    			message.channel.send("Dr. Mario 64");
        	}
		if (face2 == 10) {
    			message.channel.send("F-Zero X");
        	}
		if (face2 == 11) {
    			message.channel.send("Goldeneye 007");
        	}
		if (face2 == 12) {
    			message.channel.send("Kirby 64");
        	}
		if (face2 == 13) {
    			message.channel.send("Lego Racers");
        	}
		if (face2 == 14) {
    			message.channel.send("Mario Golf");
        	}
    		if (face2 == 15) {
    			message.channel.send("Mario Kart 64");
        	}
		if (face2 == 16) {
    			message.channel.send("Mickey's Speedway USA");
        	}
		if (face2 == 17) {
    			message.channel.send("Pokemon Stadium");
        	}
		if (face2 == 18) {
    			message.channel.send("Pokemon Stadium 2");
        	}
		if (face2 == 19) {
    			message.channel.send("Rakuga Kids");
        	}
		if (face2 == 20) {
    			message.channel.send("Super Smash Bros (N64)");
        	}
    		if (face2 == 21) {
    			message.channel.send("Snowboard Kids");
        	}
    		if (face2 == 22) {
    			message.channel.send("Snowboard Kids 2");
        	}
		if (face2 == 23) {
    			message.channel.send("Star Wars Episode 1 Pod Racer");
        	}
		if (face2 == 24) {
    			message.channel.send("Wave Race 64");
        	}
		if (face2 == 25) {
    			message.channel.send("Super Smash Bros 199XTE");
        	}
		if (face2 == 26) {
    			message.channel.send("Smash Remix");
        	}
		if (face2 == 27) {
    			message.channel.send("South Park World Rally");
        	}
		if (face2 == 28) {
    			message.channel.send("Monopoly");
        	}
		if (face2 == 29) {
    			message.channel.send("Cruis'n USA");
        	}
		if (face2 == 30) {
    			message.channel.send("Hotwheels: Turbo Racing");
        	}
		if (face2 == 31) {
    			message.channel.send("Mario Party 4");
        	}
    		if (face2 == 32) {
    			message.channel.send("Mario Party 5");
        	}
		if (face2 == 33) {
    			message.channel.send("Mario Party 6");
        	}
		if (face2 == 34) {
    			message.channel.send("Mario Party 7");
        	}
		if (face2 == 35) {
    			message.channel.send("Billy Hatcher and the Giant Egg");
        	}
		if (face2 == 36) {
    			message.channel.send("DDR Mario Mix");
        	}
		if (face2 == 37) {
    			message.channel.send("Dragon Ball Z Budokai 2");
        	}
		if (face2 == 38) {
			message.channel.send("F-Zero GX");
        	}
		if (face2 == 39) {
    			message.channel.send("Harvest Moon: Magical Melody");
        	}
    		if (face2 == 40) {
    			message.channel.send("Kirby Air Ride");
        	}
		if (face2 == 41) {
    			message.channel.send("Mario Golf: Toadstool Tour");
        	}
		if (face2 == 42) {
    			message.channel.send("Mario Kart: Double Dash!!");
        	}
		if (face2 == 43) {
    			message.channel.send("Mario Power Tennis");
        	}
		if (face2 == 44) {
    			message.channel.send("Mario Superstar Baseball");
        	}
		if (face2 == 45) {
    			message.channel.send("Metroid Prime 2: Echoes");
        	}
    		if (face2 == 46) {
    			message.channel.send("Pikmin 2");
        	}
		if (face2 == 47) {
    			message.channel.send("Sonic Adventure 2: Battle");
        	}
		if (face2 == 48) {
    			message.channel.send("Soul Calibur II");
        	}
		if (face2 == 49) {
    			message.channel.send("Star Fox Assault");
        	}
		if (face2 == 50) {
    			message.channel.send("Star Wars: Clone Wars");
        	}
		if (face2 == 51) {
    			message.channel.send("Super Mario Strikers");
        	}
    		if (face2 == 52) {
    			message.channel.send("Super Monkey Ball");
        	}
		if (face2 == 53) {
    			message.channel.send("Super Monkey Ball 2");
        	}
		if (face2 == 54) {
    			message.channel.send("Super Smash Bros Melee");
        	}
		if (face2 == 55) {
    			message.channel.send("Super Smash Bros Melee 20XX");
        	}
    		if (face2 == 56) {
    			message.channel.send("WarioWare: Mega Party Games");
        	}
    		if (face2 == 57) {
    			message.channel.send("The Simpsons: Hit & Run");
        	}
		if (face2 == 58) {
    			message.channel.send("F-Zero GX-Treme");
        	}
		if (face2 == 59) {
    			message.channel.send("Super Monkey Ball Deluxe (patch for 2)");
        	}
		if (face2 == 60) {
    			message.channel.send("Monkeyed Ball 2: Witty Subtitle");
        	}
		if (face2 == 61) {
    			message.channel.send("Super Monkey Ball: Community Workshop Level Pack");
        	}
		if (face2 == 62) {
    			message.channel.send("Donkey Konga");
        	}
		if (face2 == 63) {
    			message.channel.send("Donkey Konga 2");
        	}
    		if (face2 == 64) {
    			message.channel.send("Tony Hawk's American Wasteland");
        	}
    		if (face2 == 65) {
    			message.channel.send("Shrek Super Party");
        	}
    		if (face2 == 66) {
    			message.channel.send("Spongebob: Lights, Camera, Pants!");
        	}
    		if (face2 == 67) {
    			message.channel.send("Super Monkey Ball Adventure");
        	}
    		if (face2 == 68) {
    			message.channel.send("SSX On Tour");
        	}
    		if (face2 == 69) {
    			message.channel.send("NBA Street V3");
        	}
    		if (face2 == 70) {
    			message.channel.send("Tiger Woods PGA Tour 2003");
        	}
    		if (face2 == 71) {
    			message.channel.send("Sonic Gems Collection");
        	}
    		if (face2 == 72) {
    			message.channel.send("Namco Museum: 50th Anniversary");
        	}
    		if (face2 == 73) {
    			message.channel.send("007 Nightfire");
        	}
    		if (face2 == 74) {
    			message.channel.send("007 Everything Or Nothing");
        	}
    		if (face2 == 75) {
    			message.channel.send("All Star Baseball 2004");
        	}
    		if (face2 == 76) {
    			message.channel.send("Shrek 2");
        	}
    		if (face2 == 77) {
    			message.channel.send("Shrek Smash and Crash Racing");
        	}
    		if (face2 == 78) {
    			message.channel.send("Crash Nitro Kart");
        	}
    		if (face2 == 79) {
    			message.channel.send("Nicktoons Unite!");
        	}
		if (face2 == 80) {
    			message.channel.send("Mario Party 8");
        	}
    		if (face2 == 81) {
    			message.channel.send("Mario Party 9");
        	}
		if (face2 == 82) {
    			message.channel.send("Mario Kart Wii");
        	}
		if (face2 == 83) {
    			message.channel.send("Super Smash Bros Brawl");
        	}
		if (face2 == 84) {
    			message.channel.send("Project M");
        	}
		if (face2 == 85) {
    			message.channel.send("Dragon Ball Z Budokai 3");
        	}
		if (face2 == 86) {
    			message.channel.send("Wii Sports");
        	}
		if (face2 == 87) {
			message.channel.send("Wii Play");
        	}
		if (face2 == 88) {
    			message.channel.send("Wii Sports Resort");
        	}
    		if (face2 == 89) {
    			message.channel.send("Wii Music");
        	}
		if (face2 == 90) {
    			message.channel.send("Wii Play Motion");
        	}
		if (face2 == 91) {
    			message.channel.send("Wii Party");
        	}
		if (face2 == 92) {
    			message.channel.send("Mario Kart Fun");
        	}
		if (face2 == 93) {
    			message.channel.send("Mario Kart Wii Hack Pack");
        	}
		if (face2 == 94) {
    			message.channel.send("Super Monkey Ball Banana Blitz");
        	}
		if (face2 == 95) {
    			message.channel.send("Super Monkey Ball Step & Roll");
        	}
    		if (face2 == 96) {
    			message.channel.send("Mario Super Sluggers");
        	}
		if (face2 == 97) {
    			message.channel.send("Mario Strikers Charged");
        	}
		if (face2 == 98) {
    			message.channel.send("Fortune Street");
        	}
		if (face2 == 99) {
    			message.channel.send("Punch-Out!!");
        	}
		if (face2 == 100) {
    			message.channel.send("Mrio Sports Mix");
        	}
		if (face2 == 101) {
    			message.channel.send("Donkey Kong Country Returns");
        	}
    		if (face2 == 102) {
    			message.channel.send("Kirby's Epic Yarn");
        	}
		if (face2 == 103) {
    			message.channel.send("Kirby's Return To Dream Land");
        	}
		if (face2 == 104) {
    			message.channel.send("WarioWare: Smooth Moves");
        	}
		if (face2 == 105) {
    			message.channel.send("Rhythm Heaven Fever");
        	}
		if (face2 == 106) {
    			message.channel.send("Mario & Sonic at the Olympic Games");
        	}
		if (face2 == 107) {
    			message.channel.send("Mario & Sonic at the Olympic Winter Games");
        	}
		if (face2 == 108) {
    			message.channel.send("Mario & Sonic at the London 2012 Olympic Games");
        	}
		if (face2 == 109) {
    			message.channel.send("Donkey Kong Barrel Blast");
        	}
		if (face2 == 110) {
    			message.channel.send("Namco Museum Remix");
        	}
		if (face2 == 111) {
    			message.channel.send("Rayman Raving Rabbids");
        	}
		if (face2 == 112) {
    			message.channel.send("Rayman Raving Rabbids 2");
        	}
		if (face2 == 113) {
    			message.channel.send("Rabbids TV Party");
        	}
		if (face2 == 114) {
    			message.channel.send("Rabbids Go Home");
        	}
		if (face2 == 115) {
    			message.channel.send("Rayman Origins");
        	}
		if (face2 == 116) {
    			message.channel.send("New Super Mario Bros Wii");
        	}
		if (face2 == 117) {
    			message.channel.send("Newer Super Mario Bros Wii");
        	}
		if (face2 == 118) {
    			message.channel.send("Another Super Mario Bros Wii");
        	}
		if (face2 == 119) {
    			message.channel.send("New Summer Sun Bros Wii");
        	}
		if (face2 == 120) {
    			message.channel.send("M&M's Kart Racing");
        	}
		if (face2 == 121) {
    			message.channel.send("Bomberman 64");
        	}
		if (face2 == 122) {
    			message.channel.send("Pokemon Puzzle League");
        	}
		if (face2 == 123) {
    			message.channel.send("Tony Hawk's Pro Skater");
        	}
		if (face2 == 124) {
    			message.channel.send("Tony Hawk's Pro Skater 2");
        	}
		if (face2 == 125) {
    			message.channel.send("Tony Hawk's Pro Skater 3");
        	}
		if (face2 == 126) {
    			message.channel.send("NFL Blitz 2000");
        	}
		if (face2 == 127) {
    			message.channel.send("NFL Blitz 2001");
        	}
		if (face2 == 128) {
    			message.channel.send("The Legend of Zelda: Four Swords Adventures");
        	}
		if (face2 == 129) {
    			message.channel.send("Sonic Riders");
        	}
		if (face2 == 130) {
    			message.channel.send("Digimon Rumble Arena 2");
        	}
		if (face2 == 131) {
    			message.channel.send("Digimon World 4");
        	}
		if (face2 == 132) {
    			message.channel.send("Tony Hawk's Underground");
        	}
		if (face2 == 133) {
    			message.channel.send("Tony Hawk's Underground 2");
        	}
		if (face2 == 134) {
    			message.channel.send("Godzilla: Destroy All Monsters Melee");
        	}
		if (face2 == 135) {
    			message.channel.send("Burnout 2");
        	}
		if (face2 == 136) {
    			message.channel.send("Need For Speed: Hot Pursuit");
        	}
		if (face2 == 137) {
    			message.channel.send("Namco Museum: Battle Collection");
        	}
		if (face2 == 138) {
    			message.channel.send("some WWE game idk");
        	}
		if (face2 == 139) {
    			message.channel.send("Stunt Racer");
        	}
		if (face2 == 140) {
    			message.channel.send("The New Tetris");
        	}
		if (face2 == 141) {
    			message.channel.send("Deca Sports");
        	}
		if (face2 == 142) {
    			message.channel.send("GoldenEye Wii");
        	}
		if (face2 == 143) {
    			message.channel.send("some call of duty game idk");
        	}
		if (face2 == 144) {
    			message.channel.send("Cruis'n Exotica");
		}
		if (face2 == 145) {
    			message.channel.send("WWF No Mercy");
		}
		if (face2 == 146) {
    			message.channel.send("Superman 64");
		}
		if (face2 == 147) {
    			message.channel.send("Mundial Ronaldinho Soccer 64");
		}
		if (face2 == 148) {
    			message.channel.send("International Superstar Soccer 64");
		}
		if (face2 == 149) {
    			message.channel.send("ClayFighter: Sculptor's Cut");
		}
		if (face2 == 150) {
    			message.channel.send("Rush 2: Extreme Racing USA");
		}
		if (face2 == 151) {
    			message.channel.send("ClayFighter 63 1/3");
		}
		if (face2 == 152) {
    			message.channel.send("Madden 2002");
		}
		if (face2 == 153) {
    			message.channel.send("Perfect Dark");
		}
		if (face2 == 154) {
    			message.channel.send("StarFox 64");
		}
		if (face2 == 155) {
    			message.channel.send("Jet Force Gemini");
		}
		if (face2 == 158) {
    			message.channel.send("Sonic Heroes");
        	}
		if (face2 == 159) {
    			message.channel.send("Madagascar");
        	}
		if (face2 == 160) {
    			message.channel.send("Pac-Man World Rally");
        	}
		if (face2 == 161) {
    			message.channel.send("Rayman Arena");
        	}
		if (face2 == 162) {
    			message.channel.send("SSX Tricky");
        	}
		if (face2 == 163) {
    			message.channel.send("Nintendo Puzzle Collection");
        	}
		if (face2 == 164) {
    			message.channel.send("Mega Man 2: The Power Fighters");
        	}
		if (face2 == 165) {
    			message.channel.send("Black & Bruised");
        	}
		if (face2 == 166) {
    			message.channel.send("Capcom vs SNK 2");
        	}
		if (face2 == 167) {
    			message.channel.send("Viewtiful Joe: Red-Hot Rumble");
        	}
		if (face2 == 168) {
    			message.channel.send("Pokemon Colosseum");
        	}
		if (face2 == 169) {
    			message.channel.send("Pokemon XD: Gale of Darkness");
        	}
		if (face2 == 170) {
    			message.channel.send("NHL Hitz 20-02");
        	}
		if (face2 == 171) {
    			message.channel.send("Brawl Minus");
        	}
		if (face2 == 172) {
    			message.channel.send("Hasbro Family Game Night 3");
        	}
		if (face2 == 173) {
    			message.channel.send("Guilty Gear XX Accent Core +");
        	}
		if (face2 == 174) {
    			message.channel.send("Tatsunoko vs Capcom");
        	}
		if (face2 == 175) {
    			message.channel.send("Chicken Little: Ace in Action");
        	}
		if (face2 == 176) {
    			message.channel.send("Trauma Center: New Blood");
        	}
		if (face2 == 177) {
    			message.channel.send("Boom Blox");
        	}
		if (face2 == 178) {
    			message.channel.send("Pokemon Battle Revolution");
        	}
		if (face2 == 179) {
    			message.channel.send("Need For Speed: Carbon");
        	}
		if (face2 == 180) {
    			message.channel.send("Mary-Kate and Ashley: Sweet 16 – Licensed to Drive");
        	}
		if (face2 == 181) {
    			message.channel.send("007: The World is Not Enough");
		}
		if (face2 == 182) {
    			message.channel.send("Killer Instinct Gold");
		}
		if (face2 == 183) {
    			message.channel.send("Mortal Kombat 4");
		}
		if (face2 == 184) {
    			message.channel.send("Mortal Kombat Trilogy");
		}
		if (face2 == 185) {
    			message.channel.send("Mario Tennis");
		}
		if (face2 == 186) {
    			message.channel.send("Pac-Man Fever");
        	}
		if (face2 == 187) {
    			message.channel.send("Timesplitters 2");
        	}
		if (face2 == 188) {
    			message.channel.send("Timesplitters: Future Perfect");
        	}
		if (face2 == 189) {
    			message.channel.send("Lego Star Wars: The Video Game");
        	}
	}
	if (Math.floor(Math.random() * 8192) == 8191) {
        	message.react('682682112750780605');
        }
	if (Math.floor(Math.random() * 16384) == 16383) {
        	message.react('682682166622289954');
        }
	if (Math.floor(Math.random() * 32768) == 32767) {
        	message.react('682682177875476686');
        }
	if (message_content.includes("pog")) {
		message.react('636662427596881931');
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
	}
	if (message_content.includes("oh baby a triple")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("o baby a triple")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("oh baby, a triple")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("o baby, a triple")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("more like stupei")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("more like, stupei")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("babyyy")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("baybee")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("😎")) {
		message.react('284233977529630720');
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('316737384819589120');
        	}
	}
	if (message_content.includes("it hurts to be this hip")) {
		message.react('284233977529630720');
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('316737384819589120');
        	}
	}
	if (message_content.includes("coolcat")) {
		message.react('284233977529630720');
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('316737384819589120');
        	}
	}
	if (message_content.includes("behiii")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('687678432045170689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690264598821077025');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755227197511');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753541087242');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754749046796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754644320426');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754929532938');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755198099476');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754845778021');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754539331725');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754967281725');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755021676617');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
			message.react('827398338881257512');
		}
		if (Math.floor(Math.random() * 2) == 0) {
			message.react('827398338718072874');
		}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754652577882');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753826562158');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690633607382827069');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755009224744');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755076464680');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754854035546');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754505908226');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755340705842');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753927225466');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706696281245876331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('713516457828417597');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('751932867285614702');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('635515880540733452');
        	}
	}
	if (message_content.includes("rock riot")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('687678432045170689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690264598821077025');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755227197511');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753541087242');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754749046796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754644320426');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754929532938');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755198099476');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754845778021');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754539331725');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754967281725');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755021676617');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
			message.react('827398338881257512');
		}
		if (Math.floor(Math.random() * 2) == 0) {
			message.react('827398338718072874');
		}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754652577882');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753826562158');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690633607382827069');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755009224744');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755076464680');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754854035546');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754505908226');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755340705842');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753927225466');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706696281245876331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('713516457828417597');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('751932867285614702');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('635515880540733452');
        	}
	}
	if (message_content.includes("roll riot")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('687678432045170689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690264598821077025');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755227197511');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753541087242');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754749046796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754644320426');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754929532938');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755198099476');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754845778021');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754539331725');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754967281725');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755021676617');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
			message.react('827398338881257512');
		}
		if (Math.floor(Math.random() * 2) == 0) {
			message.react('827398338718072874');
		}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754652577882');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753826562158');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690633607382827069');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755009224744');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755076464680');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754854035546');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754505908226');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755340705842');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753927225466');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706696281245876331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('713516457828417597');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('751932867285614702');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('635515880540733452');
        	}
	}
	if (message_content.includes("speed riot")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('687678432045170689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690264598821077025');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755227197511');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753541087242');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754749046796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754644320426');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754929532938');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755198099476');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754845778021');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754539331725');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754967281725');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755021676617');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
			message.react('827398338881257512');
		}
		if (Math.floor(Math.random() * 2) == 0) {
			message.react('827398338718072874');
		}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754652577882');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753826562158');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690633607382827069');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755009224744');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755076464680');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754854035546');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754505908226');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755340705842');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753927225466');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706696281245876331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('713516457828417597');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('751932867285614702');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('635515880540733452');
        	}
	}
	if (message_content.includes("metal riot")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('687678432045170689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690264598821077025');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755227197511');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753541087242');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754749046796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754644320426');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754929532938');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755198099476');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754845778021');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754539331725');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754967281725');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755021676617');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
			message.react('827398338881257512');
		}
		if (Math.floor(Math.random() * 2) == 0) {
			message.react('827398338718072874');
		}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754652577882');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753826562158');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690633607382827069');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755009224744');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755076464680');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754854035546');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754505908226');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755340705842');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753927225466');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706696281245876331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('713516457828417597');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('751932867285614702');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('635515880540733452');
        	}
	}
	if (message_content.includes("core riot")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('687678432045170689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690264598821077025');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755227197511');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753541087242');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754749046796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754644320426');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754929532938');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755198099476');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754845778021');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754539331725');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754967281725');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755021676617');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
			message.react('827398338881257512');
		}
		if (Math.floor(Math.random() * 2) == 0) {
			message.react('827398338718072874');
		}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754652577882');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753826562158');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690633607382827069');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755009224744');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755076464680');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754854035546');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754505908226');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755340705842');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753927225466');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706696281245876331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('713516457828417597');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('751932867285614702');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('635515880540733452');
        	}
	}
	if (message_content.includes("floooo")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('687678432045170689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690264598821077025');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755227197511');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753541087242');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754749046796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754644320426');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754929532938');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755198099476');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754845778021');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754539331725');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754967281725');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755021676617');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
			message.react('827398338881257512');
		}
		if (Math.floor(Math.random() * 2) == 0) {
			message.react('827398338718072874');
		}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754652577882');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753826562158');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690633607382827069');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755009224744');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755076464680');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754854035546');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616754505908226');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616755340705842');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('690616753927225466');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706696281245876331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('713516457828417597');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('751932867285614702');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('635515880540733452');
        	}
	}
	if (message_content.includes("sourpls")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
	if (message_content.includes("pepepls")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
	if (message_content.includes("always smiling")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
	if (message_content.includes("dance riot")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
	if (message_content.includes("┌༼ຈل͜ຈ༽┘")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
	if (message_content.includes("party like it's 10")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
	if (message_content.includes("party like it’s 10")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
	if (message_content.includes("party like its 10")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
	if (message_content.includes("party rockers in the hou")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
	if (message_content.includes("party rock is in the hou")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
	if (message_content.includes("everybody dance now")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
	if (message_content.includes("everybody jam")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
	if (message_content.includes("oppa gangnam style")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
	if (message_content.includes("do the harlem shake")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
	if (message_content.includes("🦀")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('404196849017421824');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636617752429199415');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('408084695109074944');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706987719255130450');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397350854754305');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('425793292932743169');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708512153690');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('706984708738908250');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992703218352139');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704191561837');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992704250413122');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705516830791');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705550385273');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705592590397');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992705860894790');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706921922664');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992706942894091');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712333693603020820');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707437822033');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707500998666');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707534291056');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('653056076740165633');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707681222689');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711992707756851252');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('711994063347384452');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827398345257254962');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397352699985920');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('713515911721779275');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('527614081369112578');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('681984948282064904');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('675523558700482561');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712808847965945997');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('404197028466262026');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('407292559787032576');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('687735729874534409');
        	}
		if (Math.floor(Math.random() * 8) == 0) {
            		message.react('832174685114335262');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('679834613350400099');
        	}
		if (Math.floor(Math.random() * 16) == 0) {
            		message.react('687735474143494236');
        	}
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('408092112748544001');
        	}
		if (face2 == 5) {
    			message.react('408092112748544001');
        	}
		if (face2 == 6) {
    			message.react('408092112748544001');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("loves me..")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("loves me?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
	if (message_content.includes("love me..")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love me?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love themselves?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love themself?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love everyone?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love everybody?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love anyone?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love anybody?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love each other?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love theirself?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love theirselves?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love himself?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love herself?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love him?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love her?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("love them?")) {
        	var face = Math.floor(Math.random() * 8);
		if (face == 0) {
    			message.react('682711729116938266');
        	}
    		if (face == 1) {
    			message.react('682711728756097042');
        	}
		if (face == 2) {
    			message.react('682711728756097042');
        	}
		if (face == 3) {
    			message.react('682711728756097042');
        	}
		if (face == 4) {
    			message.react('682711728924262536');
        	}
		if (face == 5) {
    			message.react('682711728924262536');
        	}
		if (face == 6) {
    			message.react('682711728924262536');
        	}
        	if (face == 7) {
    			message.react('682711780874518528');
        	}
	}
    	if (message_content.includes("s underneath the card")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s underneath card ")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s under the card")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s under card ")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the card")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in card ")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s behind the door")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s behind door ")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the door")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in door ")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the box")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in box ")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the block")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in block ")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the chest")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in chest ")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the hidden block")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in hidden block ")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the treasure chest")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in treasure chest ")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("what’s in the bag")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("what's in the bag")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("whats in the bag")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in bag ")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the item bag")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in item bag ")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the left")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the middle")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s behind the middle")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s under the middle")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s underneath the middle")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the right door")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the right chest")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the right block")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the right bag")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the right box")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s behind the rightmost")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s in the rightmost")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s under the rightmost")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s underneath the rightmost")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s behind the left")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s under the left")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s underneath the left")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("s behind the right door")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("fun wish")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("sad wish")) {
		var face2 = Math.floor(Math.random() * 8);
		if (face2 == 0) {
    			message.react('687668560193126428');
        	}
    		if (face2 == 1) {
    			message.react('687678432045170689');
        	}
		if (face2 == 2) {
    			message.react('404197234436079618');
        	}
		if (face2 == 3) {
    			message.react('404197234436079618');
        	}
		if (face2 == 4) {
    			message.react('739621939894550600');
        	}
		if (face2 == 5) {
    			message.react('739621939894550600');
        	}
		if (face2 == 6) {
    			message.react('690633607382827069');
        	}
		if (face2 == 7) {
			message.react('682863062474293268');
        	}
	}
    	if (message_content.includes("speen")) {
		var face2 = Math.floor(Math.random() * 2);
		if (face2 == 0) {
    			message.react('706696281245876331');
        	}
    		if (face2 == 1) {
    			message.react('408084695109074944');
        	}
	}
    	if (message_content.includes("s p e e n")) {
		var face2 = Math.floor(Math.random() * 2);
		if (face2 == 0) {
    			message.react('706696281245876331');
        	}
    		if (face2 == 1) {
    			message.react('408084695109074944');
        	}
	}
    	if (message_content.includes("speee")) {
		var face2 = Math.floor(Math.random() * 2);
		if (face2 == 0) {
    			message.react('706696281245876331');
        	}
    		if (face2 == 1) {
    			message.react('408084695109074944');
        	}
	}
    	if (message_content.includes("s p e e e")) {
		var face2 = Math.floor(Math.random() * 2);
		if (face2 == 0) {
    			message.react('706696281245876331');
        	}
    		if (face2 == 1) {
    			message.react('408084695109074944');
        	}
	}
	if (message_content.includes("dance rito")) {
		message.react('322877049293373440');
	}
	if (message_content.includes("s gale is now ready")) {
		message.react('322877049293373440');
	}
	if (message_content.includes("gu huh")) {
		message.react('682035336255111175');
	}
	if (message_content.includes("guh huh")) {
		message.react('682035336255111175');
	}
	if (message_content.includes("gu-huh")) {
		message.react('682035336255111175');
	}
	if (message_content.includes("guh-huh")) {
		message.react('682035336255111175');
	}
	if (message_content.includes("guh uh")) {
		message.react('682035336255111175');
	}
	if (message_content.includes("guh-uh")) {
		message.react('682035336255111175');
	}
	if (message_content.includes("praiseit")) {
		message.react('681274847565053953');
	}
	if (message_content.includes("praise helix")) {
		message.react('681274847565053953');
	}
	if (message_content.includes("praise be ")) {
		message.react('681274847565053953');
	}
	if (message_content.includes(" be praised")) {
		message.react('681274847565053953');
	}
	if (message_content.includes("lord helix")) {
		message.react('681274847565053953');
	}
	if (message_content.includes("all hail")) {
		message.react('681274847565053953');
	}
	if (message_content.includes("praise the ")) {
		message.react('681274847565053953');
	}
	if (message_content.includes("rise up")) {
		message.react('681274847565053953');
	}
	if (message_content == "/jeff") {
		message.react('682732150595780710');
	}
	if (message_content.includes("hey jeffery, fu")) {
		message.react('682732150595780710');
	}
	if (message_content.includes("hey jeff, fu")) {
		message.react('682732150595780710');
	}
	if (message_content.includes("hey jeffery fu")) {
		message.react('682732150595780710');
	}
	if (message_content.includes("hey jeff fu")) {
		message.react('682732150595780710');
	}
	if (message_content.includes("fuck you jeff")) {
		message.react('682732150595780710');
	}
	if (message_content.includes("fuk you jeff")) {
		message.react('682732150595780710');
	}
	if (message_content.includes("fuck u jeff")) {
		message.react('682732150595780710');
	}
	if (message_content.includes("fuk u jeff")) {
		message.react('682732150595780710');
	}
	if (message_content.includes("fuck you, jeff")) {
		message.react('682732150595780710');
	}
	if (message_content.includes("fuk you, jeff")) {
		message.react('682732150595780710');
	}
	if (message_content.includes("fuck u, jeff")) {
		message.react('682732150595780710');
	}
	if (message_content.includes("fuk u, jeff")) {
		message.react('682732150595780710');
	}
	if (message_content.includes("😍")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("😻")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("ove you the")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("oveyouthe")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("we stan")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("anyway stan")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("anyways stan")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("anyway, stan")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("anyways, stan")) {
		message.react('632997792150847515');
	}
	if (message_content == "dab") {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('461662128861085707');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('316752108437372928');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('736359516018573323');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('713253057785495643');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712117339474100325');
        	}
        	if (Math.floor(Math.random() * 8) == 0) {
            		message.react('713247287177904139');
        	}
		var face3 = Math.floor(Math.random() * 3);
		if (face3 == 0) {
    			message.react('425793292932743169');
        	}
		if (face3 == 1) {
    			message.react('425793292932743169');
        	}
		if (face3 == 2) {
    			message.react('690616753541087242');
        	}
	}
	if (message_content.includes("urgh")) {
		message.react('266840621149454348');
	}
	if (message_content.includes("🗿")) {
		message.react('266840621149454348');
	}
	if (message_content.includes("zoomer")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('461662128861085707');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('316752108437372928');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('736359516018573323');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('713253057785495643');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712117339474100325');
        	}
        	if (Math.floor(Math.random() * 8) == 0) {
            		message.react('713247287177904139');
        	}
		var face3 = Math.floor(Math.random() * 3);
		if (face3 == 0) {
    			message.react('425793292932743169');
        	}
		if (face3 == 1) {
    			message.react('425793292932743169');
        	}
		if (face3 == 2) {
    			message.react('690616753541087242');
        	}
	}
	if (message_content.includes(" dab")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('461662128861085707');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('316752108437372928');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('736359516018573323');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('713253057785495643');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712117339474100325');
        	}
        	if (Math.floor(Math.random() * 8) == 0) {
            		message.react('713247287177904139');
        	}
		var face3 = Math.floor(Math.random() * 3);
		if (face3 == 0) {
    			message.react('425793292932743169');
        	}
		if (face3 == 1) {
    			message.react('425793292932743169');
        	}
		if (face3 == 2) {
    			message.react('690616753541087242');
        	}
	}
	if (message_content.includes("dab ")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('461662128861085707');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('316752108437372928');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('736359516018573323');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('713253057785495643');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712117339474100325');
        	}
        	if (Math.floor(Math.random() * 8) == 0) {
            		message.react('713247287177904139');
        	}
		var face3 = Math.floor(Math.random() * 3);
		if (face3 == 0) {
    			message.react('425793292932743169');
        	}
		if (face3 == 1) {
    			message.react('425793292932743169');
        	}
		if (face3 == 2) {
    			message.react('690616753541087242');
        	}
	}
	if (message_content.includes("*dab")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('461662128861085707');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('316752108437372928');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('736359516018573323');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('713253057785495643');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712117339474100325');
        	}
        	if (Math.floor(Math.random() * 8) == 0) {
            		message.react('713247287177904139');
        	}
		var face3 = Math.floor(Math.random() * 3);
		if (face3 == 0) {
    			message.react('425793292932743169');
        	}
		if (face3 == 1) {
    			message.react('425793292932743169');
        	}
		if (face3 == 2) {
    			message.react('690616753541087242');
        	}
	}
	if (message_content.includes("dabs")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('461662128861085707');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('316752108437372928');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('736359516018573323');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('713253057785495643');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712117339474100325');
        	}
        	if (Math.floor(Math.random() * 8) == 0) {
            		message.react('713247287177904139');
        	}
		var face3 = Math.floor(Math.random() * 3);
		if (face3 == 0) {
    			message.react('425793292932743169');
        	}
		if (face3 == 1) {
    			message.react('425793292932743169');
        	}
		if (face3 == 2) {
    			message.react('690616753541087242');
        	}
	}
	if (message_content.includes("dabb")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('461662128861085707');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('316752108437372928');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('736359516018573323');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('713253057785495643');
        	}
        	if (Math.floor(Math.random() * 4) == 0) {
            		message.react('712117339474100325');
        	}
        	if (Math.floor(Math.random() * 8) == 0) {
            		message.react('713247287177904139');
        	}
		var face3 = Math.floor(Math.random() * 3);
		if (face3 == 0) {
    			message.react('425793292932743169');
        	}
		if (face3 == 1) {
    			message.react('425793292932743169');
        	}
		if (face3 == 2) {
    			message.react('690616753541087242');
        	}
	}
	if (message_content.includes("kappa")) {
		message.react('768948482324168744');
	}
	if (message_content.includes("frankerz")) {
		message.react('737765100714328164');
	}
	if (message_content.includes("lilz")) {
		message.react('737765100714328164');
	}
	if (message_content.includes("ohmydog")) {
		message.react('737765100714328164');
	}
	if (message_content.includes("save the animals")) {
		message.react('737765100714328164');
	}
	if (message_content.includes("kshuall")) {
		message.react('316737384819589120');
	}
	if (message_content.includes("stonk")) {
		message.react('316737384819589120');
	}
	if (message_content.includes("s t o n k")) {
		message.react('316737384819589120');
	}
	if (message_content.includes("🙃")) {
		message.react('768948482324168744');
	}
	if (message_content.includes("t-pos")) {
		message.react('465644294074793984');
	}
	if (message_content.includes("t pose")) {
		message.react('465644294074793984');
	}
	if (message_content.includes("👏")) {
		message.react('637049719293476875');
	}
	if (message_content.includes("delete this")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("delet this")) {
		message.react('827400489770811393');
	}
	if (message_content == "delet") {
		message.react('827400489770811393');
	}
	if (message_content == "delet.") {
		message.react('827400489770811393');
	}
	if (message_content == "delet!") {
		message.react('827400489770811393');
	}
	if (message_content.includes(" erp")) {
		message.react('827400489770811393');
	}
	if (message_content.includes(" rp ")) {
		message.react('827400489770811393');
	}
	if (message_content.includes(" rping")) {
		message.react('827400489770811393');
	}
	if (message_content.includes(" rper")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("rp-ing")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("rp-er")) {
		message.react('827400489770811393');
	}
	if (message_content.includes(" rp.")) {
		message.react('827400489770811393');
	}
	if (message_content.includes(" rp!")) {
		message.react('827400489770811393');
	}
	if (message_content.includes(" rp?")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("delet this")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("🤠")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("yee haw")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("yeehaw")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("yeha")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("what in tarnation")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("poisoned the waterhole")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("poisoned the water hole")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("snake in my boot")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("my favorite deputy")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("my favourite deputy")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("s the sheriff")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("schüt")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("schut")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("🔫")) {
		message.react('827400489770811393');
	}
	if (message_content.includes("banhammer")) {
		message.react('685979653902434307');
	}
	if (message_content.includes("ban hammer")) {
		message.react('685979653902434307');
	}
	if (message_content == "banned") {
		message.react('827400489770811393');
	}
	if (message_content.includes("^^^")) {
		message.react('647326430010802185');
	}
	if (message_content == "^") {
		message.react('832863821361315870');
	}
	if (message_content == "^^") {
		message.react('832863821361315870');
	}
	if (message_content == "this") {
		message.react('832863821361315870');
	}
	if (message_content.includes("☝️")) {
		message.react('832863821361315870');
	}
	if (message_content.includes("👆")) {
		message.react('832863821361315870');
	}
	if (message_content.includes("^th")) {
		message.react('832863821361315870');
	}
	if (message_content.includes("^ th")) {
		message.react('832863821361315870');
	}
	if (message_content == "this tbh") {
		message.react('832863821361315870');
	}
	if (message_content == "this.") {
		message.react('832863821361315870');
	}
	if (message_content == "this tbh.") {
		message.react('832863821361315870');
	}
	if (message_content == "this!") {
		message.react('832863821361315870');
	}
	if (message_content == "this tbh!") {
		message.react('832863821361315870');
	}
	if (message_content == "this so much") {
		message.react('832863821361315870');
	}
	if (message_content == "this so much.") {
		message.react('832863821361315870');
	}
	if (message_content == "this so much!") {
		message.react('832863821361315870');
	}
	if (message_content == "facts") {
		message.react('832863821361315870');
	}
	if (message_content == "facts.") {
		message.react('832863821361315870');
	}
	if (message_content == "facts!") {
		message.react('832863821361315870');
	}
	if (message_content == "true facts") {
		message.react('832863821361315870');
	}
	if (message_content == "true facts.") {
		message.react('832863821361315870');
	}
	if (message_content == "true facts!") {
		message.react('832863821361315870');
	}
	if (message_content == "same") {
		message.react('832863821361315870');
	}
	if (message_content == "same with me") {
		message.react('832863821361315870');
	}
	if (message_content == "same tbh") {
		message.react('832863821361315870');
	}
	if (message_content == "tbh same") {
		message.react('832863821361315870');
	}
	if (message_content == "same for me") {
		message.react('832863821361315870');
	}
	if (message_content == "me too") {
		message.react('832863821361315870');
	}
	if (message_content == "me three") {
		message.react('832863821361315870');
	}
	if (message_content == "same.") {
		message.react('832863821361315870');
	}
	if (message_content == "same with me.") {
		message.react('832863821361315870');
	}
	if (message_content == "same for me.") {
		message.react('832863821361315870');
	}
	if (message_content == "me too.") {
		message.react('832863821361315870');
	}
	if (message_content == "me three.") {
		message.react('832863821361315870');
	}
	if (message_content == "same!") {
		message.react('832863821361315870');
	}
	if (message_content == "same with me!") {
		message.react('832863821361315870');
	}
	if (message_content == "same for me!") {
		message.react('832863821361315870');
	}
	if (message_content == "me too!") {
		message.react('832863821361315870');
	}
	if (message_content == "me three!") {
		message.react('832863821361315870');
	}
	if (message_content == "i agree") {
		message.react('832863821361315870');
	}
	if (message_content.includes("i agree.")) {
		message.react('832863821361315870');
	}
	if (message_content.includes("i agree!")) {
		message.react('832863821361315870');
	}
	if (message_content == "agreed") {
		message.react('832863821361315870');
	}
	if (message_content.includes("agreed.")) {
		message.react('832863821361315870');
	}
	if (message_content.includes("agreed!")) {
		message.react('832863821361315870');
	}
	if (message_content.includes("i concur")) {
		message.react('832863821361315870');
	}
	if (message_content.includes("seconded")) {
		message.react('832863821361315870');
	}
	if (message_content.includes("thirded")) {
		message.react('832863821361315870');
	}
	if (message_content.includes("i second th")) {
		message.react('832863821361315870');
	}
	if (message_content.includes("ill second th")) {
		message.react('832863821361315870');
	}
	if (message_content.includes("i'll second th")) {
		message.react('832863821361315870');
	}
	if (message_content.includes("i’ll second th")) {
		message.react('832863821361315870');
	}
	if (message_content.includes("so much this")) {
		message.react('832863821361315870');
	}
	if (message_content == ":/") {
		message.react('681365757115891725');
	}
	if (message_content == "/:") {
		message.react('681365757115891725');
	}
	if (message_content == "=/") {
		message.react('681365757115891725');
	}
	if (message_content == "/=") {
		message.react('681365757115891725');
	}
	if (message_content == ":|") {
		message.react('681365757115891725');
	}
	if (message_content == "|:") {
		message.react('681365757115891725');
	}
	if (message_content == "=|") {
		message.react('681365757115891725');
	}
	if (message_content == "|=") {
		message.react('681365757115891725');
	}
	if (message_content == ":s") {
		message.react('681365757115891725');
	}
	if (message_content == "s:") {
		message.react('681365757115891725');
	}
	if (message_content == "=s") {
		message.react('681365757115891725');
	}
	if (message_content == "s=") {
		message.react('681365757115891725');
	}
	if (message_content == "rip") {
		message.react('282294671953100800');
	}
	if (message_content == "rip.") {
		message.react('282294671953100800');
	}
	if (message_content == "f") {
		message.react('282294671953100800');
	}
	if (message_content == "f.") {
		message.react('282294671953100800');
	}
	if (message_content == "oof") {
		message.react('282294671953100800');
	}
	if (message_content == "oof.") {
		message.react('282294671953100800');
	}
	if (message_content.includes(" oof")) {
		message.react('282294671953100800');
	}
	if (message_content.includes("r.i.p")) {
		message.react('282294671953100800');
	}
	if (message_content.includes("rip in peace")) {
		message.react('282294671953100800');
	}
	if (message_content.includes("ripepperonis")) {
		message.react('282294671953100800');
	}
	if (message_content.includes("🙄")) {
		message.react('231640439483138048');
	}
	if (message_content.includes("soonerlater")) {
		message.react('316758817406844928');
	}
	if (message_content.includes("😐")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("🤮")) {
		message.react('818030443496079370');
	}
	if (message_content.includes("cmonbruh")) {
		message.react('231640439483138048');
	}
	if (message_content.includes("you know ill win")) {
		message.react('364308148313522177');
	}
	if (message_content.includes("you know i'll win")) {
		message.react('364308148313522177');
	}
	if (message_content.includes("you know i’ll win")) {
		message.react('364308148313522177');
	}
	if (message_content.includes(" :/")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("/: ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("weirdchamp")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" =/ ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" /= ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" :|")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("|: ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" =|")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("|= ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" =s")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("s= ")) {
		message.react('681365757115891725');
	}
	if (message_content == ":^/") {
		message.react('681365757115891725');
	}
	if (message_content == "/^:") {
		message.react('681365757115891725');
	}
	if (message_content == "=^/") {
		message.react('681365757115891725');
	}
	if (message_content == "/^=") {
		message.react('681365757115891725');
	}
	if (message_content == ":^|") {
		message.react('681365757115891725');
	}
	if (message_content == "|^:") {
		message.react('681365757115891725');
	}
	if (message_content == "=^|") {
		message.react('681365757115891725');
	}
	if (message_content == "|^=") {
		message.react('681365757115891725');
	}
	if (message_content == ":^s") {
		message.react('681365757115891725');
	}
	if (message_content == "s^:") {
		message.react('681365757115891725');
	}
	if (message_content == "=^s") {
		message.react('681365757115891725');
	}
	if (message_content == "s^=") {
		message.react('681365757115891725');
	}
	if (message_content.includes(" :^/")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("/^: ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" =^/")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("/^= ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" :^|")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("|^: ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" =^|")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("|^= ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" :^s")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("s^: ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" =^s")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("s^= ")) {
		message.react('681365757115891725');
	}
	if (message_content == ":-/") {
		message.react('681365757115891725');
	}
	if (message_content == "/-:") {
		message.react('681365757115891725');
	}
	if (message_content == "=-/") {
		message.react('681365757115891725');
	}
	if (message_content == "/-=") {
		message.react('681365757115891725');
	}
	if (message_content == ":-|") {
		message.react('681365757115891725');
	}
	if (message_content == "|-:") {
		message.react('681365757115891725');
	}
	if (message_content == "=-|") {
		message.react('681365757115891725');
	}
	if (message_content == "|-=") {
		message.react('681365757115891725');
	}
	if (message_content == ":-s") {
		message.react('681365757115891725');
	}
	if (message_content == "s-:") {
		message.react('681365757115891725');
	}
	if (message_content == "=-s") {
		message.react('681365757115891725');
	}
	if (message_content == "s-=") {
		message.react('681365757115891725');
	}
	if (message_content.includes(" :-/")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("/-: ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" =-/")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("/-= ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" :-|")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("|-: ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" =-|")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("|-= ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" :-s")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("s-: ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes(" =-s")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("s-= ")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("ಠ")) {
		message.react('231640439483138048');
	}
	if (message_content.includes("💀")) {
		message.react('682824065789984773');
	}
	if (message_content.includes("😂")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("🤣")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("bazinga")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("joe mama")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("jo mama")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("joe mom")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("jo mom")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("ma ball")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("ma nut")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("ma di")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("deez nut")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("ese nut")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("meet you at the corner")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("meet ya at the corner")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("chungus")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("kek")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("hahah")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("ahaha")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("haha.")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("haha!")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("hehe")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("ee hee")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("heehee")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("haw haw")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("xddd")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("huhu")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("hehe")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("he he!")) {
		message.react('323972935230685184');
	}
	if (message_content == ("ha")) {
		message.react('323972935230685184');
	}
	if (message_content == ("haha")) {
		message.react('323972935230685184');
	}
	if (message_content == ("ha ha")) {
		message.react('323972935230685184');
	}
	if (message_content == ("ha!")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("ha ha!")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("lul ")) {
		message.react('323972935230685184');
	}
	if (message_content == "lulz") {
		message.react('323972935230685184');
	}
	if (message_content == "luls") {
		message.react('323972935230685184');
	}
	if (message_content.includes("alul")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("welcome to the star carnival")) {
		message.react('323972935230685184');
	}
	if (message_content == "pft") {
		message.react('827400490340843560');
	}
	if (message_content == "lulz.") {
		message.react('323972935230685184');
	}
	if (message_content == "luls.") {
		message.react('323972935230685184');
	}
	if (message_content == "pft.") {
		message.react('827400490340843560');
	}
	if (message_content == "lulz!") {
		message.react('323972935230685184');
	}
	if (message_content == "luls!") {
		message.react('323972935230685184');
	}
	if (message_content == "pft!") {
		message.react('827400490340843560');
	}
	if (message_content.includes("pff")) {
		message.react('827400490340843560');
	}
	if (message_content == "lul") {
		message.react('323972935230685184');
	}
	if (message_content == "lel") {
		message.react('323972935230685184');
	}
	if (message_content == "laff") {
		message.react('323972935230685184');
	}
	if (message_content == "laff.") {
		message.react('323972935230685184');
	}
	if (message_content == "laff!") {
		message.react('323972935230685184');
	}
	if (message_content == "lol") {
		message.react('323972935230685184');
	}
	if (message_content == "lol.") {
		message.react('323972935230685184');
	}
	if (message_content == "lol!") {
		message.react('323972935230685184');
	}
	if (message_content == "joj") {
		message.react('323972935230685184');
	}
	if (message_content == "sus") {
		message.react('323972935230685184');
	}
	if (message_content.includes("joj ")) {
		message.react('323972935230685184');
	}
	if (message_content == "amogus") {
		message.react('323972935230685184');
	}
	if (message_content.includes("😆")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("😹")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("🤡")) {
		message.react('323972935230685184');
	}
	if (message_content == "lmao") {
		message.react('323972935230685184');
	}
	if (message_content == "lmao") {
		message.react('323972935230685184');
	}
	if (message_content == "lmfao") {
		message.react('323972935230685184');
	}
	if (message_content == "lmoa") {
		message.react('323972935230685184');
	}
	if (message_content == "rofl") {
		message.react('323972935230685184');
	}
	if (message_content == "xd") {
		message.react('323972935230685184');
	}
	if (message_content == "lmao.") {
		message.react('323972935230685184');
	}
	if (message_content == "lmoa.") {
		message.react('323972935230685184');
	}
	if (message_content == "rofl.") {
		message.react('323972935230685184');
	}
	if (message_content == "xd.") {
		message.react('323972935230685184');
	}
	if (message_content == "lmao!") {
		message.react('323972935230685184');
	}
	if (message_content == "lmoa!") {
		message.react('323972935230685184');
	}
	if (message_content == "rofl!") {
		message.react('323972935230685184');
	}
	if (message_content == "xd!") {
		message.react('323972935230685184');
	}
	if (message_content.includes("lolol")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("lool")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("oool")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("lmaoo")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("xdd")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("lulw")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("😄")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("😁")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("🙂")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("feelsgoodman")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("😊")) {
		message.react('230128660580007937');
	}
	if (message_content == "c:") {
		message.react('681392742630555755');
	}
	if (message_content == ":3") {
		message.react('681392742630555755');
	}
	if (message_content == ":>") {
		message.react('681392742630555755');
	}
	if (message_content == "<:") {
		message.react('681392742630555755');
	}
	if (message_content == ":D") {
		message.react('414701504143032331');
	}
	if (message_content == "D:") {
		message.react('282297846554951681');
	}
	if (message_content == "c:") {
		message.react('681392742630555755');
	}
	if (message_content.includes(":>>")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("<<:")) {
		message.react('681392742630555755');
	}
	if (message_content.includes(" :D ")) {
		message.react('414701504143032331');
	}
	if (message_content.includes(" D: ")) {
		message.react('282297846554951681');
	}
	if (message_content == "=D") {
		message.react('414701504143032331');
	}
	if (message_content == "D=") {
		message.react('282297846554951681');
	}
	if (message_content.includes(" =D")) {
		message.react('414701504143032331');
	}
	if (message_content.includes("D= ")) {
		message.react('282297846554951681');
	}
	if (message_content.includes(" c: ")) {
		message.react('681392742630555755');
	}
	if (message_content.includes(" :>")) {
		message.react('681392742630555755');
	}
	if (message_content.includes(" :3 ")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("<: ")) {
		message.react('681392742630555755');
	}
	if (message_content.includes(" :)")) {
		message.react('647686065557340160');
	}
	if (message_content.includes("(: ")) {
		message.react('647686065557340160');
	}
	if (message_content.includes(" :]")) {
		message.react('647686065557340160');
	}
	if (message_content.includes("[: ")) {
		message.react('647686065557340160');
	}
	if (message_content == ":)") {
		message.react('647686065557340160');
	}
	if (message_content == "(:") {
		message.react('647686065557340160');
	}
	if (message_content == ":]") {
		message.react('647686065557340160');
	}
	if (message_content == "[:") {
		message.react('647686065557340160');
	}
	if (message_content == "=)") {
		message.react('647686065557340160');
	}
	if (message_content == "(=") {
		message.react('647686065557340160');
	}
	if (message_content == "=]") {
		message.react('647686065557340160');
	}
	if (message_content == "[=") {
		message.react('647686065557340160');
	}
	if (message_content.includes(":))")) {
		message.react('647686065557340160');
	}
	if (message_content.includes("((:")) {
		message.react('647686065557340160');
	}
	if (message_content.includes(":]]")) {
		message.react('647686065557340160');
	}
	if (message_content.includes("[[:")) {
		message.react('647686065557340160');
	}
	if (message_content.includes("=))")) {
		message.react('647686065557340160');
	}
	if (message_content .includes("((=")) {
		message.react('647686065557340160');
	}
	if (message_content.includes("=]]")) {
		message.react('647686065557340160');
	}
	if (message_content.includes("[[=")) {
		message.react('647686065557340160');
	}
	if (message_content.includes(" c;")) {
		message.react('633443771895382068');
	}
	if (message_content.includes(";>")) {
		message.react('633443771895382068');
	}
	if (message_content.includes(";3")) {
		message.react('633443771895382068');
	}
	if (message_content.includes("<;")) {
		message.react('633443771895382068');
	}
	if (message_content.includes(";)")) {
		message.react('633443771895382068');
	}
	if (message_content.includes("(;")) {
		message.react('633443771895382068');
	}
	if (message_content.includes(";]")) {
		message.react('633443771895382068');
	}
	if (message_content.includes("[;")) {
		message.react('633443771895382068');
	}
	if (message_content.includes("😃")) {
		message.react('414701504143032331');
	}
	if (message_content == "c=") {
		message.react('681392742630555755');
	}
	if (message_content == "=3") {
		message.react('681392742630555755');
	}
	if (message_content == "=>") {
		message.react('681392742630555755');
	}
	if (message_content == "<=") {
		message.react('681392742630555755');
	}
	if (message_content.includes("=>>")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("<<=")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("c= ")) {
		message.react('681392742630555755');
	}
	if (message_content.includes(" =>")) {
		message.react('681392742630555755');
	}
	if (message_content.includes(" =3")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("<= ")) {
		message.react('681392742630555755');
	}
	if (message_content.includes(" =)")) {
		message.react('647686065557340160');
	}
	if (message_content.includes("(= ")) {
		message.react('647686065557340160');
	}
	if (message_content == "c^:") {
		message.react('827400490340843560');
	}
	if (message_content == ":^3") {
		message.react('827400490340843560');
	}
	if (message_content == ":^>") {
		message.react('827400490340843560');
	}
	if (message_content == "<^:") {
		message.react('827400490340843560');
	}
	if (message_content == ":^D") {
		message.react('414701504143032331');
	}
	if (message_content == "D^:") {
		message.react('282297846554951681');
	}
	if (message_content.includes(" :^D")) {
		message.react('414701504143032331');
	}
	if (message_content.includes("D^: ")) {
		message.react('282297846554951681');
	}
	if (message_content == "=^D") {
		message.react('414701504143032331');
	}
	if (message_content == "D^=") {
		message.react('282297846554951681');
	}
	if (message_content.includes(" =^D")) {
		message.react('414701504143032331');
	}
	if (message_content.includes("D^= ")) {
		message.react('282297846554951681');
	}
	if (message_content.includes("c^: ")) {
		message.react('827400490340843560');
	}
	if (message_content.includes(" :^>")) {
		message.react('827400490340843560');
	}
	if (message_content.includes(" :^3")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("<^: ")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("c^;")) {
		message.react('633443771895382068');
	}
	if (message_content.includes(";^>")) {
		message.react('633443771895382068');
	}
	if (message_content.includes(";^3")) {
		message.react('633443771895382068');
	}
	if (message_content.includes("<^;")) {
		message.react('633443771895382068');
	}
	if (message_content.includes(";^)")) {
		message.react('633443771895382068');
	}
	if (message_content.includes("(^;")) {
		message.react('633443771895382068');
	}
	if (message_content.includes(";^]")) {
		message.react('633443771895382068');
	}
	if (message_content.includes("[^;")) {
		message.react('633443771895382068');
	}
	if (message_content == "c^=") {
		message.react('827400490340843560');
	}
	if (message_content == "=^3") {
		message.react('827400490340843560');
	}
	if (message_content == "=^>") {
		message.react('827400490340843560');
	}
	if (message_content == "<^=") {
		message.react('827400490340843560');
	}
	if (message_content.includes("c^= ")) {
		message.react('827400490340843560');
	}
	if (message_content.includes(" =^>")) {
		message.react('827400490340843560');
	}
	if (message_content.includes(" =^3")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("<^= ")) {
		message.react('827400490340843560');
	}
	if (message_content == "c-:") {
		message.react('827400490340843560');
	}
	if (message_content == ":-3") {
		message.react('827400490340843560');
	}
	if (message_content == ":->") {
		message.react('827400490340843560');
	}
	if (message_content == "<-:") {
		message.react('827400490340843560');
	}
	if (message_content == ":-D") {
		message.react('414701504143032331');
	}
	if (message_content == "D-:") {
		message.react('282297846554951681');
	}
	if (message_content.includes(" :-D")) {
		message.react('414701504143032331');
	}
	if (message_content.includes("D-: ")) {
		message.react('282297846554951681');
	}
	if (message_content == "=-D") {
		message.react('414701504143032331');
	}
	if (message_content == "D-=") {
		message.react('282297846554951681');
	}
	if (message_content.includes(" =-D")) {
		message.react('414701504143032331');
	}
	if (message_content.includes("D-= ")) {
		message.react('282297846554951681');
	}
	if (message_content.includes("c-: ")) {
		message.react('827400490340843560');
	}
	if (message_content.includes(" :->")) {
		message.react('827400490340843560');
	}
	if (message_content.includes(" :-3")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("<-: ")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("c-;")) {
		message.react('633443771895382068');
	}
	if (message_content.includes(";->")) {
		message.react('633443771895382068');
	}
	if (message_content.includes(";-3")) {
		message.react('633443771895382068');
	}
	if (message_content.includes("<-;")) {
		message.react('633443771895382068');
	}
	if (message_content.includes(";-)")) {
		message.react('633443771895382068');
	}
	if (message_content.includes("(-;")) {
		message.react('633443771895382068');
	}
	if (message_content.includes(";-]")) {
		message.react('633443771895382068');
	}
	if (message_content.includes("[-;")) {
		message.react('633443771895382068');
	}
	if (message_content == "c-=") {
		message.react('827400490340843560');
	}
	if (message_content == "=-3") {
		message.react('827400490340843560');
	}
	if (message_content == "=->") {
		message.react('827400490340843560');
	}
	if (message_content == "<-=") {
		message.react('827400490340843560');
	}
	if (message_content.includes("c-= ")) {
		message.react('827400490340843560');
	}
	if (message_content.includes(" =->")) {
		message.react('827400490340843560');
	}
	if (message_content.includes(" =-3")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("<-= ")) {
		message.react('827400490340843560');
	}
	if (message_content == ("bedtime")) {
		message.react('636669695013027841');
	}
	if (message_content == ("bedtime.")) {
		message.react('636669695013027841');
	}
	if (message_content == ("bedtime!")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("🥱")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("gnight")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("goodnight")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("goodnite")) {
		message.react('636669695013027841');
	}
	if (message_content.includes(" nite")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("night night")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("nightnight")) {
		message.react('636669695013027841');
	}
	if (message_content.includes(" nity")) {
		message.react('636669695013027841');
	}
	if (message_content.includes(" nighty")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("g'night")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("good night")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("night every")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("🌙")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("😴")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("afk")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("brb")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("💤")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("residentsleeper")) {
		message.react('636669695013027841');
	}
	if (message_content.includes("💯")) {
		message.react('633446681991708776');
	}
	if (message_content.includes("10/10")) {
		message.react('633446681991708776');
	}
	if (message_content == "perfect") {
		message.react('633446681991708776');
	}
	if (message_content == "perfect.") {
		message.react('633446681991708776');
	}
	if (message_content == "perfect!") {
		message.react('633446681991708776');
	}
	if (message_content == "perfect!!") {
		message.react('633446681991708776');
	}
	if (message_content == "perfect!!!") {
		message.react('633446681991708776');
	}
	if (message_content.includes("👌")) {
		message.react('633446681991708776');
	}
	if (message_content.includes("m'lady")) {
		message.react('633446681991708776');
	}
	if (message_content.includes("m' lady")) {
		message.react('633446681991708776');
	}
	if (message_content.includes("m’lady")) {
		message.react('633446681991708776');
	}
	if (message_content.includes("m’ lady")) {
		message.react('633446681991708776');
	}
	if (message_content.includes("😉")) {
		message.react('633443771895382068');
	}
	if (message_content.includes("big brain")) {
		message.react('637049607804813325');
	}
	if (message_content.includes("big brian")) {
		message.react('637049607804813325');
	}
	if (message_content.includes("big-brain")) {
		message.react('637049607804813325');
	}
	if (message_content.includes("big-brian")) {
		message.react('637049607804813325');
	}
	if (message_content.includes("sentience")) {
		message.react('637049607804813325');
	}
	if (message_content.includes("sentient")) {
		message.react('637049607804813325');
	}
	if (message_content.includes("00 iq")) {
		message.react('637049607804813325');
	}
	if (message_content.includes("00 mpiq")) {
		message.react('637049607804813325');
	}
	if (message_content.includes("dansgame")) {
		message.react('364238473193848832');
	}
	if (message_content.includes("😠")) {
		message.react('317186770104221697');
	}
	if (message_content == ("angy")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(" angy")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("angery")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("big mad")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:^(")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:-(")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("):<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(")^:<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(")-:<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:(")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:^[")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:-[")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("]:<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("]^:<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("]-:<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:[")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:^/")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:-/")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("/:<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("/^:<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("/-:<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:/")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:^|")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:-|")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("|:<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("|^:<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("|-:<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:|")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:c")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:^c")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=^(")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">:-c")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=-(")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=(")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(")=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(")^=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=^[")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(")-=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=-[")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=[")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("]=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("]^=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=^/")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("]-=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=-/")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=/")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("/=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("/^=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=^|")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("/-=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=-|")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=|")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("|=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("|^=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("|-=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("😡")) {
		message.react('364238473193848832');
	}
	if (message_content.includes("🤬")) {
		message.react('818276154548289566');
	}
	if (message_content.includes("swiftrage")) {
		message.react('705643524804050945');
	}
	if (message_content.includes("what were they thinking")) {
		message.react('705643524804050945');
	}
	if (message_content.includes("is2g")) {
		message.react('364238473193848832');
	}
	if (message_content.includes("swear to god")) {
		message.react('364238473193848832');
	}
	if (message_content.includes("hey stinky")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("hey, stinky")) {
		message.react('827400490340843560');
	}
	if (message_content.includes(" :^)")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("(^: ")) {
		message.react('827400490340843560');
	}
	if (message_content.includes(" =^)")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("(^= ")) {
		message.react('827400490340843560');
	}
	if (message_content == ":^)") {
		message.react('827400490340843560');
	}
	if (message_content == "(^:") {
		message.react('827400490340843560');
	}
	if (message_content == "=^)") {
		message.react('827400490340843560');
	}
	if (message_content == "(^=") {
		message.react('827400490340843560');
	}
	if (message_content.includes(" :^]")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("[^: ")) {
		message.react('827400490340843560');
	}
	if (message_content.includes(" =^]")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("[^= ")) {
		message.react('827400490340843560');
	}
	if (message_content == ":^]") {
		message.react('827400490340843560');
	}
	if (message_content == "[^:") {
		message.react('827400490340843560');
	}
	if (message_content == "=^]") {
		message.react('827400490340843560');
	}
	if (message_content == "[^=") {
		message.react('827400490340843560');
	}
	if (message_content.includes(" :-)")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("(-: ")) {
		message.react('827400490340843560');
	}
	if (message_content.includes(" =-)")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("(-= ")) {
		message.react('827400490340843560');
	}
	if (message_content == ":-)") {
		message.react('827400490340843560');
	}
	if (message_content == "(-:") {
		message.react('827400490340843560');
	}
	if (message_content == "=-)") {
		message.react('827400490340843560');
	}
	if (message_content == "(-=") {
		message.react('827400490340843560');
	}
	if (message_content.includes(" :-]")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("[-: ")) {
		message.react('827400490340843560');
	}
	if (message_content.includes(" =-]")) {
		message.react('827400490340843560');
	}
	if (message_content.includes("[-= ")) {
		message.react('827400490340843560');
	}
	if (message_content == ":-]") {
		message.react('827400490340843560');
	}
	if (message_content == "[-:") {
		message.react('827400490340843560');
	}
	if (message_content == "=-]") {
		message.react('827400490340843560');
	}
	if (message_content == "[-=") {
		message.react('827400490340843560');
	}
	if (message_content.includes("👁️")) {
		message.react('635520561417551903');
	}
	if (message_content.includes("👀")) {
		message.react('317479698621792267');
	}
	if (message_content.includes("blues")) {
		message.react('682824065789984773');
	}
	if (message_content.includes("what did one wall")) {
		message.react('682824065789984773');
	}
	if (message_content.includes("there go all my bones")) {
		message.react('682824065789984773');
	}
	if (message_content.includes("life begins after school")) {
		message.react('682823847535312906');
	}
	if (message_content.includes("gonna start at the mall today")) {
		message.react('682823847535312906');
	}
	if (message_content.includes("🤤")) {
		message.react('713213661551919195');
	}
	if (message_content.includes("🔥")) {
		message.react('682823847480918031');
	}
	if (message_content.includes("gonna be lit")) {
		message.react('682823847480918031');
	}
	if (message_content.includes("gonna be fire")) {
		message.react('682823847480918031');
	}
	if (message_content.includes("shits lit")) {
		message.react('682823847480918031');
	}
	if (message_content.includes("shit's fire")) {
		message.react('682823847480918031');
	}
	if (message_content.includes("shit’s fire")) {
		message.react('682823847480918031');
	}
	if (message_content.includes("shit is fire")) {
		message.react('682823847480918031');
	}
	if (message_content.includes("this is fire")) {
		message.react('682823847480918031');
	}
	if (message_content.includes("that is fire")) {
		message.react('682823847480918031');
	}
	if (message_content.includes("lit af")) {
		message.react('682823847480918031');
	}
	if (message_content == "lit") {
		message.react('682823847480918031');
	}
	if (message_content == "lit.") {
		message.react('682823847480918031');
	}
	if (message_content == "lit!") {
		message.react('682823847480918031');
	}
	if (message_content.includes("my bop")) {
		message.react('316752108437372928');
	}
	if (message_content.includes("a bop")) {
		message.react('316752108437372928');
	}
	if (message_content.includes("my jam")) {
		message.react('316752108437372928');
	}
	if (message_content.includes("banger")) {
		message.react('316752108437372928');
	}
	if (message_content.includes("a jam ")) {
		message.react('316752108437372928');
	}
	if (message_content.includes("a jam.")) {
		message.react('316752108437372928');
	}
	if (message_content.includes("a jam!")) {
		message.react('316752108437372928');
	}
	if (message_content.includes("👋")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("✋")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("ohai")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("o hai")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("oh hai")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("ohey")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("o hey")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("oh hey")) {
		message.react('425059856559636490');
	}
	if (message_content == "hai") {
		message.react('425059856559636490');
	}
	if (message_content.includes(" o/")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("o/ ")) {
		message.react('425059856559636490');
	}
	if (message_content == "o/") {
		message.react('425059856559636490');
	}
	if (message_content == "sup") {
		message.react('425059856559636490');
	}
	if (message_content == "yo") {
		message.react('425059856559636490');
	}
	if (message_content == "what's up") {
		message.react('425059856559636490');
	}
	if (message_content == "whats up") {
		message.react('425059856559636490');
	}
	if (message_content == "hai!") {
		message.react('425059856559636490');
	}
	if (message_content == "sup!") {
		message.react('425059856559636490');
	}
	if (message_content == "yo!") {
		message.react('425059856559636490');
	}
	if (message_content == "what's up?") {
		message.react('425059856559636490');
	}
	if (message_content == "whats up?") {
		message.react('425059856559636490');
	}
	if (message_content.includes("hiya")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hi there")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hi all")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hi yall")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hi y'all")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hi guys")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hey there")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hey guys")) {
		message.react('425059856559636490');
	}
	if (message_content == ("hey all")) {
		message.react('425059856559636490');
	}
	if (message_content.includes(" hey all")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hey yall")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hey y'all")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hi everyone")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hey everyone")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hi everybody")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hey everybody")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hi dude")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hey dude")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("yo there")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("yo all")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("yo yall")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("yo y'all")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("yo guys")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("yo everyone")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("yo everybody")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("yo dude")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("howdy")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("heyguys")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("greetings")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("ayyo")) {
		message.react('425059856559636490');
	}
	if (message_content == "yo") {
		message.react('425059856559636490');
	}
	if (message_content.includes(" sup ")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("sssup")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("sssap")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("zzzup")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("wassup")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("wassap")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("wazzup")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("wazzap")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hello")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("'el")) {
		message.react('425059856559636490');
	}
	if (message_content == "ello") {
		message.react('425059856559636490');
	}
	if (message_content == "ello.") {
		message.react('425059856559636490');
	}
	if (message_content == "ello!") {
		message.react('425059856559636490');
	}
	if (message_content == "hoi") {
		message.react('425059856559636490');
	}
	if (message_content == "hoi.") {
		message.react('425059856559636490');
	}
	if (message_content == "hoi!") {
		message.react('425059856559636490');
	}
	if (message_content.includes("hoi ")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hoi, ")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hoi. ")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("hoi! ")) {
		message.react('425059856559636490');
	}
	if (message_content.includes(" oi ")) {
		message.react('425059856559636490');
	}
	if (message_content.includes(" oi,")) {
		message.react('425059856559636490');
	}
	if (message_content.includes(" oi.")) {
		message.react('425059856559636490');
	}
	if (message_content.includes(" oi!")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("oi mate")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("oi, mate")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("☀️")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("good luck")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("godspeed")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("have fun")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("glhf")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("gl hf")) {
		message.react('425059856559636490');
	}
	if (message_content == "gl") {
		message.react('827400490211213322');
	}
	if (message_content.includes("have a nice")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("have a good")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("have a great")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("have an awesome")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("welcome to the server")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("welcome to our")) {
		message.react('425059856559636490');
	}
	if (message_content == "gm") {
		message.react('425059856559636490');
	}
	if (message_content == "morning") {
		message.react('425059856559636490');
	}
	if (message_content == "morning.") {
		message.react('425059856559636490');
	}
	if (message_content == "morning!") {
		message.react('425059856559636490');
	}
	if (message_content == "mornin") {
		message.react('425059856559636490');
	}
	if (message_content == "mornin.") {
		message.react('425059856559636490');
	}
	if (message_content == "mornin!") {
		message.react('425059856559636490');
	}
	if (message_content == "morn") {
		message.react('425059856559636490');
	}
	if (message_content == "morn.") {
		message.react('425059856559636490');
	}
	if (message_content == "morn!") {
		message.react('425059856559636490');
	}
	if (message_content == "afternoon") {
		message.react('425059856559636490');
	}
	if (message_content == "afternoon.") {
		message.react('425059856559636490');
	}
	if (message_content == "afternoon!") {
		message.react('425059856559636490');
	}
	if (message_content == "evening") {
		message.react('425059856559636490');
	}
	if (message_content == "evening.") {
		message.react('425059856559636490');
	}
	if (message_content == "evening!") {
		message.react('425059856559636490');
	}
	if (message_content == "evenin") {
		message.react('425059856559636490');
	}
	if (message_content == "evenin.") {
		message.react('425059856559636490');
	}
	if (message_content == "evenin!") {
		message.react('425059856559636490');
	}
	if (message_content == "good day") {
		message.react('425059856559636490');
	}
	if (message_content == "good day.") {
		message.react('425059856559636490');
	}
	if (message_content == "good day!") {
		message.react('425059856559636490');
	}
	if (message_content == "gn") {
		message.react('636669695013027841');
	}
	if (message_content == "night") {
		message.react('636669695013027841');
	}
	if (message_content == "night.") {
		message.react('636669695013027841');
	}
	if (message_content == "night!") {
		message.react('636669695013027841');
	}
	if (message_content.includes("g'morn")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g’morn")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("gmorn")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g' morn")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g’ morn")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("good morning")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("morning every")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g'day")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g'afternoon")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g’day")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g’afternoon")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g' day")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g' afternoon")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g’ day")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g’ afternoon")) {
		message.react('425059856559636490');
	}
	if (message_content.includes(" gday")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("gafternoon")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("good afternoon")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("afternoon every")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g'evening")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g' evening")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g’evening")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("g’ evening")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("gevening")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("good evening")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("evening every")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("bye")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("bai ")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("see you ")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("see you.")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("see you!")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("see ya")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("see y'all")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("see y’all")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("cya ")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("cya.")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("cya!")) {
		message.react('425059856559636490');
	}
	if (message_content == "cya") {
		message.react('425059856559636490');
	}
	if (message_content.includes("catch you later")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("catch ya later")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("later man")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("later dude")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("later guys")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("later yall")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("later y'all")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("later y’all")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("later all")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("later everyone")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("later everybody")) {
		message.react('425059856559636490');
	}
	if (message_content == "bai") {
		message.react('425059856559636490');
	}
	if (message_content == "later") {
		message.react('425059856559636490');
	}
	if (message_content == "bai.") {
		message.react('425059856559636490');
	}
	if (message_content == "later.") {
		message.react('425059856559636490');
	}
	if (message_content == "bai!") {
		message.react('425059856559636490');
	}
	if (message_content == "later!") {
		message.react('425059856559636490');
	}
	if (message_content == "hi") {
		message.react('425059856559636490');
	}
	if (message_content == "hi.") {
		message.react('425059856559636490');
	}
	if (message_content == "hi!") {
		message.react('425059856559636490');
	}
	if (message_content == "hey") {
		message.react('425059856559636490');
	}
	if (message_content == "hey.") {
		message.react('425059856559636490');
	}
	if (message_content == "hey!") {
		message.react('425059856559636490');
	}
	if (message_content.includes("heya")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("heyo")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("🙏")) {
		message.react('425067424639877120');
	}
	if (message_content.includes("cmon work")) {
		message.react('425067424639877120');
	}
	if (message_content.includes("c'mon work")) {
		message.react('425067424639877120');
	}
	if (message_content.includes("come on work")) {
		message.react('425067424639877120');
	}
	if (message_content.includes("please work")) {
		message.react('425067424639877120');
	}
	if (message_content.includes("pls work")) {
		message.react('425067424639877120');
	}
	if (message_content.includes("plz work")) {
		message.react('425067424639877120');
	}
	if (message_content.includes("work already")) {
		message.react('425067424639877120');
	}
	if (message_content.includes("this time pl")) {
		message.react('425067424639877120');
	}
	if (message_content.includes("please this time")) {
		message.react('425067424639877120');
	}
	if (message_content.includes("pls this time")) {
		message.react('425067424639877120');
	}
	if (message_content.includes("plz this time")) {
		message.react('425067424639877120');
	}
	if (message_content.includes("work pl")) {
		message.react('425067424639877120');
	}
	if (message_content == "bless") {
		message.react('425067424639877120');
	}
	if (message_content == "bless.") {
		message.react('425067424639877120');
	}
	if (message_content == "bless!") {
		message.react('425067424639877120');
	}
	if (message_content.includes("🅱️")) {
		message.react('818030443591892992');
	}
	if (message_content.includes("💪")) {
		message.react('832900444061302824');
	}
	if (message_content.includes("stronk")) {
		message.react('832900444061302824');
	}
	if (message_content.includes("s t r o n k")) {
		message.react('832900444061302824');
	}
	if (message_content.includes("🤔")) {
		message.react('832863821554253834');
	}
	if (message_content.includes("🧐")) {
		message.react('279394964952055808');
	}
	if (message_content.includes("😈")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("jebait")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("baited")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:)")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("(:<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">=)")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("(=<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:]")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("[:<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">=]")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("[=<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:^)")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("(^:<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">=^)")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("(^=<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:^]")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("[^:<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">=^]")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("[^=<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:-)")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("(-:<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">=-)")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("(-=<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:-]")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("[-:<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">=-]")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("[-=<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:D")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("D:<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=D")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("D=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("c:<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:>")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:3")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("<:<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("c=<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">=>")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">=3")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("<=<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:^D")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("D^:<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=^D")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("D^=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("c^:<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:^>")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:^3")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("<^:<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("c^=<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">=^>")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">=^3")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("<^=<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:-D")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("D-:<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes(">=-D")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("D-=<")) {
		message.react('317186770104221697');
	}
	if (message_content.includes("c-:<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:->")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">:-3")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("<-:<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("c-=<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">=->")) {
		message.react('316737233279385600');
	}
	if (message_content.includes(">=-3")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("<-=<")) {
		message.react('316737233279385600');
	}
	if (message_content.includes("😬")) {
		message.react('832864279921033216');
	}
	if (message_content.includes("yike")) {
		message.react('832864279921033216');
	}
	if (message_content.includes("cringe")) {
		message.react('832864279921033216');
	}
	if (message_content.includes(" hahaa")) {
		message.react('832864279921033216');
	}
	if (message_content == "hahaa") {
		message.react('832864279921033216');
	}
	if (message_content.includes("😒")) {
		message.react('364308148313522177');
	}
	if (message_content.includes("smh")) {
		message.react('364308148313522177');
	}
	if (message_content.includes("tsk")) {
		message.react('364308148313522177');
	}
	if (message_content.includes("sksk")) {
		message.react('364308148313522177');
	}
	if (message_content.includes("<_<")) {
		message.react('364308148313522177');
	}
	if (message_content.includes("<.<")) {
		message.react('364308148313522177');
	}
	if (message_content.includes("<-<")) {
		message.react('364308148313522177');
	}
	if (message_content.includes(">_>")) {
		message.react('364308148313522177');
	}
	if (message_content.includes(">.>")) {
		message.react('364308148313522177');
	}
	if (message_content.includes(">->")) {
		message.react('364308148313522177');
	}
	if (message_content.includes("^_^")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("^.^")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("^-^")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("^w^")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("ᵔ_ᵔ")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("ᵔ.ᵔ")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("ᵔ-ᵔ")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("ᵔwᵔ")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("w o k e")) {
		message.react('705643524804050945');
	}
	if (message_content.includes("a s c e n")) {
		message.react('705643524804050945');
	}
	if (message_content.includes("guess ill die")) {
		message.react('827397352347402260');
	}
	if (message_content.includes("guess i’ll die")) {
		message.react('827397352347402260');
	}
	if (message_content.includes("guess i'll die")) {
		message.react('827397352347402260');
	}
	if (message_content.includes("🤷")) {
		message.react('827397352347402260');
	}
	if (message_content == "ig") {
		message.react('827397352347402260');
	}
	if (message_content == "ig.") {
		message.react('827397352347402260');
	}
	if (message_content.includes("¯\_(ツ)_/¯")) {
		message.react('827397352347402260');
	}
	if (message_content.includes("idc")) {
		message.react('827397352347402260');
	}
	if (message_content.includes("big sad")) {
		message.react('650886937632309268');
	}
	if (message_content == ":v") {
		message.react('636662427596881931');
	}
	if (message_content == "=v") {
		message.react('636662427596881931');
	}
	if (message_content == ":y") {
		message.react('636662427596881931');
	}
	if (message_content == "=y") {
		message.react('636662427596881931');
	}
	if (message_content == ":c") {
		message.react('650886937632309268');
	}
	if (message_content == "=c") {
		message.react('650886937632309268');
	}
	if (message_content == ":(") {
		message.react('650886937632309268');
	}
	if (message_content == "=(") {
		message.react('650886937632309268');
	}
	if (message_content == "):") {
		message.react('650886937632309268');
	}
	if (message_content == ")=") {
		message.react('650886937632309268');
	}
	if (message_content.includes(" :(")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" =(")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" ): ")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(")= ")) {
		message.react('650886937632309268');
	}
	if (message_content == ":<") {
		message.react('650886937632309268');
	}
	if (message_content == "=<") {
		message.react('650886937632309268');
	}
	if (message_content == ">:") {
		message.react('650886937632309268');
	}
	if (message_content == ">=") {
		message.react('650886937632309268');
	}
	if (message_content.includes(" :<")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" =<")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(">: ")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(">= ")) {
		message.react('650886937632309268');
	}
	if (message_content == ":[") {
		message.react('650886937632309268');
	}
	if (message_content == "=[") {
		message.react('650886937632309268');
	}
	if (message_content == "]:") {
		message.react('650886937632309268');
	}
	if (message_content == "]=") {
		message.react('650886937632309268');
	}
	if (message_content.includes(" :[")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" =[")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("]: ")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("]= ")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(":v ")) {
		message.react('636662427596881931');
	}
	if (message_content.includes(" =v")) {
		message.react('636662427596881931');
	}
	if (message_content == ":^v") {
		message.react('636662427596881931');
	}
	if (message_content == "=^v") {
		message.react('636662427596881931');
	}
	if (message_content.includes(":y ")) {
		message.react('636662427596881931');
	}
	if (message_content.includes(" =y")) {
		message.react('636662427596881931');
	}
	if (message_content == ":^y") {
		message.react('636662427596881931');
	}
	if (message_content == "=^y") {
		message.react('636662427596881931');
	}
	if (message_content.includes(":c ")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" =c")) {
		message.react('650886937632309268');
	}
	if (message_content == ":^c") {
		message.react('650886937632309268');
	}
	if (message_content == "=^c") {
		message.react('650886937632309268');
	}
	if (message_content == ":^(") {
		message.react('650886937632309268');
	}
	if (message_content == "=^(") {
		message.react('650886937632309268');
	}
	if (message_content == ")^:") {
		message.react('650886937632309268');
	}
	if (message_content == ")^=") {
		message.react('650886937632309268');
	}
	if (message_content.includes(" :^(")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" =^(")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(")^: ")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(")^= ")) {
		message.react('650886937632309268');
	}
	if (message_content == ":^<") {
		message.react('650886937632309268');
	}
	if (message_content == "=^<") {
		message.react('650886937632309268');
	}
	if (message_content == ">^:") {
		message.react('650886937632309268');
	}
	if (message_content == ">^=") {
		message.react('650886937632309268');
	}
	if (message_content.includes(" :^<")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" =^<")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(">^: ")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(">^= ")) {
		message.react('650886937632309268');
	}
	if (message_content == ":^[") {
		message.react('650886937632309268');
	}
	if (message_content == "=^[") {
		message.react('650886937632309268');
	}
	if (message_content == "]^:") {
		message.react('650886937632309268');
	}
	if (message_content == "]^=") {
		message.react('650886937632309268');
	}
	if (message_content.includes(" :^[")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" =^[")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("]^: ")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("]^= ")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" :^c")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" =^c")) {
		message.react('650886937632309268');
	}
	if (message_content == ":-c") {
		message.react('650886937632309268');
	}
	if (message_content == "=-c") {
		message.react('650886937632309268');
	}
	if (message_content == ":-(") {
		message.react('650886937632309268');
	}
	if (message_content == "=-(") {
		message.react('650886937632309268');
	}
	if (message_content == ")-:") {
		message.react('650886937632309268');
	}
	if (message_content == ")-=") {
		message.react('650886937632309268');
	}
	if (message_content.includes(" :-(")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" =-(")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(")-: ")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(")-= ")) {
		message.react('650886937632309268');
	}
	if (message_content == ":-<") {
		message.react('650886937632309268');
	}
	if (message_content == "=-<") {
		message.react('650886937632309268');
	}
	if (message_content == ">-:") {
		message.react('650886937632309268');
	}
	if (message_content == ">-=") {
		message.react('650886937632309268');
	}
	if (message_content.includes(" :-<")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" =-<")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(">-: ")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(">-= ")) {
		message.react('650886937632309268');
	}
	if (message_content == ":-[") {
		message.react('650886937632309268');
	}
	if (message_content == "=-[") {
		message.react('650886937632309268');
	}
	if (message_content == "]-:") {
		message.react('650886937632309268');
	}
	if (message_content == "]-=") {
		message.react('650886937632309268');
	}
	if (message_content.includes(" :-[")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" =-[")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("]-: ")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("]-= ")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" :-c")) {
		message.react('650886937632309268');
	}
	if (message_content.includes(" =-c")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("='")) {
		message.react('632997789378412554');
	}
	if (message_content.includes("'=")) {
		message.react('632997789378412554');
	}
	if (message_content.includes(":'")) {
		message.react('632997789378412554');
	}
	if (message_content.includes("':")) {
		message.react('632997789378412554');
	}
	if (message_content.includes("=’")) {
		message.react('632997789378412554');
	}
	if (message_content.includes("’=")) {
		message.react('632997789378412554');
	}
	if (message_content.includes(":’")) {
		message.react('632997789378412554');
	}
	if (message_content.includes("’:")) {
		message.react('632997789378412554');
	}
	if (message_content.includes("☹️")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("😦")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("🙁")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("😞")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("😟")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("feelsbadman")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("this is so sad")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("😢")) {
		message.react('632997789378412554');
	}
	if (message_content.includes("😿")) {
		message.react('632997789378412554');
	}
	if (message_content.includes("😭")) {
		message.react('818265773293568071');
	}
	if (message_content.includes("literally crying")) {
		message.react('818265773293568071');
	}
	if (message_content.includes("cryng")) {
		message.react('818265773293568071');
	}
	if (message_content.includes("cring ")) {
		message.react('818265773293568071');
	}
	if (message_content.includes("crng")) {
		message.react('818265773293568071');
	}
	if (message_content.includes("shakig")) {
		message.react('818265773293568071');
	}
	if (message_content.includes("crying and shaking")) {
		message.react('818265773293568071');
	}
	if (message_content.includes("babyrage")) {
		message.react('632997789378412554');
	}
	if (message_content.includes(";-;")) {
		message.react('632997789378412554');
	}
	if (message_content.includes(";.;")) {
		message.react('632997789378412554');
	}
	if (message_content.includes(";_;")) {
		message.react('632997789378412554');
	}
	if (message_content.includes("q-q")) {
		message.react('632997789378412554');
	}
	if (message_content.includes("q.q")) {
		message.react('632997789378412554');
	}
	if (message_content.includes("q_q")) {
		message.react('632997789378412554');
	}
	if (message_content.includes("biblethump")) {
		message.react('632997789378412554');
	}
	if (message_content.includes("😔")) {
		message.react('415041303718395932');
	}
	if (message_content.includes("kreygasm")) {
		message.react('499395421559324684');
	}
	if (message_content.includes("just vibin")) {
		message.react('499395421559324684');
	}
	if (message_content.includes("vibin ")) {
		message.react('499395421559324684');
	}
	if (message_content.includes("😮")) {
		message.react('827397351572373544');
	}
	if (message_content.includes(" o:")) {
		message.react('827397351572373544');
	}
	if (message_content == "o:") {
		message.react('827397351572373544');
	}
	if (message_content == ":o") {
		message.react('827397351572373544');
	}
	if (message_content.includes(":()")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("():")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("=()")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("()=")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("=[]")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("[]=")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("0= ")) {
		message.react('827397351572373544');
	}
	if (message_content.includes(" =0")) {
		message.react('827397351572373544');
	}
	if (message_content == "0=") {
		message.react('827397351572373544');
	}
	if (message_content == "=0") {
		message.react('827397351572373544');
	}
	if (message_content.includes(" o^:")) {
		message.react('827397351572373544');
	}
	if (message_content == "o^:") {
		message.react('827397351572373544');
	}
	if (message_content == ":^o") {
		message.react('827397351572373544');
	}
	if (message_content.includes(":^()")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("()^:")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("=^()")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("()^=")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("=^[]")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("[]^=")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("0^= ")) {
		message.react('827397351572373544');
	}
	if (message_content.includes(" =^0")) {
		message.react('827397351572373544');
	}
	if (message_content == "0^=") {
		message.react('827397351572373544');
	}
	if (message_content == "=^0") {
		message.react('827397351572373544');
	}
	if (message_content.includes(" o-:")) {
		message.react('827397351572373544');
	}
	if (message_content == "o-:") {
		message.react('827397351572373544');
	}
	if (message_content == ":-o") {
		message.react('827397351572373544');
	}
	if (message_content.includes(":-()")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("()-:")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("=-()")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("()-=")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("=-[]")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("[]-=")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("0-= ")) {
		message.react('827397351572373544');
	}
	if (message_content.includes(" =-0")) {
		message.react('827397351572373544');
	}
	if (message_content == "0-=") {
		message.react('827397351572373544');
	}
	if (message_content == "=-0") {
		message.react('827397351572373544');
	}
	if (message_content.includes("omg")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("my god")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("my gawd")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("my lawd")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("my gosh")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("i oop")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("oop-")) {
		message.react('827397351572373544');
	}
	if (message_content == "i-") {
		message.react('827397351572373544');
	}
	if (message_content.includes("oh god")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("oh gawd")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("oh gosh")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("oh geez")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("oh jeez")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("oh my lord")) {
		message.react('827397351572373544');
	}
	if (message_content.includes(" oml")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("oml ")) {
		message.react('827397351572373544');
	}
	if (message_content == "oml") {
		message.react('827397351572373544');
	}
	if (message_content == "oml.") {
		message.react('827397351572373544');
	}
	if (message_content == "oml!") {
		message.react('827397351572373544');
	}
	if (message_content.includes("o.o")) {
		message.react('647686065557340160');
	}
	if (message_content.includes("wtf")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("squad laugh")) {
		message.react('713265408899285072');
	}
	if (message_content.includes("🚶")) {
		message.react('705616076519768124');
	}
	if (message_content.includes("a head out")) {
		message.react('705616076519768124');
	}
	if (message_content.includes("holla get dolla")) {
		message.react('705437479741947956');
	}
	if (message_content.includes("loads a mon")) {
		message.react('705437479741947956');
	}
	if (message_content.includes("loadsa mon")) {
		message.react('705437479741947956');
	}
	if (message_content.includes("loadsamon")) {
		message.react('705437479741947956');
	}
	if (message_content.includes("cash money")) {
		message.react('705437479741947956');
	}
	if (message_content.includes("fat stacks")) {
		message.react('705437479741947956');
	}
	if (message_content.includes("bruh moment")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("b r u h")) {
		message.react('681365757115891725');
	}
	if (message_content.includes("gruh")) {
		message.react('681365757115891725');
	}
	if (message_content == "bruh") {
		message.react('681365757115891725');
	}
	if (message_content == "bruh.") {
		message.react('681365757115891725');
	}
	if (message_content == "bruh!") {
		message.react('681365757115891725');
	}
	if (message_content == "tf") {
		message.react('282295242407936000');
	}
	if (message_content == "tf.") {
		message.react('282295242407936000');
	}
	if (message_content == "tf?") {
		message.react('282295242407936000');
	}
	if (message_content == "tf!") {
		message.react('282295242407936000');
	}
	if (message_content.includes("dafu")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("da fuq")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("da fuk")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("da fuc")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("what the fu")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("what the fric")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("what the he")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("what to fu")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("what to fric")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("what to he")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("the fuck?")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("the hell?")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("the heck?")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("da fuck")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("da hell")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("da heck")) {
		message.react('282295242407936000');
	}
	if (message_content == "wth") {
		message.react('282295242407936000');
	}
	if (message_content == "wth?") {
		message.react('282295242407936000');
	}
	if (message_content == "the fuck") {
		message.react('282295242407936000');
	}
	if (message_content == "the hell") {
		message.react('282295242407936000');
	}
	if (message_content == "the heck") {
		message.react('282295242407936000');
	}
	if (message_content.includes(" wth")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("0_0")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("0_o")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("0-o")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("0.o")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("o_0")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("o-0")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("o.0")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("o_o")) {
		message.react('282295242407936000');
	}
	if (message_content.includes(" o-o")) {
		message.react('282295242407936000');
	}
	if (message_content == "o-o") {
		message.react('282295242407936000');
	}
	if (message_content.includes("@.@")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("@_@")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("@-@")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("._.")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("welp.")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("welp,")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("w e l p")) {
		message.react('282295242407936000');
	}
	if (message_content == "wait wut") {
		message.react('282295242407936000');
	}
	if (message_content == "wait wat") {
		message.react('282295242407936000');
	}
	if (message_content == "wait what?") {
		message.react('282295242407936000');
	}
	if (message_content == "wait, what?") {
		message.react('282295242407936000');
	}
	if (message_content == "wait what") {
		message.react('282295242407936000');
	}
	if (message_content == "wait wha") {
		message.react('282295242407936000');
	}
	if (message_content == "wait wh") {
		message.react('282295242407936000');
	}
	if (message_content == "wh") {
		message.react('282295242407936000');
	}
	if (message_content == "wut") {
		message.react('282295242407936000');
	}
	if (message_content == "wat") {
		message.react('282295242407936000');
	}
	if (message_content == "what") {
		message.react('282295242407936000');
	}
	if (message_content == "welp") {
		message.react('282295242407936000');
	}
	if (message_content == "wha") {
		message.react('282295242407936000');
	}
	if (message_content == "lolwut") {
		message.react('282295242407936000');
	}
	if (message_content == "lolwhat") {
		message.react('282295242407936000');
	}
	if (message_content == "lolwat") {
		message.react('282295242407936000');
	}
	if (message_content == "lol wut") {
		message.react('282295242407936000');
	}
	if (message_content == "lol what") {
		message.react('282295242407936000');
	}
	if (message_content == "lol wat") {
		message.react('282295242407936000');
	}
	if (message_content.includes("e_e")) {
		message.react('231640439483138048');
	}
	if (message_content.includes("e.e")) {
		message.react('231640439483138048');
	}
	if (message_content.includes(".-.")) {
		message.react('282295242407936000');
	}
	if (message_content.includes("😱")) {
		message.react('266819167787810816');
	}
	if (message_content.includes("🙀")) {
		message.react('266819167787810816');
	}
	if (message_content.includes("wutface")) {
		message.react('266819167787810816');
	}
	if (message_content.includes("failfish")) {
		message.react('282292955761475584');
	}
	if (message_content.includes("🤦")) {
		message.react('282292955761475584');
	}
	if (message_content.includes("notlikethis")) {
		message.react('832899758447132672');
	}
	if (message_content.includes("pepehands")) {
		message.react('832899758447132672');
	}
	if (message_content.includes(" a selfie")) {
		message.react('705437491095666688');
	}
	if (message_content.includes("s a mistake")) {
		message.react('282292955761475584');
	}
	if (message_content.includes("re a mistake")) {
		message.react('282292955761475584');
	}
	if (message_content.includes("s a memestake")) {
		message.react('282292955761475584');
	}
	if (message_content.includes("re a memestake")) {
		message.react('282292955761475584');
	}
	if (message_content.includes("👻")) {
		message.react('316752108437372928');
	}
	if (message_content.includes("😜")) {
		message.react('653344834018344960');
	}
	if (message_content.includes("😗")) {
		message.react('653344834018344960');
	}
	if (message_content.includes("😙")) {
		message.react('653344834018344960');
	}
	if (message_content.includes(";p")) {
		message.react('653344834018344960');
	}
	if (message_content.includes("😛")) {
		message.react('414701504143032331');
	}
	if (message_content.includes(":p ")) {
		message.react('414701504143032331');
	}
	if (message_content.includes(" =p")) {
		message.react('414701504143032331');
	}
	if (message_content == ":p") {
		message.react('414701504143032331');
	}
	if (message_content == "=p") {
		message.react('414701504143032331');
	}
	if (message_content.includes(";^p")) {
		message.react('653344834018344960');
	}
	if (message_content.includes(":^p ")) {
		message.react('414701504143032331');
	}
	if (message_content.includes(" =^p")) {
		message.react('414701504143032331');
	}
	if (message_content == ":^p") {
		message.react('414701504143032331');
	}
	if (message_content == "=^p") {
		message.react('414701504143032331');
	}
	if (message_content.includes(";-p")) {
		message.react('653344834018344960');
	}
	if (message_content.includes(":-p ")) {
		message.react('414701504143032331');
	}
	if (message_content.includes(" =-p")) {
		message.react('414701504143032331');
	}
	if (message_content == ":-p") {
		message.react('414701504143032331');
	}
	if (message_content == "=-p") {
		message.react('414701504143032331');
	}
	if (message_content.includes("🤢")) {
		message.react('322817712931733505');
	}
	if (message_content == "yuck") {
		message.react('322817712931733505');
	}
	if (message_content == "yuck.") {
		message.react('322817712931733505');
	}
	if (message_content == "yuck!") {
		message.react('322817712931733505');
	}
	if (message_content.includes(" yuck")) {
		message.react('322817712931733505');
	}
	if (message_content == "gross") {
		message.react('322817712931733505');
	}
	if (message_content.includes("gross.")) {
		message.react('322817712931733505');
	}
	if (message_content.includes("blech")) {
		message.react('322817712931733505');
	}
	if (message_content.includes("gross!")) {
		message.react('322817712931733505');
	}
	if (message_content == "ew") {
		message.react('322817712931733505');
	}
	if (message_content == "ew.") {
		message.react('322817712931733505');
	}
	if (message_content == "ew!") {
		message.react('322817712931733505');
	}
	if (message_content.includes("groty")) {
		message.react('322817712931733505');
	}
	if (message_content.includes("eww")) {
		message.react('322817712931733505');
	}
	if (message_content.includes(" ew ")) {
		message.react('322817712931733505');
	}
	if (message_content.includes(" ew.")) {
		message.react('322817712931733505');
	}
	if (message_content.includes(" ew!")) {
		message.react('322817712931733505');
	}
	if (message_content.includes(" ew,")) {
		message.react('322817712931733505');
	}
	if (message_content.includes("disgust")) {
		message.react('322817712931733505');
	}
	if (message_content.includes("discust")) {
		message.react('322817712931733505');
	}
	if (message_content.includes("boning")) {
		message.react('647326428299395072');
	}
	if (message_content.includes("4head")) {
		message.react('632997790150033448');
	}
	if (message_content.includes("elegiggle")) {
		message.react('323972935230685184');
	}
	if (message_content.includes("👍")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("seemsgood")) {
		message.react('827400490211213322');
	}
	if (message_content == "im down") {
		message.react('827400490211213322');
	}
	if (message_content == "i'm down") {
		message.react('827400490211213322');
	}
	if (message_content == "i’m down") {
		message.react('827400490211213322');
	}
	if (message_content == "i am down") {
		message.react('827400490211213322');
	}
	if (message_content.includes("im down ")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i'm down ")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i’m down ")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i am down ")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("im down.")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i'm down.")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i’m down.")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i am down.")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("im down!")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i'm down!")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i’m down!")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i am down!")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("im game")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i'm game")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i’m game")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i am game")) {
		message.react('827400490211213322');
	}
	if (message_content == "i'm up") {
		message.react('827400490211213322');
	}
	if (message_content == "i’m up") {
		message.react('827400490211213322');
	}
	if (message_content == "im up") {
		message.react('827400490211213322');
	}
	if (message_content == "i am up") {
		message.react('827400490211213322');
	}
	if (message_content.includes("i'm up ")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i’m up ")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("im up ")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i am up ")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i'm up.")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i’m up.")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("im up.")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i am up.")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i'm up!")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i’m up!")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("im up!")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i am up!")) {
		message.react('827400490211213322');
	}
	if (message_content == "ill play") {
		message.react('827400490211213322');
	}
	if (message_content.includes(" ill play")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i'll play")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i’ll play")) {
		message.react('827400490211213322');
	}
	if (message_content == "ill join") {
		message.react('827400490211213322');
	}
	if (message_content.includes(" ill join")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i'll join")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i’ll join")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i can join")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i can play")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i will join")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i will play")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i shall join")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i shall play")) {
		message.react('827400490211213322');
	}
	if (message_content == "ill game") {
		message.react('827400490211213322');
	}
	if (message_content.includes(" ill game")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i'll game")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i’ll game")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("count me in")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("id be down")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i'd be down")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("i’d be down")) {
		message.react('827400490211213322');
	}
	if (message_content == "np") {
		message.react('827400490211213322');
	}
	if (message_content == "yw") {
		message.react('827400490211213322');
	}
	if (message_content == "ty") {
		message.react('827400490211213322');
	}
	if (message_content == "ty ty") {
		message.react('827400490211213322');
	}
	if (message_content == "gg") {
		message.react('827400490211213322');
	}
	if (message_content == "ggs") {
		message.react('827400490211213322');
	}
	if (message_content == "gg's") {
		message.react('827400490211213322');
	}
	if (message_content == "gg’s") {
		message.react('827400490211213322');
	}
	if (message_content == "wp") {
		message.react('827400490211213322');
	}
	if (message_content == "np.") {
		message.react('827400490211213322');
	}
	if (message_content == "yw.") {
		message.react('827400490211213322');
	}
	if (message_content == "ty.") {
		message.react('827400490211213322');
	}
	if (message_content == "gg.") {
		message.react('827400490211213322');
	}
	if (message_content == "ggs.") {
		message.react('827400490211213322');
	}
	if (message_content == "wp.") {
		message.react('827400490211213322');
	}
	if (message_content == "gg's.") {
		message.react('827400490211213322');
	}
	if (message_content == "gg’s.") {
		message.react('827400490211213322');
	}
	if (message_content == "np!") {
		message.react('827400490211213322');
	}
	if (message_content == "yw!") {
		message.react('827400490211213322');
	}
	if (message_content == "ty!") {
		message.react('827400490211213322');
	}
	if (message_content == "gg!") {
		message.react('827400490211213322');
	}
	if (message_content == "ggs!") {
		message.react('827400490211213322');
	}
	if (message_content == "wp!") {
		message.react('827400490211213322');
	}
	if (message_content == "gg's!") {
		message.react('827400490211213322');
	}
	if (message_content == "gg's!") {
		message.react('827400490211213322');
	}
	if (message_content == "gg’s!") {
		message.react('827400490211213322');
	}
	if (message_content == "thanks") {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks.")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks!")) {
		message.react('827400490211213322');
	}
	if (message_content == "thank you") {
		message.react('827400490211213322');
	}
	if (message_content.includes("thank you.")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thank you!")) {
		message.react('827400490211213322');
	}
	if (message_content == "no problem") {
		message.react('827400490211213322');
	}
	if (message_content == "no prob") {
		message.react('827400490211213322');
	}
	if (message_content == "well played") {
		message.react('827400490211213322');
	}
	if (message_content == "you're welcome") {
		message.react('827400490211213322');
	}
	if (message_content == "good game") {
		message.react('827400490211213322');
	}
	if (message_content == "good games") {
		message.react('827400490211213322');
	}
	if (message_content == "thx!") {
		message.react('827400490211213322');
	}
	if (message_content == "thx") {
		message.react('827400490211213322');
	}
	if (message_content == "thx.") {
		message.react('827400490211213322');
	}
	if (message_content.includes("no problem.")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("no prob.")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("well played.")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("no problem,")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("no prob,")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("well played,")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("no problem!")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("no prob!")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("well played!")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("good game!")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("good games!")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thank you all")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks y'all")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks y’all")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks yall")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks everyone")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks dude")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks mate")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks man")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks bro")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks, y'all")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks, y’all")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks, yall")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks, everyone")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks, dude")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks, mate")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks, man")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thanks, bro")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thx ")) {
		message.react('827400490211213322');
	}
	if (message_content.includes(" thx")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("np ")) {
		message.react('827400490211213322');
	}
	if (message_content.includes(" yw")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("yw ")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("re welcome")) {
		message.react('827400490211213322');
	}
	if (message_content.includes(" gg")) {
		message.react('827400490211213322');
	}
	if (message_content.includes(" ggs")) {
		message.react('827400490211213322');
	}
	if (message_content.includes(" wp")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("wp ")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("😳")) {
		message.react('832900667802386452');
	}
	if (message_content.includes("eff the cops")) {
		message.react('721934878081286194');
	}
	if (message_content.includes("eff the police")) {
		message.react('721934878081286194');
	}
	if (message_content.includes("witchdagg")) {
		message.react('721934878081286194');
	}
	if (message_content.includes("witch dagg")) {
		message.react('721934878081286194');
	}
	if (message_content.includes("maeday")) {
		message.react('721934878081286194');
	}
	if (message_content.includes("mae-day")) {
		message.react('721934878081286194');
	}
	if (message_content.includes("mae day")) {
		message.react('721934878081286194');
	}
	if (message_content.includes("nightmare eyes")) {
		message.react('721934878081286194');
	}
	if (message_content.includes("die anywhere else")) {
		message.react('721934878081286194');
	}
	if (message_content == "owo") {
		message.react('681392742630555755');
	}
	if (message_content == "ovo") {
		message.react('727576269029376052');
	}
	if (message_content == "uvu") {
		message.react('727576269029376052');
	}
	if (message_content.includes("notices ur")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("notices your")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("owo ")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("uwu")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("uvu ")) {
		message.react('727576269029376052');
	}
	if (message_content.includes("•ᴥ•")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("ᵔᴥᵔ")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("-ᴥ-")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("oᴥo")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("0ᴥ0")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("^ᴥ^")) {
		message.react('681392742630555755');
	}
	if (message_content.includes(":3c")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("=3c")) {
		message.react('681392742630555755');
	}
	if (message_content.includes(" owo")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("^o^")) {
		message.react('721934871483908116');
	}
	if (message_content.includes("o3o")) {
		message.react('647686065557340160');
	}
	if (message_content.includes("ovo ")) {
		message.react('727576269029376052');
	}
	if (message_content.includes(" ovo")) {
		message.react('727576269029376052');
	}
	if (message_content.includes("^v^")) {
		message.react('727576269029376052');
	}
	if (message_content.includes("-v-")) {
		message.react('727576269029376052');
	}
	if (message_content.includes("ᵔvᵔ")) {
		message.react('727576269029376052');
	}
	if (message_content.includes("0w0")) {
		message.react('681392742630555755');
	}
	if (message_content.includes("0v0")) {
		message.react('727576269029376052');
	}
	if (message_content.includes(">.<")) {
		message.react('632997788527099925');
	}
	if (message_content.includes(">_<")) {
		message.react('632997788527099925');
	}
	if (message_content.includes(">-<")) {
		message.react('632997788527099925');
	}
	if (message_content.includes("t_t")) {
		message.react('231640439483138048');
	}
	if (message_content.includes("t.t")) {
		message.react('231640439483138048');
	}
	if (message_content.includes(" t-t")) {
		message.react('231640439483138048');
	}
	if (message_content.includes("t-t ")) {
		message.react('231640439483138048');
	}
	if (message_content == "t-t") {
		message.react('231640439483138048');
	}
	if (message_content.includes("-_-")) {
		message.react('231640439483138048');
	}
	if (message_content.includes("😑")) {
		message.react('231640439483138048');
	}
	if (message_content.includes("-.-")) {
		message.react('231640439483138048');
	}
	if (message_content.includes("v_v")) {
		message.react('231640439483138048');
	}
	if (message_content.includes("v.v")) {
		message.react('231640439483138048');
	}
	if (message_content.includes("gotem")) {
		message.react('414662215107346433');
	}
	if (message_content.includes("gottem")) {
		message.react('414662215107346433');
	}
	if (message_content.includes("woo hoo")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("woohoo")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yoo!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("woo!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == "woo") {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == "yoo") {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("wooo")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yooo")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yesss")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == "yay") {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == "hella") {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("cc ye")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("cc yis")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("cc yus")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("cc yas")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("hurrah")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("huzzah")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("hoora")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("hoorra")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("hoo-ra")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("hoo ra")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("aw ye")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("aw yas")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("ww yas")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("aw yus")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("ww yus")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("aw yis")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("ww yis")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("ww ye")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yay!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("ck yes")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("ck yea")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("hell ye")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("he'll ye")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("he’ll ye")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("ck yas")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("hell yas")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("ck yis")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("hell yis")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("ck yus")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("hell yus")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == "o yas") {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("oh yas")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == "o yis") {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("oh yis")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == "o yus") {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("oh yus")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == "o yes") {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("hype!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("hyped!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("oh yes!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == ("o yeah!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == ("hype")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == ("hyped")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == ("get hype")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == ("get hyped")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == ("get hype.")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content == ("get hyped.")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("oh yeah!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yeah baby")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yeah, baby")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("feelsamazingman")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yes!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yeah!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("ing go!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("ing goo!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("in go!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("in goo!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("in' go!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("in' goo!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("in’ go!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("in’ goo!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s fucking go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s freaking go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s hecking go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s fricking go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s fuccing go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s heccing go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s fuckin’ go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s freakin’ go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s heckin’ go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s frickin’ go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s fuccin’ go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s heccin’ go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s fuckin’ go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s freakin’ go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s heckin’ go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s frickin’ go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s fuccin’ go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s heccin’ go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s fuckin' go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s freakin' go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s heckin' go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s frickin' go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s fuccin' go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s heccin' go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s fuckin go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s freakin go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s heckin go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s frickin go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s fuccin go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("s heccin go")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yeaaa")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yeee")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yisss")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yusss")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yasss")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yess!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yiss!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yuss!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("yass!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("gogogo")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("gooo")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('636662427596881931');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('317479698621792267');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997784106172416');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637060284716154880');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('712717460914044945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('740608634488225943');
        	}
		if (Math.floor(Math.random() * 4) == 0) {
            		message.react('705437489271275550');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560690720829');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637113890442051614');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681274847565053953');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577562167116368');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790150033448');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792079675424');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681398000010264581');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560229216357');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('414701504143032331');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('727577560137072710');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('643979425788067871');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('637049719293476875');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832900512294502460');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030447669542942');
        	}
	}
	if (message_content.includes("ayyy")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("eyyy")) {
		message.react('425059856559636490');
	}
	if (message_content.includes("aaaaa")) {
		message.react('635515880540733452');
	}
	if (message_content.includes("i’m screaming")) {
		message.react('635515880540733452');
	}
	if (message_content.includes("i'm screaming")) {
		message.react('635515880540733452');
	}
	if (message_content.includes("im screaming")) {
		message.react('635515880540733452');
	}
	if (message_content.includes("screaming rn")) {
		message.react('635515880540733452');
	}
	if (message_content.includes("whyy")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('266819167787810816');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('688081988812406796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681395776198279194');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397351572373544');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('635515880540733452');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('282297846554951681');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681385605162205241');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705643524804050945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681344127123587087');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681545564684288060');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705615104577896541');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997789378412554');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997788527099925');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('364306822330580993');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792075218957');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276799628181524');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030443496079370');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818183342062174210');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832899758447132672');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276154548289566');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832864279921033216');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832866086814089266');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818265773293568071');
        	}
	}
	if (message_content.includes("whaaa")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('266819167787810816');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('688081988812406796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681395776198279194');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397351572373544');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('635515880540733452');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('282297846554951681');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681385605162205241');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705643524804050945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681344127123587087');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681545564684288060');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705615104577896541');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997789378412554');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997788527099925');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('364306822330580993');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792075218957');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276799628181524');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030443496079370');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818183342062174210');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832899758447132672');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276154548289566');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832864279921033216');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832866086814089266');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818265773293568071');
        	}
	}
	if (message_content.includes("nooo")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('266819167787810816');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('688081988812406796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681395776198279194');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397351572373544');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('635515880540733452');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('282297846554951681');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681385605162205241');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705643524804050945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681344127123587087');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681545564684288060');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705615104577896541');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997789378412554');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997788527099925');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('364306822330580993');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792075218957');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276799628181524');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030443496079370');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818183342062174210');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832899758447132672');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276154548289566');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832864279921033216');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832866086814089266');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818265773293568071');
        	}
	}
	if (message_content.includes("fuuu")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('266819167787810816');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('688081988812406796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681395776198279194');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397351572373544');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('635515880540733452');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('282297846554951681');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681385605162205241');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705643524804050945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681344127123587087');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681545564684288060');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705615104577896541');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997789378412554');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997788527099925');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('364306822330580993');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792075218957');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276799628181524');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030443496079370');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818183342062174210');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832899758447132672');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276154548289566');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832864279921033216');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832866086814089266');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818265773293568071');
        	}
	}
	if (message_content.includes("shiii")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('266819167787810816');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('688081988812406796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681395776198279194');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397351572373544');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('635515880540733452');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('282297846554951681');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681385605162205241');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705643524804050945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681344127123587087');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681545564684288060');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705615104577896541');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997789378412554');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997788527099925');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('364306822330580993');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792075218957');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276799628181524');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030443496079370');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818183342062174210');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832899758447132672');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276154548289566');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832864279921033216');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832866086814089266');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818265773293568071');
        	}
	}
	if (message_content.includes("no!")) {
		message.react('635515880540733452');
	}
	if (message_content.includes("noo!")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('266819167787810816');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('688081988812406796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681395776198279194');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397351572373544');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('635515880540733452');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('282297846554951681');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681385605162205241');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705643524804050945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681344127123587087');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681545564684288060');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705615104577896541');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997789378412554');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997788527099925');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('364306822330580993');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792075218957');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276799628181524');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030443496079370');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818183342062174210');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832899758447132672');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276154548289566');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832864279921033216');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832866086814089266');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818265773293568071');
        	}
	}
	if (message_content.includes("nonono")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('266819167787810816');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('688081988812406796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681395776198279194');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397351572373544');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('635515880540733452');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('282297846554951681');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681385605162205241');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705643524804050945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681344127123587087');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681545564684288060');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705615104577896541');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997789378412554');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997788527099925');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('364306822330580993');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792075218957');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276799628181524');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030443496079370');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818183342062174210');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832899758447132672');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276154548289566');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832864279921033216');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832866086814089266');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818265773293568071');
        	}
	}
	if (message_content.includes("fuckfuck")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('266819167787810816');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('688081988812406796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681395776198279194');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397351572373544');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('635515880540733452');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('282297846554951681');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681385605162205241');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705643524804050945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681344127123587087');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681545564684288060');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705615104577896541');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997789378412554');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997788527099925');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('364306822330580993');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792075218957');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276799628181524');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030443496079370');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818183342062174210');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832899758447132672');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276154548289566');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832864279921033216');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832866086814089266');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818265773293568071');
        	}
	}
	if (message_content.includes("shitshit")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('266819167787810816');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('688081988812406796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681395776198279194');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397351572373544');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('635515880540733452');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('282297846554951681');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681385605162205241');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705643524804050945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681344127123587087');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681545564684288060');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705615104577896541');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997789378412554');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997788527099925');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('364306822330580993');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792075218957');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276799628181524');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030443496079370');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818183342062174210');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832899758447132672');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276154548289566');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832864279921033216');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832866086814089266');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818265773293568071');
        	}
	}
	if (message_content.includes("shit shit")) {
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('266819167787810816');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('688081988812406796');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681395776198279194');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('827397351572373544');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('635515880540733452');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('282297846554951681');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681385605162205241');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705643524804050945');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681344127123587087');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('681545564684288060');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('705615104577896541');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997789378412554');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('458023278234042399');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997788527099925');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('364306822330580993');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997792075218957');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276799628181524');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818030443496079370');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818183342062174210');
        	}
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832899758447132672');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818276154548289566');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832864279921033216');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('832866086814089266');
        	}
        	if (Math.floor(Math.random() * 2) == 0) {
            		message.react('818265773293568071');
        	}
	}
	if (message_content.includes("reeeee")) {
		message.react('832866086814089266');
	}
	if (message_content.includes("rules of nature")) {
		message.react('635515880540733452');
	}
	if (message_content == "reee") {
		message.react('832866086814089266');
	}
	if (message_content == "ree") {
		message.react('832866086814089266');
	}
	if (message_content == "reee!") {
		message.react('832866086814089266');
	}
	if (message_content == "ree!") {
		message.react('832866086814089266');
	}
	if (message_content.includes("°□°")) {
		message.react('635515880540733452');
	}
	if (message_content.includes("™️")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("©")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("®")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("(⌐■_■)")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("high iq")) {
		message.react('637049607804813325');
	}
	if (message_content.includes("high mpiq")) {
		message.react('637049607804813325');
	}
	if (message_content.includes("strats")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("🔍")) {
		message.react('282275968989659137');
	}
	if (message_content.includes("🔎")) {
		message.react('282275968989659137');
	}
	if (message_content.includes("such mystery")) {
		message.react('282275968989659137');
	}
	if (message_content.includes("its mystery")) {
		message.react('282275968989659137');
	}
	if (message_content.includes("it's a mystery")) {
		message.react('282275968989659137');
	}
	if (message_content.includes("it’s a mystery")) {
		message.react('282275968989659137');
	}
	if (message_content.includes("° ͜ʖ ͡°)")) {
		message.react('832867206253510676');
	}
	if (message_content.includes("thicc")) {
		message.react('832867206253510676');
	}
	if (message_content.includes("t h i c c")) {
		message.react('832867206253510676');
	}
	if (message_content.includes("🤗")) {
		message.react('727577560279679036');
	}
	if (message_content.includes("😽")) {
		message.react('653344834018344960');
	}
	if (message_content.includes("😘")) {
		message.react('653344834018344960');
	}
	if (message_content.includes("😗")) {
		message.react('653344834018344960');
	}
	if (message_content.includes("💋")) {
		message.react('653344834018344960');
	}
	if (message_content.includes("✋")) {
		message.react('737125828583882782');
	}
	if (message_content.includes("🤚")) {
		message.react('737125828583882782');
	}
	if (message_content.includes("🙋")) {
		message.react('737125828583882782');
	}
	if (message_content.includes("🖐️")) {
		message.react('737125828583882782');
	}
	if (message_content.includes("*raises hand")) {
		message.react('737125828583882782');
	}
	if (message_content.includes("💅")) {
		message.react('653344834018344960');
	}
	if (message_content.includes("d’oh i missed")) {
		message.react('681545564684288060');
	}
	if (message_content.includes("d'oh i missed")) {
		message.react('681545564684288060');
	}
	if (message_content.includes("doh i missed")) {
		message.react('681545564684288060');
	}
	if (message_content.includes("so ein mist")) {
		message.react('681545564684288060');
	}
	if (message_content.includes("hello darkness my old friend")) {
		message.react('650886937632309268');
	}
	if (message_content.includes("wahah")) {
		message.react('681398765482934294');
	}
	if (message_content == "wa") {
		message.react('316734055427211266');
	}
	if (message_content == "wah") {
		message.react('316734055427211266');
	}
	if (message_content == "wa.") {
		message.react('316734055427211266');
	}
	if (message_content.includes("wah.")) {
		message.react('316734055427211266');
	}
	if (message_content.includes("wa!")) {
		message.react('316734055427211266');
	}
	if (message_content.includes("wah!")) {
		message.react('316734055427211266');
	}
	if (message_content.includes("waa")) {
		message.react('316734055427211266');
	}
	if (message_content.includes("wahh")) {
		message.react('316734055427211266');
	}
	if (message_content.includes("have a rotten day")) {
		message.react('681398765482934294');
	}
	if (message_content.includes("wario show you fun")) {
		message.react('681398765482934294');
	}
	if (message_content.includes("ario i gotta")) {
		message.react('747677009118756914');
	}
	if (message_content.includes("ario, i gotta")) {
		message.react('747677009118756914');
	}
	if (message_content.includes("lousy")) {
		message.react('316734055427211266');
	}
	if (message_content.includes("lousy")) {
		message.react('316734055427211266');
	}
	if (message_content == "mushroom") {
		message.react('639317986011774986');
	}
	if (message_content == "mushroom!") {
		message.react('639317986011774986');
	}
	if (message_content.includes("hi im daisy")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("hi i'm daisy")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("hi i’m daisy")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("hi, im daisy")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("hi, i'm daisy")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("hi, i’m daisy")) {
		message.react('230128660580007937');
	}
	if (message_content.includes("bup")) {
		message.react('636662427596881931');
	}
	if (message_content.includes("shoutouts to simpleflips")) {
		message.react('636662427596881931');
	}
	if (message_content.includes("woot")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("alright!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("alrighty!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("all right!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("all righty!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("nice!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("sure!")) {
		message.react('637113890442051614');
	}
	if (message_content == "neat") {
		message.react('827400490211213322');
	}
	if (message_content == "neato") {
		message.react('827400490211213322');
	}
	if (message_content == "cool") {
		message.react('827400490211213322');
	}
	if (message_content == "lovely") {
		message.react('827400490211213322');
	}
	if (message_content == "sweet") {
		message.react('637113890442051614');
	}
	if (message_content == "wicked") {
		message.react('637113890442051614');
	}
	if (message_content == "rad") {
		message.react('637113890442051614');
	}
	if (message_content == "dope") {
		message.react('637113890442051614');
	}
	if (message_content == "sick") {
		message.react('637113890442051614');
	}
	if (message_content == "awesome") {
		message.react('637113890442051614');
	}
	if (message_content == "fantastic") {
		message.react('637113890442051614');
	}
	if (message_content == "incredible") {
		message.react('637113890442051614');
	}
	if (message_content == "neat.") {
		message.react('827400490211213322');
	}
	if (message_content == "neato.") {
		message.react('827400490211213322');
	}
	if (message_content == "cool.") {
		message.react('827400490211213322');
	}
	if (message_content == "sweet.") {
		message.react('827400490211213322');
	}
	if (message_content == "wicked.") {
		message.react('827400490211213322');
	}
	if (message_content == "rad.") {
		message.react('827400490211213322');
	}
	if (message_content == "dope.") {
		message.react('827400490211213322');
	}
	if (message_content == "sick.") {
		message.react('827400490211213322');
	}
	if (message_content == "awesome.") {
		message.react('827400490211213322');
	}
	if (message_content == "fantastic.") {
		message.react('827400490211213322');
	}
	if (message_content == "incredible.") {
		message.react('827400490211213322');
	}
	if (message_content.includes("lovely.")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("lovely!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("cheers.")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("cheers!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("cheers,")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("bravo.")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("bravo!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("fantastic!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("awesome!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("great!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("sick!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("cool!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("neat!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("rad!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("sweet!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("dope!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("incredible!")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("you did great")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("you did fantastic")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("you did awesome")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("you did amazing")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("you did good")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("you did lovely")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("you did incredible")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("awesome job")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("awesome work")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("great job")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("great work")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("fantastic job")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("fantastic work")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("amazing job")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("amazing work")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("good job")) {
		message.react('827400490211213322');
	}
	if (message_content == ("good work")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("good work.")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("good work!")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("wicked job")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("wicked work")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("lovely work")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("lovely job")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("incredible work")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("incredible job")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thats fantastic")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("that's fantasic")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("that’s fantasic")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thats rad")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("that's rad")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("that’s rad")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thats awesome")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("that's awesome")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("that’s awesome")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thats amazing")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("that's amazing")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("that’s amazing")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thats wicked")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("that's wicked")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("that’s wicked")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thats sweet")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("that's sweet")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("that’s sweet")) {
		message.react('637113890442051614');
	}
	if (message_content.includes("that's lovely")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("that’s lovely")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thats lovely")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("that's incredible")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("that’s incredible")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("thats incredible")) {
		message.react('827400490211213322');
	}
	if (message_content.includes("banana slamma")) {
		message.react('281683061383626752');
	}
	if (message_content.includes("so they're finally here")) {
		message.react('281683061383626752');
	}
	if (message_content.includes("re pretty good")) {
		message.react('738918188796084224');
	}
	if (message_content.includes("noice")) {
		message.react('414662215107346433');
	}
	if (message_content == "nice") {
		message.react('414662215107346433');
	}
	if (message_content == "nice.") {
		message.react('414662215107346433');
	}
	if (message_content.includes("chocolate milk")) {
		message.react('342063809105625099');
	}
	if (message_content.includes("choccy milk")) {
		message.react('342063809105625099');
	}
	if (message_content.includes("lonely space vixens")) {
		message.react('342063809105625099');
	}
	if (message_content.includes("boomer")) {
		message.react('342063809105625099');
	}
	if (message_content.includes("old man")) {
		message.react('342063809105625099');
	}
	if (message_content.includes(" olden")) {
		message.react('342063809105625099');
	}
	if (message_content == "olden") {
		message.react('342063809105625099');
	}
	if (message_content.includes("everybody cheat")) {
		message.react('415041303718395932');
	}
	if (message_content.includes("next time i’ll cheat")) {
		message.react('415041303718395932');
	}
	if (message_content.includes("next time i'll cheat")) {
		message.react('415041303718395932');
	}
	if (message_content.includes("next time ill cheat")) {
		message.react('415041303718395932');
	}
	if (message_content.includes("😓")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("😰")) {
		message.react('458023278234042399');
	}
	if (message_content == "💦") {
		message.react('458023278234042399');
	}
	if (message_content.includes("uh oh")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("ww crap")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("aw crap")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("holy shit")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("holy fuck")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("holy crap")) {
		message.react('827397351572373544');
	}
	if (message_content.includes("oh shit")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("oh fuck")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("oh crap")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("monkas")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("uh-oh")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("oh-no")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("ohno")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("o h n o")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("oh no.")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("oh no!")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("oh goodness")) {
		message.react('458023278234042399');
	}
	if (message_content.includes(" my goodness")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("oh lord")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("oh lawd")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("oh my lord")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("o goodness")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("o lord")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("o lawd")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("o my lord")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("oh noes")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("o noes")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("panic!")) {
		message.react('458023278234042399');
	}
	if (message_content.includes("panicbasket")) {
		message.react('458023278234042399');
	}
	if (message_content == "oh no") {
		message.react('458023278234042399');
	}
	if (message_content == "o no") {
		message.react('458023278234042399');
	}
	if (message_content == "o shit") {
		message.react('458023278234042399');
	}
	if (message_content == "o fuck") {
		message.react('458023278234042399');
	}
	if (message_content == "o crap") {
		message.react('458023278234042399');
	}
	if (message_content == "o god") {
		message.react('458023278234042399');
	}
	if (message_content == "o gawd") {
		message.react('458023278234042399');
	}
	if (message_content == "o geez") {
		message.react('458023278234042399');
	}
	if (message_content == "o jeez") {
		message.react('458023278234042399');
	}
	if (message_content == "panic") {
		message.react('458023278234042399');
	}
	if (message_content.includes("😤")) {
		message.react('364308148313522177');
	}
	if (message_content == "no u") {
		message.react('632997782059352085');
	}
	if (message_content == "no you") {
		message.react('632997782059352085');
	}
	if (message_content == "no u.") {
		message.react('632997782059352085');
	}
	if (message_content == "no you.") {
		message.react('632997782059352085');
	}
	if (message_content == "no u!") {
		message.react('632997782059352085');
	}
	if (message_content == "no you!") {
		message.react('632997782059352085');
	}
	if (message_content == "im in") {
		message.react('284233977529630720');
	}
	if (message_content == "i'm in") {
		message.react('284233977529630720');
	}
	if (message_content == "i’m in") {
		message.react('284233977529630720');
	}
	if (message_content.includes("git gud")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("get gud")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("im in!")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("i'm in!")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("i’m in!")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("im in.")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("i'm in.")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("i’m in.")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("lets do this")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("let's do this")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("let’s do this")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("lets do that")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("let's do that")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("let’s do that")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("lets do it")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("let's do it")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("let’s do it")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("lets go!")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("lets goo")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("let's go!")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("let's goo")) {
		message.react('636662427596881931');
	}
	if (message_content.includes("let’s go!")) {
		message.react('284233977529630720');
	}
	if (message_content.includes("let’s goo")) {
		message.react('636662427596881931');
	}
	if (message_content.includes("les goo")) {
		message.react('636662427596881931');
	}
	if (message_content.includes("les go!")) {
		message.react('636662427596881931');
	}
	if (message_content.includes("les do it")) {
		message.react('636662427596881931');
	}
	if (message_content == "ez") {
		message.react('284233977529630720');
	}
	if (message_content == "ez!") {
		message.react('284233977529630720');
	}
	if (message_content.includes("nice of the princess")) {
		message.react('727577560799641662');
	}
	if (message_content.includes("check out the enclosed")) {
		message.react('727577560799641662');
	}
	if (message_content.includes("enclosed instruction book")) {
		message.react('727577560799641662');
	}
	if (message_content.includes("too many toasters")) {
		message.react('727577560799641662');
	}
	if (message_content.includes("all toasters toast toast")) {
		message.react('727577560799641662');
	}
	if (message_content.includes("all toasters, toast toast")) {
		message.react('727577560799641662');
	}
	if (message_content.includes("they pinch back")) {
		message.react('727577560799641662');
	}
	if (message_content.includes("s been one of those days")) {
		message.react('727577560799641662');
	}
	if (message_content.includes("where there's smoke")) {
		message.react('727577560799641662');
	}
	if (message_content.includes("where theres smoke")) {
		message.react('727577560799641662');
	}
	if (message_content.includes("high five")) {
		message.react('713213661941989416');
	}
	if (message_content.includes("hi five")) {
		message.react('713213661941989416');
	}
	if (message_content.includes("highfive")) {
		message.react('713213661941989416');
	}
	if (message_content.includes("hi-five")) {
		message.react('713213661941989416');
	}
	if (message_content.includes("high-five")) {
		message.react('713213661941989416');
	}
	if (message_content.includes("high 5")) {
		message.react('713213661941989416');
	}
	if (message_content.includes("hi 5")) {
		message.react('713213661941989416');
	}
	if (message_content.includes("high5")) {
		message.react('713213661941989416');
	}
	if (message_content.includes("hi5")) {
		message.react('713213661941989416');
	}
	if (message_content.includes("high-5")) {
		message.react('713213661941989416');
	}
	if (message_content.includes("hi-5")) {
		message.react('713213661941989416');
	}
	if (message_content == "hug") {
		message.react('727577560279679036');
	}
	if (message_content == "hugs") {
		message.react('727577560279679036');
	}
	if (message_content == "hug.") {
		message.react('727577560279679036');
	}
	if (message_content == "hugs.") {
		message.react('727577560279679036');
	}
	if (message_content == "hug?") {
		message.react('727577560279679036');
	}
	if (message_content == "hugs?") {
		message.react('727577560279679036');
	}
	if (message_content == "hug!") {
		message.react('727577560279679036');
	}
	if (message_content == "hugs!") {
		message.react('727577560279679036');
	}
	if (message_content.includes("*hug")) {
		message.react('727577560279679036');
	}
	if (message_content.includes(" a hug.")) {
		message.react('727577560279679036');
	}
	if (message_content.includes(" a hug?")) {
		message.react('727577560279679036');
	}
	if (message_content.includes(" a hug!")) {
		message.react('727577560279679036');
	}
	if (message_content.includes(" a hug ")) {
		message.react('727577560279679036');
	}
	if (message_content.includes("pound it")) {
		message.react('727577559818174466');
	}
	if (message_content.includes("fist bump")) {
		message.react('727577559818174466');
	}
	if (message_content.includes("fistbump")) {
		message.react('727577559818174466');
	}
	if (message_content.includes("bro fist")) {
		message.react('727577559818174466');
	}
	if (message_content.includes("brofist")) {
		message.react('727577559818174466');
	}
	if (message_content.includes("gotta go")) {
		message.react('713213660851601492');
	}
	if (message_content.includes("swag")) {
		message.react('713215626730143787');
	}
	if (message_content.includes("son i am disappoint")) {
		message.react('727577560279416898');
	}
	if (message_content.includes("son, i am disappoint")) {
		message.react('727577560279416898');
	}
	if (message_content.includes("¬‿¬")) {
		message.react('827400490340843560');
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790393303050');
        	}
	}
	if (message_content.includes("😏")) {
		message.react('827400490340843560');
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790393303050');
        	}
	}
	if (message_content.includes("😼")) {
		message.react('827400490340843560');
		if (Math.floor(Math.random() * 2) == 0) {
            		message.react('632997790393303050');
        	}
	}
	if (message_content.includes("✊")) {
		message.react('632997792079675424');
	}
	if (message_content.includes("vibe check")) {
		message.react('632997792079675424');
	}
	if (message_content.includes("vibe-check")) {
		message.react('632997792079675424');
	}
	if (message_content.includes("really hard")) {
		message.react('632997782415998976');
	}
	if (message_content.includes("very hard")) {
		message.react('632997782415998976');
	}
	if (message_content.includes("super hard")) {
		message.react('632997782415998976');
	}
	if (message_content.includes("ultra hard")) {
		message.react('632997782415998976');
	}
	if (message_content.includes("s what she said")) {
		message.react('632997782415998976');
	}
	if (message_content.includes("idiot bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("dumbass bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("dumb ass bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("stupid ass bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("stupid bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("dumb bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("dum bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("useless bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("crap bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bad bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("shit bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("worst bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("hate you bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("hate you pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("hate you, bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("hate you, pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("stupid pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("crap pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("idiot pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("dumbass pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("dumb ass pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("stupid ass pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("dumb pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("dum pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("useless pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bad pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot su")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog su")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers su")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot shut")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog shut")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers shut")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot, shut")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog, shut")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers, shut")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog is dum")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog is stupid")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog is an idiot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog is a dum")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog is lame")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog is bad")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog is worst")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog is shit")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog is the worst")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog is crap")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers is dum")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers is stupid")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers is an idiot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers is a dum")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers is lame")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers is bad")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers is the worst")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers is worst")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers is shit")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers is crap")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("fuck pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("shut up pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("shut up bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("shut up, pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("shut up, bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("you suck pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("you suck bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("you suck, pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("you suck, bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("fuck you pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("fuck you bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("fuck you, pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("fuck you, bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("🖕 bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("🖕 pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("🖕 you bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("🖕 you pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("🖕 you, bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("🖕 you, pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("🖕 this bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("🖕 this pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot 🖕")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog 🖕")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers 🖕")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog go away")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers go away")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot go away")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog screw off")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers screw off")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot screw off")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("pog fuck off")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("poggers fuck off")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot fuck off")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("go away pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("go away bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("screw off pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("screw off bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("ck off pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("ck off bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("cc off pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("cc off bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("go away, pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("go away, bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("screw off, pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("screw off, bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("ck off, pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("ck off, bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("cc off, pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("cc off, bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("screw pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("screw you pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("screw you bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot is dum")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot is stupid")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot is an idiot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot is a dum")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot is lame")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot is bad")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot is the worst")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot is worst")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot is shit")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("bot is crap")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("stupid bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("hate this bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("hate the bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("hate pog")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("annoying bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("nerf this bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("ban this bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("nerf the bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("ban the bot")) {
		message.react('818183342062174210');
	}
	if (message_content.includes("awesome bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("smart bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("genius bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("beautiful bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("awesome pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("smart pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("genius pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("beautiful pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("talented pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("talented bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("good bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("great bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("cool bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("sweet bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("fantastic bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("terriffic bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("amazing bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("incredible bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("incredible pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("you go bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("you go pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("you go, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("you go, pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("you rock bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("you rock pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("you rock, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("you rock, pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("you rule bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("you rule pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("you rule, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("you rule, pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("best bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("best pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("awesome, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("smart, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("beautiful, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("genius, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("genius, pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("awesome, pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("smart, pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("beautiful, pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("good, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("great, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("cool, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("sweet, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("fantastic, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("terriffic, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("talented, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("amazing, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("incredible, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("incredible, pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot you rock")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog you rock")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers you rock")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot you rule")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog you rule")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers you rule")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot you go")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog you go")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers you go")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot, you rock")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog, you rock")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers, you rock")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot, you rule")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog, you rule")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers, you rule")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot, you go")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog, you go")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers, you go")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot rules")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog rules")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers rules")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("good pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("great pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("cool pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("sweet pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("fantastic pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("terriffic pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("amazing pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("incredible pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("love this pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("love the pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("love you pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("love this bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("love the bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("love you bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("love you, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("love pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("love you pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("love you, pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is great")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is cool")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is awesome")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is rad")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is the best")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is the great")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is the goat")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is goat")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is smart")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is a genius")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is genius")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is best")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is talented")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is amazing")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is beautiful")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is beautiful")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is talented")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is amazing")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is amazing")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is great")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is cool")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is awesome")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is rad")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is the best")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is the great")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is the goat")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is goat")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is smart")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is a genius")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is genius")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is best")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is good")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is good")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is good")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is sweet")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is sweet")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is sweet")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is good")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is fantastic")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is fantastic")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is fantastic")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is terriffic")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is terriffic")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is terriffic")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers is incredible")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog is incredible")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is incredible")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is cool")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is smart")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is a genius")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is genius")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is awesome")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is rad")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is the best")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is the great")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is the goat")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is goat")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is best")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot is beautiful")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("thanks bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("thank you bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("thanks pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("thank you pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("ily bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot ily")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("ily pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog ily")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers ily")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers, ily")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog i love")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers i love")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog, i love")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers, i love")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot ily")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot, ily")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot i love")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot, i love")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("❤️ bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("❤️ pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("❤️ you bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("❤️ you pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("❤️ you, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("❤️ you, pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("❤️ this bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("❤️ this pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot ❤️")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog ❤️")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers ❤️")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("❤️")) {
		message.react('727577560526880809');
	}
	if (message_content.includes("✨")) {
		message.react('713264414748573747');
	}
	if (message_content.includes("♥️")) {
		message.react('727577560526880809');
	}
	if (message_content.includes("♥️ bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("♥️ pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("♥️ you bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("♥️ you pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("♥️ you, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("♥️ you, pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("♥️ this bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("♥️ this pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot ♥️")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog ♥️")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers ♥️")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("😘 bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("😘 pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("😘 you bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("😘 you pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("😘 you, bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("😘 you, pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("😘 this bot")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("😘 this pog")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("bot 😘")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("pog 😘")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("poggers 😘")) {
		message.react('632997792150847515');
	}
	if (message_content.includes("arrr")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("arr ")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("arr.")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("arr!")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("ahoy")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("scurvy dog")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("e matey")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("swab the deck")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("land ho")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("anchors away")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("landlubber")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("walk the plank")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("steal booty")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("precious booty")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("cause a pirate is free")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("cuz a pirate is free")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("you are a pirate")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("yar ")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("yar.")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("yar!")) {
		message.react('637114233330335745');
	}
	if (message_content == "yarr") {
		message.react('637114233330335745');
	}
	if (message_content == "cri") {
		message.react('653327302222151704');
	}
	if (message_content.includes("you wouldn't download a")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("you wouldn’t download a")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("you wouldnt download a")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("you wouldn't steal a")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("you wouldn’t steal a")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("you wouldnt steal a")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("this is illegal you know")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("this is illegal, you know")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("stop all the downloadin")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("limewire")) {
		message.react('637114233330335745');
	}
	if (message_content.includes("🤨")) {
		message.react('735725608771780759');
	}
	if (message_content.includes("fortnite danc")) {
		message.react('636617752429199415');
	}
	if (message_content.includes("default danc")) {
		message.react('636617752429199415');
	}
	if (message_content.includes("kermiepls")) {
		message.react('675523558700482561');
	}
	if (message_content.includes("lord of the snack falcons")) {
		message.react('527614081369112578');
	}
	if (message_content.includes("cups on my ears")) {
		message.react('527614081369112578');
	}
	if (message_content.includes("gregg rul")) {
		message.react('527614081369112578');
	}
        if (message_content.includes("gotta be done")) {
            	message.react('681984948282064904');
        }
});

client.login(process.env.BOT_TOKEN);
