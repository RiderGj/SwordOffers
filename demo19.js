// 顺时针打印矩阵
function printMatrix(matrix)
{
    // write code here
    var result = [];
    var row = matrix.length,
        col = matrix[0].length;
    if (row==1&&col==1){
    	return [1];
    }
    var [x, y] = [0, 0];
    while (row>0 & col>0){
        // 从左->右输出
        if(true){
        	for (let i=0; i<col; i++){
	            result.push(matrix[x][y++]);
	        }
        }
        y--;
        if(row>1){
        	// 从右->下输出
			for (let i=1; i<row; i++){
	            result.push(matrix[++x][y]);
	        }
        }
        
    	
        // 从下->左输出
        if (row>1 && col>1) {
        	for (let i=1; i<col; i++){
	            result.push(matrix[x][--y]);
	        }
        }
        // 从左->上输出
        if (row>1 && col>1){
        	for (let i=1; i<row-1; i++){
	            result.push(matrix[--x][y]);
	        }
        }
        //x++;
        y++;
        row -= 2;
        col -= 2;
    }
    return result;
}

//mat = [[1, 3, 2]]
//mat = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
mat = [[1], [3], [2]];
console.log(printMatrix(mat));