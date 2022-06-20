export const passwordValidationSchemes = {
    max: 12,
    min: 4,
    required: true,
}

export const validationMessages = {
    required: 'Это поле объязательное',
    string: {
        range: 'Пароль должен состоять от ${min} до ${max} символов'
    },
    types: {
        email: 'Невалидный email'
    }
}
