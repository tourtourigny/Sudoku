export default class Solver {
    //eslint-disable-next-line
    constructor(gridentry) {
        this.grid = [...gridentry].map((number) => new GridCell(number))
    }
    solve() {
        let safe_count = 0
        let change = false
        console.log("start of solve")
        do{
            change = this.addImpossibles()
            this.solveSubGrid()
            console.log("passage")
            safe_count++
        } while(change && safe_count < 1000)
        console.log(safe_count)
        console.log(this.grid)
    }

    addImpossibles() {
        let change = false
        this.grid.forEach((cell, index) => {if(cell.value)change |= this.addImpossible(cell.value, index)})
        return change
    }

    addImpossible(number, index){
        let change = false
        let mod = index % 9
        let remainder = ~~(index / 9);
        //si la case est dans la meme colonne ou rangee (reste div ou meme classe modulo) mettre le chiffre comme impossible
        this.grid.forEach((cell, index) => {if(!cell.value && (index%9 === mod || ~~index/9 === remainder))cell.addImpossible(number); change|= cell.solved()})
        return change
    }

    solveSubGrid(startIndex){
        let possible = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let modStart = startIndex % 9
        let remainderStart = ~~(startIndex / 9);
        //verifie que c'est la meme colonne ou une des deux suivantes
        let modValid = function(index) {return index % 9 >= modStart && index % 9 < modStart + 3}
        //verifie que c'est la meme rangee ou une des deux suivantes
        let remainderValid = function(index) {return ~~(index / 9) >= remainderStart && ~~(index / 9) < remainderStart + 3}
        this.grid.forEach((cell, index) => {if(modValid(index) && remainderValid(index))possible = possible.filter(cell.value)})
        for (let option in possible) {
            let possibleCell = null
            if(this.grid.forEach((cell, index) => {if(!cell.value && modValid(index) && remainderValid(index) && !cell.impossibleValues.includes(option))if(possibleCell){return false}else{possibleCell=index}})){
                this.grid[possibleCell] = option
            }

        }
    }
}

class GridCell {

    constructor(value){
        this.value = value === '0' ? null : parseInt(value)
        this.impossibleValues = []
    }

    solved(){
        if (this.value === null && this.impossibleValues.length === 8) {
            //la somme de 1 a 9 vaut 45
            this.value = 45 - this.impossibleValues.reduce((sum, x) => sum + x, 0)
        }
        return this.value !== null
    }

    addImpossible(valueToAdd) {
        if(!this.impossibleValues.includes(valueToAdd)) this.impossibleValues.push(valueToAdd)
    }
}

