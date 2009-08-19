var empty = null;
var regular = null;

TestCase("ArrayTest", {
    setUp: function() {
        empty = [];
        regular = ['a', 'b', 'c'];
    },
    
    testIsEmpty: function() {
        assertTrue('empty array should be empty', empty.isEmpty());
        assertFalse('regular array should not be empty', regular.isEmpty());
    },
    
    testFirst: function() {
        assertNull('empty array first() should be null', empty.first());
        assertEquals('regular array first() should return the first element', 'a', regular.first());
    },
    
    testLast: function() {
        assertNull('empty array last() should be null', empty.last());
        assertEquals('regular array last() should return the last element', 'c', regular.last());
    },
    
    testClear: function() {
        empty.clear();
        assertEquals('empty array should be empty after clear', 0, empty.length);
        
        regular.clear();
        assertEquals('regular array should be empty after clear', 0, regular.length);
    },
    
    testEach: function() {
        var x = '';
        empty.each(function(element) {x += element});
        assertEquals('should not do anything for an empty array', "", x);
        
        var y = '';
        regular.each(function(element) {y += element});
        assertEquals('should iterate over the elements of a regular array', 'abc', y)
    },
    
    testEachIndex: function() {
        var x = '';
        empty.eachIndex(function(element, index) {x += element + index});
        assertEquals('should not do anything for an empty array', "", x);
        
        var y = '';
        regular.eachIndex(function(element, index) {y += element + index});
        assertEquals('should iterate over the elements and indexes of a regular array', 'a0b1c2', y)
    },
    
    testSelect: function() {
        var x = empty.select(function(element) {return element > 'a'});
        assertEquals('should return an empty list for an empty list', [].join(''), x.join(''));
        
        var y = regular.select(function(element) {return element > 'a'});
        assertEquals('should return the elements that match the select function', ['b', 'c'].join(''), y.join(''));
    },
    
    testCollect: function() {
        var x = empty.collect(function(element) {return element.toUpperCase()});
        assertEquals('should return an empty list for an empty list', [].join(''), x.join(''));
        
        var y = regular.collect(function(element) {return element.toUpperCase()});
        assertEquals('should apply the collect function to each element', ['A', 'B', 'C'].join(''), y.join(''));
    },
    
    testInject: function() {
        var x = empty.inject('', function(result, element) {return result + element});
        assertEquals('should not do anything for an empty array', '', x);
        
        var y = regular.inject('', function(result, element) {return result + element});
        assertEquals('should return the result of aplying the inject function to all elements', 'abc', y);
    },
    
    testAny: function() {
        var x = empty.any(function(element) {return element == 'b'});
        assertFalse('should be false for an empty array', x);
        
        var y = regular.any(function(element) {return element == 'b'});
        assertTrue('should return true when some element matches the condition function', y);
        
        var z = regular.any(function(element) {return element == 'z'});
        assertFalse('should return false when no element matches the condition function', z);
    },
    
    testRemoveIf: function() {
        empty.removeIf(function(element) {return element > 'a'});
        assertEquals('should not do anything for an empty array', [].join(''), empty.join(''));
        
        regular.removeIf(function(element) {return element > 'a'});
        assertEquals('should remove the elements that match the remove function', ['a'].join(''), regular.join(''));
    }
});
