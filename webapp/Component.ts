import Control from "sap/ui/core/Control";
import XMLView from "sap/ui/core/mvc/XMLView";
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace ui5.walkthrough
 */
export default class Component extends UIComponent {
    public static metadata = {
        "interfaces": ["sap.ui.core.IAsyncContentCreation"],
        "manifest": "json"
    }

    init(): void {
        super.init();

        const data = {
            recipient: {
                name: "World"
            }
        };

        const dataModel = new JSONModel(data);
        this.setModel(dataModel);
    }
}
