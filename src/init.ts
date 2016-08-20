import { workspace as Workspace, window as Window } from 'vscode';

import { packageExists } from './utils';
import * as Messages from './messages';
import { runCommand } from './run-command';


export default function () {
    if (!Workspace.rootPath) {
        Messages.noDirectoryOpenError();
        return;
    }
    Window.showInputBox({
        prompt: 'Initializes a website',
        placeHolder: 'If no folder is provided, Hexo will set up the website in the current directory'
    })
    .then((value) => {
        
        if (!value) {
            runCommand(['init']);
        }
        else{
            const folder = value;
            runCommand(['init', folder])
        }
        
        
    });
};
