/* Author: Ted Hendricks */

"use strict";

window.onload = function (event) {

	var gettysburgAddress = "Four score and seven years ago our fathers brought forth on this continent, " + 
	                        "a new nation, conceived in Liberty, and dedicated to the proposition that all " +
	                        "men are created equal.\n" +
							"Now we are engaged in a great civil war, testing whether that nation, or any " +
							"nation so conceived and dedicated, can long endure. We are met on a great " +
							"battle-field of that war. We have come to dedicate a portion of that field, " +
							"as a final resting place for those who here gave their lives that that nation " +
							"might live. It is altogether fitting and proper that we should do this.\n" +
							"But, in a larger sense, we can not dedicate -- we can not consecrate -- we can " +
							"not hallow -- this ground. The brave men, living and dead, who struggled here, " +
							"have consecrated it, far above our poor power to add or detract. The world will " +
							"little note, nor long remember what we say here, but it can never forget what " +
							"they did here. It is for us the living, rather, to be dedicated here to the " +
							"unfinished work which they who fought here have thus far so nobly advanced. It " +
							"is rather for us to be here dedicated to the great task remaining before us -- " +
							"that from these honored dead we take increased devotion to that cause for which " +
							"they gave the last full measure of devotion -- that we here highly resolve that " +
							"these dead shall not have died in vain -- that this nation, under God, shall have " +
							"a new birth of freedom -- and that government of the people, by the people, for the " +
							"people, shall not perish from the earth.";

	function findWord(word) {
		var body = document.getElementById("words");
		var start = 0;
		var index;
		var occurence = [];

		//creates an array of occurences of the word
		while ((index = gettysburgAddress.indexOf(word, start)) > -1) {
			occurence.push(index);
			start = index + word.length;
		}

		//for each occurence prints the index value
		if (occurence.length > 0) {
			for (var i = 0; i < occurence.length; i++) {
				var message = "The word: \"" + word + "\" was found at index " + occurence[i] + ".<br>";
				body.innerHTML += message;
			}
		}else {
			var message = "The word: \"" + word + "\" was not found in the Gettysburg Address.<br>";
			body.innerHTML += message;
		}
	}

	var word = "nation";
	findWord(word);

	var word = "job";
	findWord(word);

	var word = "god";
	findWord(word);

	var word = "God";
	findWord(word);

	var word = "consecrate";
	findWord(word);
}

