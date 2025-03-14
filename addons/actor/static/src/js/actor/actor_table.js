/** @odoo-module **/
// owl
import {Component, useState, onWillStart} from "@odoo/owl";
// utils
import {useService} from '@web/core/utils/hooks';
import {_t} from "@web/core/l10n/translation";
// components
import {ConfirmationDialog} from "@web/core/confirmation_dialog/confirmation_dialog";
import {ActorPreview} from "./actor_preview";


export class ActorTable extends Component {
    static template = "actor_app.Table";
    static components = {};

    setup() {
        super.setup();
        this.dialog = useService('dialog');
        this.notification = useService("notification");
        this.orm = useService("orm");
        this.state = useState({ actors: [] });

        onWillStart(async () => {
            console.log(this._fetchActorData())
            this.state.actors = await this._fetchActorData();
        });

    }
    async _fetchActorData() {
        return await this.orm.call("actor.actor", "search_read", [[], ["id", "name", "email", "phone", "age", "role"]]);
    }

    addPreviewEditor(actor) {
        this.dialog.add(ActorPreview, {
            actor: {...actor},
            confirm: (updatedActor) => this.editActor(updatedActor),
        });
    }

    editActor(updatedActor) {
        console.log(updatedActor)
        updateActor => state
        this.state.actors = this.state.actors.map(actor =>
            actor.id === updatedActor.id ? updatedActor : actor
        );
        this.notification.add(_t("Actor Updated!"), { type: "success" });
    }

    onRemoveActor(actor) {
        if (!actor) return;
        this.dialog.add(ConfirmationDialog, {
            title: _t(`Confirm deletion for "${actor.name}"`),
            body: _t(`Are you sure you want to delete "${actor.name}"? \nThis action cannot be undone.`),
            confirm: () => {
                this.state.actors = this.state.actors.filter(a => a.id !== actor.id);
                this.notification.add(_t("Actor removed!"), { type: "success" });
            },
            confirmLabel: _t("Confirm"),
        });
    }

}
