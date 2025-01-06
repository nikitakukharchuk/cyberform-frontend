export type AlertType = {
    isOpen: boolean,
    message: string,
    type: AlertTypesEnum
}

export type AlertTypesEnum = 'success' | 'error'