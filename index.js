console.log("enter A for Addition, S for substraction, M for multiplication, D for devisition");

let num1 = prompt();
num1 = Number(num1);
console.log(typeof num1);

let num2 = prompt();
num2 = Number (num2);

let operation = prompt();

switch (operation) {
    case "A":
        console.log(num1 + num2);
        break;
        case "S":
            console.log(num1 - num2);
            break;
            case "M":
                console.log(num1 * num2);
                break;
                case "D":
                    console.log(num1 / num2);
                    break;
                    default:
                        console.log("invalid input")
}