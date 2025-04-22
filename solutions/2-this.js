// BEGIN
const make = (numer = null, denom = null) => {
    return {
        numer: numer,
        denom: denom,
        setNumer(newNumer) {
            this.numer = newNumer;
        },
        
        setDenom(newDenom) {
            this.denom = newDenom;
        },
        
        getNumer() {
            return this.numer;
        },
        
        getDenom() {
            return this.denom;
        },
        
        toString() {
            return `${this.numer}/${this.denom}`;
        },
        
        add(other) {
            const a = this.numer;
            const b = this.denom;
            const c = other.getNumer();
            const d = other.getDenom();
            const newNumer = a * d + b * c;
            const newDenom = b * d;
            
            return make(newNumer, newDenom);
        }
    }
};

export default make;
// END