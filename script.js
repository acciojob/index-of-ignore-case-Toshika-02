function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(s1=== '' || s2=== ''){
		return -1;
	}
	 const lower = s1.toLowerCase()
	 const lower1 = s2.toLowerCase();

	return lower.indexOf(lower1)
}

Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
