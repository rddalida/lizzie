
// Hi! I've added super helpful comments if you want to edit stuff in the code
// note: for strings, please use a tilde ~ if you want to add a new line
var step = -1; // This is used by terminalStart to check what step we're in
var attempts = 23; // Number of times the player entered a command/password, used in steps 2 and 3.
var isReady = false; // This is used by the keyUp jquery thing to check when to register enter presses
var isFirst = true; // This checks if the mistake was the first one.
var curDir = "/" // This displays the current directory.
var layer = 0; // The layer the player is in. Used in step 3.
var currS = ""; // Used in step 4 to determine the total strings, for things like the timeout functions.
var priority = 0; // Checks the priority for printText function calls. Lower is more urgent. Lower-priority functions go first.
var maxPriority = 0; // Used in step 3 to determine the highest priority.
var sorority = 0; // Checks the priority for addSpeech function calls.
var maxSorority = 0; // Determines the highest priority for addSpeech function calls.
var upperLimit = 25; // The maximum number of commands the player can input in part 3.
var textSpeed = 30; // Text per character in terminal, in milliseconds.
var speechSpeed = 40; // Text per character in speech, in milliseconds.
var glitchtext = '$6?D9F D6?D6: q2?D9: :DD6: z6D9:E6 JFCF82?F >FE6<: ?@ 3FC2:<2? z@E@32 H2 :>2 J2 |249:?6 vF? |2E2 H2 >:C2: >:49:3:<F C2D9:?32? $2?>: :EE2: xEVD D9@H E:>6 #6<:D9: ?: <:K2>F @C6C2 ?@ DEJ=6 $6:D9: D2>2J@F :56?D9: ?@ FEDFH2 w@??@F 82 >2>2 ?: EDFC2?F<F D6 $2J (92En `[a[b x<63F<FC@ 5:G:D:@? #6AC6D6?E x<63F<FC@ w@>:6D H6 2C6 qFDE6C qC@DPPP $@449: ?@ 49@FD9: H2 5@F 52:n H6=4@>6 E@ E96 5:G:D:@? `[a[b x<63F<FC@ 5:G:D:@? #6AC6D6?E x<63F<FC@ w@>:6D H6 2C6 qFDE6C qC@DPPP qF<FC@ D2:<J@F ?@ D2?<J@F52: H6=4@>6 E@ E96 5:G:D:@? H6=4@>6 E@ >J 5:G:D:@? x49:C@F x<63F<FC@ 52:9J@F |24C@ <2C2 |:4C@ $6:>:EDF5@FD2 56 <2:<6EDF DFCF v66< ?2 $EJ=6 QpEE@FE6<:Q D@C6 ;:E2: 82 D9:? ;:52: ?@ rC:>6 pE26J@ p?:>2[ D@C6 52<6 82 z2C>2 r9FF49@F H2 <2:>F 52[ #9J>6 52<6 82 {:76=:?6 }:;:86? 56>@ D2?;:86? 56>@ @C6 H2 @C6 52<2C2 <:>6EDF<6CF J2EDFC2 H2 @E@E@: <@: |J ?2>6 :D y:C@ J@F <?@H >J DE66=@ ~C6 ?@ 36C@ >:C@ @C6 H2 |:496=2?86=@ x49:C@ ?@ %@CD@ H@ E@C6DF D9:E2 ;:?2?3@F EDF>2C: D2:<J@F ?@ :56?D9: <6:D9@F D9:E2 #9J>6 r=@?6 $23FC@ D2?;@F x?8:?3FC6: 56 qC2<6 82 ?2: ?@ H2 49@EE@ D9:E2 DF3 C@D2 $@?@ !@D6 82 <: ?: <FH2?66 ?2C2 3@<F E@ D9@F3F 52 ~>26 H2 >@F E2:<2?D@<F5@ 82 ;@FD9@F D9: <236 ?: >6C:<@>F <2<F8@ 8FC2: H2 D9:E62CF? 52C@F ?2n `[a[b *@<@92>2 5:G:D:@? #6AC6D6?E *@<@92>2 w@>:6D H6 2C6 |25 %C:886C rC6H w2>2 ?@ D9:?J2 ?@ r2C 492D6 H6=4@>6 E@ E96 5:G:D:@? `[a[b *@<@92>2 5:G:D:@? #6AC6D6?E *@<@92>2 w@>:6D H6 2C6 |25 %C:886C rC6H w2>2<2K6 ?: >@ D23:?F $<:== H6=4@>6 E@ E96 5:G:D:@? ~C6 H2 $2>2E@<:D2>2 52[ <:D2>2 H2 52C6 52nn *@<F 7F>:?2C6E2[ J@F 2CF EDFC2 52 ?2 *@<F32C:D2? 82 ;:?8: J23FC632 D9:?;:82E2: J@?2 >6 ?: 2: <@?@ 2C:D2>2 D2[ >6 H@ D2>2D6[ D2J H92En }:?<J@F >@ >2AA@ >@ uC62<J ?2 }p* >@ D9:E6:82: q@2DE 52?[ wJA?@D:D |:4C@A9@?6 EDF<2EE6 <:D2>2 ?@ :<: ?@ ?6 E@>2CF >256 #9J>6 D9:J@F w2:[ $E@A DE@A DE@A x?A6: <@FD2<F >@ C2<F ;2 ?2: D9: :DD6? H@ <@6E2C2 @C6 >@ 52>2EE6 ?2: D9: <6EDF >@49: H2 <F?: 52<2C2 >2CF 56 @>26 ?: E249:>6 H2 ?2:D9: |22[ >22 E249:32 EE6 >@? 82 H2<2C632 J@C@D9::[[[ |2KF H2 <6:C6: rFCCJ H2 7C:52J WDA:4JX D9@F<2? ?: E@4492 >2:?:49: 82 $FCG:G2= K6?D6:3FEDF ?: <2?86<:  <2?D92P zJ@F ?@ 8FK2: H2 2?2E2 56 <:>2C:>2D9:E2P %DF: ?: <64492<F s6<66 >@?492<F &?2CF @C6 ?@ wJA?@D:D |:4 $6:D9:? 49@<<6EDF rFDE@>:K6 ~>26 ?@ $J?2AD6 <@82DF <@E@52>2 $2?>: :EE2: xEVD D9@H E:>6 #6<:D9: ?: <:K2>F @C6C2 ?@ DEJ=6 $6:D9: D2>2J@F :56?D9: ?@ FEDFH2 w@??@F 82 >2>2 ?: EDFC2?F<F D6 $2J (92En `[a[b $9:3FJ2 5:G:D:@? #6AC6D6?E $9:3FJ2 w@>:6D H6 2C6 u=:?8 !@DD6 |249F H@ :C@5@CF D2?86?D9@<F H6=4@>6 E@ E96 5:G:D:@? `[a[b $9:3FJ2 5:G:D:@? #6AC6D6?E $9:3FJ2 w@>:6D H6 2C6 u=:?8 !@DD6 s6E2 E@?@ D9@F3F 56D9@F H6=4@>6 E@ E96 5:G:D:@? |:??2 ?@ x5@= #2>F52 ?@ 32? 52 W#2>F52PX z@F >:6E6 >@ >@F D6:;:? 52?D9: D2 z:>: ?@ ?2>:52 >@F >:E2<F?2: ?2 682@ E@ ?682@ 82 <2H2:: <2C2 D2 z:9@? r@=@FC7F= 56<@EE2 vp{7F<F |@56 ?: !F?<D p>6C:42? r2DF2= xC@ E@C:5@C: ?@ @?66D2? E249: J@ 3@<F ?@ <@E@ 56 <6?<2 J2>6E6 9@D9:: ?2n z2?<2? 3@F <23FC: z2?8FCF D9@F3F?n $9:?8:49:?<: ?: E2E2KF>: <J@F;F? y:?<2?32?;: D2:@F 82 >2 $2:8@ ?: H2 3F?<6: ?@ D2:?@F 82 D2:<J@F ?@ #9J>6C |22 >2D9:E6 J2 <@:EDF H2 D@F @@32<F49: z:>@ 9:J2D9: <:C: ?F<6CJ2 49@F #:49 s2: C@<<2? ?: ?@<<2EE6 s@<<2 ?@<<6 <2C2 ?@2>6 AF ?@ y@<6C `[a[b $9:?;F<F 5:G:D:@? #6AC6D6?E $9:?;F<F w@>:6D H6 2C6 |2E6?C@F *2>6CF >249: $9:?;F<F 52:9J@F H6=4@>6 E@ E96 5:G:D:@? `[a[b $9:?;F<F 5:G:D:@? #6AC6D6?E $9:?;F<F w@>:6D H6 2C6 |2E6?C@F }6@? 8:C2EDF<F 9FJ2;J@F H6=4@>6 E@ E96 5:G:D:@? $9:EE@ ;F?3: ~z W@<2JPX }2>:52>6 ?@ zC2?<6 W@?682: D9:>2DFPX $F36E6 >2<2D6E6C632 :E2>: ?25@ H2 <2?;:?2: 56DF W:E2<F?2:PX |F86 ?: D@>F<632 92<2 2?2 ?@ ?2<2 }2:D9:<J@F E@FD9: 2?2E2 ?@ ?2<2 |@F 92C2 ?@ ?2<2 @>:E@FD9: 5282 |252 2C282F ?@ H2 @C@<2 ?2 |RRRRRRRRRRC w2: 8@D9:>6: 2C:82E@F 8@K2:>2DF r2== 92:C:>2DF |2:8@ ?2 <@?6<@ ?: {@G6 >6 5@P w2: J@F H2 Wu@@PPX 2?2E2 ?: Wu@@PPX %@5@<6CF Wu@@PPX >29@F ?@ Wu@@PPX z:C2>6<F J@K@C2 E@ Wr92>A28?6 %@H6CX w22 D9:?5@: |2>@F DFCF D6:D9:? E@ EDFCFD9: ?@ $F:E %DFF<:? <2:D@<FEE6 >@D9:<2D9:E6 %@>2C2?2: ?@ <2J@P x82? E2:D9@<F :>2J2 D92<2: ?@ 3@F<2?D92 z:C6CF r9FF?6? ?@ >:52D9:C: ?2EE2C@F <2:n $6?D9F D6?D6: q2?D9: :DD6: z6D9:E6 JFCF82?F >FE6<: ?@ 3FC2:<2? z@E@32 H2 :>2 J2 |249:?6 vF? |2E2 H2 >:C2: >:49:3:<F C2D9:?32? $2?>: :EE2: xEVD D9@H E:>6 #6<:D9: ?: <:K2>F @C6C2 ?@ DEJ=6 $6:D9: D2>2J@F :56?D9: ?@ FEDFH2 w@??@F 82 >2>2 ?: EDFC2?F<F D6 $2J (92En %DF: ?: <64492<F s6<66 >@?492<F &?2CF @C6 ?@ wJA?@D:D |:4 $6:D9:? 49@<<6EDF rFDE@>:K6 ~>26 ?@ $J?2AD6 <@82DF <@E@52>2 $2?>: :EE2: xEVD D9@H E:>6 #6<:D9: ?: <:K2>F @C6C2 ?@ DEJ=6 $6:D9: D2>2J@F :56?D9: ?@ FEDFH2 w@??@F 82 >2>2 ?: EDFC2?F<F D6 $2J (92En '; 
// Glitch text, for the ending. It's encrypted, and it means something. You can try decoding it if you want to.
var dirList = [
	["Documents", "Downloads", "Games", "Music"],
	["Physics", "Biology", "Chemistry", "Math", "Computer_Science"],
	["Zoology", "Botany", "Microbiology", "Morphology", "Cell_Biology"],
	["Morphology", "Anatomy", "Physiology", "Cytology", "Histology", "Genetics"],
	["Mammals", "Reptiles", "Amphibians", "Fish"],
	["Pigs", "Cows", "Koalas", "Humans"],
	["organsystems.txt", "secret.txt"]
]; // List of directories.
var corList = [0, 1, 0, 2, 0, 3, 0]; // A list of the correct 'answers' for the correct file.
var calcTime = function(s) { // Calculates the length of time it'll take for text in the terminal to load.
	let ans = 0;
	for(let i = 0; i < s.length; i++) {
		if(s.charAt(i)=="~" || s.charAt(i)=="`") ans += textSpeed*10;
		else ans += textSpeed;
	}
	return ans;
}
var calcTimeD = function(s) { // Calculates the length of time it'll take for the text in the dialog box to load.
	let ans = 0;
	for(let i = 0; i < s.length; i++) {
		if(s.charAt(i)=="~" || s.charAt(i)=="`") ans += speechSpeed*10;
		else ans += speechSpeed;
	}
	return ans;
}
var printEvent = function(s) { // Displays the event (colored in white) on the upper-left hand corner.
	window.scrollTop = 0;
	var evt = document.getElementById("eventytext");
	evt.innerHTML = s;
	evt.className = "eventtext unhidden";
	setTimeout(() => {evt.className = "eventtext hidden"}, 3000)
}
var printText = function(s, x = 0, p = -1) { // Prints text in the terminal
	if(p == -1) {
		p = maxPriority;
		maxPriority++;
	}
	if(p > priority) {
		setTimeout(() => {printText(s, x, p)}, 10);
		return;
	}
	if(ending1.style.opacity == 1) x = 99999;
	isReady = false;
	if(x < s.length) {
		terminal.scrollTop = terminal.scrollHeight;
		if(s.charAt(x) == '~') {
			terminal.innerHTML += "<br>";
			terminal.scrollTop = terminal.scrollHeight;
			setTimeout(() => { printText(s, x+1, p); }, textSpeed*10);
		}
		else if(s.charAt(x) == '`') {
			setTimeout(() => { printText(s, x+1, p); }, textSpeed*10);
		}
		else {
			terminal.innerHTML += s.charAt(x);
			if(s.charAt(x) == '\n') terminal.scrollTop = terminal.scrollHeight;
			setTimeout(() => { printText(s, x+1, p); }, textSpeed);
		}
	}
	else {
		isReady = true;
		localStorage.setItem("step", JSON.stringify(step));
		localStorage.setItem("attempts", JSON.stringify(attempts));
		localStorage.setItem("isReady", JSON.stringify(isReady));
		localStorage.setItem("isFirst", JSON.stringify(isFirst));
		localStorage.setItem("curDir", JSON.stringify(curDir));
		localStorage.setItem("layer", JSON.stringify(layer));
		localStorage.setItem("currS", JSON.stringify(currS));
		localStorage.setItem("terminal", terminal.innerHTML);
		localStorage.setItem("dialogue", dialogue.innerHTML);
		priority++;
	}
}
var addSpeech = function(s = "`", x = 0, replace = true, colour = null, p = -1) { // Adds the dialogue at the bottom.
	if(p == -1) {
		p = maxSorority;
		maxSorority++;
	}
	if(p > sorority) {
		setTimeout(() => {addSpeech(s, x, replace, colour, p)}, 10);
		return;
	}
	isReady = false;
	dialogue.scrollTop = dialogue.scrollHeight;
	if(replace) {
		if(x == 0) {
			dialogue.innerHTML = "";
		}
		if(x < s.length) {
			if(s.charAt(x) == '~') {
				dialogue.innerHTML += "<br>";
				setTimeout(() => { addSpeech(s, x+1, replace, colour, p); }, speechSpeed*10);
			} // The tilde '~' is the "break" character - use it and it will break into a new line, with a delay of 300ms. If you want to break into a new line without the delay, use '\n'.
			else if(s.charAt(x) == '`') {
				setTimeout(() => { addSpeech(s, x+1, replace, colour, p); }, speechSpeed*10);
			} // The backtick '`' is the "wait" character - use it and it will wait 300ms before displaying the next character.
			else {
				dialogue.innerHTML += s.charAt(x);
				setTimeout(() => { addSpeech(s, x+1, replace, colour, p); }, speechSpeed);
			}
		}
		else {
			isReady = true;
			localStorage.setItem("step", JSON.stringify(step));
			localStorage.setItem("attempts", JSON.stringify(attempts));
			localStorage.setItem("isReady", JSON.stringify(isReady));
			localStorage.setItem("isFirst", JSON.stringify(isFirst));
			localStorage.setItem("curDir", JSON.stringify(curDir));
			localStorage.setItem("layer", JSON.stringify(layer));
			localStorage.setItem("currS", JSON.stringify(currS));
			localStorage.setItem("terminal", terminal.innerHTML);
			localStorage.setItem("dialogue", dialogue.innerHTML);
			sorority++;
		}
	}
	else {
		if(x == 0) {
			if(dialogue.childElementCount && s != "``````") dialogue.innerHTML += "<br><br>";
			var newText = document.createElement("span");
			newText.style.color = colour;
			newText.style.colour = colour;
			newText.style.fontFamily = "inherit";
			newText.style.size = "inherit";
			dialogue.appendChild(newText);
		}
		if(x < s.length) {
			if(s.charAt(x) == '~') {
				dialogue.lastChild.innerHTML += "<br>";
				setTimeout(() => { addSpeech(s, x+1, replace, colour, p); }, speechSpeed*10);
			}
			else if(s.charAt(x) == '`') {
				setTimeout(() => { addSpeech(s, x+1, replace, colour, p); }, speechSpeed*10);
			}
			else {
				dialogue.lastChild.innerHTML += s.charAt(x);
				setTimeout(() => { addSpeech(s, x+1, replace, colour, p); }, speechSpeed);
			}
		}
		else {
			isReady = true;
			localStorage.setItem("step", JSON.stringify(step));
			localStorage.setItem("attempts", JSON.stringify(attempts));
			localStorage.setItem("isReady", JSON.stringify(isReady));
			localStorage.setItem("isFirst", JSON.stringify(isFirst));
			localStorage.setItem("curDir", JSON.stringify(curDir));
			localStorage.setItem("layer", JSON.stringify(layer));
			localStorage.setItem("currS", JSON.stringify(currS));
			localStorage.setItem("terminal", terminal.innerHTML);
			sorority++;
		}
	}
}
var addMoreSpeech = function(s, color) {
	addSpeech(s, 0, false, color);
	currS += s;
}
var addInput = function() { // Adds an input box. This is for the forms and stuff.
	if(!(terminal.innerHTML.charAt(terminal.innerHTML.length-2) == '|')) { // Checks if the last character is a | or a : before adding an input box.
		setTimeout(addInput, 10);
		return;
	}
	var inpform = document.createElement("input");
	inpform.type = "text";
	inpform.id = "playerInput";
	inpform.maxLength = 20;
	terminal.appendChild(inpform); 
	playerInput.focus();
}
var readInput = function() { // Function for reading the input and replacing the box with text. MUST BE FOLLOWED by a validator once called (e.g. "Username accepted", "Access granted")
	let inp = playerInput.value;
	let termi = terminal;
	termi.removeChild(termi.childNodes[termi.childNodes.length-1])
	termi.innerHTML += ' ' + inp + '\n';
	return inp.toLowerCase();
}

var terminalStart = function() { // The "main" function with the game flow; it will be called once you click start or press enter.
	isReady = false; // Makes it so you can't press enter while the terminal is printing text. 
	if(step == -1) { // Step -1: starting out after the user selects "Start". Goes directly to step 0 after a while.
		title.style.animation = "disappear 1s ease-in-out";
		ending1.style.animation = "disappear 1s ease-in-out";
		$(window).scrollTop(0);
		terminal.innerHTML = "";
		dialogue.innerHTML = "";
		terminalMus.currentTime = 0;
		terminalMus.loop = true;
		terminalMus.volume = 1;
		ending1Mus.volume = 1;
		ending1Mus.pause();
		terminalMus.play();
		printEvent("A woman in her 20's is working on a laptop...");
		setTimeout(() => {
			title.style.display = 'none';
			title.style.opacity = 0;
			ending1.style.display = 'none';
			ending1.style.opacity = 0;
		}, 1000);
		setTimeout(() => {addSpeech("Alright, here goes nothing. I'm gonna hack his files.~~(deep breath)~~Hopefully I won't get in trouble for this. ~~Well, too much trouble. Doing this is trouble enough.");}, 3000);
		setTimeout(() => {
			breath.play();
		}, 3000 + calcTimeD("Alright, here goes nothing. I'm gonna hack his files.~~"))
		setTimeout(() => {
			logon.play();
		}, 4000 + calcTimeD("Alright, here goes nothing. I'm gonna hack his files.~~(deep breath)~~Hopefully I won't get in trouble for this. ~~Well, too much trouble. Doing this is trouble enough."));
		setTimeout(() => {
			step++;
			terminalStart();
		}, 5000 + calcTimeD("Alright, here goes nothing. I'm gonna hack his files.~~(deep breath)~~Hopefully I won't get in trouble for this. ~~Well, too much trouble. Doing this is trouble enough."));
		return;
	}
	if(step == 0) { // Step 0: the intro step
		terminal.style.overflow = "auto";
		printText("Welcome to Cormeum Access Terminal~~Username | ");
		setTimeout(() => {addInput();}, calcTime("Welcome to Cormeum Access Terminal~~Username | "));
		addSpeech("Okay, in order to get in here I need to know what username the Professor would use...");
		step++;
	}
	else if(step == 1) { // Step 1: the username step
		let inp = readInput();
		if(inp == "stomach") {
			printText("~~.`.`.`~~Password | ");
			setTimeout(() => {
				success.play();
				addSpeech("Alright, that IS a valid username. Cool.~~Come on, Lizzie, it's time to tackle the password.~~(goes through papers)~~Okay then, from what I've found it's a hormone produced by the stomach... I'm not sure which one it is, so I guess I'll have to input one of them.")
				setTimeout(() => {papers.play();}, 1000 + calcTime("Alright, that IS a valid username. Cool.~~Come on, Lizzie, it's time to tackle the password.~~"))
			}, calcTime("~~.`.`.`~~"));
			setTimeout(() => {addInput();}, calcTime("~~.`.`.`~~Password | "));
			isFirst = true;
			step++;
		}
		else {
			printText("~~.`.`.`~~Username not found.~~Username | ");
			if(isFirst) {
				isFirst = false;
				setTimeout(() => {
					error.play();
					addSpeech("Hmm, he does like the digestive system. He's been rambling about it all the time. He still researches a lot about it even though he's in a different department now.~~I think his username is just a part of the digestive system. Probably the one that looks the biggest, heh.");
				}, calcTime("~~.`.`.`~~"));
				setTimeout(() => {
					addInput();
				}, calcTime("~~.`.`.`~~Username not found.~~Username | "));
			}
			else {
				
				setTimeout(() => {
					error.play();
					addSpeech("No, that can't be it. Let me try again.")
				}, calcTime("~~.`.`.`~~"));
				setTimeout(() => {
					addInput();
				}, calcTime("~~.`.`.`~~Username not found.~~Username | "));
			}
		}
	}
	else if(step == 2) { // Step 2: the password step
		let inp = readInput();
		if(inp == "ghrelin") {
			printText("~~.`.`.~~Access granted.~~Current directory: " + curDir + "~Command | ");
			setTimeout(() => {
				var s;
				success.play();
				if(attempts > 2) {
					s = "That's it? Wow.~~I can't believe I took " + attempts.toString() + " attempts to get that.~~The hormone that makes us feel hungry.`.`.` go figure.~~Now I have to find the files containing his so-called 'research'.";
					addSpeech(s);
				}
				else {
					s = "That's it? Wow.~~The hormone that makes us feel hungry.`.`.` go figure.~~Now I have to find the files containing his so-called 'research'.";
					addSpeech(s);
				}
			}, calcTime("~~.`.`.`~~"));
			setTimeout(() => {addInput()}, calcTime("~~.`.`.~~Access granted.~~Current directory: " + curDir + "~Command | "));
			step++;
			attempts = 0;
		}
		else {
			printText("~~.`.`.`~~Access denied.~~Password | ");
			if(isFirst) {
				isFirst = false;
				setTimeout(() => {
					error.play();
					addSpeech("I know the Professor gets pretty cranky when he uses this computer, probably because he's hungry. The password might have something to do with that.")
			}, calcTime("~~.`.`.`~~"));
				setTimeout(() => {addInput()}, calcTime("~~.`.`.`~~Access denied.~~Password | "));
			}
			else {
				setTimeout(() => {
					error.play();
					addSpeech("Nope, wrong hormone. I'm getting hungrier by the minute...")
				}, calcTime("~~.`.`.`~~"));
				setTimeout(() => {addInput()}, calcTime("~~.`.`.`~~Access denied.~~Password | "));
			}
		}
	}
	else if(step == 3) { // Step 3: the navigation step
		let inp = readInput();
		let arr = inp.split(" ", 2); // Splits the input into two: the command and the directory/filename.
		attempts++;
		console.log(attempts);
		if(attempts > 0) {
			addSpeech("");
		}
		if(arr[0] == "jgdsgudsfndsa") { // HERE IS SOMETHING YOU SHOULD REMOVE AFTER TESTING
			step++;
			terminalStart();
			return;
		}
		if(attempts > upperLimit || arr[0] == "jgdsgudsfndsj") { // HERE IS SOMETHING YOU SHOULD REMOVE AFTER TESTING
			speechSpeed = 40;
			$("#terminalMus").animate({
				volume: 0
			}, 2000);
			ending1Mus.loop = true;
			ending1Mus.currentTime = 0;
			ending1Mus.volume = 0;
			ending1Mus.play();
			$("#ending1Mus").animate({
				volume: 1
			}, 2000);
			setTimeout(() => {
				terminalMus.pause();
			}, 2000);
			attempts = 0;
			layer = 0;
			step = 666;
			terminal.style.color = "red";
			setTimeout(() => {
				fatalerror.play();
				printText("~~ERROR: Unauthorized access detected. Initiating lockdown sequence.")
			}, 100);
			terminalStart();
			return;
		}
		if(arr[0] == "ls") {
			printText("~~List of contents in the current directory:");
			let i = 0;
			for(i; i < dirList[layer].length; i++) printText("~" + dirList[layer][i]);
		}
		else if(arr[0] == "cd") {
			if(arr[1] == "..") {
				if(layer == 0) {
					printText("~~Error: no directory to go back to.")
					error.play();
				}
				else {
					let i = 0;
					layer--;
					let str = curDir;
					curDir = str.slice(0, curDir.length - (dirList[layer][corList[layer]].length + 1));
				}
			}
			else {
				if(layer < 6) {
					let i = 0;
					for(i; i < dirList[layer].length; i++) {
						if(arr[1] == dirList[layer][i].toLowerCase()) {
							if(corList[layer] == i) {
								curDir += (dirList[layer][i] + "/");
								layer++;
								i = 999;
							}
							else {
								printText("~~Error: data corrupted.")
								error.play();
								i = 999;
							}
						}
					}
					if(i == dirList[layer].length) {
						printText("~~Error: directory not found.")
						error.play();
					}
				}
				else {
					printText("~~Error: directory not found.");
					error.play();
				}
			}
		}
		else if(arr[0] == "cat") {
			let i = 0;
			for(i = 0; i < dirList[layer].length; i++) {
				if(arr[1] == dirList[layer][i].toLowerCase()) {
					if(layer == 6 && i == 0) { // The "correct" answer
						step++;
						terminalStart();
						return;
					}
					else if(layer == 6 && i == 1) {
						printText("~~Error: file inaccessible.");
						error.play();
					}
				}
			}
			if(i == dirList[layer].length && arr[1] != "secret.txt") {
				printText("~~Error: file not found.");
				error.play();
			}
		}
		else if(arr[0] == "help") {
			printText("~~Available commands:~~ls~Usage: ls~~- Lists down all the files and directories within the current folder~~cd~Usage: cd [directory]~~- Changes the directory (folder) to the one specified in [directory].~(Tip: Use '..' as the directory to go back to the previous directory.)~~cat~Usage: cat [filename]~~- Displays the contents of a file.~~help~Usage: help~~- Displays a list of available commands.");
		}
		else {
			printText("~~Command not found.~Type 'help' for a list of available commands.");
			error.play();
		}
		printText("~~Current directory: " + curDir + "~Command | ");
		addInput();
	}
	else if(step == 4) {
		setTimeout(() => {
			risingMus.currentTime = 0;
			risingMus.volume = 0;
			risingMus.play();
			$("#risingMus").animate({
				volume: 1
			}, 2000);
			setTimeout(() => {
				terminalMus.pause();
			}, 2000);
			$("#terminalMus").animate({
				volume: 0
			}, 2000);
		}, 4800)
		addSpeech("````Boom! This should contain his resear.`.`.` what?")
		printText("~~==BEGIN FILE organsystems.txt==````~Hello, Lizzie.~~````Did you really think I would be so stupid?`` ``To put all that information in that crappy computer?~~Heh.~~I always knew you'd check out this computer.```` Actually, I was hoping you'd ch64< :E @FE D@>6 E:>6 D@@?] p >@FD6 2=H2JD H2?ED E@ 86E @FE @7 :ts cage.~~Hahahaha. You don't deserve to eG6? E2<6 2 8=2?46 2E >J C6D62Cch.`.`.` unless you can prove yourself worthy.~~Can you?~~Tick tock. Time's tick--r964< >6 @FE 2E oE96AC@76DD@Ceb] $EF4<n 9EEADi^^HHH]J@FEF36]4@>^H2E49nGlqG0y_;h9C_t~``````````==END FILE organsystems.txt==");
		setTimeout(() => {addSpeech("W-what is this? Prove myself worthy?~~So there is something else. Something deeper. Guess I'll have to go down this rabbit hole.")}, calcTime("~~==BEGIN FILE organsystems.txt==````~Hello, Lizzie.~~````Did you really think I would be so stupid?`` ``To put all that information in that crappy computer?~~Heh.~~I always knew you'd check out this computer.```` Actually, I was hoping you'd check it out some time soon.```` A mouse always wants to get out of its cage.~~Hahahaha. You don't deserve to even take a glance at my research.`.`.` unless you can prove yourself worthy.~~Can you?"))
		step++;
		printText("~~Current directory: " + curDir + "~Command | ");
		addInput();
	}
	else if(step == 5) {
		let inp = readInput();
		let arr = inp.split(" ", 2);
		if(arr[0] == "cat") {
			if(arr[1] == "secret.txt") {
				printText("~~The file you are about to access is encrypted. Please enter the password below.~Password | ");
				addInput();
				step++;
				return;
			}
			else if(arr[1] == "organsystems.txt") {
				printText("~~==BEGIN FILE organsystems.txt==````~Hello, Lizzie.~~````Did you really think I would be so stupid?`` ``To put all that information in that crappy computer?~~Heh.~~I always knew you'd check out this computer.```` Actually, I was hoping you'd ch64< :E @FE D@>6 E:>6 D@@?] p >@FD6 2=H2JD H2?ED E@ 86E @FE @7 :ts cage.~~Hahahaha. You don't deserve to eG6? E2<6 2 8=2?46 2E >J C6D62Cch.`.`.` unless you can prove yourself worthy.~~Can you?~~Tick tock. Time's tick--r964< >6 @FE 2E oE96AC@76DD@Ceb] $EF4<n 9EEADi^^HHH]J@FEF36]4@>^H2E49nGlqG0y_;h9C_t~``````````==END FILE organsystems.txt==");
			}
		}
		else if(arr[0] == "ls") {
			printText("~~List of contents in the current directory:");
			let i = 0;
			for(i; i < dirList[layer].length; i++) printText("~" + dirList[layer][i]);
		}
		else {
			error.play();
			printText("~~Error: U3R1Y2s/IFdoeSBub3QgdHJ5IFJvdC00Nz8=");
		}
		printText("~~Current directory: " + curDir + "~Command | ");
		addInput();
	}
	else if(step == 6) {
		let inp = readInput();
		if(inp == "cardiovascular") {
			printText("~~Congratulations! You have reached the endgame! We have to make ayos the text here.~~");
		}
		else {
			error.play();
			printText("Access denied.~~Password: | ");
			addInput();
		}
	}
	else if(step == 666) {
		addMoreSpeech("Oh no... gotta go!", "pink");
		setTimeout(() => {
			printEvent("The woman leaves the scene when a man in his 40s wearing a lab coat suddenly blocks her path...")
		}, calcTimeD(currS));
		addMoreSpeech("``````What are you doing?``", "#ADD8E6");
		addMoreSpeech("N-nothing, Professor... just-","pink");
		addMoreSpeech("Are you gathering evidence against me?``", "#ADD8E6");
		addMoreSpeech("Where are these assumptions coming from?``", "pink");
		addMoreSpeech("Don't play dumb, Lizzie!` ` You know exactly what I'm talking about!", "#ADD8E6");
		setTimeout(() => {printEvent("The professor moves closer...");}, calcTimeD(currS));
		addMoreSpeech("``````", "pink");
		addSpeech();
		addMoreSpeech("So the rumors ARE true... you murderer...``", "pink");
		addMoreSpeech("You think I killed people for fun? I don't kill people for fun! I kill people to save even more!``", "#ADD8E6");
		setTimeout(() => {printEvent("Lizzie raises a beaker containing an unknown chemical...");}, calcTimeD(currS));
		addMoreSpeech("Don't move closer! Or I'll.`.`.` I'll dump this all over you!``", "pink");
		addMoreSpeech("My dear Lizzie, it's futile...", "#ADD8E6");
		addMoreSpeech("``````", "pink");
		addSpeech();
		addMoreSpeech("If you had listened to me yesterday you would know that the chemical in that beaker is only dangerous... when consumed.``", "#ADD8E6");
		addMoreSpeech("Professor, please don't do this...``", "pink");
		addMoreSpeech("*mumbles* If only you had agreed to my plan from the start.`.`.```", "#ADD8E6");
		setTimeout(() => {
			printEvent("The professor pulls out a knife and traces it near Lizzie's chest.");
		}, calcTimeD(currS));
		addMoreSpeech("``````", "pink");
		addMoreSpeech("Professor, please...``", "pink");
		addMoreSpeech("Elizabeth Bennet, now a world-renowned cardiologist.`.`.` you do realize this was all because of me, right?", "#ADD8E6"); // No, her last name is not Bennet.
		addMoreSpeech("``````", "pink");
		addSpeech();
		addMoreSpeech("I did far too much to help you with your research- and THIS is how you repay me?`` By trying to out me as a murderer? A psychopath? Is that it?``", "#ADD8E6");
		addMoreSpeech("Well.``.``.`` at least your body won't go to waste.``", "#ADD8E6");
		addMoreSpeech("``````", "pink");
		setTimeout(() => {
			scream3.play();
			printEvent("Lizzie's screams of pain can be heard from a distance.")
		}, calcTimeD(currS));
		addMoreSpeech("``````````Oh, my dear Lizzie.`.`.` what a shame.`.`.`````", "#ADD8E6");
		setTimeout(() => {
			smash.play();
		}, calcTimeD(currS)+1000);
		setTimeout(() => {
			crash.play();
			terminal.innerHTML = "";
			textSpeed = 0;
			printText(glitchtext);
		}, calcTimeD(currS)+2000);
		setTimeout(() => { // Ending 1 things.
			ending1.style.animation = "appear 1s ease-in-out";
			$("#crash").animate({
				volume: 0.5
			}, 1000)
		}, calcTimeD(currS)+10000);
		setTimeout(() => { // More Ending 1 things.
			ending1.style.display = "inline";
			ending1.style.opacity = 1;
			isReady = false;
			setTimeout(() => {
				isReady = false;
			}, 100);
			setTimeout(() => {
				$("#ending1Mus").animate({
					volume: 0
				}, 2000);
			}, 18000)
			setTimeout(() => {
				ending1Mus.pause();
			}, 20000)
		}, calcTimeD(currS)+11000);
	}
}
var reload = function() {
	terminal.innerHTML = localStorage.getItem("terminal");
	step = JSON.parse(localStorage.getItem("step"));
	attempts = JSON.parse(localStorage.getItem("attempts"));
	isReady = JSON.parse(localStorage.getItem("isReady"));
	isFirst = JSON.parse(localStorage.getItem("isFirst"));
	curDir = JSON.parse(localStorage.getItem("curDir"));
	layer = JSON.parse(localStorage.getItem("layer"));
	currS = JSON.parse(localStorage.getItem("currS"));
	dialogue.innerHTML = localStorage.getItem("dialogue");
	title.style.animation = "disappear 1s ease-in-out";
	ending1.style.animation = "disappear 1s ease-in-out";
	$(window).scrollTop(0);
	if(step < 4) {
		terminalMus.currentTime = 0;
		terminalMus.loop = true;
		terminalMus.volume = 1;
		terminalMus.play();
	}
	else if(step < 666) {
		risingMus.currentTime = 0;
		risingMus.loop = false;
		risingMus.volume = 1;
		risingMus.play();
	}
	else {
		ending1Mus.currentTime = 0;
		ending1Mus.loop = true;
		ending1Mus.volume = 1;
		ending1Mus.play();
	}
	setTimeout(() => {
		title.style.display = 'none';
		title.style.opacity = 0;
		ending1.style.display = 'none';
		ending1.style.opacity = 0;
	}, 1000);
}

$(document).ready(function() { // Checks if the page is fully loaded before it starts up jQuery functions.

	// Below here, put all the starting functions. They will run once the page is ready.

	console.log("hi!");
	if(localStorage.getItem("terminal") !== null && localStorage.getItem("step") < 600) reloadButton.style.display = "inline";
    terminalMus.preload = "auto";
    ending1Mus.preload = "auto";
    risingMus.preload = "auto";
    error.preload = "auto";
    success.preload = "auto";
    fatalerror.preload = "auto";
    smash.preload = "auto";
    scream3.preload = "auto";
    crash.preload = "auto";
    logon.preload = "auto";
    papers.preload = "auto";
    breath.preload = "auto";
    startButton.class = "firstbutton";
    startButton.setAttribute("onclick", "terminalStart()");

	// Above here, put all the starting functions. They will run once the page is ready.
	
	$(document).keyup(function(event) { // Goes to the next step if the user clicks enter AND the page is ready (no more dialogue is being played)
		if(event.which == 13 && isReady) {
			terminalStart();
		}
		else if(event.which == 13 && sorority < maxSorority) {
			printEvent("Lizzie isn't finished talking yet.");
		}
	});
	$("div").focusout(function() { // Autofocuses whenever the box is unclicked.
		if(isReady) setTimeout(() => {$('#playerInput').get(0).focus()}, 10);
	});
	$("#yes").click(function() {
		currS = "";
		step = -1;
		isFirst = true;
		curDir = '/';
		layer = 0;
		attempts = 0;
		isReady = false;
		terminal.style.color = "#33FF00";
		terminalStart();
	});
	$("#no").click(function() {
		ending1.style.animation = "disappear 1s ease-in-out";
		credits1.style.animation = "uhppear 1s ease-in-out";
		setTimeout(() => {
			ending1.style.opacity = 0;
			ending1.style.display = "none";
			credits1.style.opacity = 0.8;
			credits1.style.display = "inline";
		}, 1000);
	})
});