

function isPalindrome(word) {
    let ch = word.split('').reverse().join('');
    
    if( word !== ch ) {
        console.log('回文じゃないよ');
    } else {
        console.log('回文です');
    }
  
}
const  word = 'しんぶんし';
isPalindrome(word);