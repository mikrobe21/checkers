//----------------------------------------------------------------------------//
//Board Set Up
//----------------------------------------------------------------------------//
let red_checker = '🔴';
let black_checker = '⚫️';
let empty = '⚪️';

function generate_random_piece(){
	let value = Math.floor(Math.random() * 3);
	if (value == 0){
		return(empty)
	}
	else if (value == 1) {
		return (black_checker)
	}
	else{
		return (red_checker)
	}
}

function generate_random_board(){
	let board = []
	for (let y = 0; y < 8; y++){
		board[y] = []
		for (let x = 0; x < 8; x++){
			board[y][x] = generate_random_piece();
		}
	}
	return board;
}

//----------------------------------------------------------------------------//
//Search Algorithm 
//----------------------------------------------------------------------------//
function find_horizontal_fours(checker_array){
	let found_array = []
	for(let y = 0; y < checker_array.length; y++){
		for(let x = 0; x < 5; x++){
			if(checker_array[y][x]   === checker_array[y][x+1] &&
			   checker_array[y][x+1] === checker_array[y][x+2] &&
			   checker_array[y][x+2] === checker_array[y][x+3] &&
				checker_array[y][x] != '⚪️'){
					// found_array.push("col " + x + " row " + y )
					found_array.push([x,y])
				}
			}
		}
	return (found_array)
}
		
function find_vertical_fours(checker_array){
	let found_array = []
	for(let y = 0; y < 5; y++){
		for(let x = 0; x < checker_array.length; x++){
			if(checker_array[y][x]   === checker_array[y+1][x] &&
			   checker_array[y+1][x] === checker_array[y+2][x] &&
			   checker_array[y+2][x] === checker_array[y+3][x] &&
				checker_array[y][x] != '⚪️'){
					// found_array.push("col " + x + " row " + y )
					found_array.push([x,y])
				}
			}
		}
	return (found_array)
}


function find_diagonal_fours_down_slope(checker_array){
	let found_array = []
	for(let y = 0; y < 5; y++){
		for(let x = 0; x < 5; x++){
			if(checker_array[y][x]   === checker_array[y+1][x+1] &&
			   checker_array[y+1][x+1] === checker_array[y+2][x+2] &&
			   checker_array[y+2][x+2] === checker_array[y+3][x+3] &&
				checker_array[y][x] != '⚪️'){
					// found_array.push("col " + x + " row " + y )
					found_array.push([x,y])
				}
			}
		}
	return (found_array)

}

function find_diagonal_fours_up_slope(checker_array){
	let found_array = []
	for(let y = 3; y < checker_array.length; y++){
		for(let x = 0; x < 5; x++){
			if(checker_array[y][x]   === checker_array[y-1][x+1] &&
			   checker_array[y-1][x+1] === checker_array[y-2][x+2] &&
			   checker_array[y-2][x+2] === checker_array[y-3][x+3] &&
				checker_array[y][x] != '⚪️'){
					// found_array.push("col " + x + " row " + y )
					found_array.push([x,y])
				}
			}
		}
	return (found_array)
}

function find_all_fours(checker_array){
	let all_4s = [];
	all_4s.push(find_horizontal_fours(checker_array));
	all_4s.push(find_vertical_fours(checker_array));
	all_4s.push(find_diagonal_fours_down_slope(checker_array));
	all_4s.push(find_diagonal_fours_up_slope(checker_array));
	return(all_4s)
}
//----------------------------------------------------------------------------//
//HTML Portion, Drawing With Canvas
//----------------------------------------------------------------------------//
let canvas = document.getElementById('mycanvas');
let mycontext = canvas.getContext('2d');

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

//----------------------------------------------------------------------------//
//Event Listeners
//----------------------------------------------------------------------------//

let random_board = generate_random_board();

document.getElementById('button1').addEventListener('click', function(){
	populate_board(random_board);	
});

document.getElementById('button2').addEventListener('click', function(){
	
	let found_array = find_all_fours(random_board);
	let horizontal_array = found_array[0]
	let vertical_array = found_array[1]
	let diagonal_down_array = found_array[2]
	let diagonal_up_array = found_array[3]

	for (let i = 0; i < horizontal_array.length; i++){
		let x = horizontal_array[i][0]
		let y = horizontal_array[i][1]
		mycontext.beginPath(); 
		mycontext.lineWidth = 5;
		mycontext.strokeStyle = "rgba(255,255,0.75)";
		mycontext.moveTo(80*x, 80*y + 40); 
		mycontext.lineTo(80* x + 320, 80 *y +40); 
		mycontext.stroke();
	}

	for (let i = 0; i < vertical_array.length; i++){
		let x = vertical_array[i][0]
		let y = vertical_array[i][1]
		mycontext.beginPath(); 
		mycontext.lineWidth = 5;
		mycontext.strokeStyle = "rgba(255,255,0.75)";
		mycontext.moveTo(80*x + 40 , 80*y ); 
		mycontext.lineTo(80* x + 40, 80 *y +320 ); 
		mycontext.stroke();
	}

	for (let i = 0; i < diagonal_up_array.length; i++){
		let x = diagonal_up_array[i][0]
		let y = diagonal_up_array[i][1]
		mycontext.beginPath(); 
		mycontext.lineWidth = 5;
		mycontext.strokeStyle = "rgba(255,255,0.75)";
		mycontext.moveTo(80*x  , 80*y+80 ); 
		mycontext.lineTo(80*x+320 , 80*y-240 ); 
		mycontext.stroke();
	}

	for (let i = 0; i < diagonal_down_array.length; i++){
		let x = diagonal_down_array[i][0]
		let y = diagonal_down_array[i][1]
		mycontext.beginPath(); 
		mycontext.lineWidth = 5;
		mycontext.strokeStyle = "rgba(255,255,0.75)";
		mycontext.moveTo(80*x  , 80*y ); 
		mycontext.lineTo(80*x+320 , 80*y+320 ); 
		mycontext.stroke();
	}


});

document.getElementById('button3').addEventListener('click', function(){
	location.reload(true);
});


