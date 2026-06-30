import Control from "sap/ui/core/Control";
import XMLView from "sap/ui/core/mvc/XMLView";
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

/**
 * @namespace ui5.walkthrough
 */
export default class Component extends UIComponent {
    public static metadata = {
        "interfaces": ["sap.ui.core.IAsyncContentCreation"]
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

        const i18nModel = new ResourceModel({
            "bundleName": "ui5.walkthrough.i18n.i18n",
            "supportedLocales": [""],
            "fallbackLocale": ""
        });
        this.setModel(i18nModel, "i18n");
    }

    createContent(): Control | Promise<Control | null> | null {
        return XMLView.create({
            "viewName": "ui5.walkthrough.view.App",
            "id": "app"
        });
    }
}
