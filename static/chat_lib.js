class Lib {
    static deepcopy(val) {
        return JSON.parse(JSON.stringify(val));
    }

    static encodeAddress(val) {
        return val.split(".").join("*");
    }

    static decodeAddress(val) {
        return val.split("*").join(".");
    }
}
export default Lib;