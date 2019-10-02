const str = "LNUDVMUYRMUDVLLUDVPXAFZUEFAIO";


let pointer = 0;
let size = 3;
let cont = 0;
while (true){
    cont = 0;
    let sub = str.substring(pointer, pointer + size);
    if(!sub || sub.length < 3) break;
    console.log("looking for ...", sub,"with pointer",pointer);
    for (let i = 0; i < str.length - size; i++){
        if(i == pointer) continue;
        
        if(str.substring(i, i+size) == sub) {
            console.log("found...",sub,"at", i);
            i += (size - 1);
            cont++;
        };
    }
    if(cont > 0){
        pointer+=size;
    } else {
        pointer++;
    }
}
