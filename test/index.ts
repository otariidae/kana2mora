import { strict as assert } from "assert"
import { katakanaToMora } from "../src"

describe("kana2mora", () => {
  it("サ|ル", () => {
    assert.deepEqual(katakanaToMora("サル"), ["サ", "ル"])
  })
  it("カ|ッ|パ", () => {
    assert.deepEqual(katakanaToMora("カッパ"), ["カ", "ッ", "パ"])
  })
  it("チョ|コ|レ|ー|ト", () => {
    assert.deepEqual(katakanaToMora("チョコレート"), [
      "チョ",
      "コ",
      "レ",
      "ー",
      "ト",
    ])
  })
  it("ガ|ッ|キュ|ウ|シ|ン|ブ|ン", () => {
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
