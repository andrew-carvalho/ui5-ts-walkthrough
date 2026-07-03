import UIComponent from "sap/ui/core/UIComponent";
import Device from "sap/ui/Device";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace ui5.walkthrough
 */
export default class Component extends UIComponent {
    public static metadata = {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
    };

    init(): void {
        super.init();

        const data = {
            recipient: {
                name: "World",
            },
        };

        const dataModel = new JSONModel(data);
        this.setModel(dataModel);

        const deviceModel = new JSONModel(Device);
        deviceModel.setDefaultBindingMode("OneWay");
        this.setModel(deviceModel, "device");

        this.getRouter().initialize();
    }

    getContentDensityClass(): string {
        return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
    }
}
