export type StringOrNumber = string | number;

export function unique(keys: StringOrNumber[]): StringOrNumber[] {
    let lockKeySet: { [key: StringOrNumber]: boolean } = {};
    keys.forEach(item => lockKeySet[item] = true);
    return Object.keys(lockKeySet);
}