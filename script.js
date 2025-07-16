function stringChop(str, size) {
  // your code here
	let newarr=[];
	for(let i=0;i<str.length;i++){
		let substr1=str.substr(i,size);
		newarr[i]=substr1;
	}
	return newarr;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
