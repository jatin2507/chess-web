import { Dropdown } from 'antd'
import React from 'react'

export default function CustomDropDown({ items, handleDropDown }) {
    return (
        <div>
            <Dropdown
                menu={{
                    items,
                    selectable: true,
                    onSelect: handleDropDown
                }}

            />
        </div>
    )
}
