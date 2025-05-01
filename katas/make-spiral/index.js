

function spiralize(n) {
	let spiral = new Array(n).fill(-1).map(row => new Array(n).fill(-1));
	let y = 0; // Idx current col
	let x = 0; // Idx current row
	let maxTopEmptyRowIdx = 0;
	let maxRightEmptyColIdx = n - 1;
	let maxDownEmptyRowIdx = n - 1;
	let maxLeftEmptyColIdx = 0;


	// Рисуем змейку
	let step = 1;

	while (step <= n * n) {
		// Direction - right
		for (let i = maxLeftEmptyColIdx; i <= maxRightEmptyColIdx; i++) {
			spiral[y][i] = checkAround(n, spiral, i, y, 'right') ? 1 : 0;
			step++;
		}
		maxTopEmptyRowIdx++;
		y++;
		x = maxRightEmptyColIdx;

		// Direction - down
		for (let i = maxTopEmptyRowIdx; i <= maxDownEmptyRowIdx; i++) {
			spiral[i][x] = checkAround(n, spiral, x, i, 'down') ? 1 : 0;
			step++;
		}
		maxRightEmptyColIdx--;
		x--;
		y = maxDownEmptyRowIdx;

		// Direction - left
		for (let i = maxRightEmptyColIdx; i >= maxLeftEmptyColIdx; i--) {
			spiral[y][i] = checkAround(n, spiral, i, y, 'left') ? 1 : 0;
			step++;
		}
		maxDownEmptyRowIdx--;
		y--;
		x = maxLeftEmptyColIdx;

		// Direction - up
		for (let i = maxDownEmptyRowIdx; i >= maxTopEmptyRowIdx; i--) {
			spiral[i][x] = checkAround(n, spiral, x, i, 'up') ? 1 : 0;
			step++;
		}
		maxLeftEmptyColIdx++;
		x++;
		y = maxTopEmptyRowIdx;

	}


	return spiral;
}


function checkAround(n, spiral, x, y, direction) {
	let result = true;

	const checkTop = () => {
		if (y > 0 && spiral[y - 1][x] === 1) return false;
		return true;
	};

	const checkRight = () => {
		if (x < n - 1 && spiral[y][x + 1] === 1) return false;
		return true;
	};

	const checkDown = () => {
		if (y < n - 1 && spiral[y + 1][x] === 1) return false;
		return true;
	};

	const checkLeft = () => {
		if (x > 0 && spiral[y][x - 1] === 1 && spiral[y - 1][x] === -1) return false;
		return true;
	};

	if (direction === 'right') {
		if (!checkTop()) return false;
		if (!checkRight()) return false;
	}

	if (direction === 'down') {
		if (!checkRight()) return false;
		if (!checkDown()) return false;
	}

	if (direction === 'left') {
		if (!checkTop()) return false;
		if (!checkLeft()) return false;
		if (!checkDown()) return false;
	}

	if (direction === 'up') {
		if (!checkTop()) return false;
		if (!checkLeft()) return false;
	}

	return result
}


const result = spiralize(4);
showSpiralize(result);


// ---- TESTING ---- //
function showSpiralize(array) {
	array.forEach(arr => {
		console.log(arr.map(item => item ? '0' : '.').join(''));
	})
};
