import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

const Checkbx = ({ fieldGrpClassName, fieldClassName, checkBoxClassName, labelClassName, labelText }) => {
    // const [checked, setChecked] = useState('checked');

    return (
        <FieldGroup className={fieldGrpClassName}>
            <Field orientation="horizontal" className={fieldClassName}>
                <Checkbox id="checkbox1" className={checkBoxClassName} />
                <FieldLabel htmlFor="checkbox1" className={labelClassName}>{labelText}</FieldLabel>
            </Field>
        </FieldGroup>
    )
}

export default Checkbx