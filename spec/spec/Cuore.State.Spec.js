describe("State", function() {
    var aState, key, value;

    describe("When instantiated ", function() {
        beforeEach(function() {
            aState = new CUORE.State();
            key = 'arbitrary';
            jasmine.addMatchers({
                toBeInstanceOf: CUORE.Matchers.toBeInstanceOf
            });
        });

        afterEach(function() {
            localStorage.clear();
        });

        it("is a State", function() {
            expect(aState).toBeInstanceOf(CUORE.State);
        });

        it("stores a value under a key", function() {
            expect(aState.hasKey(key)).toBeFalsy();
            aState.save(key, 'any_value');
            expect(aState.hasKey(key)).toBeTruthy();
        });

        it("retrieves undefined when no value is stored", function() {
            expect(aState.retrieve(key)).toBeUndefined();
        });

        describe("and a value is stored ", function() {
            beforeEach(function() {
                value = 'any_value';
                aState.save(key, value);
            });

            it("retrieves value with its key", function() {
                expect(aState.retrieve(key)).toEqual(value);
            });

            it("overwrites with new value", function() {
                var aNewValue = 'a_new_value';

                aState.save(key, aNewValue);
                expect(aState.retrieve(key)).toEqual(aNewValue);
            });

            it("removes key when value is undefined", function() {
                aState.save(key, undefined);
                expect(aState.hasKey(key)).toBeFalsy();
            });

            it("removes key when value is null", function() {
                aState.save(key, null);
                expect(aState.hasKey(key)).toBeFalsy();
            });

            it("still retrieves the value with its key after in memory state was cleared", function() {
                aState.save(key, value);
                clearMemory(aState);

                expect(aState.retrieve(key)).toEqual(value);
            });
        });
    });

    function clearMemory(state) {
        state.keys = [];
        state.map = {};
    }
});