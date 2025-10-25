import { assertEquals } from "assert"
import { katakanaToMora } from "./mod.ts"

Deno.test("サ|ル", () => {
  assertEquals(katakanaToMora("サル"), ["サ", "ル"])
})
Deno.test("カ|ッ|パ", () => {
  assertEquals(katakanaToMora("カッパ"), ["カ", "ッ", "パ"])
})
Deno.test("チョ|コ|レ|ー|ト", () => {
  assertEquals(katakanaToMora("チョコレート"), [
    "チョ",
    "コ",
    "レ",
    "ー",
    "ト",
  ])
})
Deno.test("ガ|ッ|キュ|ウ|シ|ン|ブ|ン", () => {
  assertEquals(katakanaToMora("ガッキュウシンブン"), [
    "ガ",
    "ッ",
    "キュ",
    "ウ",
    "シ",
    "ン",
    "ブ",
    "ン",
  ])
})
