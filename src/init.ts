import { workspace as Workspace, window as Window } from 'vscode';

import { packageExists } from './utils';
import * as Messages from './messages';
import { runCommand } from './run-command';
import { outputChannel } from './output';

export default function () {
    if (!Workspace.rootPath) {
        Messages.noDirectoryOpenError();
        return;
    }
    if (packageExists()) {
        Messages.alreadyExistsError();
        return;
    }  
    Window.showInputBox({
        prompt: 'Initializes a website',
        placeHolder: '[folder]'
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
