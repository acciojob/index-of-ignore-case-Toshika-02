function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(s1=== '' || s2=== ''){
		return -1;
	}
	 let lower = s1.lowerCase()
	 let upper = s2.upperCase();

	return lower.indexOf(upper)
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
