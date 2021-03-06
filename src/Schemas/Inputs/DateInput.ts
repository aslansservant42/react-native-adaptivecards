import { DateInputModel } from '../../Models/Inputs/DateInput';
import { SchemaElement, SchemaRule } from '../SchemaValidator';

export class DateInputSchema extends SchemaElement<DateInputModel> {
    public rules: SchemaRule<DateInputModel>[] = [];
    protected propsSchemas = {
        'id': {
            name: 'id',
            isRequired: true,
        },
        'max': {
            name: 'max',
            isRequired: false,
        },
        'min': {
            name: 'min',
            isRequired: false,
        },
        'placeholder': {
            name: 'placeholder',
            isRequired: false,
        },
        'type': {
            name: 'type',
            isRequired: true,
            accepts: ['Input.Date'],
        },
        'value': {
            name: 'value',
            isRequired: false,
        },
        'spacing': {
            name: 'spacing',
            isRequired: false,
            accepts: ['none', 'small', 'default', 'medium', 'large', 'extralarge', 'padding'],
        },
        'separator': {
            name: 'separator',
            isRequired: false,
            accepts: [true, false],
        },
    };
}
