var pieces = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
var selectedPiece = -1;
var turn = 1; // 1 - Black		2 - Red

function generateBoard() {
	var board = document.getElementById('game');
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
		if (pieces[i] == 1) {
			board[i].firstChild.src = 'Sprites/black.png';
		} else if (pieces[i] == 2) {
			board[i].firstChild.src = 'Sprites/red.png';
		} else {
			board[i].firstChild.src = '';
		}
	}
}

function select(element) {
	let index = element.getAttribute('index');

	if ((pieces[index] == 1 && turn == 1) || (pieces[index] == 2 && turn == 2)) {
		for (var i of document.getElementsByClassName('selected')) {
			i.classList.remove('selected');
		}
		element.className += ' selected';
		selectedPiece = parseInt(index);
	}
	console.log(selectedPiece)
	for (var i = 0; i < document.getElementsByClassName('available').length; i++) {
		document.getElementsByClassName('available')[i].className = 'playable';
	}
	availableMoves();
}

function availableMoves() {
	if (Math.floor(selectedPiece / 4) % 2 == 0) {
		if (turn == 1 && pieces[selectedPiece + 4] == 0) {
			document.getElementsByClassName('playable')[selectedPiece + 4].className = 'playable available';
			document.getElementsByClassName('playable')[selectedPiece + 4].onclick = () => {
				movePiece(selectedPiece, selectedPiece + 4)
			};
		}
		if (turn == 1 && pieces[selectedPiece + 3] == 0 && selectedPiece % 4 != 0) {
			document.getElementsByClassName('playable')[selectedPiece + 3].className = 'playable available';
			document.getElementsByClassName('playable')[selectedPiece + 3].onclick = () => {
				movePiece(selectedPiece, selectedPiece + 3)
			};
		}
	} else {
		if (turn == 1 && pieces[selectedPiece + 4] == 0) {
			document.getElementsByClassName('playable')[selectedPiece + 4].className = 'playable available';
			document.getElementsByClassName('playable')[selectedPiece + 4].onclick = () => {
				movePiece(selectedPiece, selectedPiece + 4)
			};
		}
		if (turn == 1 && pieces[selectedPiece + 5] == 0 && selectedPiece % 4 != 3) {
			document.getElementsByClassName('playable')[selectedPiece + 5].className = 'playable available';
			document.getElementsByClassName('playable')[selectedPiece + 5].onclick = () => {
				movePiece(selectedPiece, selectedPiece + 5)
			};
		}
	}

	console.log(pieces[selectedPiece + 4])
}

function movePiece(from, to) {
	pieces[from] = 0;
	pieces[to] = turn;
	clear();
	document.getElementsByClassName('playable')[to].onclick = function () {
		select(this);
	};
	console.log('it works')

	drawPieces();

}

function main() {
	generateBoard();
	drawPieces();
}

function clear() {
	for (var i of document.getElementsByClassName('selected')) {
		i.classList.remove('selected');
	}
	for (var i = 0; i < document.getElementsByClassName('available').length; i++) {
		document.getElementsByClassName('available')[i].onclick = '';
		document.getElementsByClassName('available')[i].className = 'playable';
	}

}

main();