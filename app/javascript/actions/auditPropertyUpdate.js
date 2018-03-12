export default (property, value) => {
    return {
        type: 'AUDIT_PROPERTY_UPDATE',
        property: property,
        value: value
    }
}