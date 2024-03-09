function tabuada(){
    var n = window.document.getElementById('txtn')
    var sel = window.document.getElementById('seltab')
    if (n.value.length == 0){
        window.alert('Por favor,digite um número')
    } else {
        var num = Number(n.value)
        var c = 1
        sel.innerHTML=``
    } while( c <= 10){
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        item.value = `tab${c}`
        sel.appendChild(item)
        c++

    }
    
}

