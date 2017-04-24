import * as Fs from 'fs';
import * as Path from 'path';
import { workspace as Workspace, window as Window, QuickPickItem } from 'vscode';

import * as Messages from './messages';
import { packageExists } from './utils';
import { childs, terminate, ChildCommand,runCommand } from './run-command';
import { ChildProcess } from 'child_process';
export function hexoServer () {
  
    if (!Workspace.rootPath) {
        Messages.noProjectOpenError();
        return;
    }

    Window
    .showQuickPick(['-p', '-s', '-l'], {placeHolder: "Please specify the option."})
    .then((value) => {
        if (!value) {
            runCommand(['server'])
        }
        else{
            const options = value.split(' ');
        
            const hasServerOption = options.find((value) => {
            
                return value === '-p' ||
                       value === '-s' ||
                       value === '-l' ||
                       value === '--port' ||
                       value === '--static'  ||
                       value === '--log' 
            });
            
            const args = ['server', ...options];
            if (hasServerOption) {
                runCommand(args);
            }
            else{
                Messages.invalidOptionError();
                return;
            }
        }
        
    });
};
class Item implements QuickPickItem {
    
    constructor (public label: string, 
                 public description: string,
                 public pid: number) {
        
    }
}
export function hexoStopServer () {
    const commands: string[] = [];
    const items: Item[] = [];
    
    childs.forEach((value) => {
       
       items.push(new Item(value.cmd, `(pid: ${value.child.pid})`, value.child.pid));
    });
    
    Window.showQuickPick(items).then((value) => {
        if (value) {
            terminate(value.pid);
        }
    });
};