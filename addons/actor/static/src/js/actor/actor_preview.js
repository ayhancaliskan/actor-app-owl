/** @odoo-module **/
// owl
import {Component} from '@odoo/owl';
// utils
import {_t} from "@web/core/l10n/translation";
// components
import {Dialog} from '@web/core/dialog/dialog';

export class ActorPreview extends Component {
    static components = {Dialog};
    static template = "actor.Preview";
    static props = {
        actor: Object,
        confirm: {type: Function, optional: true},
    };

    setup() {
        this.title = _t('Edit for "%s"?', this.props.actor.name);
        this.size = "md";
        // this.contentClass = "h-100";
    }
    confirm() {
        this.props.confirm(this.props.actor);
        this.props.close();
    }
    cancel() {
        this.props.close();
    }
}
