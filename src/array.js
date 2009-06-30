Array.prototype.isEmpty = function() {
    return this.length == 0;
};

Array.prototype.first = function() {
    if (this.isEmpty()) {
        return null;
    }
        
    return this[0];
};

Array.prototype.last = function() {
    if (this.isEmpty()) {
        return null;
    }
    
    return this[this.length - 1];
};

Array.prototype.clear = function() {
    this.length = 0;
};

Array.prototype.each = function(iterationFunction) {
    this.eachIndex(function(element, index) {
        iterationFunction(element);
    });
};

Array.prototype.eachIndex = function(iterationFunction) {
    for (var i = 0; i < this.length; i++) {
        iterationFunction(this[i], i);
    }
};

Array.prototype.select = function(selectFunction) {
    return this.inject([], function(result, element) {
        if (selectFunction(element)) {
            result.push(element);    
        }
        
        return result;
    });
};

Array.prototype.collect = function(collectFunction) {
    return this.inject([], function(result, element) {
        result.push(collectFunction(element));        
        return result;
    });
};

Array.prototype.inject = function(result, injectFunction) {
    this.each(function(element) {
        result = injectFunction(result, element);
    });
    
    return result;
};

Array.prototype.any = function(conditionFunction) {
    try {
        this.each(function(element) {
            if (conditionFunction(element)) {
                throw 'found!';
            }
        });
        
        return false;
    } catch(e) {
        return true;
    }
};

Array.prototype.removeIf = function(removeFunction) {
    var index = 0;
    
    while (index < this.length) {
        if (removeFunction(this[index])) {
            this.splice(index, 1);
        } else {
            index++;
        }
    }
};
