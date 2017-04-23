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
  const options = {
        Layout: 'post',
        FileName: ''
    };

    Window
    .showQuickPick(['post', 'page'], {placeHolder: 'Please select a layout to publish.'})
    .then((value) => {
        if (value) {
            options.Layout = value.toLowerCase();
        }
       
        return Window.showInputBox({
            prompt: 'Input filename',
            placeHolder: ''
        });
    })
    .then((value) => {
        if (!value) {
            Messages.noValueError();
            return;
        }
        options.FileName = value;
        runCommand(['publish', options.Layout, options.FileName])
    });
};