---
layout: post
title:  "Matrix calc"
categories: Helper
resource: true
---

<style>
table.matrix td {
	padding: 0;
	margin 0;
	width: 100px;
	height: 100px;
}
</style>
<div id="matrix"></div>

<script type="text/javascript">
var states = [];

function checkGrid(row, col) {
//	states[row][col] = isset(states[row]) && isset(states[row][col]) ? false : true;
	if (row in states) {
	}
	 	states[row] = [];
	states[row][col] = row in states && col in states[row] && states[row][col] ? false : true;

	console.log(row, col, states[row][col]);
	//alert(states[row, col]);

	var matrixString = '';

	for (ckRow = 1; ckRow <= 5; ckRow ++) {
    	for (ckCol = 1; ckCol <= 6; ckCol ++) {
			if(!ckRow in states) {
				continue;
			}

			if(!ckCol in states[ckRow]) {
				continue;
			}

    		if (true == states[ckRow][ckCol]) {
    			pin = (ckRow - 1) * 5 + (ckCol - 1);
    			matrixString += ', ' + pin
    		}
    	}
    }

    alert('STR: ' + matrixString);
    console.log(states);

}

matrix = '';

matrix += '<table class="matrix" border="1">';
for (row = 1; row <= 5; row ++) {
	matrix += '<tr>';
	for (col = 1; col <= 6; col ++) {
		matrix += '<td onclick="checkGrid(' + row + ', ' + col + ');"></td>';
	}
	matrix += '</tr>';

	//#alert(x);
}
matrix += '<table>';

//jQuery('#matrix').html(matrix);
document.getElementById('matrix').innerHTML = matrix;
</script>


<div onclick="checkGrid(1, 2, 3);">CLICK</div>

<table border="1">

<tr>
	<td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
</table>