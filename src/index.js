import React from "react";
import ReactDom from "react-dom";
import getConfig from "./config.js";
import * as nearlib from "near-api-js";
import AppBuilder from "./frontend/container/index";
import { initiateDB } from './frontend/utils/ThreadDB';

import 'semantic-ui-css/semantic.min.css';

//initializing contract
async function InitContract() {
    window.nearConfig = getConfig("development");

    // initializing connected to NEAR TestNet
    window.near = await nearlib.connect(
        Object.assign(
            {
                deps: { keyStore: new nearlib.keyStores.BrowserLocalStorageKeyStore() },
            },
            window.nearConfig
        )
    );

    console.log(window.near);

    // needed to access wallet login
    window.walletAccount = new nearlib.WalletAccount(window.near);

    // getting the account ID.  If unauthorized yet, it's just an empty string.
    window.accountId = window.walletAccount.getAccountId();

    // initializing contract APIs by contract name and configuration
    window.acct = new nearlib.Account(
        window.near.connection,
        window.accountId
    );
    console.log("acct", window.acct);
    
    window.contract = new nearlib.Contract(
        window.acct,
        window.nearConfig.contractName,
        {
            // view methods are read only.  They don't modify state but usually return a value
            viewMethods: [
                "ownerOfJump",
                "getJumpsByJumper",
                "getJump",
                "getSender",
                "getJumps",
                "getIdentity",
                "registrarOfDropZone",
                "getDropZonesByRegistrar",
                "getDropZones",
                "getRegistrar",
                "getUserRoles",
                "getAllUserRoles",
                "listMembers"
            ],
            // change methods can modify the state, but you don't get the returned value when called
            changeMethods: [
                "logMilitaryJump",
                "setJump",
                "setJumpsByJumper",
                "setIdentity",
                "deleteJumpProfile",
                "registerDropZone",
                "setDropZone",
                "setDropZonesByRegistrar",
                "deleteDropZoneProfile",
                "setUserRoles",
                "registerUserRole",
                "addMember",
                "changeUserRole",
                "registerUserRoleTest"
            ],
            // sender is the account ID to initialize transactions
            sender: window.accountId,
        }
    );

    if(window.accountId !== '') {
        await initiateDB()
    }

}


window.nearInitPromise = InitContract()
    .then(() => {
        ReactDom.render(
            <AppBuilder contract={window.contract} wallet={window.walletAccount} account={window.acct}/>,
            document.getElementById("root")
        );
    })
    .catch(console.error);