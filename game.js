

	// GAME OBJECT
	// ==========================================================================
	var game = {
		wins: 0,
		losses: 0,
		guesses: 9,
		myLetter: ["s", "u", "z","a","n","n", "a"],

		guessesAdd: function (){
			this.guesses = this.guesses + 1;
		},
		guessesleft: function(){			
			this.guesses = this.guesses - 1;					
		},
		lossesUpdate: function(){			
			if (this.guesses == 0) {
				this.guesses = 9;
				this.losses = this.losses +1 ;
			}			
		},
		winsUpdate: function(){
			this.wins = this.wins + 1;
			this.guesses = 9;			
		} ,			
	}


	// FUNCTIONS
	// ==============================================================================
	function contains(a, obj) {
      var i = a.length;
      while (i--) {
        if (a[i] === obj) {
           return false;
         }
      }
      return true;
    }

	// MAIN PROCESS
	// ==============================================================================

	// Captures keyboard input. Depending on the letter pressed it will "call" (execute) that function in the car object.
	var list = [];
	var j = 0;	
	var i = 0;
	document.onkeyup = function(event){
		var letter = String.fromCharCode(event.keyCode).toLowerCase();
				
		if (list.length == 8) {
			list = [];
		}else if (contains(list, letter)) {
			list.push(letter);
		}else {
			game.guessesAdd();
		}

		if (letter == game.myLetter[j]){
			 game.winsUpdate();
			 j++;
			 if (j == 7){
			 	j=0;
			 }
			document.getElementById('wins').innerHTML = game.wins;	
			document.getElementById('losses').innerHTML = game.losses;
		   	document.getElementById('guesses').innerHTML = game.guesses;
		   	document.getElementById('list').innerHTML = "";

		}else {
			
			game.guessesleft();
			game.lossesUpdate();
			document.getElementById('wins').innerHTML = game.wins;	
			document.getElementById('losses').innerHTML = game.losses;
			document.getElementById('guesses').innerHTML = game.guesses;
			document.getElementById('list').innerHTML = list;
		}	
		
	}


