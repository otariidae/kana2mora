const SUTEKANA = ["ァ", "ィ", "ゥ", "ェ", "ォ", "ャ", "ュ", "ョ", "ヮ"]

export function katakanaToMora(kanaText: string): string[] {
  const kanas = kanaText.split("")
  const moras: string[] = []
  for (const kana of kanas) {
    if (SUTEKANA.includes(kana)) {
      const previousKana = moras.pop() || ""
      const mora = previousKana + kana
      moras.push(mora)
      continue
    }
    moras.push(kana)
  }
  return moras
}
