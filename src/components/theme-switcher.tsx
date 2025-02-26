'use client'

import { useTheme } from 'next-themes';
import {Button} from './ui/button';

export default function ThemeSwitcher() {
    const {setTheme} = useTheme();

    return (
        <div className="my-3 pl-6">
            <Button onClick={() => setTheme('light')}>Light</Button> {" "}
            <Button onClick={() => setTheme('dark')}>Dark</Button>
        </div>
    )
}