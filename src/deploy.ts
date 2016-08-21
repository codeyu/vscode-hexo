import * as Fs from 'fs';
import * as Path from 'path';
import { workspace as Workspace, window as Window } from 'vscode';

import * as Messages from './messages';
import { packageExists } from './utils';
import { runCommand } from './run-command';
export default function () {
  
    if (!Workspace.rootPath) {
        Messages.noProjectOpenError();
        return;
    }

    Window.showInputBox({
        prompt: 'Input Option',
        placeHolder: '-g'
    })
    .then((value) => {
        if (!value) {
            runCommand(['deploy'])
        }
        else{
            const options = value.split(' ');
        
            const hasDeployOption = options.find((value) => {
            
                return value === '-g' ||
                       value === '--generate'
            });
            
            const args = ['deploy', ...options];
            if (hasDeployOption) {
                runCommand(args);
            }
            else{
                Messages.invalidOptionError();
                return;
            }
        }
        
    });
};