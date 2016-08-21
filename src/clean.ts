import { workspace as Workspace, window as Window } from 'vscode';

import { packageExists } from './utils';
import * as Messages from './messages';
import { runCommand } from './run-command';


export default function () {
    if (!Workspace.rootPath) {
        Messages.noDirectoryOpenError();
        return;
    }
    runCommand(['clean']);
};
