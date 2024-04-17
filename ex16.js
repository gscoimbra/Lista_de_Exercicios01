let i = 100;
let count = 0;

while (count <= 50) {
    let flag = 1;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = -1;
            break;
        }
    }
    if (flag == 1) {
        console.log(i);
        count++;
    }
    i++;
}