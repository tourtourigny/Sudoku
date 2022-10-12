export default class Solver {
    constructor(gridentry) {
        this.grid = [...gridentry].map((number) => new GridCell(number))
    }

    solve() {
        let safe_count = 0
        do{
            this.addImpossibles()
            this.solveSubGrids()
            safe_count++
        } while(this.grid.some((cell) => cell.value === null) && safe_count < 100)
        return this.grid.map((cell) => cell.value).join("")
    }

    addImpossibles() {
        this.grid.forEach((cell, index) => {cell.value && this.addImpossible(cell.value, index)})
    }

    //ajoute les contraintes liees aux colonnes et aux rangees
    addImpossible(number, index){
        let mod = index % 9
        let remainder = Math.floor(index / 9);
        //si la case est dans la meme colonne ou rangee (reste div ou meme classe modulo) mettre le chiffre comme impossible
        this.grid.forEach((cell, index) => {
            if(number !== null && !cell.value && (index%9 === mod || Math.floor(index/9) === remainder)){
                cell.addImpossible(number)
                cell.solved()
            }
        })
    }

    solveSubGrids() {
        for (let i=0; i < 81 ; i+=3) {
            //appelle solveSubGrid avec la case en haut a gauche de chaque sous-grille
            if (Math.floor(i/9) === 0 || Math.floor(i/9) === 3 || Math.floor(i/9) === 6) this.solveSubGrid(i)
        }
    }

    solveSubGrid(startIndex) {
        let possible = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let numbersInSubGrid = []
        let modStart = startIndex % 9
        let remainderStart = Math.floor(startIndex / 9);

        //verifie que c'est la meme colonne ou une des deux suivantes
        let modValid = function(index) {return index % 9 >= modStart && index % 9 < modStart + 3}
        //verifie que c'est la meme rangee ou une des deux suivantes
        let remainderValid = function(index) {return Math.floor(index / 9) >= remainderStart && Math.floor(index / 9) < remainderStart + 3}
        
        //prend les nombres deja dans la sous-grille (section 3x3)
        this.grid.forEach((cell, index) => { if(modValid(index) && remainderValid(index) && cell.value !== null) numbersInSubGrid.push(cell.value)})
        //garde les nombre pas dans la sous-grille
        possible = possible.filter((number) => !numbersInSubGrid.includes(number))
        
        //regarde si un des chiffre peut se retrouver a un seul endroit
        for (let option of possible) {
            let possibleCell = null
            try{this.grid.forEach((cell, index) => {
                //regarde si est dans la sous-grille et si la valeur est possible
                if(cell.value === null && modValid(index) && remainderValid(index) && !cell.impossibleValues.includes(option)) {
                    if(possibleCell !== null) { throw "More than one option" } else { possibleCell = index }
                }
            })
            //assigne si on a une seule case possible dans la sous-grille
            if(possibleCell !== null) this.grid[possibleCell].value = option
            //eslint-disable-next-line
            } catch (Exception) { }//si on a plusieurs possibilitees pour un chiffre dans la sous-grille
        }
    }
}

class GridCell {

    constructor(value){
        this.value = value === '0' ? null : parseInt(value)
        this.impossibleValues = []
    }

    solved(){
        if (this.value !== null || this.impossibleValues.length !== 8) return;
        //la somme de 1 a 9 vaut 45 donc en soustrayant notre total de 45 on a le chiffre manquant
        this.value = 45 - this.impossibleValues.reduce((sum, x) => sum + x, 0)
    }

    addImpossible(valueToAdd) {
        if(!this.impossibleValues.includes(valueToAdd)) this.impossibleValues.push(valueToAdd)
    }
}

