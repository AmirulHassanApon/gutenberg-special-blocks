import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { content, textColor, backgroundColor, fontSize, padding, margin, textAlign, level } = attributes;

    return (
        <div
            style={{
                color: textColor,
                backgroundColor: backgroundColor,
                padding: padding + 'px',
                margin: margin + 'px',
                textAlign: textAlign,
            }}
        >
            <RichText.Content
                tagName={`h${level}`}
                value={content}
            />
        </div>
    );
}
