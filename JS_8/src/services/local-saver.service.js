export function setLocal(array,key){
    let string = JSON.stringify(array);
    localStorage.setItem(key,string);
}

export function setLocalRemoveLast(array,key){
    let string = JSON.stringify(array);
    localStorage.removeItem(key);
    localStorage.setItem(key, string);
}