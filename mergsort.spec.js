describe(‘Merge Sort’, () => {
    beforeEach(() => {
        spyOn(window,‘split’);
        spyOn(window,‘merge’);
    })
    it(‘should be a function’, () => {
        expect(mergeSort).toBeDefined();
    });
    it(‘should use the split function’, () => {
        mergeSort();
        expect(window.split).toHaveBeenCalled();
    });
    it(‘should use the merge function’, () => {
        mergeSort();
        expect(window.merge).toHaveBeenCalled();
    });
 });
 
 describe(‘Split Array’, () => {
    it(‘should be a function’, () => {
        expect(split).toBeDefined();
    });
    it(‘handles an array’, () => {
        expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
        expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
    });
 });
 
 describe(‘Merge’, () => {
    it(‘should be a function’, () => {
        expect(merge).toBeDefined();
    });
    it(‘should handle two arrays’, () => {
        expect(merge([],[])).toEqual([])
    })
 });
