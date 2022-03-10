 import {convertToSlicedArray, cardFilterByMod, handleMagicTrick} from "./trickFunctions.js"

describe ("trickFunctions", ()=>{
  const wholeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const slicedArray = [[ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ]]

  describe("#convertToSlicedArray", ()=>{
    it("returns an array with the same original elements but redistributed in sliced subsets", ()=>{
      expect(convertToSlicedArray(wholeArray, 3)).toEqual(slicedArray)
    })
  })
  
  describe("#cardFilterByMod", ()=>{
    it("returns a subset of original array", ()=>{
      expect(cardFilterByMod(wholeArray, 3, 0)).toEqual(slicedArray[0])
      expect(cardFilterByMod(wholeArray, 3, 1)).toEqual(slicedArray[1])
      expect(cardFilterByMod(wholeArray, 3, 2)).toEqual(slicedArray[2])
    })
  })
  
  describe("#handleMagicTrick", ()=>{
    it("returns reordenated deck", ()=>{
      const reorder0 = [[2, 1, 3], [5, 4, 6], [8, 7, 9]]
      const reorder1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
      const reorder2 = [[1, 3, 2], [4, 6, 5], [7, 9, 8]]
      expect(handleMagicTrick(slicedArray, 0, 3)).toEqual(reorder0)
      expect(handleMagicTrick(slicedArray, 1, 3)).toEqual(reorder1)
      expect(handleMagicTrick(slicedArray, 2, 3)).toEqual(reorder2)
    })
  })
})
