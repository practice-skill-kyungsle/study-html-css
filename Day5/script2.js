let a = 1;
console.log(a);		//1
console.log(window.a);	//undefined

var b = 1;
console.log(b);   //1
console.log(window.b)   //1

var c = { id: 1 };
console.log(c.id);    //1
console.log(window.c.id);   //1
