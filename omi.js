






function add(x ,y ){
	result = x + y
	return result
}
function multiply(x , y) {
	result = x * y
	return result
}
function divide(x ,y){
	result = x /y
	return result
}



function main(){
	x= 25
	y = 24
	z = add(x,y)
	a = multiply(x,y)
	b = divide(x,y)
	add = `addtion of two numbwers is${z}` 
	multiply = `mul of two numbers  is ${a}`
	divis = `divise of twon num is ${b}`

	console.log(add,multiply)
	console.log(multiply)
	console.log(divis)
	}


main()
