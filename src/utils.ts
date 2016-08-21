import * as Fs from 'fs';
import * as Path from 'path';

import { workspace as Workspace } from 'vscode';
export function packageExists () {
    
    if (!Workspace.rootPath) {
        return false;
    }

    try {
        const pkgPath = Path.join(Workspace.rootPath, 'package.json');
        let content = Fs.readFileSync(pkgPath);
        let json = JSON.parse(content.toString());
        return typeof json.hexo === 'object';
    }
    catch (ignored) {
        return false;
    }
};
