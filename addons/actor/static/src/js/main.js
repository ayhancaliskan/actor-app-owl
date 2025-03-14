/** @odoo-module **/
// owl
import {Component, useState} from "@odoo/owl";
// utils
import {useBus, useService} from "@web/core/utils/hooks";
import {registry} from "@web/core/registry"
import {rpc} from "@web/core/network/rpc";
import {isVisible} from "@web/core/utils/ui";
import {_t} from "@web/core/l10n/translation";
import {user} from "@web/core/user";
import {browser} from "@web/core/browser/browser";
// components
import {ActorTable} from "./actor/actor_table"

export class ActorApp extends Component {
    static template = "actor_app.Main";
    static components = {ActorTable};

    setup() {
        super.setup();
        this.orm = useService("orm");

        // extra no utils for actor dev
        this._loadUserData();
        this._detectBrowserInfo();
    }

    async _loadUserData() {
        this.userData = useState({
            user: "",
            email: "",
        });
        console.log(user)
        if (!user.userId) return;
        const [currentUser] = await this.orm.read(
            "res.users",
            [user.userId],
            ["name", "email"]
        );
        console.log(currentUser)
        this.userData.user = currentUser.name;
        this.userData.email = currentUser.email;
    }

    _detectBrowserInfo() {
        const {userAgent, platform} = browser.navigator;
        this.BrowserData = useState({
            userAgent: userAgent || 'Unknown',
            platform: platform || 'Unknown',
        });
    }
}


// create new actor
// edit via page (right) or popup
// connexion backend with ORM (!security)

registry.category("public_components").add("actor_app.Main", ActorApp);

