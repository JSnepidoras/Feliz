const razakova=document.getElementById('razakova')
const kydykeeva=document.getElementById('kydykeeva')

function getValue() {
    const changeMap=document.getElementById('change')
    const  val=changeMap.value
    console.log (val)
    if (val=="razakova") {razakova.style.display="flex"
    kydykeeva.style.display="none"
} else
    if (val=="kydykeeva") {kydykeeva.style.display="flex"
    razakova.style.display="none"}
}
 