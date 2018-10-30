export function changeValue(ev) {
    console.log('changevalue')
    return {
        type: 'VALUE_CHANGED',
        payload: ev.target.value
    }
}