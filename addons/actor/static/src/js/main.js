/** @odoo-module **/
// owl
import {Component, useState, xml} from "@odoo/owl";
// utils
import {useBus, useService} from "@web/core/utils/hooks";
import {registry} from "@web/core/registry"
import {rpc} from "@web/core/network/rpc";
import {isVisible} from "@web/core/utils/ui";
import {_t} from "@web/core/l10n/translation";
import {user} from "@web/core/user";
import {browser} from "@web/core/browser/browser";
import {session} from "@web/session";
// components
import {ActorTable} from "./actor/actor_table"

export class ActorApp extends Component {
    static template = "actor_app.Main";
    static components = {ActorTable};

    setup() {
        super.setup()
        // Todo display user infos + browser info (eg:which browser using)
        this.state = useState({
            user: user ? user.name : null,
            email: user ? user.email : null,
            session: session ? session.uid : null,
        });
    }
}


// create new actor
// edit via page (right) or popup
// connexion backend with ORM (!security)

registry.category("public_components").add("actor_app.Main", ActorApp);


// testing for stater but not good application
//import { App, Component, xml, whenReady, mount } from "@odoo/owl";
// import { makeEnv, startServices } from "@web/env";
// async function StartApp() {
//     await whenReady();
//     const target = document.getElementById("actor_app");
//     if (!target) return;
//     const env = makeEnv();
//     await startServices(env);
//     await mount(ActorApp, target, {
//         env,
//         dev: env.debug,
//     });
// }
// StartApp()