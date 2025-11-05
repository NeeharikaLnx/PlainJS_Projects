function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "@!#$%^&*()_+=";
  
    let allowedChars = "";
    let passwordArray = [];
  
    // Step 1: Ensure at least one from each selected type
    if (includeLowercase) {
      allowedChars += lowercaseChars;
      passwordArray.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]);
    }
    if (includeUppercase) {
      allowedChars += uppercaseChars;
      passwordArray.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);
    }
    if (includeNumbers) {
      allowedChars += numberChars;
      passwordArray.push(numberChars[Math.floor(Math.random() * numberChars.length)]);
    }
    if (includeSymbols) {
      allowedChars += symbolChars;
      passwordArray.push(symbolChars[Math.floor(Math.random() * symbolChars.length)]);
    }
  
    if (allowedChars.length === 0) {
      return "❌ Please select at least one character type.";
    }
  
    // Step 2: Fill remaining characters randomly
    while (passwordArray.length < length) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      passwordArray.push(allowedChars[randomIndex]);
    }
  
    // Step 3: Shuffle the password so it's random
    for (let i = passwordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
    }
  
    // Step 4: Return as string
    return passwordArray.join('');
  }
  console.log(generatePassword(12, true, true, true, true));
