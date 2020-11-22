export default class ComponentItem extends Item {
    prepareBaseData() {
        return super.prepareBaseData();
    }

    prepareDerivedData() {
        const itemData = this.data;
        if (itemData.type === 'component') return this._prepareComponentData(itemData);
    }

    _prepareComponentData(itemData) {
        itemData.data.isFeature = itemData.data.cost > 0 ? true : false;
        return itemData;
    }
}