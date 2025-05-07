window.exports = {};
import { Subscription, BehaviorSubject, Observable } from "rxjs";
import { appDelay } from "./lib/lib";
 
export const addButton=(text: string, onClick?: () => void): HTMLButtonElement => {
    const button = document.createElement('button');
    button.type = "button";
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.textContent = text;
    if (onClick) {
        button.addEventListener('click', onClick);
    }
    return button;
}

export function deleteTableRow(row: HTMLTableRowElement) {
    let timeoutId: string | number | NodeJS.Timeout;
    row.classList.add('boxfadeOut');
    appDelay(300).then(function (data) {
        row.classList.add('fade-out');
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            row.remove();
        }, 100);
    });;
}


