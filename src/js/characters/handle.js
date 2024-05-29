class ClassicMove {
    constructor() {
        this.name = ""
        this.description = ""
        this.btp = 0
        this.func = () => {}
    }
    setName(name) {
        this.name = name
        return this
    }
    setBTP(btp) {
        this.btp = btp
        return this
    }
    setDescription(btp) {
        this.btp = btp
        return this
    }
}
class SpecialMove extends ClassicMove {
    constructor() {
        this.name = ""
        this.description = ""
        this.btp = 0
        this.func = () => {}
        this.cooldowns = {
            moves: 0, //odwołanie #1
            rounds: 0, //odwołanie #1
        }
        this.useImmediately = false
    }
    /**
     * Do obu argumentów wpisanie `-1` lub `Infinity` spowoduje zignorowanie
     * @param {number} moves
     * @param {number} rounds
     */
    setCooldowns(moves, rounds) {
        this.cooldowns = {
            moves: moves === -1 ? Infinity : moves,
            rounds: rounds === -1 ? Infinity : rounds,
        }
        return this
    }
    setUsingImmediately(bool = true) {
        this.useImmediately = bool
        return this
    }
}

/* ODWOŁANIA
#1
Pokazane na schemacie:
| Ruch       -> -> ----> ->
| Postacie [ ][ ][ ][X][ ][ ]
| Runda      <-------------

*/
