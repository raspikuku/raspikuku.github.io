---
layout: helper
title:  "Ohm Calc"
categories: Helper
resource: true
---

<table>
	<tr>
		<td id="result" colspan="6"></td>
	</tr>
	<tr>
		<td colspan="2" id="slider-1-displ" style="background-color: brown;">1 brown</div></td>
		<td colspan="2" id="slider-2-displ" style="background-color: black;">0 black</td>
		<td colspan="2" id="slider-3-displ" style="background-color: red;">2 red</td>
	</tr>
	<tr>
		<td>
			<div id="slider-1"></div>
		</td>
		<td>
			<table>
				<tr>
					<td style="background-color: black; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: brown; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: red; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: orange; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: yellow; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: green; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: blue; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: violet; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: gray; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: white; padding: 5px;"></td>
				</tr>
			</table>

		</td>
		<td>
			<div id="slider-2"></div>
		</td>
		<td>
			<table>
				<tr>
					<td style="background-color: black; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: brown; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: red; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: orange; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: yellow; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: green; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: blue; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: violet; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: gray; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: white; padding: 5px;"></td>
				</tr>
			</table>

		</td>
		<td>
			<div id="slider-3"></div>
		</td>
		<td>
			<table>
				<tr>
					<td style="background-color: black; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: brown; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: red; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: orange; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: yellow; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: green; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: blue; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: violet; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: gray; padding: 5px;"></td>
				</tr>
				<tr>
					<td style="background-color: white; padding: 5px;"></td>
				</tr>
			</table>

		</td>
	</tr>
</table>

<script>
$(function () {
	$('#slider-1').slider({ orientation: 'vertical',
		max: 9,
		value: 8,
		slide: function (event, ui) {
			recalc(1, ui.value)
		}});

	$('#slider-2').slider({ orientation: 'vertical',
		max: 9,
		value: 9,
		slide: function (event, ui) {
			recalc(2, ui.value)
		}});

	$('#slider-3').slider({ orientation: 'vertical',
		max: 9,
		value: 7,
		slide: function (event, ui) {
			recalc(3, ui.value)
		}});

	recalc();
});
</script>