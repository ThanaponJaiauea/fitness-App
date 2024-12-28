import { PinturaEditor } from '@pqina/react-pintura';
import { getEditorDefaults } from '@pqina/pintura';
import imagetest from '../pictures/images.jpg';
import '@pqina/pintura/pintura.css';
import { useState } from 'react';

export default function PhotoEditorPage() {
    const [inlineResult, setInlineResult] = useState(null); // จัดการผลลัพธ์ของภาพแก้ไข
    console.log("inlineResult:", inlineResult);

    const editorOptions = {
        ...getEditorDefaults(),
        stickers: [
            ['Emoji', ['⭐️', '😊', '👍', '👎', '☀️', '🌤', '🌥']],
            [
                'Markers',
                [
                    { src: 'sticker-one.svg', width: '5%', alt: 'One' },
                    { src: 'sticker-two.svg', width: '5%', alt: 'Two' },
                    { src: 'sticker-three.svg', width: '5%', alt: 'Three' },
                ],
            ],
        ],
    };

    return (
        <div className="h-[600px] border-2 border-red p-4">
            {/* Image Editor */}
            <PinturaEditor
                {...editorOptions} // ใช้ editorOptions แทน getEditorDefaults()
                src={imagetest} // ตั้งค่าภาพเริ่มต้น
                onProcess={(res) => setInlineResult(URL.createObjectURL(res.dest))} // จัดการผลลัพธ์เมื่อแก้ไขเสร็จ
            />

            {/* แสดงผลภาพที่แก้ไขแล้ว */}
            {inlineResult && (
                <div className="mt-4">
                    <p>Edited Image:</p>
                    <img src={inlineResult} alt="Edited" className="w-full max-w-[300px]" />
                </div>
            )}
        </div>
    );
}
