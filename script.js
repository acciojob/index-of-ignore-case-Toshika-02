function indexOfIgnoreCase(s1, s2) {
  // write your code here
	 if(!s1 || !s2){
		 return -1;
	 }
	  const l1 = s1.toLowerCase();
	  const l2 = s2.toLowerCase();
	  return l1.indexOf(l2)
}

Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
