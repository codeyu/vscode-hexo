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

    Workspace.findFiles("source/_drafts/*", "").then((files) => {
        return Window.showQuickPick(files.map((u)=> {
            return Path.basename(u.fsPath, Path.extname(u.fsPath));
        }, {placeHolder: 'Please select a file to publish.'});
    })
    .then((value) => {
        if (value) {
            options.FileName = value;
            return Window.showQuickPick(['post', 'page'], {placeHolder: 'Please select a layout to publish.'});
        } else {
            Messages.noValueError();
            return;
        }
    })
    .then((value) => {
        if (value) {
            options.Layout = value;
            runCommand(['publish', options.Layout, options.FileName])
        } else {
            Messages.noValueError();
        }
    });
};