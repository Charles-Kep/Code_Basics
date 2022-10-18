function telephoneCheck(str) {
  let acceptablePhoneNumbers = [ //An array of regex to check all acceptable phone number checks
    /^\d{10}$/,
    /^\d{3} \d{3} \d{4}$/, 
    /^\d{3}-\d{3}-\d{4}$/, 
    /^1 \d{3} \d{3} \d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\(\d{3}\) \d{3} \d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}\d{4}$/ 
    ];
  for(let i = 0; i < acceptablePhoneNumbers.length; i++){ //iterates through acceptable numbers checking against regex
    if(acceptablePhoneNumbers[i].test(str)=== true){ //exits function if it reaches a pass
      return true;
    } 
  }
  return false; //returns false if the above loop fails to find a acceptable format
}