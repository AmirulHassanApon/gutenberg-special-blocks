# Gutenberg Special Blocks

**Contributors:** The WordPress Contributors  
**Tags:** block  
**Tested up to:** 6.1  
**Stable tag:** 0.1.0  
**License:** GPL-2.0-or-later  
**License URI:** https://www.gnu.org/licenses/gpl-2.0.html  

Example block scaffolded with Create Block tool.

## Description
Full Step-by-Step Guide for Creating Gutenberg Blocks

## Prerequisites

Ensure you have the required versions of Node.js and npm:

- Node.js >= 20.10.0
- npm >= 10.2.3

## 1. Update Node.js and npm

### Install `nvm` (Node Version Manager) if not already installed:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
Load nvm:
Close and reopen your terminal, or run:

sh
Copy code
source ~/.nvm/nvm.sh
Install the latest version of Node.js:
sh
Copy code
nvm install node
Or, install a specific version:

sh
Copy code
nvm install 20.10.0
Set the installed version as the default:
sh
Copy code
nvm use 20.10.0
nvm alias default 20.10.0
Update npm to the latest version:
sh
Copy code
npm install -g npm@latest
Verify the versions:
sh
Copy code
node -v
npm -v
2. Create the Block
Run the following command to scaffold a new Gutenberg block:

sh
Copy code
npx @wordpress/create-block@latest gutenberg-special-blocks
3. Navigate to the Block Directory
sh
Copy code
cd gutenberg-special-blocks
4. Install Dependencies
sh
Copy code
npm install
5. Development and Build Commands
Start the development server:
This command will start a development server with live reloading.

sh
Copy code
npm start
Build for production:
This command will build your block for production, creating optimized files.

sh
Copy code
npm run build
6. Update Your Block
You can edit the block by modifying the files in the src directory. Here are the primary files you will work with:

src/edit.js: This file contains the code for the block's editing interface.
src/save.js: This file contains the code for saving the block's content.
src/index.js: This file registers the block and defines its settings.
After making changes, you can run the development server or build the block for production as needed.

7. Add New Blocks
To add a new block to your plugin, you can create a new directory for the block within the src directory. For example:

Create a new directory:
sh
Copy code
mkdir src/new-block
Add the necessary files for the new block in the new-block directory.
src/new-block/edit.js:
js
Copy code
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    return (
        <div { ...useBlockProps() }>
            { __( 'New Block – hello from the editor!', 'gutenberg-special-blocks' ) }
        </div>
    );
}
src/new-block/save.js:
js
Copy code
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
    return (
        <div { ...useBlockProps.save() }>
            { 'New Block – hello from the saved content!' }
        </div>
    );
}
src/new-block/index.js:
js
Copy code
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType( 'gutenberg-special-blocks/new-block', {
    edit: Edit,
    save,
} );
Update the main index.js to include your new block:
js
Copy code
import './new-block';
8. Testing Your Block
After adding or updating blocks, test them by running the development server:

sh
Copy code
npm start
9. Build for Production
Once you are satisfied with the changes, build the blocks for production:

sh
Copy code
npm run build
Deploying Your Plugin
To deploy your plugin:

Zip the plugin folder: Ensure you include all necessary files and directories (e.g., build, src, plugin.php).
Upload to CodeCanyon: Follow the guidelines and rules provided by CodeCanyon for submitting a new plugin.
css
Copy code

This README file includes all necessary steps and commands for creating, updating, and managing Gutenberg