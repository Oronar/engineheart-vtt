export default class RobotActorSheet extends ActorSheet {
    /** @override */
    static get defaultOptions() {
        return super.defaultOptions;
    }

    getData() {
        const data = super.getData();
        const features = data.items.filter(item => item.type === "component" && item.data.cost >= 0);
        const defects = data.items.filter(item => item.type === "component" && item.data.cost < 0);

        data.features = features;
        data.defects = defects;

        return data;
    }

    get template() {
        return 'systems/engineheart-vtt/templates/robot-actor-sheet.html';
    }

    activateListeners(html) {
        html.find(".component-edit").click(this._onComponentEdit.bind(this));

        super.activateListeners(html);
    }

    _onComponentEdit(event) {
        event.preventDefault();
        let element = event.currentTarget;
        let itemId = element.closest(".item").dataset.itemId;
        let item = this.actor.getOwnedItem(itemId);

        item.sheet.render(true);
    }
}