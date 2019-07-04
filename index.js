var pieces = [
	[1, 1, 1, 1],
	[1, 1, 1, 1],
	[1, 1, 1, 1],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[2, 2, 2, 2],
	[2, 2, 2, 2],
	[2, 2, 2, 2]
];
var selectedPiece = [-1, -1];

function generateBoard() {
	let board = document.getElementById('game');
	let count = 0;
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {

			let slot = document.createElement('div');

			if (j % 2 == i % 2) {

				slot.appendChild(document.createElement('img'));
				slot.className += ' playable';
				slot.setAttribute('index', count);
				slot.onclick = function () {
					select(this);
				}
				count++;
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
				board[(i * 4) + j].firstChild.src = 'Sprites/black.png';
			} else if (pieces[i][j] == 2) {
				board[(i * 4) + j].firstChild.src = 'Sprites/red.png';
			}
		}
	}
}

function select(element) {
	let index = element.getAttribute('index');

	if (pieces[Math.floor(index / 4)][index % 4] == 1 || pieces[Math.floor(index / 4)][index % 4] == 2) {
		for (var i of document.getElementsByClassName('selected')) {
			i.classList.remove('selected');
		}
		element.className += ' selected';
		selectedPiece = [Math.floor(index / 4), index % 4]
	}
	console.log(selectedPiece)
}

function main() {
	generateBoard();
	drawPieces();
}

main();