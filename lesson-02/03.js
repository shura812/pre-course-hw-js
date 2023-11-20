const giveMeRightNumders = (value1, value2, maximum) => {
    if(value1 === value2 || value1 <= maximum) {
        console.log('Success!');
    } else {
        console.log("'Something wrong!'");
    }
}
giveMeRightNumders(350, 100, 200);