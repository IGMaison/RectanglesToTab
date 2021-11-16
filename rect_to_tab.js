{
 


let rectArr = [[10, 30, 20, 50], [70, 15, 140, 77], [25, 70, 45, 90], [35, 15, 60, 55]];



function drawRect (rectArr) {
	
	let zeroPoint = 1;	

	let x = [0];
	let y = [0];
	
	for (r of rectArr) {

		x.push(r[0], r[2]) ;
		y.push(r[1], r[3]) ;
	}

	x.sort((a, b) => a - b );
	y.sort((a, b) => a - b );

	let tempRect = [];	
	let dim, w, h;
	let isRect;

	//let scrRate = window.innerWidth / window.innerHeight;//1.7;	//c
	//let tableWidthpercent = 98;//a
	//let xyRate = (x[x.length-1]/(y[y.length-1]||1)||1)//k
	//let tabH = (xyRate < scrRate) ? (tableWidthpercent / scrRate):(tableWidthpercent / xyRate);//y
	//let tabW = (xyRate < scrRate) ? (xyRate * tableWidthpercent / scrRate):tableWidthpercent;//x
	let tabW = tabSize(x[x.length-1], y[y.length-1])[0];
	let tabH = tabSize(x[x.length-1], y[y.length-1])[1];

	rectArrW = tabW;
	rectArrH = tabH;

	let tab = '<table style="margin: 0px auto auto auto; height:' + tabH + 'vw; width:' + tabW + 'vw; border-spacing: 0px;" border="1px">';


	
	let skipW = 0;

	for (let row = (zeroPoint)?0:1; row < y.length - 1; row++) {
				
		if (y[row] == y[row + 1]) {continue;}
		
		tempRect = [];
		tab = tab + '<tr>';

		for (let rect of rectArr) {

			if (rect[1] <= y[row] && rect[3] > y[row]) {
				
				tempRect.push(rect);
			}
		}

		let skipH = 0;

		for (let col = (zeroPoint)?0:1; col < x.length - 1; col++) {
			
			if (x[col] == x[col + 1]) {continue;}
			
			isRect = '';
			
			for (let rect of tempRect) {				
				
				if (rect[0] <= x[col] && rect[2] > x[col]) {
				
					isRect = ' bgcolor="#994400"';
				}							
			}
			
			dim = ' style="';

			if (skipW == 0) {

				w = ' width:' + 100 * (x[col + 1] - x[col]) / x[x.length-1] + '%;';
			}

			if (skipH == 0) {

				h =' height:' + 100 * (y[row + 1] - y[row]) / y[y.length-1] + '%;';
			}

			if (skipW == 0 || skipH == 0) {

				dim = dim + w + h + '"';				
				w = '';
				h = '';

			}else {

				dim = '';
			}

			tab = tab + '<td'+ dim + isRect + '></td>';
			skipH++;
						
		}

		tab = tab + '</tr>'
		skipW++;

	}
	tab = tab + '</table>';
	let m = document.getElementById('main');
	m.innerHTML = tab;

}



function tabSize(x, y) { //l;lk;kl;sf;lafkl;dsk;flskd'flskd'fksd';fk's;kf'sd;fs';f'sddf

	let scrRate = window.innerWidth / window.innerHeight;//1.7;	//c
	let tableWidthpercent = 98;//a
	let xyRate = ((x / y)||1)||1;//(x[x.length-1]/(y[y.length-1]||1)||1)//k
	let tabH = (xyRate < scrRate) ? (tableWidthpercent / scrRate):(tableWidthpercent / xyRate);//y
	let tabW = (xyRate < scrRate) ? (xyRate * tableWidthpercent / scrRate):tableWidthpercent;//x
	return [tabW, tabH];
}


let rectArrW;
let rectArrH;

function tabResize () { //fdfkdfjsdfjhasdfkjafkjgafkgafsglasflgafslgaflshfhlahlfhlkasfhklasfhklfashlkhlkfas
        
	let tabWH = tabSize(rectArrW, rectArrH);
	let tab = document.getElementsByTagName('table')[0];
	tab.style.width = tabWH[0] + 'vw';
	tab.style.height = tabWH[1] + 'vw';
    }


window.onresize = tabResize; 



window.onload = function(){
			
			drawRect(rectArr);
}



};


