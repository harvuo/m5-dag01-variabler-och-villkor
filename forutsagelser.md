# Förutsägelser (steg 8)

Skriv din gissning FÖRST. Skriv sedan raden i STEG 7 i `src/main.ts`, kör den och fyll i vad som hände. Skriv också vad TypeScript sa (ofta understryker den raden).

| Uttryck             | Min gissning      | Det som hände                | Vad sa TypeScript?                                                                                               | Hade jag rätt?                                    |
| ------------------- | ----------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `"5" + 3`           | TypeScript klagar | Det blev en sträng "53"      | TypeScript klagade inte                                                                                          | Fel                                               |
| `"5" - 3`           | TypeScript klagar | Det blev ett tal 2           | The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.ts(2362) | Rätt                                              |
| `true + 1`          | TypeScript klagar | Det blev ett tal 2           | Operator '+' cannot be applied to types 'boolean' and 'number'.ts(2365)                                          | Rätt                                              |
| `0.1 + 0.2`         | 0.3               | Det blev 0.30000000000000004 | TypeScript klagade inte                                                                                          | Rätt bortsett från att det var fler än en decimal |
| `"" === 0`          | false             | false                        | This comparison appears to be unintentional because the types 'string' and 'number' have no overlap.ts(2367)     | Rätt                                              |
| `null == undefined` | true              | true                         | TypeScript klagade inte                                                                                          | Rätt                                              |

## Min regel för det jag missade

Det jag missade var att operatorn + har två betydelser, både addition och konkatenering. Tydligen så tillåter TypeScript att det är olika typer och anpassar så att resultatet blir en sträng eftersom den ena operanden är en sträng.

## Tänk efter

Tre av raderna ger ett typfel i TypeScript, men JavaScript kör dem ändå. Vilka tre, och vad säger det om vad TypeScript kan och inte kan göra?
