const isIp = require('is-ip');


function isIpV4(ip){
    return isIp.v4(ip);
}
function lengthStrictUpTo(item, length){
    if(!item){
        return false;
    }
    
    if(!isString(item) || !isNumber(length)){
        return false
    }

    item = item.trim();
    
    return item.length > length;
}

function isString(val){
    
    return typeof val === 'string'
}
function isNumber(val){
    return typeof val === 'number'
}

function lengthEqualOrUpTo(item, length){
    if(!item){
        return false;
    }
    if(typeof length !== 'number'){
        return false
    }
    if(typeof item !== 'string'){
        return false;
    }

    item = item.trim();
    
    return item.length >= length;
}


function lengthStrictDownTo(item, length){
    if(!item){
        return false;
    }

    if(!isString(item) || !isNumber(length)){
        return false
    }

    item = item.trim();
    
    return item.length < length;
}


function lengthEqualOrDownTo(item, length){
    if(!item){
        return false;
    }
    
    if(!isString(item) || !isNumber(length)){
        return false
    }

    item = item.trim();
    
    return item.length <= length;
}

module.exports = {
    lengthStrictUpTo,
    lengthEqualOrUpTo,
    lengthStrictDownTo,
    lengthEqualOrDownTo,
    isNumber,
    isString,
    isIpV4
}