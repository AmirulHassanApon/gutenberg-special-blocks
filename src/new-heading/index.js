import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';

registerBlockType('gutenberg-special-blocks/new-heading', {
    title: __('New Heading', 'gutenberg-special-blocks'),
    icon: 'heading',
    category: 'gutenberg-special-blocks', // Custom category slug
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'h2',
        },
        textColor: {
            type: 'string',
            default: '#000000',
        },
        backgroundColor: {
            type: 'string',
            default: '#ffffff',
        },
        hoverTextColor: {
            type: 'string',
            default: '#ffffff',
        },
        hoverBackgroundColor: {
            type: 'string',
            default: '#000000',
        },
        fontSize: {
            type: 'string',
            default: 'm', // Default size
        },
        padding: {
            type: 'string',
            default: '0',
        },
        margin: {
            type: 'string',
            default: '0',
        },
        textAlign: {
            type: 'string',
            default: 'left',
        },
        blockAlign: {
            type: 'string',
            default: 'none',
        },
        level: {
            type: 'number',
            default: 2, // Default heading level (h2)
        },
    },
    edit: Edit,
    save,
});
