import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Dialog from "sap/m/Dialog";
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

/**
 * @name ui5.walkthrough.controller.HelloPanel
 */
export default class HelloPanel extends Controller {
    private dialog: Dialog;

    onShowHello(): void {
        const recipient = (this.getView()?.getModel() as JSONModel)?.getProperty("/recipient/name");
        const resourceBundle = (
            this.getView()?.getModel("i18n") as ResourceModel
        )?.getResourceBundle() as ResourceBundle;
        const message = resourceBundle.getText("helloMsg", [recipient]) as string;
        MessageToast.show(message);
    }

    async onOpenDialog(): Promise<void> {
        this.dialog ??= (await this.loadFragment({
            name: "ui5.walkthrough.view.HelloDialog",
        })) as Dialog;

        this.dialog.open();
    }

    async onCloseDialog(): Promise<void> {
        (this.byId("helloDialog") as Dialog).close();
    }
}
