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

    Window
    .showQuickPick(['-d', '-w'], {placeHolder: '-d for deply, -w for file change watching.'})
    .then((value) => {
        if (!value) {
            runCommand(['generate'])
        }
        else{
            const options = value.split(' ');
        
            const hasGenerateOption = options.find((value) => {
            
                return value === '-d' ||
                       value === '-w' ||
                       value === '--deploy' ||
                       value === '--watch' 
            });
            
            const args = ['generate', ...options];
            if (hasGenerateOption) {
                runCommand(args);
            }
            else{
                Messages.invalidOptionError();
                return;
            }
        }
        
    });
};