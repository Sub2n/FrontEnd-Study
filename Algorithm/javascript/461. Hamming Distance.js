function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

const hammingDistance = function(x, y) {
    return String(dec2bin(x^y)).split('').filter(n => n==='1').length;;
};