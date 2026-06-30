import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";

/**
 * @name ui5.walkthrough.controller.App
 */
export default class AppController extends Controller {
    onInit(): void {
        const data = {
            recipient: {
                name: "World"
            }
        }

        const dataModel = new JSONModel(data);
        this.getView()?.setModel(dataModel);

        const i18nModel = new ResourceModel({ bundleName: "ui5.walkthrough.i18n.i18n" });
        this.getView()?.setModel(i18nModel, "i18n");
    }

    onShowHello(): void {
        const recipient = (this.getView()?.getModel() as JSONModel)?.getProperty("/recipient/name");
        const resourceBundle = (this.getView()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle;
        const message = resourceBundle.getText("helloMsg", [recipient]) as string;
        MessageToast.show(message);
    }
}
