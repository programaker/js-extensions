TestCase("StringTest", {
    testTrim: function() {
        var expected = 'this is a text';  
        
        assertEquals('it should do left trim', expected, '    this is a text'.trim());
        assertEquals('it should do right trim', expected, 'this is a text    '.trim());
        assertEquals('it should do full trim', expected, '        this is a text     '.trim());
    },
    
    testIsEmpty: function() {
        assertTrue('empty string should be empty', ''.isEmpty());
        assertTrue('a string with only spaces should be empty', '        '.isEmpty());
        assertFalse('a non-blank string should not be empty', 'some text'.isEmpty());
    }
});
