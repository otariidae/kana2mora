import test from "node:test"
import { strict as assert } from "assert"
import { katakanaToMora } from "../src"

test("kana2mora", async (t) => {
  await t.test("サ|ル", () => {
    assert.deepEqual(katakanaToMora("サル"), ["サ", "ル"])
  })
  await t.test("カ|ッ|パ", () => {
    assert.deepEqual(katakanaToMora("カッパ"), ["カ", "ッ", "パ"])
  })
  await t.test("チョ|コ|レ|ー|ト", () => {
    assert.deepEqual(katakanaToMora("チョコレート"), [
      "チョ",
      "コ",
      "レ",
      "ー",
      "ト",
    ])
  })
  await t.test("ガ|ッ|キュ|ウ|シ|ン|ブ|ン", () => {
    assert.deepEqual(katakanaToMora("ガッキュウシンブン"), [
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
})
