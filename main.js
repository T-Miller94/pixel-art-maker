pixelArtMaker()
function pixelArtMaker() {
    const body = document.querySelector('body')

    const canvas = document.createElement('div')
    canvas.classList.add('canvas')
    
    body.appendChild(canvas)

        for(let i = 0; i < 600; i++) {
            let cell = document.createElement('div')
            cell.classList.add('cell')
            cell.addEventListener('click', paint(cell))
            cell.addEventListener('click', () => console.log(cell.classList))
            cell.style.float = 'left'
            
            
            canvas.appendChild(cell)
        }


    const colors = ['red','blue', 'green', 'white', 'black']

    const pallet = document.createElement('div')
    pallet.classList.add('pallet')
    body.appendChild(pallet)

        for(let i = 0; i < colors.length; i++) {
            let selector = document.createElement('button')
            selector.classList.add(colors[i])
            selector.addEventListener('click', selectedColor)
            selector.addEventListener('click', () => console.log(`${selector.className} is clicked`))

            pallet.appendChild(selector)
            }

    function paint(cell) {
        cell.classList.add(selectedColor())

    }

    function selectedColor() {
        
    }

}



