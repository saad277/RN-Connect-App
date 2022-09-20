export function formatDate(value) {
    return value.toString().length == 1 ? "0" + value : value;
}
