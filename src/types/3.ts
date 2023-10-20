
/**
 * @description split
 */
type QueryStr='name=lilei&gender=female&age=18'

type Split<T>=T extends `${infer Left}&${infer Right}`?[Left,...Split<Right>]:[T]
// type Map=Split<QueryStr>
type StrToKeyValue<T>=T extends `${infer Key}=${infer Value}`?{[key in Key] :Value}:T
type KeyValueTemple<T>=T extends [infer Left,...infer Right]?[StrToKeyValue<Left>,...KeyValueTemple<Right>]:T
// type X=KeyValueTemple<Map>
type ToObj<T>=T extends [infer Left,...infer Right]?Left&ToObj<Right>:unknown
type Res=ToObj<KeyValueTemple<Split<QueryStr>>>

/**
 * @description replace
 */
type Replace<T,current extends string,replaceStr extends string>=T extends `${infer left}${current}${infer right}`?`${left}${replaceStr}${right}`:T
type ResStr=Replace<'fuck the world','the','all the'>
