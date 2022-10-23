// mengecek apakah sebuah kata ataupun kalimat merupakan palindrome atau bukan

export const isPalindrome = (str: string): Boolean | string => {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)){
        return isPalindrome(str.slice(1, -1));
    }

    return false;
}