$(function() {
	var quotes = [
			"I love you, but you don't know what you're talking about.",
			"Whatever happens in the end, I don't wanna lose you as my friend.",
			"I promise, I will never be your friend. No matter what. Ever.",
			"You know I'm not big on apologizing. So I'll just skip it if it's all the same to you.",
			"Anyway, I'm sorry",
			"I think we're just gonna have to be secretly in love with each other and leave it at that, Richie.",
			"Apropos of my question regarding I-40 slash I-9 adjustments, um, it would probably be advantageous for your marital status to be legally established as single in light of the circumstances.",
			"Let me think about that. I'll tell you the next time I see you.",
			"We're in love. We just want to be together. What's wrong with that?",
			"You're the most ravishing creature that I've ever seen in my life.",
			"For my dearest darling, treasured, cherished Agatha whom I worship.",
			"With respect, adoration, admiration, kisses, gratitude, best wishes, and love from Z to A.", 
			"Never be jealous in this life, Zero, not even for an instant.",
			"This is my real job. Scout Master Troop 55. I'm a math teacher on the side.",
			"How you holding p there, intern?",
			"Is this my espresso machine? How did you get my espresso machine?",
			"Jiminy Cricket! He flew the coop!",
			"Hell of a damn grave. Wish it were mine.",
			"I'll take the bottom bunk because I'm the oldest and my ankle's fractured.",
			"Are you finding what you were looking for... out here with me? I hope so.",
			"If what I think is happening is happening, it better not be.",
			"Stand up straight and let me take a look at you.",
			"Maybe we'll meet again someday...when the fighting stops.",
			"You can't arrest him just because he's a bloody immigrant, he hasn't done anything wrong!",
			" I know what you do with that sad, dumb policeman.",
			"He doesn't seem to know. I have a phobia of wolves!",
			"I want us to be completely open and say yes to everything even if it's completely shocking.",
			"Let me know about my boat.",
			"The beginning of the end of the beginning has begun.",
			"Rudeness is merely an expression of fear. People fear they won't get what they want.",
			"Do you mind if I butter you up before I answer?",
			"You haven't worked a day in your life. How could you be exhausted?",
			"The incidents that follow were described to me exactly as I present them here and in a wholly unexpected way.",
			"I think you've still got lightning in you.",
			"Holy swearing cus!",
			"Dynamite, pole vaulting, laughing gas, choppers - can you see how incredible this is going to be? - hang gliding, come on!",
			"I have to tell you I support this relationship not working out.",
			"That's not a safe altitude. Why is it up so high? If someone falls from there, that's a guaranteed death.",
			"Hello Skinny. Is that a new merit badge?",
			"That sounds like poetry. Poems don't always have to rhyme, you know. They're just supposed to be creative.",
			"By the way, you look unbelievably beautiful tonight, you're practically glowing!",
			"Let's go drink and smoke a cigarette.",
			"Excuse me! I just came by to thank you for wrecking my life.",
			"May I offer any of you inmates a plate of mush?",
			"So what's wrong with that? I can write a hit play. Why can't I have a little drink to unwind myself?",
			"PLease don't let him fall off a cliff or drown in a goddamn lake or something.",
			"Keep it down, lower your voices. Thank you.",
			"You think I'm especially not a genius?",
			"There are still faint glimmers of civilization left in this barbaric slaughterhouse that was once known as humanity.",
			"I've never put so much heart/soul/dedication/pride into something. And now I'm second guessing everything.",
			"We're all different. But there's something kind of fantastic about that, isn't there?",
			"Did it seem fake when my best friend was bitten in half right in front of me and eaten alive, screaming? I think you're a fake.",
			"No, I said 'what kind of bird are YOU?'",
			"Please don't make fun of me. I just wanted to flirt with you.",
			"I’ve always been considered an asshole for as long as I remember.",
			"Goddammit! You're not paying attention if you're messin' around with the gun!",
			"She's my girlfriend. You can't just buy her things.", 
			"Take the carbon, leave the bible.",
			"I'm only interviewing this vision of lovliness on your behalf.",
			"You're the first of the official death squads to whom we've been formally introduced. How do you do?",
			"You can say that about most anything, 'it depends'. Of course it depends. ",
			"This is the most important decision you've made in your lives. Now go over by the trampoline and talk it through.",
			"You wanna read a short story I wrote in France?",
			"I wish you'd've done this for me when I was a kid.",
			"Well I think there's a real air of mystery about me.",
			"Don't complicate it. Your #1 strength is you have a car you can provide.",
			"It's quite a thing, winning the loyalty of a woman like that for nineteen consecutive seasons.",
			"Our daughter's been abducted by one of these beige lunatics!",
			"Be cool on this shit, okay, cubbie? I mean, at least try to show both sides.",
			"When the time comes, these will be yours. Along with whatever we haven't already spent on whores and whiskey.",
			"I love the way this country smells. I'll never forget it. It's kind of spicy.",
			"Everybody wants to know what's next. May I enjoy this moment?",
			"You're not getting Boy with Apple, you goddamn little fruit!",
			"I wonder if the three of us would've been friends in real life. Not as brothers, but as people.",
			"Who the shit is Kingsley Zissou?",
			"Thank you, thank you. Cause if I said that one, it would sound like bragging.",
			"I just wanted to say, I'm sorry I threw rocks at you the other day.",
			"I love you too, but I'm gunna mace you in the face.",
			"I don't think your happiness is quite appropriate.",
			"Find something you love, then do it for the rest of your life",
			"Anybody interested in grabbing a couple burgers and hittin' the cemetery?",
			"Where'd you come from? You look pregnant.",
			"How can a train be lost? It's on rails.",
			"I always wished I was an orphan, most of my favourite characters are.",
			"I saved latin. What did you ever do?",
			"You're not attracted to me. C'est la vie.",
			"The plot thickens as they say. Why by the way? Is it a soup metaphor?",
			"The deeper you go, the weirder life gets.",
			"I think we have a chance to make this a kind of life-changing experience.",
			"So, she smokes. I prefer a girl hero. F$ck the itinerary.",
			"Let's go on a living spree. They say the best things in life are free.",
			"Don't point that gun at him, he's an unpaid intern.",
			"What happened to your hand? I got hit in the mirror",
			"Let's stop feeling sorry for ourselves. It's not very attractive.",
			"Isn't it funny how you used to be in the nut house and now I'm in jail?",
			"Neither one of us has the slightest idea where this relationship is going.",
			"Nobody else got hit? I'm the only one? What's the deal?",
			"I'm sorry that you think my red hat is, uh what's the word you use? 'Contrived'.",
			"Obviously people are gonna think I’m a show-boat and a little bit of a prick. But then I realised… that’s me.",
			"I want to go on adventures, I think. Not get stuck in one place.",
			"Which injuries are you apologizing for, specifically? Specifically? Whichever ones still hurt.",
			"I don't know what you're talking about, but it sounds illegal.",
			"As always, she was late.",
			"I just want to say: Thank you for marrying me. I’m glad I got to know you, Suzy.",
			"It's not actually meant for a male to wear, but I don't give a damn.",
			"So, what do you want to be when you grow up?",
			"No-one can truly know what anyone thinks or feels.",
			"It is an extremely common mistake. People think the writers imagination is always at work, that he’s constantly inventing an endless supply of incidents and episodes, that he simply dreams up his stories out of thin air.",
			"Once the public knows you’re a writer, they bring the characters and events to you, and as long as you maintain your ability to look and to carefully listen, these stories will continue to seek you out over your lifetime.",
		];
	//do a thing when the user clicks submit
	$('form').on('submit', function(wesYourself){
		
		// prevent the page from reloading on submit
		wesYourself.preventDefault();

		//get the value of the user's length choice
		var lengthChoice = $('input[name=length]:checked').val();
		//get the value of the user's character choices
		var characterSelected = document.getElementsByName('character')
		var characterChoice = [];
		for (var i = 0; i<characterSelected.length; i++) {
			if (characterSelected[i].checked) {
				characterChoice.push(characterSelected[i].value);
			}
		}
		//display an error if the user doesn't pick something
		if(characterChoice==null){
					window.alert("Pick something, please.");
				}
		if(lengthChoice==null){
					window.alert("Pick something, please.");
				}
		
		//creates an empty array to add quotes to
		var filteredLines = [];

		//adds quotes to the empty array up to the length the user selected
		for (var i = 0; i < lengthChoice; i++) {
			var randomChoice = Math.floor(Math.random() * quotes.length)
			filteredLines.push(quotes[randomChoice])
			console.log(filteredLines)
		}

		//adds a space between each quote
		var resultLines = filteredLines.join(' ');

		//puts the quote into a paragraph
		$('.result').html(`<p>${resultLines}</p>`);

		//add click to copy functionality
		var clipboard = new Clipboard('.btn');


		
		//use characterSelected to select which array to pull from (or both)
		//use lengthChoice to define the number of strings to pull
		//small quote = 5 strings
		//medium quote = 10 strings
		//large quote = 20 strings


	})


	
	//let users select an option
	//and when they submit the form
	//grab the select values
	//with those values, generate an appropriately sized block of text

});