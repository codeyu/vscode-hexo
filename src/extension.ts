'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands as Commands, ExtensionContext } from 'vscode';
import { outputChannel } from './output';
import * as Messages from './messages';
import { runCommand } from './run-command';

import hexoInit from './init';
import hexoNew from './new';
import hexoGenerate from './generate';
import {hexoServer,hexoStopServer} from './server';
import hexoDeploy from './deploy';
import hexoPublish from './publish';
import hexoClean from './clean';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export const activate = function (context: ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-hexo" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    const disposables = [
        Commands.registerCommand('hexo-script.init', hexoInit),  
        Commands.registerCommand('hexo-script.new', hexoNew),
        Commands.registerCommand('hexo-script.generate', hexoGenerate),  
        Commands.registerCommand('hexo-script.server', hexoServer),
        Commands.registerCommand('hexo-script.stop', hexoStopServer),
        Commands.registerCommand('hexo-script.deploy', hexoDeploy),  
        Commands.registerCommand('hexo-script.publish', hexoPublish),
        Commands.registerCommand('hexo-script.clean', hexoClean) 
    ];
    
	context.subscriptions.push(...disposables, outputChannel);
}

// this method is called when your extension is deactivated
export function deactivate() {
}