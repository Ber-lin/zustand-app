class Container {
    modeuls: Record<string,unknown>
    constructor() {
        this.modeuls = {}
    }
    provide(key: string, modeuls: unknown) {
        this.modeuls[key] = modeuls
    }
    get(key:string) {
        return this.modeuls[key]
    }
}
console.log(new Container());