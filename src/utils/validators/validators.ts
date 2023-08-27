export const requiredFiled = (value: string)=> {
    if(value) return undefined
    return 'error message'
}

export const maxLengthCreator = (maxLength: number) => (value: string)=> {
    if(value.length > maxLength) return 'Max length 30 symbols'
    return undefined
}