let board1 = [ [ '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️' ],
		       [ '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️' ],
		       [ '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️' ],
		       [ '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️' ],
		       [ '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️' ],
		       [ '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️' ],
		       [ '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️' ],
		       [ '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️' ] ]

let board2 = [ [ '⚫️', '⚫️', '⚫️', '⚫️', '⚪️', '⚪️', '⚪️', '⚪️' ],
		       [ '⚫️', '⚫️', '⚫️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️' ],
		       [ '⚫️', '⚫️', '⚫️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️' ],
		       [ '⚫️', '⚪️', '⚪️', '⚫️', '⚪️', '⚪️', '⚪️', '⚪️' ],
		       [ '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️' ],
		       [ '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️' ],
		       [ '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️' ],
		       [ '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️' ] ]


describe('Functional Tests', ()=>{
  it('create a board', ()=>{
    let random_board = generate_random_board();
    expect(random_board.length).toBe(8);
  });
  it('check blank board', ()=>{
	let blank_board = find_all_fours(board1);
	expect(blank_board).toEqual([[],[],[],[]]);
  });
  it('check board with one horizontal match', ()=>{
	let horizontal_board = find_horizontal_fours(board2);
	expect(horizontal_board[0]).toEqual([0,0]);
  });
  it('check board with one vertical match', ()=>{
    let vertical_board = find_vertical_fours(board2);
    expect(vertical_board[0]).toEqual([0,0]);
  });
  it('check board with one diagonal match', ()=>{
	let diagonal_board = find_diagonal_fours_down_slope(board2);
	expect(diagonal_board[0]).toEqual([0,0]);
  });
  it('check board with one diagonal match', ()=>{
	let diagonal_board = find_diagonal_fours_up_slope(board2);
	expect(diagonal_board[0]).toEqual([0,3]);
  });

});




