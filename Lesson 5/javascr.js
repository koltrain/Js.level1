
for (var l = 1; l < 9; l++) {
    var table = document.createElement ('tr');
    mat.appendChild(table);
    var side = document.createElement ('td');
    table.appendChild (side);
    side.innerText = (l);
    
    
    for (var i = 0; i < 8; i++ ) {
        var cels = document.createElement ('td');
        table.appendChild (cels);  
        if (i % 2 == 0) {
        cels.style.backgroundColor = "white";
        } else {
            cels.style.backgroundColor = "black";
        }
        
        
}
}








