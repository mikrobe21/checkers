
let canvas = document.getElementById('mycanvas');
let mycontext = canvas.getContext('2d')
//draw the board
for(let y = 0; y < 8; y+=2){
	for(let x = 0; x < 8; x++){
		mycontext.rect(80*x, 80*y, 80, 80);
		if (x % 2 == 0){
			mycontext.fillStyle = "rgba(0,0,0,.5)";
		}
		else{
			mycontext.fillStyle = "rgba(255,0,0,.5)";
		}
		mycontext.fill();
		mycontext.beginPath();
	}
}		
for(let y = 1; y < 8; y+=2){
	for(let x = 0; x < 8; x++){
		mycontext.rect(80*x, 80*y, 80, 80);
		if (x % 2 == 0){
			mycontext.fillStyle = "rgba(255,0,0,.5)";
		}
		else{
			mycontext.fillStyle = "rgba(0,0,0,.5)";
		}
		mycontext.fill();
		mycontext.beginPath();
	}
}

//populate the board with checkers
let board1 = [ [ '⚪️', '⚪️', '⚫️', '⚫️', '⚫️', '⚪️', '⚪️', '⚫️' ],
		       [ '⚫️', '⚪️', '⚫️', '⚫️', '⚫️', '⚪️', '⚫️', '⚪️' ],
		       [ '⚫️', '⚪️', '⚪️', '⚫️', '⚪️', '⚫️', '⚪️', '⚫️' ],
		       [ '⚫️', '🔴', '⚫️', '⚪️', '⚫️', '⚫️', '⚪️', '⚫️' ],
		       [ '⚪️', '⚪️', '⚪️', '⚪️', '🔴', '⚪️', '⚫️', '🔴' ],
		       [ '⚪️', '⚫️', '⚫️', '⚪️', '⚪️', '🔴', '🔴', '🔴' ],
		       [ '⚪️', '⚫️', '🔴', '🔴', '⚪️', '🔴', '🔴', '🔴' ],
		       [ '⚪️', '⚫️', '🔴', '🔴', '🔴', '🔴', '⚪️', '🔴' ] ]

let board2 = [ [ '⚫️', '🔴', '⚫️', '🔴', '⚪️', '🔴', '⚫️', '🔴' ],
  			   [ '⚫️', '🔴', '⚫️', '⚪️', '⚪️', '⚫️', '⚪️', '⚫️' ],
  			   [ '⚪️', '⚫️', '🔴', '⚫️', '🔴', '⚫️', '⚫️', '⚫️' ],
  			   [ '🔴', '🔴', '🔴', '⚪️', '⚪️', '⚫️', '⚪️', '🔴' ],
  			   [ '🔴', '⚫️', '🔴', '⚫️', '🔴', '🔴', '🔴', '🔴' ],
  			   [ '⚫️', '⚫️', '⚪️', '⚪️', '⚫️', '🔴', '⚪️', '🔴' ],
 			   [ '⚪️', '⚫️', '🔴', '⚪️', '🔴', '🔴', '⚫️', '⚫️' ],
  		       [ '⚫️', '⚪️', '⚪️', '⚫️', '🔴', '⚫️', '⚫️', '⚪️' ] ]

function populate_board(board){
	for(let y = 0; y < 8; y++){
		for(let x = 0; x < 8; x++){
			mycontext.beginPath();
			mycontext.arc(40+(x*80), 40+(y*80), 25, 0, Math.PI * 2, true); // draw a circle mycontext.closePath();
			if (board[y][x] == '⚫️'){
				mycontext.fillStyle = "rgba(0,0,0,1)"; mycontext.fill(); // fill the circle solid
			}
			else if(board[y][x] == '🔴'){
				mycontext.fillStyle = "rgba(255,0,0,1)"; mycontext.fill();
			}
			else{
				mycontext.fillStyle = "rgba(0,0,0,0)"
			}
			
			mycontext.fill();
			mycontext.beginPath();
			}
			
	}
}
document.querySelector('button').addEventListener('click', function(){
	populate_board(generate_random_board());
});





mycontext.beginPath(); 
mycontext.lineWidth = 5;
mycontext.strokeStyle = "rgba(255,255,0.75)";
mycontext.moveTo(0, 320); 
mycontext.lineTo(320, 0); 
mycontext.stroke();