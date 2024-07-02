import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, PanelColorSettings, AlignmentToolbar, BlockControls, FontSizePicker } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { content, textColor, backgroundColor, hoverTextColor, hoverBackgroundColor, fontSize, padding, margin, textAlign, blockAlign, level } = attributes;

    const onChangeContent = (newContent) => {
        setAttributes({ content: newContent });
    };

    const onChangeColorSettings = ({ textColor, backgroundColor, hoverTextColor, hoverBackgroundColor }) => {
        setAttributes({ textColor, backgroundColor, hoverTextColor, hoverBackgroundColor });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Text Settings', 'gutenberg-special-blocks')}>
                    <PanelColorSettings
                        title={__('Color Settings', 'gutenberg-special-blocks')}
                        colorSettings={[
                            {
                                value: textColor,
                                onChange: (newColor) => setAttributes({ textColor: newColor }),
                                label: __('Text Color', 'gutenberg-special-blocks'),
                            },
                            {
                                value: backgroundColor,
                                onChange: (newColor) => setAttributes({ backgroundColor: newColor }),
                                label: __('Background Color', 'gutenberg-special-blocks'),
                            },
                            {
                                value: hoverTextColor,
                                onChange: (newColor) => setAttributes({ hoverTextColor: newColor }),
                                label: __('Hover Text Color', 'gutenberg-special-blocks'),
                            },
                            {
                                value: hoverBackgroundColor,
                                onChange: (newColor) => setAttributes({ hoverBackgroundColor: newColor }),
                                label: __('Hover Background Color', 'gutenberg-special-blocks'),
                            },
                        ]}
                    />
                    <FontSizePicker
                        value={fontSize}
                        onChange={(newSize) => setAttributes({ fontSize: newSize })}
                    />
                </PanelBody>
                <PanelBody title={__('Dimension Settings', 'gutenberg-special-blocks')}>
                    <RangeControl
                        label={__('Padding', 'gutenberg-special-blocks')}
                        value={padding}
                        onChange={(newPadding) => setAttributes({ padding: newPadding })}
                        min={0}
                        max={100}
                    />
                    <RangeControl
                        label={__('Margin', 'gutenberg-special-blocks')}
                        value={margin}
                        onChange={(newMargin) => setAttributes({ margin: newMargin })}
                        min={0}
                        max={100}
                    />
                </PanelBody>
                <PanelBody title={__('Dimension Settings', 'gutenberg-special-blocks')}>
                    <RangeControl
                        label={__('Padding', 'gutenberg-special-blocks')}
                        value={padding}
                        onChange={(newPadding) => setAttributes({ padding: newPadding })}
                        min={0}
                        max={100}
                    />
                    <RangeControl
                        label={__('Margin', 'gutenberg-special-blocks')}
                        value={margin}
                        onChange={(newMargin) => setAttributes({ margin: newMargin })}
                        min={0}
                        max={100}
                    />
                </PanelBody>
                
            </InspectorControls>
            <BlockControls>
                <AlignmentToolbar
                    value={textAlign}
                    onChange={(newAlignment) => setAttributes({ textAlign: newAlignment })}
                />
            </BlockControls>
            <div { ...useBlockProps({ style: {
                color: textColor,
                backgroundColor: backgroundColor,
                padding: padding + 'px',
                margin: margin + 'px',
                textAlign: textAlign,
            } }) }>
                <RichText
                    tagName={`h${level}`}
                    value={content}
                    onChange={onChangeContent}
                    placeholder={__('Enter heading...', 'gutenberg-special-blocks')}
                />
            </div>
        </>
    );
}
