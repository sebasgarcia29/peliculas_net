import { addMethod, string } from 'yup';


export default function configValidations() {
    addMethod(string, 'firstLetterUpper', function () {
        return this.test('firstLetterUpper', 'First letter must be upper case',
            function (value: any) {
                if (value && value.length > 0) {
                    const firstLetter = value.charAt(0);
                    return firstLetter === firstLetter.toUpperCase();
                }
                return true;
            })
    });
}
