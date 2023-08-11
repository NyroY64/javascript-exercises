const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let Un_1 = 1;
    let Un_2 = 0;
    
    for (let i = 2; i <= count; i++) {
        let Un = Un_1 + Un_2;
        Un_2 = Un_1;
        Un_1 = Un;
    }

    return Un_1;
};

module.exports = fibonacci;
