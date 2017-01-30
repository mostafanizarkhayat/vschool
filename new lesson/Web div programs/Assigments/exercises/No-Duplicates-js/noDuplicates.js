function RemoveDuplicates() {
    var str = "aaabbbccc";
    var filtered = str.replace(/[^\w\s]|(.)\1/gi, "");  
  
}

RemoveDuplicates()  