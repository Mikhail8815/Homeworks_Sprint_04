import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx= {{
                width: '300px', // Ширина слайдера
                color: '#00CC22', // Цвет активной части
                '& .MuiSlider-thumb': {
                    height: 24, // Размер ползунка
                    width: 24,
                    backgroundColor: '#fff', // Белый фон
                    border: '2px solid currentColor', // Зеленая рамка
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: '0 0 0 8px rgba(0, 204, 34, 0.16)', // Эффект при наведении
                    },
                },
                '& .MuiSlider-track': {
                    height: 6, // Высота линии
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B', // Цвет неактивной части
                    height: 6, // Высота линии
                    opacity: 1,
                },
            }} // стили для слайдера // пишет студент


            {...props}
 // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
