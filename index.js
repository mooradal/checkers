var pieces = [
	[1, 1, 1, 1],
	[1, 1, 1, 1],
	[1, 1, 1, 1],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[2, 2, 2, 2],
	[2, 2, 2, 2],
	[2, 2, 2, 2]
]

function generateBoard() {
	let board = document.getElementById('game');
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			let slot = document.createElement('div');

			if (j % 2 == i % 2) {
				slot.appendChild(document.createElement('img'));
				slot.className += ' playable';
			} else {
				slot.className += ' none';
			}
			board.appendChild(slot);
		}
	}
}

function drawPieces() {
	var board = document.getElementsByClassName('playable');
	for (var i = 0; i < pieces.length; i++) {
		for (var j = 0; j < 4; j++) {

			if (pieces[i][j] == 1) {
				console.log(board[i + j].firstChild)
				board[(i * 4) + j].firstChild.src = 'Sprites/black.png';
			} else if (pieces[i][j] == 2) {
				board[(i * 4) + j].firstChild.src = 'Sprites/red.png';
			}
		}
	}
}

function main() {
	generateBoard();
	drawPieces();
}

main();